import { CBN_RATES, lendingFacilityRate, depositFacilityRate } from "../lib/cbnRates";

function Stat({ label, value, sub }) {
  return (
    <div className="fx-tile">
      <div className="fx-pair">{label}</div>
      <div className="fx-value">{value}</div>
      {sub && <div className="stat-sub">{sub}</div>}
    </div>
  );
}

export default function PolicyRatesPanel() {
  return (
    <div className="panel">
      <div className="panel-head">
        <h2>CBN Policy Rates</h2>
        <span className="timestamp">
          As of {CBN_RATES.asOf} · MPC meeting #{CBN_RATES.meetingNumber} ({CBN_RATES.meetingDates})
        </span>
      </div>

      <p className="empty-state" style={{ marginBottom: 16 }}>
        There's no free live API for these — the CBN publishes them only after each Monetary
        Policy Committee meeting (roughly every 8 weeks). These numbers are manually kept in sync
        with the CBN's official page, linked below. Always check the source before quoting a rate
        to a client.
      </p>

      <div className="fx-row">
        <Stat label="Monetary Policy Rate (MPR)" value={`${CBN_RATES.mpr.toFixed(2)}%`} />
        <Stat
          label="Standing Lending Facility"
          value={`${lendingFacilityRate().toFixed(2)}%`}
          sub={`MPR +${CBN_RATES.corridor.upper}pp`}
        />
        <Stat
          label="Standing Deposit Facility"
          value={`${depositFacilityRate().toFixed(2)}%`}
          sub={`MPR ${CBN_RATES.corridor.lower}pp`}
        />
      </div>

      <div className="fx-row" style={{ marginTop: 16 }}>
        <Stat label="CRR — Deposit Money Banks" value={`${CBN_RATES.crr.dmb.toFixed(2)}%`} />
        <Stat label="CRR — Merchant Banks" value={`${CBN_RATES.crr.merchant.toFixed(2)}%`} />
        <Stat label="CRR — Non-TSA Public Sector" value={`${CBN_RATES.crr.nonTsaPublicSector.toFixed(2)}%`} />
      </div>

      <div className="fx-row" style={{ marginTop: 16 }}>
        <Stat label="Liquidity Ratio" value={`${CBN_RATES.liquidityRatio.toFixed(2)}%`} />
      </div>

      <p className="empty-state" style={{ marginTop: 18 }}>
        <strong>What these mean:</strong> MPR is the benchmark rate everything else is priced
        off. The Lending/Deposit Facility rates are what banks pay or earn parking money
        overnight with the CBN. CRR is the share of deposits banks must lock away, unusable for
        lending. Liquidity Ratio is the share of liabilities banks must hold in easily-sellable
        assets.
      </p>

      <a className="cbn-source-link" href={CBN_RATES.sourceUrl} target="_blank" rel="noreferrer">
        Verify on CBN's official page ↗
      </a>
    </div>
  );
}
