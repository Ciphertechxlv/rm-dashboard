import { useState } from "react";

// Confirmed August 2026 FTP rates. FTP updates monthly — check with
// treasury/your desk before relying on these for a real deal.
const FTP_DEFAULTS = {
  LCY: { rate: "11.926", tenorBasis: 365, label: "LCY (Naira)", symbol: "₦" },
  FCY: { rate: "9.37", tenorBasis: 360, label: "FCY (USD)", symbol: "$" },
};

// Confirmed via CBN's official MPC decisions — see the Policy Rates page.
const CRR_RATE = 45.0;

// NDIC's published base premium rate has historically run around 40
// basis points (0.40%) per year on total deposit liabilities, under
// their risk-based Differential Premium Assessment System (DPAS) — the
// exact current rate isn't publicly confirmed for a specific bank/year,
// so this is an editable estimate, not a hard fact.
const NDIC_DEFAULT_RATE = "0.40";

const DIRECTIONS = {
  placement: {
    label: "Funds Placed (Asset — e.g. PLX)",
    explain: "You're placing/lending funds and earning the deposit rate, while FTP is your cost of funds. Profit when the deposit-rate maturity value is HIGHER than the FTP maturity value. CRR and NDIC premium don't apply — those are deposit-liability costs, not placement costs.",
  },
  deposit: {
    label: "Deposit Taken (Liability — e.g. client deposit)",
    explain: "You're taking a deposit and paying the deposit rate, while FTP is what treasury credits you internally. Profit when the FTP maturity value is HIGHER than the deposit-rate maturity value.",
  },
};

function n(v) {
  if (typeof v !== "string") return Number.isNaN(v) ? 0 : v || 0;
  // Strip thousands-separator commas (e.g. "1,349.54" -> "1349.54") so
  // typing numbers the natural way never silently breaks the math —
  // parseFloat alone stops at the first comma and returns just "1".
  const cleaned = v.replace(/,/g, "").trim();
  const x = parseFloat(cleaned);
  return Number.isNaN(x) ? 0 : x;
}

export default function NrffCalculator() {
  const [currency, setCurrency] = useState("LCY");
  const [direction, setDirection] = useState("placement");
  const [principal, setPrincipal] = useState("");
  const [ftp, setFtp] = useState(FTP_DEFAULTS.LCY.rate);
  const [dealRate, setDealRate] = useState("");
  const [tenor, setTenor] = useState("180");
  const [fxRate, setFxRate] = useState("");
  const [applyCrr, setApplyCrr] = useState(false);
  const [applyNdic, setApplyNdic] = useState(false);
  const [ndicRate, setNdicRate] = useState(NDIC_DEFAULT_RATE);

  function switchCurrency(cur) {
    setCurrency(cur);
    setFtp(FTP_DEFAULTS[cur].rate);
    if (cur === "FCY") setApplyCrr(false); // CRR doesn't apply to USD
  }

  const cfg = FTP_DEFAULTS[currency];
  const sym = cfg.symbol;
  const basis = cfg.tenorBasis;
  const tenorFraction = n(tenor) / basis;
  const isDeposit = direction === "deposit";
  const crrActive = isDeposit && currency === "LCY" && applyCrr;
  const ndicActive = isDeposit && applyNdic;

  // Everything below is calculated entirely in the chosen currency first.
  // Conversion to Naira (for FCY only) happens once, right at the end,
  // on the final figures — never partway through.
  const interestAmount = n(principal) * (n(dealRate) / 100) * tenorFraction;

  // Usable principal for FTP crediting — reduced by CRR when it applies,
  // since that portion is locked with the CBN and can't be redeployed.
  const usablePrincipal = crrActive ? n(principal) * (1 - CRR_RATE / 100) : n(principal);
  const ftpAmount = usablePrincipal * (n(ftp) / 100) * tenorFraction;

  const ndicCost = ndicActive ? n(principal) * (n(ndicRate) / 100) * tenorFraction : 0;

  const maturityAtDealRate = n(principal) + interestAmount;
  const maturityAtFtp = usablePrincipal + ftpAmount;

  const grossDiff = isDeposit
    ? maturityAtFtp - maturityAtDealRate
    : maturityAtDealRate - maturityAtFtp;
  const netDiff = grossDiff - ndicCost;

  const isProfit = netDiff > 0;
  const isLoss = netDiff < 0;

  const showNgn = currency === "FCY" && n(fxRate) > 0;
  const toNgn = (usd) => usd * n(fxRate);

  const fmt = (x, symbol = sym) =>
    symbol + x.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  const fmtNgn = (x) => "₦" + x.toLocaleString("en-NG", { maximumFractionDigits: 2, minimumFractionDigits: 2 });

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>Deposit Profit/Loss Calculator</h2>
        <span className="timestamp">FTP confirmed for August 2026</span>
      </div>

      <p className="empty-state" style={{ marginBottom: 12 }}>
        Everything is calculated entirely in the currency you select below. If FCY is chosen,
        conversion to Naira happens once, at the very end, on the final figures — never partway
        through the calculation.
      </p>
      <p className="empty-state" style={{ marginBottom: 16 }}>
        Matches standard bank Funds Transfer Pricing methodology: treasury charges
        lending/placement units the FTP rate as a cost, and credits deposit-taking units the FTP
        rate as revenue.
        <strong> FTP Rate, Deposit Rate, and NDIC Rate are all entered as plain percentages</strong> —
        type 9 to mean 9%, not 0.09.
      </p>

      <div className="category-tabs">
        {Object.entries(FTP_DEFAULTS).map(([id, c]) => (
          <button key={id} className={`category-tab ${currency === id ? "active" : ""}`} onClick={() => switchCurrency(id)}>
            {c.label} — {c.tenorBasis}-day basis
          </button>
        ))}
      </div>

      <div className="category-tabs" style={{ marginTop: 10 }}>
        {Object.entries(DIRECTIONS).map(([id, c]) => (
          <button key={id} className={`category-tab ${direction === id ? "active" : ""}`} onClick={() => setDirection(id)}>
            {c.label}
          </button>
        ))}
      </div>
      <p className="empty-state" style={{ marginTop: 10, marginBottom: 16 }}>
        {DIRECTIONS[direction].explain}
      </p>

      <div className="target-grid">
        <div className="target-card">
          <label>Principal (deposit amount, in {cfg.label})</label>
          <input value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="e.g. 1000000" />
        </div>
        <div className="target-card">
          <label>FTP Rate (%) — confirm monthly</label>
          <input value={ftp} onChange={(e) => setFtp(e.target.value)} />
        </div>
        <div className="target-card">
          <label>Deposit Rate (%)</label>
          <input value={dealRate} onChange={(e) => setDealRate(e.target.value)} placeholder="e.g. 9" />
        </div>
        <div className="target-card">
          <label>Tenor (days)</label>
          <input value={tenor} onChange={(e) => setTenor(e.target.value)} placeholder="e.g. 180" />
        </div>
      </div>

      {currency === "FCY" && (
        <div className="target-grid" style={{ marginTop: 4 }}>
          <div className="target-card">
            <label>Exchange Rate at Transaction (₦ per $1)</label>
            <input value={fxRate} onChange={(e) => setFxRate(e.target.value)} placeholder="e.g. 1520 — the rate on the day of this deal" />
          </div>
        </div>
      )}

      {isDeposit && (
        <div className="panel" style={{ background: "var(--card-tint)", marginTop: 16, marginBottom: 0 }}>
          <div className="panel-head" style={{ marginBottom: 10 }}>
            <span className="stat-sub" style={{ textTransform: "uppercase" }}>Optional Regulatory Costs</span>
          </div>

          {currency === "LCY" ? (
            <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.88rem", marginBottom: 12 }}>
              <input type="checkbox" checked={applyCrr} onChange={(e) => setApplyCrr(e.target.checked)} />
              Apply CRR ({CRR_RATE}%) — reduces the usable principal for FTP crediting, since that
              share is locked with the CBN and can't be redeployed
            </label>
          ) : (
            <p className="empty-state" style={{ marginBottom: 12 }}>
              CRR doesn't apply to FCY (USD) deposits — not shown here.
            </p>
          )}

          <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.88rem", marginBottom: applyNdic ? 12 : 0 }}>
            <input type="checkbox" checked={applyNdic} onChange={(e) => setApplyNdic(e.target.checked)} />
            Apply NDIC Premium — an annual deposit insurance cost, prorated to this deal's tenor
          </label>
          {applyNdic && (
            <div className="target-card" style={{ maxWidth: 220 }}>
              <label>NDIC Rate (%) — estimate, confirm current rate</label>
              <input value={ndicRate} onChange={(e) => setNdicRate(e.target.value)} />
            </div>
          )}
        </div>
      )}

      <div className="fx-row" style={{ marginTop: 18 }}>
        <div className="fx-tile">
          <div className="fx-pair">Maturity Value — Deposit Rate</div>
          <div className="fx-value">{fmt(maturityAtDealRate)}</div>
        </div>
        <div className="fx-tile">
          <div className="fx-pair">Maturity Value — FTP Rate{crrActive ? " (CRR-adjusted)" : ""}</div>
          <div className="fx-value">{fmt(maturityAtFtp)}</div>
        </div>
        {ndicActive && (
          <div className="fx-tile">
            <div className="fx-pair">NDIC Premium Cost</div>
            <div className="fx-value" style={{ color: "var(--negative)" }}>−{fmt(ndicCost)}</div>
          </div>
        )}
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
          <div className="fx-pair">{isProfit ? "Net Profit" : isLoss ? "Net Loss" : "Position"} ({cfg.label})</div>
          <div className="fx-value" style={{ color: isProfit ? "var(--positive)" : isLoss ? "var(--negative)" : undefined }}>
            {netDiff >= 0 ? "+" : ""}{fmt(netDiff)}
          </div>
        </div>
      </div>

      {currency === "FCY" && !showNgn && (
        <p className="empty-state" style={{ marginTop: 16 }}>
          Enter the exchange rate at the time of this transaction above to convert every figure
          into Naira — deliberately not auto-filled from today's live rate, since a past
          transaction should use the rate that actually applied on that day.
        </p>
      )}

      {showNgn && (
        <>
          <div className="panel-head" style={{ marginTop: 24, marginBottom: 10 }}>
            <h2 style={{ fontSize: "1.05rem" }}>Converted to Naira</h2>
            <span className="timestamp">at ₦{n(fxRate).toLocaleString("en-NG")} per $1</span>
          </div>

          <div className="kpi-hero-grid">
            <div className="kpi-hero-tile">
              <div className="kpi-hero-value">{fmtNgn(toNgn(maturityAtDealRate))}</div>
              <div className="kpi-hero-label">Maturity Value — Deposit Rate</div>
              <div className="kpi-hero-sub">{fmt(maturityAtDealRate)} × ₦{n(fxRate).toLocaleString("en-NG")}</div>
            </div>
            <div className="kpi-hero-tile">
              <div className="kpi-hero-value">{fmtNgn(toNgn(maturityAtFtp))}</div>
              <div className="kpi-hero-label">Maturity Value — FTP Rate</div>
              <div className="kpi-hero-sub">{fmt(maturityAtFtp)} × ₦{n(fxRate).toLocaleString("en-NG")}</div>
            </div>
            {ndicActive && (
              <div className="kpi-hero-tile">
                <div className="kpi-hero-value" style={{ color: "var(--negative)" }}>−{fmtNgn(toNgn(ndicCost))}</div>
                <div className="kpi-hero-label">NDIC Premium Cost</div>
                <div className="kpi-hero-sub">{fmt(ndicCost)} × ₦{n(fxRate).toLocaleString("en-NG")}</div>
              </div>
            )}
            <div
              className="kpi-hero-tile"
              style={{
                borderColor: isProfit ? "var(--positive)" : isLoss ? "var(--negative)" : undefined,
                background: isProfit
                  ? "color-mix(in srgb, var(--positive) 14%, transparent)"
                  : isLoss
                  ? "color-mix(in srgb, var(--negative) 14%, transparent)"
                  : undefined,
              }}
            >
              <div className="kpi-hero-value" style={{ color: isProfit ? "var(--positive)" : isLoss ? "var(--negative)" : undefined }}>
                {netDiff >= 0 ? "+" : ""}{fmtNgn(toNgn(netDiff))}
              </div>
              <div className="kpi-hero-label">{isProfit ? "Net Profit" : isLoss ? "Net Loss" : "Net Position"} in Naira</div>
              <div className="kpi-hero-sub">
                {netDiff >= 0 ? "+" : ""}{fmt(netDiff)} × ₦{n(fxRate).toLocaleString("en-NG")} = {netDiff >= 0 ? "+" : ""}{fmtNgn(toNgn(netDiff))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
