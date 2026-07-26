// Live FX rates via open.er-api.com — free, no API key required.
// Note: this gives an interbank/mid-market reference rate, which
// will differ from Nigeria's official CBN rate and the parallel
// ("black") market rate. There's no free, reliable, keyless API
// for either of those, so the dashboard lets you log today's
// parallel-market rate manually (see the FxPanel component).

export default async function handler(req, res) {
  try {
    const r = await fetch("https://open.er-api.com/v6/latest/USD", {
      headers: { "User-Agent": "rm-trade-desk/1.0" },
    });

    if (!r.ok) throw new Error(`Upstream FX source returned ${r.status}`);

    const data = await r.json();
    const rates = data.rates || {};

    const usdNgn = rates.NGN;
    const usdGbp = rates.GBP;
    const usdEur = rates.EUR;

    const payload = {
      base: "USD",
      updatedAt: data.time_last_update_utc || new Date().toUTCString(),
      pairs: {
        USD_NGN: usdNgn ?? null,
        GBP_NGN: usdNgn && usdGbp ? usdNgn / usdGbp : null,
        EUR_NGN: usdNgn && usdEur ? usdNgn / usdEur : null,
      },
      source: "open.er-api.com (mid-market reference — not CBN official or parallel-market rate)",
    };

    // Cache at the edge for 5 minutes so the page loads fast but
    // still refreshes automatically throughout the day.
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    res.status(200).json(payload);
  } catch (err) {
    res.status(200).json({
      error: true,
      message: "Could not reach FX source right now.",
      detail: String(err.message || err),
    });
  }
}
