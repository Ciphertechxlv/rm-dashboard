import { CAM_SECTIONS_GENERAL, CAM_BY_PRODUCT, REPORT_CHECKLIST } from "../lib/deliverables";
import CashflowProjection from "../components/CashflowProjection";

export default function Deliverables() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Deliverables</h1>
        <p>Credit Approval Memorandums, reports, and cashflow projections — your three core recurring work products.</p>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>CAM — General Structure</h2>
        </div>
        <ul className="topic-points">
          {CAM_SECTIONS_GENERAL.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>CAM — What to Add per Product</h2>
        </div>
        <div className="kb-grid">
          {CAM_BY_PRODUCT.map((p) => (
            <div className="kb-card" key={p.code}>
              <h3>{p.code} — {p.name}</h3>
              <ul>
                {p.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Report Writing Checklist</h2>
        </div>
        <ul className="topic-points">
          {REPORT_CHECKLIST.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <CashflowProjection />
    </main>
  );
}
