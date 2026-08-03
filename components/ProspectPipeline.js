import { useEffect, useState } from "react";

const STORAGE_KEY = "bd_pipeline";
const TYPES = ["Correspondent Bank", "DFI", "Fintech", "Insurance / NBFI", "Mortgage Institution", "IO / Embassy", "Other"];
const STAGES = ["Identified", "Researching", "First Contact", "Proposal Sent", "Negotiating", "Won", "Lost"];

function emptyProspect() {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()),
    name: "",
    type: TYPES[0],
    stage: STAGES[0],
    nextStep: "",
    targetDate: "",
  };
}

export default function ProspectPipeline() {
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
    persist([...rows, emptyProspect()]);
  }

  function removeRow(id) {
    persist(rows.filter((r) => r.id !== id));
  }

  const active = rows.filter((r) => r.stage !== "Won" && r.stage !== "Lost");
  const won = rows.filter((r) => r.stage === "Won").length;

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>Prospect Pipeline</h2>
        <span className="timestamp">{active.length} active · {won} won · saved on this device only</span>
      </div>

      {rows.length === 0 && <p className="empty-state">No prospects logged yet — add who you're chasing next.</p>}

      {rows.length > 0 && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Prospect</th><th>Type</th><th>Stage</th><th>Next Step</th><th>Target Date</th><th></th></tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td><input value={r.name} placeholder="Institution name" onChange={(e) => update(r.id, "name", e.target.value)} /></td>
                  <td>
                    <select value={r.type} onChange={(e) => update(r.id, "type", e.target.value)}>
                      {TYPES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </td>
                  <td>
                    <select value={r.stage} onChange={(e) => update(r.id, "stage", e.target.value)}>
                      {STAGES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </td>
                  <td><input value={r.nextStep} placeholder="e.g. send intro email" onChange={(e) => update(r.id, "nextStep", e.target.value)} /></td>
                  <td><input type="date" value={r.targetDate} onChange={(e) => update(r.id, "targetDate", e.target.value)} /></td>
                  <td className="row-actions"><button onClick={() => removeRow(r.id)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button className="add-row-btn" onClick={addRow}>+ Add prospect</button>
    </div>
  );
}
