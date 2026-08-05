// Two data sources, clearly separated:
//
// 1. "official" — CBN's actual published buy/sell rates, sourced from
//    ngnrates.com, which republishes CBN's NFEM data as plain server-
//    rendered HTML (no JS required to read it, unlike CBN's own site,
//    which loads its rate table via client-side JavaScript and can't be
//    scraped by a simple server fetch). This is a third-party aggregator,
//    not CBN's own API — CBN has no public API. Spot-check periodically
//    against https://www.cbn.gov.ng/rates/ExchRateByCurrency.html.
//
// 2. "midMarket" — the previous keyless mid-market source, kept as a
//    fallback and a rough cross-check, not a bank rate.
const CODES = ["USD", "EUR", "GBP"];

async function fetchOfficial() {
  const rates = {};
  const r = await fetch("https://www.ngnrates.com/cbn-central-bank-of-nigeria", {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; rm-dashboard/1.0; +fx-reader)" },
  });
  if (!r.ok) throw new Error(`ngnrates.com returned ${r.status}`);
  const html = await r.text();

  // Look for a currency code followed (within a reasonable window, to
  // skip over HTML tags/links) by "₦<sell>/<buy>".
  for (const code of CODES) {
    const pattern = new RegExp(`${code}[\\s\\S]{0,300}?₦\\s*([\\d,]+\\.\\d+)\\s*/\\s*([\\d,]+\\.\\d+)`);
    const match = html.match(pattern);
    if (match) {
      rates[`${code}_NGN`] = {
        sell: parseFloat(match[1].replace(/,/g, "")),
        buy: parseFloat(match[2].replace(/,/g, "")),
      };
    }
  }
  return rates;
}

async function fetchMidMarket() {
  const r = await fetch("https://open.er-api.com/v6/latest/USD");
  if (!r.ok) throw new Error(`open.er-api.com returned ${r.status}`);
  const data = await r.json();
  const rates = data.rates || {};
  const usdNgn = rates.NGN;
  const usdGbp = rates.GBP;
  const usdEur = rates.EUR;
  return {
    pairs: {
      USD_NGN: usdNgn ?? null,
      GBP_NGN: usdNgn && usdGbp ? usdNgn / usdGbp : null,
      EUR_NGN: usdNgn && usdEur ? usdNgn / usdEur : null,
    },
    updatedAt: data.time_last_update_utc || null,
  };
}

export default async function handler(req, res) {
  const payload = {
    official: null,
    officialUpdatedAt: null,
    officialSource: "ngnrates.com — republishes CBN's official NFEM buy/sell rates",
    officialSourceUrl: "https://www.ngnrates.com/cbn-central-bank-of-nigeria",
    midMarket: null,
    midMarketUpdatedAt: null,
    midMarketSource: "open.er-api.com — general mid-market reference, not a bank rate",
  };

  try {
    payload.official = await fetchOfficial();
    if (Object.keys(payload.official).length > 0) {
      payload.officialUpdatedAt = new Date().toUTCString();
    } else {
      payload.official = null;
    }
  } catch (err) {
    payload.officialError = String(err.message || err);
  }

  try {
    const mid = await fetchMidMarket();
    payload.midMarket = mid.pairs;
    payload.midMarketUpdatedAt = mid.updatedAt;
  } catch (err) {
    payload.midMarketError = String(err.message || err);
  }

  // 30-minute edge cache — the source itself updates roughly daily, so
  // this just keeps page loads fast without hammering ngnrates.com.
  res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate=3600");
  res.status(200).json(payload);
}
