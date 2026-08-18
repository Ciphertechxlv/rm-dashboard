// NBS (National Bureau of Statistics) publishes Nigeria's official CPI
// inflation figures — and unlike CBN's own rate pages, NBS's homepage is
// plain server-rendered HTML with the current headline rate right in it,
// so it can actually be scraped by a simple server-side fetch.
const NBS_URL = "https://www.nigerianstat.gov.ng/";

// Used only if the live scrape fails — kept in sync manually as a
// last-resort fallback, not treated as authoritative.
const FALLBACK_RATE = 15.43;
const FALLBACK_ASOF = "June 2026 (manually recorded — live fetch failed)";

export default async function handler(req, res) {
  try {
    const r = await fetch(NBS_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; rm-dashboard/1.0; +inflation-reader)" },
    });
    if (!r.ok) throw new Error(`NBS returned ${r.status}`);
    const html = await r.text();

    // Look for the CPI headline figure — appears near the text "CPI"
    // followed (within a short window, to skip over HTML tags/links) by
    // a percentage value.
    const match = html.match(/CPI[\s\S]{0,200}?(\d{1,2}\.\d{1,2})\s*%/);

    if (match) {
      const rate = parseFloat(match[1]);
      res.setHeader("Cache-Control", "s-maxage=21600, stale-while-revalidate=43200");
      res.status(200).json({
        live: true,
        rate,
        source: "National Bureau of Statistics (NBS) — official CPI, All-Items",
        sourceUrl: NBS_URL,
        fetchedAt: new Date().toISOString(),
      });
      return;
    }
    throw new Error("Could not find CPI figure in NBS page");
  } catch (err) {
    res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate=3600");
    res.status(200).json({
      live: false,
      rate: FALLBACK_RATE,
      asOf: FALLBACK_ASOF,
      source: "National Bureau of Statistics (NBS)",
      sourceUrl: NBS_URL,
      error: String(err.message || err),
    });
  }
}
