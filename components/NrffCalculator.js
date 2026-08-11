import { useState } from "react";

const BASES = [
  { id: "360", label: "360 days (USD convention)", days: 360 },
  { id: "365", label: "365 days (NGN convention)", days: 365 },
  { id: "366", label: "366 days (leap year)", days: 366 },
];

function n(v) {
  const x = parseFloat(v);
  return Number.isNaN(x) ? 0 : x;
}

export default function NrffCalculator() {
  const [principal, setPrincipal] = useState("");
  const [ftp, setFtp] = useState("");
  const [dealRate, setDealRate] = useState("");
  const [tenor, setTenor] = useState("180");
  const [basis, setBasis] = useState("360");

  const spreadPct = n(ftp) - n(dealRate);
  const basisDays = BASES.find((b) => b.id === basis).days;
  const annualRevenue = n(principal) * (spreadPct / 100);
  const tenorRevenue = annualRevenue * (n(tenor) / basisDays);

  const fmt = (x) =>
    x.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>NRFF Calculator</h2>
        <span className="timestamp">Net Revenue From Funds</span>
      </div>
      <p className="empty-state" style={{ marginBottom: 16 }}>
        Standard spread formula: Principal × (FTP − Deal Rate) × (Tenor Days ÷ Day-Count Basis).
        This is a live calculation — always mathematically correct for whatever numbers you enter.
        <strong> FTP is an internal treasury rate with no public source — always confirm today's
        actual FTP with treasury/your desk before relying on this for a real decision.</strong>
      </p>

      <div className="target-grid">
        <div className="target-card">
          <label>Principal (deposit amount)</label>
          <input value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="e.g. 40000000" />
        </div>
        <div className="target-card">
          <label>FTP Rate (%) — confirm today's rate internally</label>
          <input value={ftp} onChange={(e) => setFtp(e.target.value)} placeholder="No default set — enter today's confirmed FTP" />
        </div>
        <div className="target-card">
          <label>Deal Rate Offered (%)</label>
          <input value={dealRate} onChange={(e) => setDealRate(e.target.value)} placeholder="e.g. 7" />
        </div>
        <div className="target-card">
          <label>Tenor (days)</label>
          <input value={tenor} onChange={(e) => setTenor(e.target.value)} placeholder="e.g. 180" />
        </div>
      </div>

      <div className="category-tabs">
        {BASES.map((b) => (
          <button
            key={b.id}
            className={`category-tab ${basis === b.id ? "active" : ""}`}
            onClick={() => setBasis(b.id)}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="fx-row" style={{ marginTop: 18 }}>
        <div className="fx-tile">
          <div className="fx-pair">Spread</div>
          <div className="fx-value">{spreadPct.toFixed(2)}%</div>
        </div>
        <div className="fx-tile">
          <div className="fx-pair">Annualised Revenue</div>
          <div className="fx-value">{fmt(annualRevenue)}</div>
        </div>
        <div className="fx-tile">
          <div className="fx-pair">Revenue for {tenor || 0} Days</div>
          <div className="fx-value">{fmt(tenorRevenue)}</div>
        </div>
      </div>

      {spreadPct < 0 && (
        <p className="empty-state" style={{ marginTop: 14, color: "var(--negative)" }}>
          The deal rate is above FTP — this deal would generate a negative spread.
        </p>
      )}
    </div>
  );
}
