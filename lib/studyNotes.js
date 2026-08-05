// Core knowledge for a Financial Institutions & International Organizations
// (FIIO) Relationship Manager — correspondent banking, DFIs, fintech
// regulation, NBFIs, and international organizations.

export const STUDY_TOPICS = [
  {
    id: "correspondent-banking",
    title: "1. Correspondent Banking Essentials",
    definition:
      "A correspondent bank is a foreign bank that provides services on behalf of another bank, usually to enable cross-border payments and settlement in a currency or market the client bank can't access directly.",
    points: [
      "Nostro account: 'our account with them' — a bank's own foreign-currency account held at a correspondent bank abroad.",
      "Vostro account: 'your account with us' — the correspondent's local-currency account held at your bank. Ecobank Nigeria acts as the Vostro-holder for many correspondent relationships.",
      "SWIFT is the standard messaging network correspondent banks use to instruct payments — MT103 for customer payments, MT202 for bank-to-bank transfers. The industry is gradually migrating from MT to the richer ISO 20022 (MX) message format.",
      "Correspondent banking relationships require ongoing AML/KYC due diligence — including periodic review of the correspondent's ownership, licensing, and sanctions exposure.",
      "Correspondent banks must be genuinely international — non-Nigerian institutions such as Deutsche Bank, Citibank, Access Bank UK, Absa, or Nedbank.",
    ],
    examTip: "Nostro = 'ours abroad', Vostro = 'theirs with us' — a classic mix-up. If you're the one holding the account for someone else, it's a Vostro account from your perspective.",
  },
  {
    id: "dfis-multilaterals",
    title: "2. Development Finance Institutions & Multilaterals",
    definition:
      "DFIs are government-backed or multilaterally-owned institutions that provide financing, guarantees, or co-financing — usually at better terms than commercial banks — to support development objectives.",
    points: [
      "Africa Finance Corporation (AFC) — an African-led infrastructure-focused DFI with a strong credit rating, active across multiple African markets.",
      "International Finance Corporation (IFC) — the private-sector arm of the World Bank Group, financing private enterprise in emerging markets.",
      "European Bank for Reconstruction and Development (EBRD) — historically focused on Eastern Europe/Central Asia, with an expanding footprint into parts of Africa.",
      "DFIs typically carry very strong credit ratings, so relationships with them can support co-financing structures, guarantees, or funding lines that make deals possible for clients who wouldn't otherwise qualify.",
      "Because DFIs have specific development mandates, always check whether a proposed transaction fits the DFI's sector or thematic focus before pursuing it.",
    ],
    examTip: "DFIs aren't just lenders — many offer guarantee or risk-sharing structures that de-risk a deal for the commercial bank, not just cheaper funding.",
  },
  {
    id: "fintech-regulation",
    title: "3. Fintech Regulation & Licensing in Nigeria",
    definition:
      "Nigerian fintechs operate under specific CBN licensing categories, each with different permitted activities and capital requirements — knowing which category a fintech holds tells you what it can and can't do.",
    points: [
      "Mobile Money Operator (MMO) licence — permits e-wallet and mobile money services.",
      "Payment Service Bank (PSB) licence — allows deposit-taking and payment services with restrictions (e.g. no lending), aimed at extending financial inclusion.",
      "Payment Solution Service Provider (PSSP) / Switching licences — cover payment processing, switching, and aggregation services.",
      "Examples in this space: OPay, Kuda, and Moniepoint — each holds specific CBN licences that define their permitted scope.",
      "When reviewing a fintech counterparty, confirm current licensing status and any CBN directives or sanctions history before deepening the relationship.",
    ],
    examTip: "A fintech's licence category is the single fastest way to understand what it's actually allowed to do — check it before assuming a fintech can, say, take deposits or lend.",
  },
  {
    id: "nbfi-regulation",
    title: "4. Non-Banking Financial Institutions (NBFI)",
    definition:
      "NBFIs — insurance companies, asset managers, and pension companies — are regulated by different bodies than banks, each with its own solvency and reporting standards.",
    points: [
      "Insurance companies are regulated by NAICOM (National Insurance Commission). Key metric: solvency ratio — available capital versus required solvency capital.",
      "Asset managers and capital market operators are regulated by the SEC (Securities and Exchange Commission).",
      "Pension Fund Administrators (PFAs) and Pension Fund Custodians are regulated by PenCom (National Pension Commission).",
      "NBFIs often hold large, relatively stable balances — making them attractive liability-side relationships even where lending exposure is limited.",
      "Regulatory standing (NAICOM/SEC/PenCom licence status) is the first thing to confirm before onboarding or deepening any NBFI relationship.",
    ],
    examTip: "Three different regulators, three different NBFI types: NAICOM → insurance, SEC → asset managers, PenCom → pension companies. Don't mix them up.",
  },
  {
    id: "io-embassy-banking",
    title: "5. International Organizations & Embassy Banking",
    definition:
      "International organizations — embassies, multilateral bodies, and NGOs — often have unique account-opening and compliance considerations tied to their diplomatic or institutional status.",
    points: [
      "Examples: Embassies, the Bank of Industry, ECOWAS, and other international organizations — particularly ones based in Lagos.",
      "Global IOs have head offices outside Africa with presence in several African countries; Regional IOs are headquartered in Africa with presence in one or more African countries.",
      "Diplomatic missions may have specific privileges under international conventions, but standard KYC and account-opening documentation is still required — mandate letters and authorised signatory documentation are essential.",
      "IO relationships are often funding-stable (sovereign or multilateral-backed) rather than credit-risk relationships — the value is usually in deposits, payments, and FX activity rather than lending.",
    ],
    examTip: "IO banking is usually about deposit and transaction relationships, not credit risk — the compliance and documentation side matters more than the credit-analysis side.",
  },
  {
    id: "fiio-products",
    title: "6. FIIO Deposit & Payment Products",
    definition:
      "The core product set your unit offers FI/IO clients: rate-driven deposit products and modern payment/banking infrastructure.",
    points: [
      "Fixed Deposits — term deposits at negotiated interest rates, the anchor product for most FIIO relationships.",
      "Ledger Accounts — used for investment tracking under fixed deposit arrangements.",
      "Current Accounts — day-to-day transaction accounts for institutional clients.",
      "Payment solutions — virtual accounts and online banking, giving institutional clients modern digital rails for collections and disbursements.",
      "Two other core functions of the unit: funding the bank (deposit mobilisation from FI/IO clients) and managing relationships with international organizations.",
    ],
    examTip: "Pricing (the interest rate offered) is usually the single biggest lever in winning or retaining an FI/IO deposit relationship — know today's rates before any client call.",
  },
  {
    id: "fiio-trading-products",
    title: "7. FIIO Trading & Credit Products",
    definition:
      "Beyond deposit and payment products, your unit deals with three core product codes — each with distinct risk profiles and CAM requirements.",
    points: [
      "PLX (Interbank Placements) — placing or accepting deposits with/from other banks, including correspondent banks, for a fixed tenor at an agreed rate. Key risk: counterparty bank credit rating and concentration.",
      "CKU (Contingency Financing) — off-balance-sheet commitments such as Guarantees and Counter-guarantees. The bank only pays out if the client fails to perform. Key risk: contingent liability if called.",
      "PSR (Pre-Settlement Risk) — counterparty credit risk on derivative/treasury instruments like Swaps, Spots, Forwards, and Repos, before they settle. Key risk: mark-to-market exposure and counterparty default before settlement.",
      "Your three core recurring deliverables: Credit Approval Memorandums (CAMs) for these products, Reports, and Cashflow Projections.",
      "A CAM generally covers: executive summary, counterparty profile, facility details, purpose, risk assessment, financial analysis, collateral/security, and recommendation — with product-specific additions for PLX/CKU/PSR.",
    ],
    examTip: "Match the risk lens to the product: PLX → counterparty rating, CKU → contingent liability if called, PSR → mark-to-market exposure before settlement.",
  },
];
