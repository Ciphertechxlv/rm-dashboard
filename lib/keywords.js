// Keywords used to score how relevant a news headline is to a FIIO
// (Financial Institutions & International Organizations) Relationship
// Manager at Ecobank Nigeria. Scoped strictly to FIIO — no trade finance,
// shipping, or commodity-export terms. Edit freely as your real client
// list grows.
export const RELEVANCE_KEYWORDS = [
  // Your actual correspondent banks, fintechs, DFIs, mortgages, IOs — the
  // most specific and highest-signal keywords for your unit.
  "deutsche bank",
  "citibank",
  "citi bank",
  "access bank uk",
  "absa",
  "nedbank",
  "opay",
  "kuda",
  "moniepoint",
  "ecowas",
  "bank of industry",
  "afc",
  "africa finance corporation",
  "ebrd",
  "jubilee life mortgage",
  "ft mortgage",
  "abbey mortgage",
  // Nigerian FX & monetary policy
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
  "interest rate",
  "monetary policy",
  "inflation",
  "treasury bill",
  "eurobond",
  "sovereign debt",
  "credit rating",
  "diaspora remittance",
  // FIIO — financial institutions & international organizations
  "correspondent bank",
  "correspondent banking",
  "nostro",
  "vostro",
  "swift",
  "microfinance bank",
  "pension fund",
  "pension company",
  "insurance company",
  "naicom",
  "pencom",
  "asset manager",
  "asset management",
  "fintech",
  "mobile money",
  "payment service bank",
  "development finance",
  "multilateral",
  "african development bank",
  "afdb",
  "ifc",
  "world bank",
  "embassy",
  "diplomatic mission",
  "ngo",
  "united nations",
  "un agency",
  "sovereign wealth fund",
  "interbank",
  "sanctions",
  "credit",
  "loan",
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

// Plain-English "why this matters to a FIIO RM" explanations. Checked in
// order — the first category that matches wins, so the most specific
// categories come first. This is rule-based, not AI-generated, so it
// stays free to run forever.
const IMPLICATIONS = [
  {
    keywords: [
      "deutsche bank", "citibank", "citi bank", "access bank uk", "absa", "nedbank",
      "opay", "kuda", "moniepoint", "ecowas", "bank of industry", "afc",
      "africa finance corporation", "ebrd", "jubilee life mortgage", "ft mortgage", "abbey mortgage",
    ],
    why:
      "This is one of your unit's actual named counterparties or clients — worth a closer read before your next call or credit review with them.",
  },
  {
    keywords: ["correspondent bank", "correspondent banking", "nostro", "vostro", "swift", "interbank"],
    why:
      "This is about the mechanics of correspondent banking itself — settlement, messaging, or counterparty risk that could directly affect your correspondent relationships.",
  },
  {
    keywords: ["microfinance bank", "pension fund", "pension company", "insurance company", "naicom", "pencom", "asset manager", "asset management"],
    why:
      "This is about the NBFI institutions you actually deal with in FIIO — insurers, pension companies, asset managers. Could signal a regulatory change, a partnership opportunity, or a counterparty risk.",
  },
  {
    keywords: ["fintech", "mobile money", "payment service bank"],
    why:
      "This touches the fintech sub-unit — a licensing change, funding round, or regulatory directive here can directly affect how you manage that relationship.",
  },
  {
    keywords: ["development finance", "multilateral", "african development bank", "afdb", "ifc", "world bank"],
    why:
      "Development finance institutions and multilaterals are core FIIO relationships — they often co-finance deals or provide credit lines banks like Ecobank draw on. News here can signal new funding available.",
  },
  {
    keywords: ["embassy", "diplomatic mission", "ngo", "united nations", "un agency", "sovereign wealth fund"],
    why:
      "International organizations — embassies, UN agencies, NGOs — are core FIIO clients. This kind of news can affect their local operations, funding, or banking needs in Nigeria.",
  },
  {
    keywords: ["cbn", "central bank", "mpr", "interest rate", "treasury bill", "monetary policy"],
    why:
      "The Central Bank sets the rules and rates that shape what you can offer FI/IO clients on deposits — and what FX access looks like for correspondent settlement.",
  },
  {
    keywords: ["naira", "forex", "fx", "exchange rate", "devaluation", "dollar"],
    why:
      "Naira/dollar moves directly affect correspondent banking FX flows and what your institutional clients are willing to hold in Naira versus foreign currency.",
  },
  {
    keywords: ["diaspora remittance"],
    why:
      "Remittances are a steady source of dollars flowing through correspondent banking channels — relevant to FX liquidity your unit can draw on.",
  },
  {
    keywords: ["sanctions"],
    why:
      "Sanctions news can directly affect correspondent banking relationships and compliance obligations — always worth a closer look.",
  },
  {
    keywords: ["credit", "loan", "sovereign debt", "credit rating"],
    why:
      "General credit and lending conditions — relevant background for your unit's own credit decisions and client conversations.",
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
