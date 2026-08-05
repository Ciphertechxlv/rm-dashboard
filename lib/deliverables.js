export const CAM_SECTIONS_GENERAL = [
  "Executive summary — the ask, the amount, the recommendation, in a few lines",
  "Counterparty/obligor profile — who they are, ownership, regulatory standing",
  "Facility details — product, amount, tenor, pricing",
  "Purpose — what the facility is actually for",
  "Risk assessment — credit risk, counterparty rating, sector/country risk",
  "Financial analysis — key ratios and what they show (see Financial Analysis page)",
  "Collateral/security — if any, and its coverage",
  "Recommendation and any conditions/covenants attached",
];

export const CAM_BY_PRODUCT = [
  {
    code: "PLX",
    name: "Interbank Placements",
    points: [
      "Counterparty bank's credit rating and recent rating actions",
      "Proposed placement limit and tenor",
      "Counterparty concentration — how this placement affects overall exposure to that bank",
      "Status of the correspondent relationship (if placing with a correspondent)",
    ],
  },
  {
    code: "CKU",
    name: "Contingency Financing (Guarantees / Counter-guarantees)",
    points: [
      "The underlying transaction or obligation being guaranteed",
      "Beneficiary of the guarantee",
      "Guarantee type — bid, performance, advance payment, etc.",
      "Expiry date and any renewal/extension terms",
      "Counter-guarantee arrangement, if applicable",
      "Contingent liability assessment — what happens if it's called",
    ],
  },
  {
    code: "PSR",
    name: "Pre-Settlement Risk (Swaps, Spots, Forwards, Repos)",
    points: [
      "Notional amount and settlement/tenor date",
      "Counterparty's derivatives/treasury credit limit",
      "Mark-to-market exposure at time of memo",
      "ISDA/master agreement status with the counterparty",
      "Collateral or margin arrangements in place",
    ],
  },
];

export const REPORT_CHECKLIST = [
  "Purpose/objective — why this report exists and who it's for",
  "Data sources — where the figures came from, and as of what date",
  "Key findings — the 2–3 things that actually matter",
  "Comparative context — vs prior period, vs budget, or vs peer institutions",
  "Risk flags — anything that needs escalation",
  "Recommendation — what should happen next",
  "Appendices — supporting data, without cluttering the main narrative",
];
