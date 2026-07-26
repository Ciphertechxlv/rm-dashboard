import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio_rows";
const PRODUCTS = ["LC", "Bills for Collection", "Guarantee", "Invoice Discounting", "Loan/Overdraft", "Other"];
const STATUSES = ["Prospecting", "Docs pending", "Awaiting approval", "Active", "Closed"];

function emptyRow() {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()),
    client: "",
    product: PRODUCTS[0],
    status: STATUSES[0],
    nextAction: "",
    dueDate: "",
  };
}

export default function PortfolioTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setRows(JSON.parse(saved));
      } catch {
        setRows([]);
      }
    }
  }, []);

  function persist(next) {
    setRows(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function updateRow(id, field, value) {
    persist(rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  }

  function addRow() {
    persist([...rows, emptyRow()]);
  }

  function removeRow(id) {
    persist(rows.filter((r) => r.id !== id));
  }

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>Client & Deal Tracker</h2>
        <span className="timestamp">Saved on this device only</span>
      </div>

      {rows.length === 0 && <p className="empty-state">No clients logged yet — add your first below.</p>}

      {rows.length > 0 && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Product</th>
                <th>Status</th>
                <th>Next Action</th>
                <th>Due</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>
                    <input value={r.client} placeholder="Client name" onChange={(e) => updateRow(r.id, "client", e.target.value)} />
                  </td>
                  <td>
                    <select value={r.product} onChange={(e) => updateRow(r.id, "product", e.target.value)}>
                      {PRODUCTS.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <select value={r.status} onChange={(e) => updateRow(r.id, "status", e.target.value)}>
                      {STATUSES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input value={r.nextAction} placeholder="e.g. chase shipping docs" onChange={(e) => updateRow(r.id, "nextAction", e.target.value)} />
                  </td>
                  <td>
                    <input type="date" value={r.dueDate} onChange={(e) => updateRow(r.id, "dueDate", e.target.value)} />
                  </td>
                  <td className="row-actions">
                    <button onClick={() => removeRow(r.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button className="add-row-btn" onClick={addRow}>
        + Add client
      </button>
    </div>
  );
}
