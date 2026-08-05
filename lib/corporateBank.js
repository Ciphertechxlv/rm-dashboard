// From the Ecobank Academy "Entry Level Development Programme — Corporate
// Bank" induction (July 2026). This is your actual unit's structure, so
// it includes real names from your organogram.

export const ECOBANK_STATS = [
  { label: "African countries", value: "35" },
  { label: "Top 3 position", value: "In ½ of markets" },
  { label: "Branches", value: "690" },
  { label: "Africa stock listings", value: "3" },
  { label: "Employees", value: "14,000" },
  { label: "ATMs", value: "2,659" },
  { label: "Ecobank Mobile users", value: "13MM+" },
  { label: "Total assets", value: "$25.9B" },
  { label: "Revenue", value: "$1.7B" },
  { label: "Xpress Point Agents", value: "66,000+" },
  { label: "EcobankPay QR merchants", value: "251,000+" },
  { label: "Customers", value: "28MM+" },
];

export const REP_OFFICES = ["London", "Paris (Affiliate)", "Dubai", "Beijing"];

export const CB_SUBUNITS = [
  { name: "Global Corporates / Multinationals", note: "Feeds into Energy Assets/Recovery" },
  { name: "Regional Corporates", note: "Feeds into Energy Assets/Recovery" },
  { name: "High Value Local Corporates", note: "" },
  { name: "Financial Institutions & International Organizations", note: "Your unit", highlight: true },
  { name: "Energy Assets/Recovery", note: "" },
];

export const FIIO_CRITERIA = [
  { type: "Global FI", def: "Head office outside Africa, presence in several African countries" },
  { type: "Regional FI", def: "Head office in Africa, presence in one or more African countries" },
  { type: "Local FI", def: "Operations in only one country" },
  { type: "Global IO", def: "Head office outside Africa, presence in several African countries" },
  { type: "Regional IO", def: "Head office in Africa, presence in one or more African countries" },
];

// How your FIIO unit is actually split up day-to-day, by product/client
// type — this is the real operating structure, not just the textbook
// classification above.
export const FIIO_REAL_SUBUNITS = [
  {
    name: "Correspondent Banks",
    owner: "Folakemi",
    examples: "Deutsche Bank, Citibank, Access Bank UK, Absa, Nedbank, and any other international bank (must not be a Nigerian bank)",
  },
  {
    name: "Fintechs",
    owner: "Praise",
    examples: "OPay, Kuda, Moniepoint, and similar CBN-licensed digital financial service providers",
  },
  {
    name: "Insurance",
    owner: "Ini",
    examples: "NAICOM-regulated insurance companies operating in Nigeria",
  },
  {
    name: "Mortgages",
    owner: "Folakemi",
    examples: "Jubilee Life Mortgage, FT Mortgage, Abbey Mortgage, and other licensed Primary Mortgage Banks",
  },
  {
    name: "Asset Management",
    owner: "Mr Laj",
    examples: "Asset managers and pension companies (SEC/PenCom-regulated fund managers and administrators)",
  },
];

export const FIIO_CLIENT_CATEGORIES = [
  {
    category: "International Organizations",
    examples: "Embassies, Bank of Industry, ECOWAS, and other international organizations — especially those based in Lagos",
  },
  {
    category: "Development Finance Institutions (DFIs)",
    examples: "Africa Finance Corporation (AFC), International Finance Corporation (IFC), European Bank for Reconstruction and Development (EBRD), EPID",
  },
  {
    category: "Non-Banking Financial Institutions (NBFI)",
    examples: "Asset managers, insurance companies, pension companies — regulated by SEC, NAICOM, and PenCom respectively",
  },
];

export const FIIO_OFFERINGS = [
  "Unique interest rates on products — fixed deposits, ledger accounts for investment under fixed deposits, current accounts",
  "Payment solutions — virtual accounts, online banking",
  "Fund the bank (deposit mobilization from FI/IO clients)",
  "Manage relationships with international organizations",
];

// Your actual FIIO unit roster.
export const FIIO_TEAM = [
  { name: "Mrs Ijeoma", role: "Head of Unit" },
  { name: "Mr Laj", role: "Deputy Head of Unit — also owns Asset Management" },
  { name: "Praise", role: "Fintechs" },
  { name: "Folakemi", role: "Correspondent Banks & Mortgages" },
  { name: "Ini", role: "Insurance" },
  { name: "Lara", role: "Customer support for FIIO" },
  { name: "Favour (JJ)", role: "Customer support for FIIO" },
  { name: "Tumininu", role: "Executive Trainee (you)", highlight: true },
  { name: "Emmanuel", role: "Executive Trainee" },
];

export const BRANCH_ROLES = ["CSM", "Head Teller", "CSU"];

export const OTHER_SEGMENT_CRITERIA = [
  {
    name: "Global Corporates / Multinationals",
    points: [
      "Parent-level HQ outside Africa",
      "Non-FI & Non-IO business type",
      "Global sales over $500 Million",
      "Over 50% of global sales generated outside Africa",
    ],
  },
  {
    name: "Regional Corporates",
    points: ["HQ in Sub-Saharan Africa, operations across Africa", "Regional coordination of operations and decisions"],
  },
  {
    name: "High Value Local Corporates",
    points: ["HQ in Nigeria", "Yearly sales over $50.0 Million"],
  },
  {
    name: "Energy Assets/Recovery",
    points: ["Specialised: upstream, mid-stream, downstream oil & gas (GC & RC)", "General Recovery"],
  },
];

export const LOAN_PORTFOLIO = [
  { sector: "Oil and Gas", pct: 39 },
  { sector: "Manufacturing", pct: 15 },
  { sector: "Agriculture, Forestry & Fishing", pct: 13 },
  { sector: "Public Utilities", pct: 6 },
  { sector: "Information & Communication", pct: 6 },
  { sector: "General Commerce", pct: 6 },
  { sector: "Power and Energy", pct: 4 },
  { sector: "Construction", pct: 4 },
  { sector: "Waste Management", pct: 3 },
  { sector: "Finance & Insurance", pct: 1 },
  { sector: "Transportation & Storage", pct: 1 },
  { sector: "Mining & Quarrying", pct: 1 },
];

export const STRATEGY_FOCUS = [
  {
    title: "Client Focus",
    points: [
      "Value chain focus — FMCG, Oil Service companies, Telecoms",
      "Deepen share of wallet of existing clients",
      "Improve collaboration with Nedbank to on-board South African clients in Nigeria",
    ],
  },
  {
    title: "Product Focus",
    points: [
      "Cash — migrate clients to digital payment/collection platforms via fintechs (Flutterwave, D'Local, etc.)",
      "Trade — grow on-balance-sheet trade assets, pursue AfCFTA, single sales hub onboarding",
      "FX — hedging products to reduce Naira devaluation risk for clients",
    ],
  },
  {
    title: "Sales Focus",
    points: ["Value Chain model implementation", "Supplier chain/dealer finance to expand share of wallet", "Credit default insurance for credit enhancement"],
  },
  {
    title: "Service Focus",
    points: ["Pro-active calling plan for priority clients", "Strive for 'Bank of Choice' status and strategic adviser role"],
  },
  {
    title: "Portfolio Focus",
    points: ["Enhance risk origination & compliance culture", "Reduce Oil & Gas concentration over time"],
  },
];

export const MUST_WIN_BATTLES = [
  {
    title: "Enhanced Revenue Momentum",
    points: ["Short-term self-liquidating trade loans", "Value chain opportunities with Commercial Bank (CMB)", "New episodic transactions in Investment Banking & Corporate Finance"],
  },
  {
    title: "Collections / Recoveries",
    points: ["Aggressively pursue past due obligations (PDO)", "Wind down Oil & Gas concentration selectively"],
  },
  {
    title: "New Good Loan Formation",
    points: ["New credit within ORR 1–6 range", "Credit enhancement to reduce on-boarded risk", "Diversify credit portfolio"],
  },
  {
    title: "Limits to New NPL Formation",
    points: ["Robust covenant monitoring & risk triggers", "Early identification of weak credits", "Periodic credit documentation review"],
  },
];

export const CASH_MANAGEMENT = [
  { area: "Payments", detail: "Electronic domestic/international payments; ERP integration for straight-through processing" },
  { area: "Receivables", detail: "Collections via branch, Internet (BankCollect), and eBillsPAY" },
  { area: "Liquidity Management", detail: "Automated sweeping to maximise surplus liquidity and yields" },
  { area: "Digital Solutions", detail: "Ecobank Pay (QR/USSD), POS card payments, Ecobank Omni (corporate e-banking)" },
];

export const TRADE_FACILITATION_STAKEHOLDERS = [
  { category: "Importers", examples: "Manufacturers, traders, middlemen, government agencies" },
  { category: "Exporters", examples: "Overseas equipment manufacturers, refineries, middlemen, traders" },
  { category: "Banks", examples: "Local banks, correspondent banks, central banks" },
  { category: "Insurance Providers", examples: "Insurance companies and brokers" },
  { category: "Logistics Companies", examples: "Shipping companies, freight forwarders, transporters" },
  { category: "Regulatory Agencies", examples: "Customs, regulatory bodies, chambers of commerce, trade unions, inspection agencies" },
  { category: "Independent Financiers", examples: "Factors, forfaiters, investment banks, warehouse owners" },
  { category: "Export Credit Agencies", examples: "NEXIM, US EXIM, UK Export Finance" },
];

// Your actual Nigeria CB organogram — useful for knowing who's who.
export const NIGERIA_CB_ORG = {
  businessHead: "Segun Anjorin",
  headCEPG: "Olakunle Lowo",
  sectorHeads: [
    { sector: "FMCG Manufacturing", head: "Dele Alabi" },
    { sector: "FMCG Food, Beverages & AA", head: "Michael Oyeyiola" },
    { sector: "Financial Institution / International Org.", head: "Ijeoma Ezeanya", highlight: true, note: "Your sector — and your supervisor" },
    { sector: "Energy Assets/Recovery", head: "Kayode Agbalaja" },
    { sector: "Telecoms, Media & Tech", head: "Francis Zakari" },
    { sector: "FCT and North", head: "Oluwatobi Emeke" },
  ],
};

export const GROUP_CIB_ORG = {
  geCIB: "Michael Larbie",
  underGroupHeadCB: ["GH, Regional Corporate", "GH, Global Corporate", "GH, FI/IO", "Regional CB Heads", "GH, Corporate Finance"],
  peers: ["Cash Mgt", "Trade", "Treasury", "Capital Markets & Asset Management"],
};

// The actual FIIO products your unit deals with — distinct from the
// deposit/payment offerings above. Learned firsthand on the job.
export const FIIO_PRODUCTS = [
  {
    code: "PLX",
    name: "Interbank Placements",
    def: "Placing or accepting deposits with/from other banks (including correspondent banks) for a fixed tenor at an agreed rate.",
    examples: "Short-term interbank deposits with correspondent banks",
  },
  {
    code: "CKU",
    name: "Contingency Financing",
    def: "Off-balance-sheet commitments where the bank guarantees a client's obligation to a third party, only paying out if the client fails to perform.",
    examples: "Guarantees, Counter-guarantees",
  },
  {
    code: "PSR",
    name: "Pre-Settlement Risk",
    def: "Counterparty credit risk on derivative/treasury instruments — the risk a counterparty defaults before a contract settles.",
    examples: "Swaps, Spots, Forwards, Repos",
  },
];

// Core recurring work deliverables for the role.
export const CORE_DELIVERABLES = [
  "Credit Approval Memorandums (CAMs) for PLX, CKU, and PSR facilities",
  "Reports",
  "Cashflow projections",
];
