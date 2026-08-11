import { useEffect, useState } from "react";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(dateStr) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function weekRange(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  const day = d.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;
  const monday = new Date(d);
  monday.setDate(d.getDate() + diffToMonday);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return { start: monday, end: sunday };
}

export default function ActivityLog() {
  const [configured, setConfigured] = useState(true);
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState({});
  const [selectedDate, setSelectedDate] = useState(todayKey());
  const [draft, setDraft] = useState("");
  const [editingDate, setEditingDate] = useState(null);
  const [status, setStatus] = useState(""); // "saving" | "saved" | ""
  const [copied, setCopied] = useState(false);

  async function loadEntries() {
    setLoading(true);
    try {
      const res = await fetch("/api/activity-log");
      const data = await res.json();
      setConfigured(data.configured !== false);
      setEntries(data.entries || {});
      setDraft((data.entries || {})[todayKey()] || "");
    } catch {
      setConfigured(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEntries();
  }, []);

  async function saveEntry() {
    setStatus("saving");
    try {
      await fetch("/api/activity-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: selectedDate, text: draft }),
      });
      setEntries((prev) => ({ ...prev, [selectedDate]: draft }));
      setStatus("saved");
      setEditingDate(null);
      setTimeout(() => setStatus(""), 1800);
    } catch {
      setStatus("");
    }
  }

  async function deleteEntry(date) {
    try {
      await fetch("/api/activity-log", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date }),
      });
      const next = { ...entries };
      delete next[date];
      setEntries(next);
      if (date === selectedDate) setDraft("");
    } catch {
      /* ignore */
    }
  }

  function startEdit(date) {
    setSelectedDate(date);
    setDraft(entries[date] || "");
    setEditingDate(date);
  }

  function backToToday() {
    setSelectedDate(todayKey());
    setDraft(entries[todayKey()] || "");
    setEditingDate(null);
  }

  const allDates = Object.keys(entries)
    .filter((d) => entries[d] && entries[d].trim())
    .sort()
    .reverse();

  const { start, end } = weekRange(selectedDate);
  const weekDates = allDates
    .filter((d) => {
      const dt = new Date(d + "T00:00:00");
      return dt >= start && dt <= end;
    })
    .sort();

  function copyWeekSummary() {
    const summary = weekDates.map((d) => `${formatDate(d)}:\n${entries[d]}`).join("\n\n");
    navigator.clipboard?.writeText(summary || "No entries logged this week.");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const isEditingPast = editingDate && editingDate !== todayKey();

  return (
    <main className="page">
      <div className="page-header">
        <h1>Activity Log</h1>
        <p>Saved to the cloud — the same log appears on every device you open this site on.</p>
      </div>

      {!configured && (
        <div className="panel">
          <p className="empty-state">
            <strong>Cloud storage isn't set up yet.</strong> Until it is, entries won't save
            anywhere. See the README for the one-time Upstash setup (free, via Vercel's
            Marketplace) — it takes about 5 minutes.
          </p>
        </div>
      )}

      <div className="panel">
        <div className="panel-head">
          <h2>{formatDate(selectedDate)}</h2>
          {isEditingPast && (
            <button className="cbn-source-link" style={{ border: "1px solid var(--border-soft)", cursor: "pointer" }} onClick={backToToday}>
              ← Back to today
            </button>
          )}
        </div>
        <textarea
          className="notes"
          style={{ minHeight: 140 }}
          placeholder="What did you work on? e.g. confirmed Folakemi's correspondent bank maturity, drafted CAM for PLX placement, called Custodian Asset re: Q3 review…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          disabled={loading}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12 }}>
          <button className="add-row-btn" onClick={saveEntry} disabled={loading || status === "saving"}>
            {status === "saving" ? "Saving…" : "Save"}
          </button>
          {status === "saved" && <span style={{ color: "var(--positive)", fontSize: "0.84rem" }}>Saved ✓</span>}
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>This Week ({formatDate(start.toISOString().slice(0, 10))} – {formatDate(end.toISOString().slice(0, 10))})</h2>
          <button className="cbn-source-link" style={{ border: "1px solid var(--border-soft)", cursor: "pointer" }} onClick={copyWeekSummary}>
            {copied ? "Copied ✓" : "Copy week for Monday's meeting"}
          </button>
        </div>
        {weekDates.length === 0 && <p className="empty-state">No entries logged this week yet.</p>}
        {weekDates.map((d) => (
          <div className="news-item-card" key={d}>
            <div className="news-item-title">{formatDate(d)}</div>
            <div className="news-why" style={{ whiteSpace: "pre-wrap" }}>{entries[d]}</div>
          </div>
        ))}
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Full History</h2>
          <span className="timestamp">{allDates.length} days logged</span>
        </div>
        {loading && <p className="empty-state">Loading…</p>}
        {!loading && allDates.length === 0 && <p className="empty-state">Nothing logged yet — start with today above.</p>}
        {allDates.map((d) => (
          <div className="news-item-card" key={d}>
            <div className="news-item-title">{formatDate(d)}</div>
            <div className="news-why" style={{ whiteSpace: "pre-wrap" }}>{entries[d]}</div>
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              <button className="cbn-source-link" style={{ border: "1px solid var(--border-soft)", cursor: "pointer" }} onClick={() => startEdit(d)}>
                Edit
              </button>
              <button className="row-actions-btn" onClick={() => deleteEntry(d)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
