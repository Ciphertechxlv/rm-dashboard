import { useState } from "react";

// Confirmed August 2026 FTP rates. FTP updates monthly — check with
// treasury/your desk before relying on these for a real deal, and update
// this file when a new month's rate is confirmed.
const FTP_DEFAULTS = {
  LCY: { rate: "11.926", tenorBasis: 365, label: "LCY (Naira)" },
  FCY: { rate: "9.37", tenorBasis: 360, label: "FCY (USD)" },
};

function n(v) {
  const x = parseFloat(v);
  return Number.isNaN(x) ? 0 : x;
}

export default function NrffCalculator() {
  const [currency, setCurrency] = useState("LCY");
  const [principal, setPrincipal] = useState("");
  const [ftp, setFtp] = useState(FTP_DEFAULTS.LCY.rate);
  const [dealRate, setDealRate] = useState("");
  const [tenor, setTenor] = useState("180");

  function switchCurrency(cur) {
    setCurrency(cur);
    setFtp(FTP_DEFAULTS[cur].rate);
  }

  const basis = FTP_DEFAULTS[currency].tenorBasis;
  const tenorFraction = n(tenor) / basis;

  const interestAmount = n(principal) * (n(dealRate) / 100) * tenorFraction;
  const ftpAmount = n(principal) * (n(ftp) / 100) * tenorFraction;

  const maturityAtDealRate = n(principal) + interestAmount;
  const maturityAtFtp = n(principal) + ftpAmount;

  const diff = maturityAtDealRate - maturityAtFtp;
  const isProfit = diff > 0;
  const isLoss = diff < 0;

  const fmt = (x) =>
    x.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>Deposit Profit/Loss Calculator</h2>
        <span className="timestamp">FTP confirmed for August 2026</span>
      </div>
      <p className="empty-state" style={{ marginBottom: 16 }}>
        Maturity Value = Principal + Interest Amount. Interest Amount = Principal × Rate × (Tenor
        ÷ Day-Count Basis). LCY uses a 365-day basis; FCY uses 360. If the maturity value at the
        deposit rate is higher than at the FTP rate, it's a profit — if lower, it's a loss.
        <strong> FTP updates monthly — confirm the current rate with treasury before relying on
        this for a real decision.</strong>
      </p>

      <div className="category-tabs">
        {Object.entries(FTP_DEFAULTS).map(([id, cfg]) => (
          <button
            key={id}
            className={`category-tab ${currency === id ? "active" : ""}`}
            onClick={() => switchCurrency(id)}
          >
            {cfg.label} — {cfg.tenorBasis}-day basis
          </button>
        ))}
      </div>

      <div className="target-grid" style={{ marginTop: 16 }}>
        <div className="target-card">
          <label>Principal (deposit amount)</label>
          <input value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="e.g. 40000000" />
        </div>
        <div className="target-card">
          <label>FTP Rate (%) — confirm monthly</label>
          <input value={ftp} onChange={(e) => setFtp(e.target.value)} />
        </div>
        <div className="target-card">
          <label>Deposit Rate Offered (%)</label>
          <input value={dealRate} onChange={(e) => setDealRate(e.target.value)} placeholder="e.g. 9" />
        </div>
        <div className="target-card">
          <label>Tenor (days)</label>
          <input value={tenor} onChange={(e) => setTenor(e.target.value)} placeholder="e.g. 180" />
        </div>
      </div>

      <div className="fx-row" style={{ marginTop: 18 }}>
        <div className="fx-tile">
          <div className="fx-pair">Maturity Value — Deposit Rate</div>
          <div className="fx-value">{fmt(maturityAtDealRate)}</div>
        </div>
        <div className="fx-tile">
          <div className="fx-pair">Maturity Value — FTP Rate</div>
          <div className="fx-value">{fmt(maturityAtFtp)}</div>
        </div>
        <div
          className="fx-tile"
          style={{
            borderColor: isProfit ? "var(--positive)" : isLoss ? "var(--negative)" : undefined,
            background: isProfit
              ? "color-mix(in srgb, var(--positive) 12%, transparent)"
              : isLoss
              ? "color-mix(in srgb, var(--negative) 12%, transparent)"
              : undefined,
          }}
        >
          <div className="fx-pair">{isProfit ? "Profit" : isLoss ? "Loss" : "Position"}</div>
          <div
            className="fx-value"
            style={{ color: isProfit ? "var(--positive)" : isLoss ? "var(--negative)" : undefined }}
          >
            {diff >= 0 ? "+" : ""}{fmt(diff)}
          </div>
        </div>
      </div>
    </div>
  );
}
