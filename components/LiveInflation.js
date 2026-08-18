import { useEffect, useState } from "react";

export default function LiveInflation({ tileClass = "fx-tile", labelClass = "fx-pair", valueClass = "fx-value" }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/inflation")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  return (
    <div className={tileClass}>
      <div className={labelClass}>Inflation Rate {data && (data.live ? "— live" : "— fallback")}</div>
      <div className={valueClass}>{data ? `${data.rate.toFixed(2)}%` : "…"}</div>
      {data && !data.live && <div className="stat-sub">{data.asOf}</div>}
      {data && data.live && <div className="stat-sub">Live from NBS, fetched {new Date(data.fetchedAt).toLocaleTimeString()}</div>}
    </div>
  );
}
