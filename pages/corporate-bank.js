import {
  ECOBANK_STATS,
  REP_OFFICES,
  CB_SUBUNITS,
  FIIO_CRITERIA,
  FIIO_REAL_SUBUNITS,
  FIIO_CLIENT_CATEGORIES,
  FIIO_OFFERINGS,
  FIIO_TEAM,
  BRANCH_ROLES,
  OTHER_SEGMENT_CRITERIA,
  LOAN_PORTFOLIO,
  STRATEGY_FOCUS,
  MUST_WIN_BATTLES,
  CASH_MANAGEMENT,
  TRADE_FACILITATION_STAKEHOLDERS,
  NIGERIA_CB_ORG,
  GROUP_CIB_ORG,
} from "../lib/corporateBank";

const maxPct = Math.max(...LOAN_PORTFOLIO.map((s) => s.pct));

export default function CorporateBank() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Corporate Bank &amp; FIIO</h1>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Ecobank at a Glance</h2>
        </div>
        <div className="fx-row stat-grid">
          {ECOBANK_STATS.map((s) => (
            <div className="fx-tile" key={s.label}>
              <div className="fx-pair">{s.label}</div>
              <div className="fx-value stat-value">{s.value}</div>
            </div>
          ))}
        </div>
        <p className="empty-state" style={{ marginTop: 14 }}>
          Representative offices: {REP_OFFICES.join(", ")}.
        </p>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>CB Sub-Units</h2>
        </div>
        <div className="subunit-grid">
          {CB_SUBUNITS.map((u) => (
            <div className={`subunit-tile ${u.highlight ? "highlight" : ""}`} key={u.name}>
              <div>{u.name}</div>
              {u.note && <span className="stat-sub">{u.note}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Your Segment: Financial Institutions &amp; International Organizations</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Type</th><th>Definition</th></tr>
            </thead>
            <tbody>
              {FIIO_CRITERIA.map((c) => (
                <tr key={c.type}>
                  <td style={{ fontFamily: "var(--font-mono)", color: "var(--blue)" }}>{c.type}</td>
                  <td>{c.def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Your Real Sub-Units &amp; Owners</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Sub-Unit</th><th>Owner</th><th>Examples</th></tr>
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
          <h2>Other Client Categories You Cover</h2>
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
          <h2>What Your Unit Offers</h2>
        </div>
        <ul className="topic-points">
          {FIIO_OFFERINGS.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Your FIIO Team</h2>
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

      <div className="panel">
        <div className="panel-head">
          <h2>Other CB Segments (for context)</h2>
        </div>
        <div className="kb-grid">
          {OTHER_SEGMENT_CRITERIA.map((s) => (
            <div className="kb-card" key={s.name}>
              <h3>{s.name}</h3>
              <ul>
                {s.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>CB Loan Portfolio by Sector</h2>
        </div>
        <div className="bar-chart">
          {LOAN_PORTFOLIO.map((s) => (
            <div className="bar-row" key={s.sector}>
              <span className="bar-label">{s.sector}</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${(s.pct / maxPct) * 100}%` }} />
              </div>
              <span className="bar-pct">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>CB Strategy Overview</h2>
        </div>
        <div className="kb-grid">
          {STRATEGY_FOCUS.map((f) => (
            <div className="kb-card" key={f.title}>
              <h3>{f.title}</h3>
              <ul>
                {f.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Key Must-Win Battles</h2>
        </div>
        <div className="kb-grid">
          {MUST_WIN_BATTLES.map((f) => (
            <div className="kb-card" key={f.title}>
              <h3>{f.title}</h3>
              <ul>
                {f.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Cash Management Capabilities</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Area</th><th>Details</th></tr></thead>
            <tbody>
              {CASH_MANAGEMENT.map((c) => (
                <tr key={c.area}>
                  <td style={{ fontFamily: "var(--font-mono)", color: "var(--blue)" }}>{c.area}</td>
                  <td>{c.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Trade Facilitation Stakeholders</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Category</th><th>Examples</th></tr></thead>
            <tbody>
              {TRADE_FACILITATION_STAKEHOLDERS.map((c) => (
                <tr key={c.category}>
                  <td style={{ fontFamily: "var(--font-mono)" }}>{c.category}</td>
                  <td>{c.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Nigeria CB Organogram</h2>
          <span className="timestamp">Business Head, CB: {NIGERIA_CB_ORG.businessHead}</span>
        </div>
        <div className="org-grid">
          {NIGERIA_CB_ORG.sectorHeads.map((s) => (
            <div className={`org-card ${s.highlight ? "highlight" : ""}`} key={s.sector}>
              <div className="org-sector">{s.sector}</div>
              <div className="org-name">{s.head}</div>
              {s.note && <div className="stat-sub">{s.note}</div>}
            </div>
          ))}
        </div>
        <p className="empty-state" style={{ marginTop: 14 }}>
          Head, CE/PG: {NIGERIA_CB_ORG.headCEPG} (oversees CCS &amp; PG Officers)
        </p>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Group CIB Organogram</h2>
          <span className="timestamp">GE – CIB: {GROUP_CIB_ORG.geCIB}</span>
        </div>
        <p className="empty-state">Under Group Head CB/COO: {GROUP_CIB_ORG.underGroupHeadCB.join(", ")}.</p>
        <p className="empty-state" style={{ marginTop: 8 }}>Peer functions: {GROUP_CIB_ORG.peers.join(", ")}.</p>
      </div>
    </main>
  );
}
