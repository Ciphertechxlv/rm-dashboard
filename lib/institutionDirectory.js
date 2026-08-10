// Real, firsthand-confirmed contacts and handlers — higher confidence
// than the illustrative directory below. Add to this as you confirm more.
export const KNOWN_CONTACTS = [
  { institution: "AIICO Capital", contact: "Taiwo", note: "Distinct entity from AIICO Insurance" },
  { institution: "Custodian Asset Management", contact: "Omolaja", note: "Part of Custodian Investment Plc group" },
  { institution: "Linkage Assurance", contact: "Kevin", note: "Handles the investment side" },
  { institution: "Mango Asset", contact: "Oyinkan", note: "" },
  { institution: "Financial Derivatives Company Limited", contact: "", note: "You handle confirmation of transfers, in addition to term deposits" },
];

// Reference directory of real-world institutions that fit each FIIO
// category — useful for prospecting/research context. This is NOT a
// confirmed Ecobank client list; nothing here has been verified as an
// actual Ecobank Nigeria relationship. Treat it as "the universe of
// institutions this unit type would plausibly deal with."
export const INSTITUTION_DIRECTORY = [
  {
    category: "Correspondent Banks",
    note: "Non-Nigerian, international institutions",
    items: [
      "Deutsche Bank", "Citibank", "JPMorgan Chase", "Bank of America", "HSBC",
      "Barclays", "Standard Chartered Bank", "BNP Paribas", "Société Générale",
      "Commerzbank", "UBS", "Access Bank UK", "Absa Group", "Nedbank",
      "Standard Bank Group", "FirstRand / FNB", "Investec", "Rand Merchant Bank",
      "Mitsubishi UFJ Financial Group", "Bank of China", "ICBC", "Wells Fargo",
      "BNY Mellon", "Crédit Agricole", "ING Bank",
    ],
  },
  {
    category: "Fintechs",
    note: "CBN-licensed, Nigerian",
    items: [
      "OPay", "Kuda Bank", "Moniepoint", "PalmPay", "Paga", "Flutterwave",
      "Paystack", "Carbon", "FairMoney", "Renmoney", "PiggyVest", "Cowrywise",
      "Chipper Cash", "Interswitch", "VFD Group / VBank", "Sparkle", "Eyowo",
      "Bamboo", "Trove Finance", "Risevest",
    ],
  },
  {
    category: "Insurance Companies",
    note: "NAICOM-regulated",
    items: [
      "AIICO Insurance", "Leadway Assurance", "AXA Mansard Insurance",
      "Custodian and Allied Insurance (part of Custodian Investment Plc group)",
      "Cornerstone Insurance", "NEM Insurance",
      "Mutual Benefits Assurance", "Sovereign Trust Insurance",
      "Consolidated Hallmark Insurance", "Prestige Assurance",
      "Regency Alliance Insurance", "Linkage Assurance", "Universal Insurance Company",
      "Law Union & Rock Insurance", "Niger Insurance", "FBNInsurance",
      "Zenith General Insurance", "Coronation Insurance", "Heirs Insurance",
      "WAPIC Insurance", "Sunu Assurance Nigeria", "Old Mutual Nigeria General Insurance",
    ],
  },
  {
    category: "Mortgage Institutions",
    note: "Primary Mortgage Banks",
    items: [
      "Jubilee Life Mortgage Bank", "FT Mortgage Bank", "Abbey Mortgage Bank",
      "Infinity Trust Mortgage Bank", "Platinum Mortgage Bank", "Refuge Mortgage Bank",
      "Brent Mortgage Bank", "Haggai Mortgage Bank", "Imperial Homes Mortgage Bank",
      "Gateway Mortgage Bank", "Living Trust Mortgage Bank", "Trustbond Mortgage Bank",
      "Union Homes Savings and Loans", "First Generation Mortgage Bank",
      "Cooperative Mortgage Bank",
    ],
  },
  {
    category: "Asset Management & Pension Companies",
    note: "SEC/PenCom-regulated",
    items: [
      "Stanbic IBTC Pension Managers", "ARM Pension Managers", "Leadway Pensure PFA",
      "Premium Pension Limited", "Sigma Pensions", "NLPC Pension Fund Administrators",
      "FCMB Pensions", "AXA Mansard Pensions", "Trustfund Pensions",
      "Norrenberger Asset Management", "ARM Investment Managers", "Chapel Hill Denham",
      "Stanbic IBTC Asset Management", "FBNQuest Asset Management",
      "Coronation Asset Management", "United Capital Asset Management",
      "Pensions Alliance (PAC) Asset Management", "CardinalStone Asset Management",
      "AIICO Capital", "Custodian Asset Management", "Mango Asset",
      "Financial Derivatives Company Limited",
    ],
  },
  {
    category: "International Organizations, DFIs & Embassies",
    note: "",
    items: [
      "ECOWAS", "Bank of Industry (BOI)", "Africa Finance Corporation (AFC)",
      "International Finance Corporation (IFC)",
      "European Bank for Reconstruction and Development (EBRD)",
      "African Development Bank (AfDB)", "World Bank (IBRD)", "UNDP", "UNICEF",
      "UNHCR", "World Health Organization (WHO)", "FAO", "UNFPA",
      "World Food Programme (WFP)", "US Embassy Abuja / US Consulate Lagos",
      "British High Commission", "French Embassy/Consulate", "German Embassy",
      "Chinese Embassy", "Canadian High Commission", "Netherlands Embassy",
      "EU Delegation to Nigeria", "USAID", "UK FCDO", "GIZ", "JICA",
      "KfW Development Bank", "Agence Française de Développement (AFD)",
      "Islamic Development Bank (IsDB)", "OPEC Fund for International Development",
    ],
  },
];
