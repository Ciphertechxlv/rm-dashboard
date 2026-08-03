import { useEffect, useState } from "react";

const STORAGE_KEY = "counterparty_snapshots";
const TYPES = ["Correspondent Bank", "DFI", "Fintech", "Insurance / NBFI", "Mortgage Institution", "IO / Embassy"];

function emptySnapshot() {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()),
    name: "",
    type: TYPES[0],
    car: "",
    npl: "",
    liquidity: "",
    rating: "",
    redFlags: "",
    notes: "",
  };
}

export default function CounterpartySnapshot() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setRows(JSON.parse(saved));
    } catch {
      /* ignore */
    }
  }, []);

  function persist(next) {
    setRows(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function update(id, field, value) {
    persist(rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  }

  function addRow() {
    persist([...rows, emptySnapshot()]);
  }

  function removeRow(id) {
    persist(rows.filter((r) => r.id !== id));
  }

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>Counterparty Snapshots</h2>
        <span className="timestamp">Saved on this device only</span>
      </div>

      {rows.length === 0 && <p className="empty-state">No snapshots yet — add your first counterparty below.</p>}

      {rows.map((r) => (
        <div className="snapshot-card" key={r.id}>
          <div className="snapshot-row">
            <input
              className="snapshot-name"
              value={r.name}
              placeholder="Institution name"
              onChange={(e) => update(r.id, "name", e.target.value)}
            />
            <select value={r.type} onChange={(e) => update(r.id, "type", e.target.value)}>
              {TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <button className="row-actions-btn" onClick={() => removeRow(r.id)}>Remove</button>
          </div>
          <div className="snapshot-grid">
            <label>CAR %<input value={r.car} onChange={(e) => update(r.id, "car", e.target.value)} placeholder="e.g. 16.2" /></label>
            <label>NPL %<input value={r.npl} onChange={(e) => update(r.id, "npl", e.target.value)} placeholder="e.g. 3.1" /></label>
            <label>Liquidity %<input value={r.liquidity} onChange={(e) => update(r.id, "liquidity", e.target.value)} placeholder="e.g. 35" /></label>
            <label>Credit Rating<input value={r.rating} onChange={(e) => update(r.id, "rating", e.target.value)} placeholder="e.g. BBB-" /></label>
          </div>
          <label className="snapshot-full">Red flags
            <input value={r.redFlags} onChange={(e) => update(r.id, "redFlags", e.target.value)} placeholder="Anything concerning" />
          </label>
          <label className="snapshot-full">Notes
            <input value={r.notes} onChange={(e) => update(r.id, "notes", e.target.value)} placeholder="General notes" />
          </label>
        </div>
      ))}

      <button className="add-row-btn" onClick={addRow}>+ Add counterparty snapshot</button>
    </div>
  );
}
