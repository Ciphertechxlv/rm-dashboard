import { KPI_SECTIONS, MACRO_QUICK_FACTS, DAY_COUNT_NOTES, MARKET_RATE_DRIVERS } from "../lib/kpi";
import LiveInflation from "../components/LiveInflation";

const HEADLINE_TARGETS = [
  { label: "Deposit Mobilisation", value: "₦1.2tn", sub: "CASA ₦297bn · Term ₦861bn" },
  { label: "Revenue", value: "₦24.2bn", sub: "NRFF + Fees & Commission + FICC" },
  { label: "Account Opening", value: "24", sub: "corporate accounts · 1/RM/month" },
  { label: "Fees & Commission", value: "₦6.6bn", sub: "within Revenue target" },
];

export default function Kpi() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>FIIO KPI</h1>
      </div>

      <div className="kpi-hero-grid">
        {HEADLINE_TARGETS.map((t) => (
          <div className="kpi-hero-tile" key={t.label}>
            <div className="kpi-hero-value">{t.value}</div>
            <div className="kpi-hero-label">{t.label}</div>
            <div className="kpi-hero-sub">{t.sub}</div>
          </div>
        ))}
      </div>

      {KPI_SECTIONS.map((s) => (
        <div className="panel" key={s.id}>
          <div className="panel-head">
            <h2>{s.id}. {s.title}</h2>
            <span className="timestamp">{s.tag} · Target: {s.target}</span>
          </div>
          <ul className="topic-points">
            {s.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="panel">
        <div className="panel-head">
          <h2>Macro Quick Facts</h2>
        </div>
        <div className="fx-row">
          {MACRO_QUICK_FACTS.map((f) => (
            <div className="fx-tile" key={f.label}>
              <div className="fx-pair">{f.label}</div>
              <div className="fx-value" style={{ fontSize: "1.3rem" }}>{f.value}</div>
            </div>
          ))}
          <LiveInflation />
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Day-Count Conventions</h2>
        </div>
        <ul className="topic-points">
          {DAY_COUNT_NOTES.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>What Drives the Market Rate</h2>
        </div>
        <div className="kb-grid">
          {MARKET_RATE_DRIVERS.map((d) => (
            <div className="kb-card" key={d.title}>
              <h3>{d.title}</h3>
              <p>{d.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
