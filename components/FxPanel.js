import { useEffect, useState } from "react";

function fmt(n) {
  if (n === null || n === undefined || Number.isNaN(n)) return "—";
  return n.toLocaleString("en-NG", { maximumFractionDigits: 2 });
}

const LABELS = { USD_NGN: "USD / NGN", GBP_NGN: "GBP / NGN", EUR_NGN: "EUR / NGN" };

export default function FxPanel({ onHeadline }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [parallel, setParallel] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("parallel_usd_ngn");
    if (saved) setParallel(saved);

    fetch("/api/fx")
      .then((r) => r.json())
      .then((payload) => {
        setData(payload);
        if (onHeadline) {
          if (payload.official && payload.official.USD_NGN) {
            onHeadline(`USD/NGN (CBN official): ₦${fmt(payload.official.USD_NGN.sell)} sell / ₦${fmt(payload.official.USD_NGN.buy)} buy`);
          } else if (payload.midMarket && payload.midMarket.USD_NGN) {
            onHeadline(`USD/NGN (mid-market): ₦${fmt(payload.midMarket.USD_NGN)}`);
          }
        }
      })
      .catch((e) => setError(String(e)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function saveParallel(val) {
    setParallel(val);
    window.localStorage.setItem("parallel_usd_ngn", val);
    window.localStorage.setItem("parallel_usd_ngn_date", new Date().toDateString());
  }

  const hasOfficial = data && data.official && Object.keys(data.official).length > 0;

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>Exchange Rates</h2>
        <span className="timestamp">
          {hasOfficial ? `CBN official, updated ${new Date(data.officialUpdatedAt).toLocaleString()}` : error ? "Unavailable" : data ? "Official source unavailable — showing mid-market" : "Loading…"}
        </span>
      </div>

      {error && <p className="empty-state">{error} — refresh to retry.</p>}

      {hasOfficial && (
        <>
          <div className="fx-row">
            {Object.entries(LABELS).map(([key, label]) => {
              const rate = data.official[key];
              if (!rate) return null;
              return (
                <div className="fx-tile" key={key}>
                  <div className="fx-pair">{label} — CBN Official</div>
                  <div className="fx-value">₦{fmt(rate.sell)}</div>
                  <div className="stat-sub">Sell ₦{fmt(rate.sell)} / Buy ₦{fmt(rate.buy)}</div>
                </div>
              );
            })}
          </div>
          <p className="empty-state" style={{ marginTop: 12 }}>
            Source: {data.officialSource}. This republishes CBN's official NFEM rate — not CBN's own
            API (none exists publicly) and not a specific bank's commercial rate.{" "}
            <a href={data.officialSourceUrl} target="_blank" rel="noreferrer" style={{ color: "var(--blue)" }}>
              Verify directly ↗
            </a>
          </p>
        </>
      )}

      {!hasOfficial && data && data.midMarket && (
        <>
          <div className="fx-row">
            {Object.entries(LABELS).map(([key, label]) => (
              <div className="fx-tile" key={key}>
                <div className="fx-pair">{label}</div>
                <div className="fx-value">₦{fmt(data.midMarket[key])}</div>
              </div>
            ))}
          </div>
          <p className="empty-state" style={{ marginTop: 12 }}>
            Official CBN source didn't respond this time — showing mid-market reference from{" "}
            {data.midMarketSource} instead.
          </p>
        </>
      )}

      {hasOfficial && data.midMarket && (
        <p className="empty-state" style={{ marginTop: 8 }}>
          Mid-market cross-check (USD/NGN): ₦{fmt(data.midMarket.USD_NGN)} — via {data.midMarketSource}.
        </p>
      )}

      <div className="fx-manual">
        <span>Today's parallel-market USD/NGN:</span>
        <input
          type="text"
          placeholder="e.g. 1415"
          value={parallel}
          onChange={(e) => saveParallel(e.target.value)}
        />
        <span>(saved on this device only)</span>
      </div>
    </div>
  );
}
