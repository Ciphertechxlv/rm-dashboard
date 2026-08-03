import { KEY_RATIOS, CHECKLISTS } from "../lib/financialAnalysis";
import CounterpartySnapshot from "../components/CounterpartySnapshot";

export default function FinancialAnalysis() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Financial Analysis</h1>
        <p>Key ratios and per-institution checklists for evaluating FIIO counterparties.</p>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Key Ratios</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Ratio</th><th>Formula</th><th>What it tells you</th></tr>
            </thead>
            <tbody>
              {KEY_RATIOS.map((r) => (
                <tr key={r.name}>
                  <td style={{ color: "var(--blue)", fontWeight: 600 }}>{r.name}</td>
                  <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem" }}>{r.formula}</td>
                  <td>{r.tellsYou}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>What to Check, by Institution Type</h2>
        </div>
        <div className="kb-grid">
          {CHECKLISTS.map((c) => (
            <div className="kb-card" key={c.type}>
              <h3>{c.type}</h3>
              <ul>
                {c.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <CounterpartySnapshot />
    </main>
  );
}
