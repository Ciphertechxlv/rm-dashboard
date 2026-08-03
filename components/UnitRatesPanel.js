import { useEffect, useState } from "react";

const STORAGE_KEY = "fiio_product_rates";

const PRODUCTS = [
  { key: "fd30", label: "Fixed Deposit — 30 days" },
  { key: "fd60", label: "Fixed Deposit — 60 days" },
  { key: "fd90", label: "Fixed Deposit — 90 days" },
  { key: "fd180", label: "Fixed Deposit — 180 days" },
  { key: "fd365", label: "Fixed Deposit — 365 days" },
  { key: "ledger", label: "Ledger Account (under Fixed Deposit)" },
  { key: "current", label: "Current Account" },
];

export default function UnitRatesPanel() {
  const [rates, setRates] = useState({});
  const [updatedAt, setUpdatedAt] = useState(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setRates(parsed.rates || {});
        setUpdatedAt(parsed.updatedAt || null);
      }
    } catch {
      /* ignore */
    }
  }, []);

  function update(key, value) {
    const next = { ...rates, [key]: value };
    setRates(next);
    const now = new Date().toISOString();
    setUpdatedAt(now);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ rates: next, updatedAt: now }));
  }

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>Your Unit's Product Rates</h2>
        <span className="timestamp">
          {updatedAt ? `You last updated this ${new Date(updatedAt).toLocaleString()}` : "Not set yet"}
        </span>
      </div>
      <p className="empty-state" style={{ marginBottom: 16 }}>
        These are the actual rates you quote FI/IO clients — not public data, so there's no feed
        for this. Log today's rates here each morning and they're saved privately on this device.
        This is the number that matters most before any client call.
      </p>
      <div className="target-grid">
        {PRODUCTS.map((p) => (
          <div className="target-card" key={p.key}>
            <label>{p.label} (% p.a.)</label>
            <input
              value={rates[p.key] || ""}
              onChange={(e) => update(p.key, e.target.value)}
              placeholder="e.g. 18.5"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
