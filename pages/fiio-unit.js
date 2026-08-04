import {
  FIIO_REAL_SUBUNITS,
  FIIO_CLIENT_CATEGORIES,
  FIIO_OFFERINGS,
  FIIO_TEAM,
  BRANCH_ROLES,
} from "../lib/corporateBank";

export default function FiioUnit() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>FIIO Unit</h1>
        <p>Financial Institutions &amp; International Organizations, Ecobank Nigeria.</p>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Sub-Units &amp; Managers</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Sub-Unit</th><th>Manager</th><th>Examples</th></tr>
            </thead>
            <tbody>
              {FIIO_REAL_SUBUNITS.map((s) => (
                <tr key={s.name}>
                  <td style={{ color: "var(--blue)", fontWeight: 600 }}>{s.name}</td>
                  <td>{s.owner}</td>
                  <td>{s.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Institutional Client Segments</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Category</th><th>Examples</th></tr>
            </thead>
            <tbody>
              {FIIO_CLIENT_CATEGORIES.map((c) => (
                <tr key={c.category}>
                  <td style={{ color: "var(--blue)", fontWeight: 600 }}>{c.category}</td>
                  <td>{c.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Product &amp; Service Offering</h2>
        </div>
        <ul className="topic-points">
          {FIIO_OFFERINGS.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>FIIO Team</h2>
        </div>
        <div className="org-grid">
          {FIIO_TEAM.map((m) => (
            <div className={`org-card ${m.highlight ? "highlight" : ""}`} key={m.name}>
              <div className="org-sector">{m.role}</div>
              <div className="org-name">{m.name}</div>
            </div>
          ))}
        </div>
        <p className="empty-state" style={{ marginTop: 14 }}>
          Branch-side roles you'll interface with: {BRANCH_ROLES.join(", ")}.
        </p>
      </div>
    </main>
  );
}
