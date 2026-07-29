// Condensed from the uploaded "Ecobank Finance in Global Market — Study
// Guide" (Entry Level Training Programme). Source: Section 2 (Detailed
// Study Notes), Section 3 (Revision Tables), and Section 11 (Cheat Sheet).

export const STUDY_TOPICS = [
  {
    id: "trade-theory",
    title: "1. International Trade Theory",
    definition:
      "Trade Finance = the financing mechanism that lets buyers and sellers, domestically and internationally, complete trade transactions through banks.",
    points: [
      "Mercantilism (oldest theory): a nation's wealth = its stock of gold/silver; wants a trade surplus, high tariffs on imports, state control of the economy.",
      "Absolute Advantage (Adam Smith): a country produces at a lower actual cost than another. Trade isn't always mutually beneficial — only the advantaged country necessarily gains.",
      "Comparative Advantage (David Ricardo): a country produces at a lower opportunity cost. Trade is ALWAYS mutually beneficial — a country can hold comparative advantage even without absolute advantage.",
      "Nigeria's FX enabling laws: the Foreign Exchange (Monitoring & Misc. Provisions) Act 1995, and BOFIA 1991 (as amended) — which empowers the CBN to license Authorised Dealers.",
      "Authorised Dealers in Nigeria: Banks, Bureau De Change (BDC), and Authorised Buyers (e.g. airlines, hotels).",
    ],
    examTip: "Mercantilism = GOLD + SURPLUS EXPORTS + STATE CONTROL. Comparative Advantage is always mutually beneficial even without Absolute Advantage — a common trick question.",
  },
  {
    id: "fx-policy",
    title: "2. Foreign Exchange Policy & Control",
    definition:
      "The CBN formulates and implements Nigeria's FX policy on behalf of the Federal Government, communicated via annual guidelines and circulars.",
    points: [
      "Four bank functions in trade: (1) buy/sell/lend FX, (2) collect & transfer funds, (3) documentary credits/collections/guarantees, (4) status enquiries & policy information.",
      "Key rule: all FX buyers MUST go through Authorised Dealers — direct purchase outside this channel is illegal.",
      "CBN stopped FX sales to BDCs on 27 July 2021, citing illegal FX trading, speculative trading, and money laundering.",
      "Round Tripping = buying FX at official rates and reselling at black-market rates (a malpractice CBN actively polices).",
      "Capital Flight = illegal movement of capital out of Nigeria.",
    ],
    examTip: "Know the reasons CBN cut BDC FX access — a frequently tested policy fact.",
  },
  {
    id: "trade-documents",
    title: "3. Trade Documents, Policies & Regulations",
    definition:
      "Four categories of trade documents: Commercial (invoices, certificates), Insurance (policies, cover notes), Transport (bills of lading, airway bills), and Financial (bills of exchange, cheques).",
    points: [
      "Bill of Lading (B/L): a receipt, evidence of the carriage contract, AND title to the goods — it's 'quasi-negotiable'. A Seaway Bill and Airway Bill are NOT title documents and NOT negotiable — a classic exam trap.",
      "Clean B/L = goods received in good order, no defects noted. Dirty/Claused B/L = defects noted on the document.",
      "Nigeria-specific forms: Form M (imports), Form NXP (exports), Form A (invisible/service payments), Form NCX (non-commercial exports), Form Q (SME imports, up to USD 20,000/quarter).",
      "Form M must be registered before placing an import order, via the CBN/NCS e-Form M portal (trade.gov.ng). Goods imported under Form M must be insured to 110% of value — a frequently tested figure.",
      "ICC publications: UCP600 → Letters of Credit. URC522 → Bills for Collection. ISP98 → Standby LCs. URDG758 → Bank Guarantees. ISBP745 → document examination standards.",
      "Incoterms 2020 (11 terms): obligation on the seller increases from EXW (minimum) to DDP (maximum) — EXW, FCA, FAS, FOB, CFR, CIF, CPT, CIP, DAP, DPU, DDP.",
      "CIF vs CFR: both have the seller pay freight to destination; CIF additionally requires the seller to arrange insurance (typically CIF value + 10%). That's the only difference.",
    ],
    examTip: "Memory aid for Incoterms order: 'Every Friendly Fish Finds Cost Correct Cuts Clinching Deals Done Daily' = EXW, FCA, FAS, FOB, CFR, CIF, CPT, CIP, DAP, DPU, DDP.",
  },
  {
    id: "payment-methods",
    title: "4. International Payment Methods (LC, Collections, Guarantees)",
    definition:
      "Foundational principle: banks deal with DOCUMENTS, not goods. If documents comply, the bank must pay — even if the underlying goods are defective.",
    points: [
      "Four payment methods ranked by security: Letter of Credit (most secure, bank-guaranteed) > Bills for Collection (moderate) > Advance Payment (risky for buyer, ~70% of Nigerian imports use it) > Open Account (NOT allowed in Nigeria).",
      "LC parties: Applicant (buyer), Beneficiary (seller), Issuing Bank, Advising/Notifying Bank, Confirming Bank (adds its own guarantee), Negotiating Bank.",
      "All LCs are irrevocable under UCP600 — revocable LCs no longer exist in practice.",
      "5 working days: the maximum time a negotiating or issuing bank has to examine documents and determine compliance under UCP600 Article 14. Non-compliant documents are 'discrepant'.",
      "Bills for Collection: Documents against Payment (D/P) is NOT allowed in Nigeria; Documents against Acceptance (D/A) IS permitted.",
      "Guarantee vs Standby LC: a Guarantee is independent of the underlying transaction and governed by URDG758; an SBLC is a US-rooted instrument governed by UCP600 — both only pay out if the counterparty fails to perform.",
      "Four types of guarantees: Tender (bid security), Performance (delivery security), Advance/Down-Payment (protects buyer's upfront payment), Payment (protects seller).",
    ],
    examTip: "A Confirmed LC adds a second bank's payment guarantee — higher security, higher cost. Know all LC types: Sight, Usance/Deferred, Transferable, Back-to-Back, Standby, Red Clause, Green Clause, Revolving.",
  },
  {
    id: "exports-capital",
    title: "5. Exports, Invisible Trade & Capital Importation",
    definition:
      "Export proceeds must be repatriated to Nigeria within 90 days of shipment — one of the most heavily tested figures in trade finance.",
    points: [
      "Export types: Oil, Non-Oil, and Non-Commercial (gifts, personal effects — uses Form NCX, no payment expected).",
      "Before shipment: NXP Form, Pro-Forma Invoice, NEPC Registration Certificate. After shipment: Clean Certificate of Inspection, shipping documents.",
      "Invisible transactions (service payments, not goods) require Form A — covers business/medical travel, external loan repayment, foreign staff remuneration, consultancy fees, and more, each with its own document checklist.",
      "Capital Importation Certificate (CCI): issued to a foreign investor to acknowledge investment in Nigeria — for cash equity investment, must be issued within 24 hours.",
      "Dividend/profit repatriation requires: approved Form A, audited accounts, board/AGM resolution, tax evidence, and proof of the original capital importation.",
    ],
    examTip: "Don't confuse the two headline deadlines: 90 days to repatriate EXPORT proceeds vs. 60 days to submit shipping documents under Form Q (SME imports).",
  },
];
