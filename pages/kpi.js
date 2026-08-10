import { KPI_SECTIONS, MACRO_QUICK_FACTS, DAY_COUNT_NOTES } from "../lib/kpi";
import NrffCalculator from "../components/NrffCalculator";

export default function Kpi() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>FIIO KPI</h1>
        <p>The FI part of your KPI — IO is mainly based in Abuja. 5 sections total; documented as discussed so far.</p>
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

      <NrffCalculator />

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
    </main>
  );
}
