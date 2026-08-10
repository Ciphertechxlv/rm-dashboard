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

// Returns entries from the last 7 days, most recent first.
function recentEntries(log) {
  const days = Object.keys(log).sort().reverse().slice(0, 7);
  return days.map((date) => ({ date, text: log[date] })).filter((e) => e.text && e.text.trim());
}

export default function DailyLog() {
  const [log, setLog] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    const loaded = loadLog();
    setLog(loaded);
    setText(loaded[todayKey()] || "");
  }, []);

  function save(value) {
    setText(value);
    const next = { ...log, [todayKey()]: value };
    setLog(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  const history = recentEntries(log).filter((e) => e.date !== todayKey());

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>Daily Activity Log</h2>
        <span className="timestamp">For accountability, and prep for Monday's 8am weekly meeting</span>
      </div>

      <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-dim)", marginBottom: 8, fontWeight: 500 }}>
        Today — {new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}
      </label>
      <textarea
        className="notes"
        placeholder="What did you work on today? e.g. confirmed Folakemi's correspondent bank maturity, drafted CAM for PLX placement, called Custodian Asset re: Q3 review…"
        value={text}
        onChange={(e) => save(e.target.value)}
      />

      {history.length > 0 && (
        <>
          <div className="panel-head" style={{ marginTop: 20 }}>
            <span className="stat-sub" style={{ textTransform: "uppercase" }}>Last 7 Days</span>
          </div>
          <div className="news-list">
            {history.map((e) => (
              <div className="news-item-card" key={e.date}>
                <div className="news-meta">
                  {new Date(e.date).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })}
                </div>
                <div className="news-item-title" style={{ fontWeight: 400, fontSize: "0.9rem" }}>{e.text}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
