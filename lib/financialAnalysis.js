export const KEY_RATIOS = [
  {
    name: "Capital Adequacy Ratio (CAR)",
    formula: "(Tier 1 + Tier 2 Capital) ÷ Risk-Weighted Assets",
    tellsYou: "Whether a bank/FI has enough capital cushion to absorb losses. Nigerian banks' regulatory minimum is typically 10–15% depending on license category.",
  },
  {
    name: "Non-Performing Loan (NPL) Ratio",
    formula: "Non-Performing Loans ÷ Total Loans",
    tellsYou: "Asset quality — how much of a counterparty's loan book is troubled. Rising NPL ratio is an early warning sign for a correspondent bank or DFI-funded institution.",
  },
  {
    name: "Liquidity Ratio",
    formula: "Liquid Assets ÷ Total Deposits/Liabilities",
    tellsYou: "Whether an institution can meet short-term obligations. Low liquidity is a red flag before extending or renewing lines.",
  },
  {
    name: "Loan-to-Deposit Ratio (LDR)",
    formula: "Total Loans ÷ Total Deposits",
    tellsYou: "How aggressively an institution is lending relative to its deposit base. Very high LDR can signal funding strain.",
  },
  {
    name: "Return on Equity (ROE)",
    formula: "Net Income ÷ Shareholders' Equity",
    tellsYou: "Profitability relative to shareholder investment — useful for comparing asset managers, insurers, and fintechs against peers.",
  },
  {
    name: "Return on Assets (ROA)",
    formula: "Net Income ÷ Total Assets",
    tellsYou: "How efficiently an institution uses its balance sheet to generate profit.",
  },
  {
    name: "Solvency Ratio (Insurance)",
    formula: "Available Capital ÷ Required Solvency Capital",
    tellsYou: "Whether an insurer can meet its policy obligations. Core metric when reviewing insurance-sector counterparties.",
  },
];

export const CHECKLISTS = [
  {
    type: "Correspondent Bank",
    points: [
      "Capital adequacy ratio vs regulatory minimum",
      "Credit rating (S&P/Moody's/Fitch) and recent rating actions",
      "Correspondent banking relationships and nostro/vostro activity",
      "AML/KYC/sanctions compliance standing",
      "Country/sovereign risk of parent jurisdiction",
    ],
  },
  {
    type: "Development Finance Institution (DFI)",
    points: [
      "Mandate and sector focus (does it align with the client being financed?)",
      "Credit rating — usually very strong (AAA/AA-range) but confirm",
      "Funding sources and currency of facilities offered",
      "Co-financing or guarantee structures available",
    ],
  },
  {
    type: "Fintech",
    points: [
      "CBN licensing category (Mobile Money Operator, PSB, etc.) and standing",
      "Transaction volumes and settlement patterns through your accounts",
      "Capital adequacy / minimum capital requirement compliance",
      "Regulatory compliance history — any CBN sanctions or directives",
    ],
  },
  {
    type: "Insurance / NBFI",
    points: [
      "Solvency ratio vs regulatory minimum",
      "Claims ratio trend",
      "NAICOM licensing standing (for insurers) or SEC registration (for asset/pension managers)",
      "Asset quality of the investment portfolio backing liabilities",
    ],
  },
  {
    type: "Mortgage Institution",
    points: [
      "Loan book quality and default rates",
      "Funding structure — deposits vs wholesale funding vs NHF-linked",
      "CBN/regulatory license standing (Primary Mortgage Bank licensing)",
    ],
  },
  {
    type: "International Organization / Embassy",
    points: [
      "Nature of funding — sovereign/multilateral backing vs self-funded",
      "Signatory and mandate documentation for account operations",
      "Diplomatic/privileged status considerations for compliance",
    ],
  },
];
