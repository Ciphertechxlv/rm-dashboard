import { useEffect, useState } from "react";

const STORAGE_KEY = "daily_activity_log";

function todayKey() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function loadLog() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function formatDate(dateStr) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Monday-start week range containing the given date.
function weekRange(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  const day = d.getDay(); // 0 = Sun
  const diffToMonday = day === 0 ? -6 : 1 - day;
  const monday = new Date(d);
  monday.setDate(d.getDate() + diffToMonday);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return { start: monday, end: sunday };
}

export default function ActivityLog() {
  const [log, setLog] = useState({});
  const [selectedDate, setSelectedDate] = useState(todayKey());
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const loaded = loadLog();
    setLog(loaded);
    setDraft(loaded[todayKey()] || "");
  }, []);

  function selectDate(date) {
    setSelectedDate(date);
    setDraft(log[date] || "");
  }

  function save(value) {
    setDraft(value);
    const next = { ...log, [selectedDate]: value };
    setLog(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function deleteEntry(date) {
    const next = { ...log };
    delete next[date];
    setLog(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    if (date === selectedDate) setDraft("");
  }

  const allDates = Object.keys(log)
    .filter((d) => log[d] && log[d].trim())
    .sort()
    .reverse();

  const { start, end } = weekRange(selectedDate);
  const weekDates = allDates.filter((d) => {
    const dt = new Date(d + "T00:00:00");
    return dt >= start && dt <= end;
  }).sort();

  function copyWeekSummary() {
    const summary = weekDates
      .map((d) => `${formatDate(d)}:\n${log[d]}`)
      .join("\n\n");
    navigator.clipboard?.writeText(summary || "No entries logged this week.");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <main className="page">
      <div className="page-header">
        <h1>Activity Log</h1>
        <p>Your accountable, editable record — every day saved, referenceable anytime, and ready to summarize for Monday's 8am meeting.</p>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>{formatDate(selectedDate)}</h2>
          <input
            type="date"
            value={selectedDate}
            max={todayKey()}
            onChange={(e) => selectDate(e.target.value)}
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border-soft)",
              color: "var(--text-strong)",
              borderRadius: "var(--radius-sm)",
              padding: "6px 10px",
              fontFamily: "var(--font-mono)",
            }}
          />
        </div>
        <textarea
          className="notes"
          style={{ minHeight: 140 }}
          placeholder="What did you work on? e.g. confirmed Folakemi's correspondent bank maturity, drafted CAM for PLX placement, called Custodian Asset re: Q3 review…"
          value={draft}
          onChange={(e) => save(e.target.value)}
        />
        {selectedDate !== todayKey() && (
          <button className="add-row-btn" style={{ marginTop: 12 }} onClick={() => selectDate(todayKey())}>
            ← Back to today
          </button>
        )}
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
            <div className="news-why" style={{ whiteSpace: "pre-wrap" }}>{log[d]}</div>
          </div>
        ))}
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Full History</h2>
          <span className="timestamp">{allDates.length} days logged</span>
        </div>
        {allDates.length === 0 && <p className="empty-state">Nothing logged yet — start with today above.</p>}
        {allDates.map((d) => (
          <div className="news-item-card" key={d}>
            <div className="news-item-title">{formatDate(d)}</div>
            <div className="news-why" style={{ whiteSpace: "pre-wrap" }}>{log[d]}</div>
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              <button className="cbn-source-link" style={{ border: "1px solid var(--border-soft)", cursor: "pointer" }} onClick={() => selectDate(d)}>
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
