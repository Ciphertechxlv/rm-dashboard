import { useEffect, useState } from "react";

function fmt(n) {
  if (n === null || n === undefined || Number.isNaN(n)) return "—";
  return n.toLocaleString("en-NG", { maximumFractionDigits: 2 });
}

export default function FxPanel({ onHeadline }) {
  const [fx, setFx] = useState(null);
  const [error, setError] = useState(null);
  const [parallel, setParallel] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("parallel_usd_ngn");
    if (saved) setParallel(saved);

    fetch("/api/fx")
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(data.message);
          return;
        }
        setFx(data);
        if (onHeadline) {
          onHeadline(`USD/NGN (mid-market): ₦${fmt(data.pairs.USD_NGN)}`);
        }
      })
      .catch((e) => setError(String(e)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function saveParallel(val) {
    setParallel(val);
    window.localStorage.setItem("parallel_usd_ngn", val);
    window.localStorage.setItem("parallel_usd_ngn_date", new Date().toDateString());
  }

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>Exchange Rates</h2>
        <span className="timestamp">{fx ? `Updated ${new Date(fx.updatedAt).toLocaleString()}` : error ? "Unavailable" : "Loading…"}</span>
      </div>

      {error && <p className="empty-state">{error} — refresh to retry.</p>}

      {fx && (
        <>
          <div className="fx-row">
            <div className="fx-tile">
              <div className="fx-pair">USD / NGN</div>
              <div className="fx-value">₦{fmt(fx.pairs.USD_NGN)}</div>
            </div>
            <div className="fx-tile">
              <div className="fx-pair">GBP / NGN</div>
              <div className="fx-value">₦{fmt(fx.pairs.GBP_NGN)}</div>
            </div>
            <div className="fx-tile">
              <div className="fx-pair">EUR / NGN</div>
              <div className="fx-value">₦{fmt(fx.pairs.EUR_NGN)}</div>
            </div>
          </div>
          <p className="empty-state" style={{ marginTop: 12 }}>
            Source: {fx.source}. This is a mid-market reference, not the official CBN rate or the
            parallel/"black market" rate — log today's parallel rate yourself below if it matters for your deals.
          </p>
        </>
      )}

      <div className="fx-manual">
        <span>Today's parallel-market USD/NGN:</span>
        <input
          type="text"
          placeholder="e.g. 1415"
          value={parallel}
          onChange={(e) => saveParallel(e.target.value)}
        />
      </div>
    </div>
  );
}
