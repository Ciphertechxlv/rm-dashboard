import { useEffect, useState } from "react";

const STORAGE_KEY = "targets";
const METRICS = [
  { key: "revenue", label: "Revenue (₦)" },
  { key: "deposits", label: "Deposits (₦)" },
  { key: "crossSell", label: "Cross-sell (# products)" },
];

function defaultState() {
  const obj = {};
  METRICS.forEach((m) => {
    obj[m.key] = { target: "", actual: "" };
  });
  return obj;
}

export default function TargetTracker() {
  const [state, setState] = useState(defaultState());

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setState({ ...defaultState(), ...JSON.parse(saved) });
      } catch {
        /* ignore */
      }
    }
  }, []);

  function update(key, field, value) {
    const next = { ...state, [key]: { ...state[key], [field]: value } };
    setState(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>Targets vs Actuals</h2>
      </div>
      <div className="target-grid">
        {METRICS.map((m) => {
          const target = parseFloat(state[m.key]?.target) || 0;
          const actual = parseFloat(state[m.key]?.actual) || 0;
          const pct = target > 0 ? Math.min(100, Math.round((actual / target) * 100)) : 0;
          return (
            <div className="target-card" key={m.key}>
              <label>{m.label} — target</label>
              <input value={state[m.key]?.target || ""} onChange={(e) => update(m.key, "target", e.target.value)} placeholder="e.g. 50000000" />
              <label>{m.label} — actual so far</label>
              <input value={state[m.key]?.actual || ""} onChange={(e) => update(m.key, "actual", e.target.value)} placeholder="e.g. 12000000" />
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${pct}%` }} />
              </div>
              <div className="progress-label">{pct}% of target</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
