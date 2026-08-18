import { useEffect, useState } from "react";

const STORAGE_KEY = "cashflow_projection";

function emptyPeriod(label) {
  return { id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()), label, inflow: "", outflow: "" };
}

function defaultPeriods() {
  return [1, 2, 3].map((n) => emptyPeriod(`Month ${n}`));
}

function num(v) {
  const cleaned = typeof v === "string" ? v.replace(/,/g, "").trim() : v;
  const n = parseFloat(cleaned);
  return Number.isNaN(n) ? 0 : n;
}

export default function CashflowProjection() {
  const [periods, setPeriods] = useState(defaultPeriods());
  const [title, setTitle] = useState("");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.periods && parsed.periods.length) setPeriods(parsed.periods);
        if (parsed.title) setTitle(parsed.title);
      }
    } catch {
      /* ignore */
    }
  }, []);

  function persist(nextPeriods, nextTitle) {
    setPeriods(nextPeriods);
    if (nextTitle !== undefined) setTitle(nextTitle);
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ periods: nextPeriods, title: nextTitle !== undefined ? nextTitle : title })
    );
  }

  function updatePeriod(id, field, value) {
    persist(periods.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  }

  function addPeriod() {
    persist([...periods, emptyPeriod(`Month ${periods.length + 1}`)]);
  }

  function removePeriod(id) {
    persist(periods.filter((p) => p.id !== id));
  }

  let cumulative = 0;
  const rows = periods.map((p) => {
    const net = num(p.inflow) - num(p.outflow);
    cumulative += net;
    return { ...p, net, cumulative };
  });

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>Cashflow Projection</h2>
        <span className="timestamp">Saved on this device only</span>
      </div>

      <input
        className="unlock-input"
        style={{ textAlign: "left", letterSpacing: "normal", fontSize: "0.95rem", marginBottom: 18, textTransform: "none" }}
        placeholder="Projection title — e.g. Client X facility, 6-month projection"
        value={title}
        onChange={(e) => persist(periods, e.target.value)}
      />

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>Inflow (₦)</th>
              <th>Outflow (₦)</th>
              <th>Net</th>
              <th>Cumulative</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td><input value={r.label} onChange={(e) => updatePeriod(r.id, "label", e.target.value)} /></td>
                <td><input value={r.inflow} placeholder="0" onChange={(e) => updatePeriod(r.id, "inflow", e.target.value)} /></td>
                <td><input value={r.outflow} placeholder="0" onChange={(e) => updatePeriod(r.id, "outflow", e.target.value)} /></td>
                <td style={{ fontFamily: "var(--font-mono)", color: r.net >= 0 ? "var(--positive)" : "var(--negative)" }}>
                  {r.net.toLocaleString("en-NG", { maximumFractionDigits: 2 })}
                </td>
                <td style={{ fontFamily: "var(--font-mono)" }}>
                  {r.cumulative.toLocaleString("en-NG", { maximumFractionDigits: 2 })}
                </td>
                <td className="row-actions"><button onClick={() => removePeriod(r.id)}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="add-row-btn" onClick={addPeriod}>+ Add period</button>
    </div>
  );
}
