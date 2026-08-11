// Correspondent banking & payments glossary. Definitions are written to
// match generally accepted industry usage (ICC/Wolfsberg Group/SWIFT
// terminology), kept plain and practical rather than textbook-dense.
export const GLOSSARY = [
  {
    term: "Nostro Account",
    phrase: "\"Our account, with you.\"",
    def: "An account your bank holds with a foreign bank, denominated in that foreign currency. Used to settle transactions abroad without needing your own branch there.",
  },
  {
    term: "Vostro Account",
    phrase: "\"Your account, with us.\"",
    def: "The same account, described from the other bank's point of view — it's the account they hold for you, on their books, in their local currency.",
  },
  {
    term: "Loro Account",
    phrase: "\"Their account, with you.\"",
    def: "Used when a third party refers to an account that belongs to someone else, held at a bank you're discussing. Rarely used directly between the two banks involved — more of an observer's term.",
  },
  {
    term: "Correspondent Bank",
    def: "A bank that provides services (like holding deposits, processing payments) on behalf of another bank, usually in a different country. It's the \"host\" in the relationship.",
  },
  {
    term: "Respondent Bank",
    def: "The bank receiving those services — the \"guest\" whose funds sit with the correspondent.",
  },
  {
    term: "SWIFT / BIC Code",
    def: "A unique ID code for a bank, used to route international payment instructions through the SWIFT messaging network. SWIFT is the network; BIC is the code itself.",
  },
  {
    term: "MT103",
    def: "The standard SWIFT message type for a customer payment instruction — one bank telling another to pay a named beneficiary.",
  },
  {
    term: "MT202",
    def: "The standard SWIFT message type for a bank-to-bank (financial institution) transfer, often used to cover an MT103 payment.",
  },
  {
    term: "IBAN",
    def: "A standardized international account number format that identifies a specific customer account, so payments land correctly across borders. Different from a SWIFT/BIC code, which identifies the bank, not the account.",
  },
  {
    term: "RTGS (Real-Time Gross Settlement)",
    def: "A settlement system where each transaction is settled individually and immediately, rather than batched.",
  },
  {
    term: "Net Settlement",
    def: "The opposite approach to RTGS: transactions are accumulated and offset against each other, with only the net difference settled periodically (e.g. end of day).",
  },
  {
    term: "Clearing vs Settlement",
    def: "Clearing is confirming and matching the details of a transaction; settlement is the actual movement of funds that finalises it. Clearing happens first, settlement completes the process.",
  },
  {
    term: "Nostro Reconciliation",
    def: "The process of checking that your bank's internal record of a nostro account matches the statement sent by the correspondent bank holding it. Mismatches can flag errors, delays, or fraud.",
  },
  {
    term: "Mirror Account",
    def: "An internal ledger account that reflects the balance of a nostro account, used to help with reconciliation and internal tracking.",
  },
  {
    term: "Due From Banks",
    def: "A balance sheet item representing money owed to your bank by other banks — essentially the accounting side of nostro balances.",
  },
  {
    term: "Due To Banks",
    def: "The reverse: money your bank owes to other banks — the accounting side of vostro balances.",
  },
  {
    term: "Overdraft Facility (on Nostro)",
    def: "A pre-arranged credit line allowing a nostro account to go negative temporarily, since real-time cash flows don't always line up perfectly.",
  },
  {
    term: "Value Date",
    def: "The date on which funds from a transaction actually become available/effective — not necessarily the date the instruction was sent or processed.",
  },
  {
    term: "Cut-off Time",
    def: "The daily deadline by which a payment instruction must be received to be processed (and settled) that same business day. Missing it usually pushes value date to the next day.",
  },
  {
    term: "Standard Settlement Instructions (SSI)",
    def: "Pre-agreed, on-file instructions specifying exactly which account/correspondent path a counterparty's payments should be routed through — reduces errors and delays on recurring transactions.",
  },
  {
    term: "De-risking",
    def: "When a bank terminates or restricts correspondent relationships (often in a country/sector) to reduce compliance/AML risk exposure, rather than manage it. A real, ongoing challenge for African correspondent banking access.",
  },
  {
    term: "Wolfsberg CBDDQ",
    def: "The Wolfsberg Group's Correspondent Banking Due Diligence Questionnaire — an industry-standard form used to assess a prospective or existing correspondent bank's AML/compliance standing before establishing or renewing the relationship.",
  },
  {
    term: "RMA (Relationship Management Application)",
    def: "The SWIFT service that authorises message exchange between two banks — without an active RMA, banks can't send certain SWIFT messages directly to each other and may need a relay through a third bank instead. Note: your notes referred to this as \"Relationship Management Agency\" — the standard SWIFT/industry term is \"Relationship Management Application.\"",
  },
  {
    term: "Relay Message",
    def: "A payment message routed through an intermediary bank because the originating and receiving banks don't have a direct RMA relationship with each other.",
  },
  {
    term: "FTP (Funds Transfer Pricing)",
    def: "The internal rate a bank's treasury charges/credits business units for funds — the benchmark a deposit's rate is compared against to determine whether it's profitable.",
  },
  {
    term: "NRFF (Net Revenue From Funds)",
    def: "The spread/profit earned on a deposit — the difference between the FTP rate and the (lower) rate actually offered to the depositor, applied to the principal and tenor.",
  },
  {
    term: "CASA",
    def: "Current Account Savings Account — low-cost deposits (current + savings accounts) that don't carry a fixed term, as opposed to term/fixed deposits.",
  },
  {
    term: "Absolute Offer",
    def: "A rate offer made to a customer who is exempt from paying tax on the income (e.g. Pension Fund Administrators, or DFIs like AFC) — since no tax applies, the quoted rate doesn't need a tax-adjustment built in.",
  },
  {
    term: "Gross Rate vs Net Rate",
    def: "Gross rate includes tax and other deductions before they're applied. Net rate is what's left after tax and other deductibles are taken out — always confirm which one you're quoting or being quoted.",
  },
  {
    term: "Telex Transfer",
    def: "An electronic funds transfer instruction between banks. In your unit's fee structure, telex transfer charges are 0.5% of the amount transferred.",
  },
  {
    term: "FICC (Fixed Income, Currencies & Commodities)",
    def: "The treasury desk activities — trading and positions in bonds/fixed income, FX, and commodities — that generate a distinct fee/income line for the bank.",
  },
  {
    term: "Market Rate",
    def: "The rate at which banks actually take deposits and other products from customers — distinct from FTP, and driven by macroeconomic factors and competitive/funding pressure rather than internal treasury pricing.",
  },
  {
    term: "FAAC (Federation Account Allocation Committee)",
    def: "The Nigerian government body that meets monthly to distribute federally-collected revenue among Federal, State, and Local governments. When FAAC releases funds to a state, the bank handling that state's account can see a sudden inflow of liquidity — which can affect the deposit rate that bank is willing to offer.",
  },
];
