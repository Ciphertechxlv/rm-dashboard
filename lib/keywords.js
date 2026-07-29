// Keywords used to score how relevant a news headline is to a
// Trade Finance RM in Nigerian corporate banking. Edit freely as
// your real client portfolio takes shape.
export const RELEVANCE_KEYWORDS = [
  // Nigerian FX & policy
  "naira",
  "forex",
  "fx",
  "cbn",
  "central bank",
  "exchange rate",
  "devaluation",
  "dollar",
  "mpr",
  "crr",
  "liquidity ratio",
  // Trade finance instruments
  "trade finance",
  "letter of credit",
  "bills for collection",
  "bank guarantee",
  "standby letter",
  "invoice discounting",
  "incoterm",
  // Trade & shipping
  "export",
  "import",
  "customs",
  "tariff",
  "trade war",
  "shipping",
  "freight",
  "port congestion",
  "supply chain",
  "afcfta",
  "nexim",
  // Commodities & macro
  "oil price",
  "crude",
  "nnpc",
  "opec",
  "inflation",
  "gdp",
  "recession",
  "pmi",
  "manufacturing",
  "cocoa",
  "cotton",
  "sesame",
  // Banking & markets
  "bank",
  "banking",
  "interest rate",
  "treasury bill",
  "eurobond",
  "sovereign debt",
  "credit rating",
  "stock market",
  "bond yield",
  "wall street",
  "monetary policy",
  // Global central banks / institutions
  "federal reserve",
  "the fed",
  "european central bank",
  "bank of england",
  "imf",
  "world bank",
  "swift",
  "sanctions",
  // Corporate/SME finance
  "corporate bank",
  "credit",
  "loan",
  "sme",
  "diaspora remittance",
];

export function scoreRelevance(text) {
  if (!text) return 0;
  const lower = text.toLowerCase();
  let score = 0;
  for (const kw of RELEVANCE_KEYWORDS) {
    if (lower.includes(kw)) score += 1;
  }
  return score;
}

// Plain-English "why this matters to a Trade Finance RM" explanations.
// Checked in order — the first category that matches wins, so put the
// most specific/important categories first. This is rule-based, not
// AI-generated, so it stays free to run forever.
const IMPLICATIONS = [
  {
    keywords: ["letter of credit", "bills for collection", "bank guarantee", "trade finance", "ucp"],
    why:
      "This is about the actual tools you sell every day. It may signal new rules for how LCs or guarantees get processed, new risks banks are watching, or how a competitor is pricing trade products.",
  },
  {
    keywords: ["cbn", "central bank", "mpr", "interest rate", "treasury bill"],
    why:
      "The Central Bank sets the rules that shape how much your clients pay to borrow and what FX they can access for trade. A new CBN move can change what a client needs to do to get an import payment or LC approved.",
  },
  {
    keywords: ["naira", "forex", "fx", "exchange rate", "devaluation", "dollar"],
    why:
      "When the naira moves against the dollar, it changes what your import clients owe foreign suppliers and what your export clients earn when they convert dollars back. A big move usually means clients calling you about their credit lines.",
  },
  {
    keywords: ["oil price", "crude", "nnpc"],
    why:
      "Oil is Nigeria's biggest source of dollars. A swing in oil prices affects how much foreign currency is available across the whole banking system — which can directly affect whether your clients' FX requests get filled.",
  },
  {
    keywords: ["customs", "tariff", "shipping", "freight", "port congestion", "supply chain"],
    why:
      "This affects how fast and how expensively your clients' goods move in or out of the country. A tariff hike or port delay can strand a shipment, which changes when a deal actually gets repaid.",
  },
  {
    keywords: ["cocoa", "cotton", "sesame", "export"],
    why:
      "If you have export clients in this space, price and demand swings here change how much foreign income they earn this season — and how much financing they can safely take on.",
  },
  {
    keywords: ["inflation", "pmi", "manufacturing"],
    why:
      "This is a health check on Nigerian businesses. Weak manufacturing data can mean some clients need financing more urgently to cover rising costs, or are pulling back on expansion.",
  },
  {
    keywords: ["afcfta", "nexim", "eurobond"],
    why:
      "This is bigger-picture trade policy — useful context when a client asks whether now is a good time to expand exports or seek development-bank-backed financing.",
  },
  {
    keywords: ["diaspora remittance"],
    why:
      "Remittances are another steady source of dollars into Nigeria. More remittance inflow can ease FX pressure, indirectly making it a little easier for your clients to access foreign currency.",
  },
  {
    keywords: ["sme", "credit", "loan", "corporate bank", "import"],
    why:
      "This touches general lending and import conditions — relevant background for how your own deal approvals and client conversations might go this week.",
  },
];

export function getImplication(text) {
  if (!text) return null;
  const lower = text.toLowerCase();
  for (const item of IMPLICATIONS) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.why;
    }
  }
  return null;
}
