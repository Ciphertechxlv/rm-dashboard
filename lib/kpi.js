// FIIO KPI structure (the FI part — IO is mainly based in Abuja). Your
// unit's KPI is divided into 5 sections; only some have been discussed
// so far. Numbers below are as given — where your notes had two slightly
// different framings (e.g. whether Fees & Commission is its own section
// or a Revenue sub-component), both are preserved rather than forced
// into false precision.

export const KPI_SECTIONS = [
  {
    id: 1,
    title: "Deposit Mobilisation KPI",
    tag: "Financial KPI",
    target: "₦1.2 trillion (2026)",
    points: [
      "Subdivided into: CASA budget ₦297 billion, and Term Deposits ₦861 billion",
      "Total deposits embeds term deposits within it",
      "This carries the biggest share of the unit's work",
      "FIIO is the major unit that funds the bank — CASA growth is the core lever",
      "In your weekly meeting: highlight which customers you're expecting CASA from, and the strategy to mobilise it",
    ],
  },
  {
    id: 2,
    title: "Revenue KPI",
    tag: "Financial KPI",
    target: "₦24.2 billion (2026)",
    points: [
      "Built from three components discussed so far: NRFF, Fees & Commission, and FICC",
      "NRFF (Net Revenue From Funds) — the spread between the rate you bring a deposit in at and the Fund Transfer Price (FTP). You must bring deposits in BELOW the FTP rate to generate a positive spread.",
      "FTP is currently around 9.39% for USD — flagged in your notes as needing confirmation, treat as indicative until verified.",
      "Absolute offers — for customers exempted from paying tax by government, e.g. PFAs (Pension Fund Administrators) and AFC.",
      "Gross rate vs Net rate — gross includes tax deduction and other deductibles; net is after those.",
      "Always track: inflation rate, OMO, treasury bill activity, capital markets, money markets, and news on your customers — especially when they're doing well.",
      "Fees & Commission carries its own explicit target of ₦6.6 billion within this.",
    ],
  },
  {
    id: 3,
    title: "Account Opening Target",
    tag: "Growth KPI",
    target: "24 corporate accounts (2026)",
    points: [
      "At least 1 new corporate account per RM, per month",
    ],
  },
  {
    id: 4,
    title: "Fees & Commission",
    tag: "Revenue component",
    target: "₦6.6 billion (2026)",
    points: [
      "Relay message fees — earned when conducting a relay message for a bank that doesn't have an RMA (Relationship Management Application) exchange with the other bank",
      "Interbank Guarantee fees",
      "Deutsche Bank is Ecobank's main payment bank",
      "Telex transfer charges — 0.5% of the amount transferred",
      "FICC (Fixed Income, Currencies & Commodities) — fees/income generated from treasury desk activities",
    ],
  },
  {
    id: 5,
    title: "Not Yet Discussed",
    tag: "Pending",
    target: "—",
    points: [
      "The 5th KPI section hasn't been covered yet. Come back and update this once you learn it — don't let this page go stale.",
    ],
  },
];

export const MACRO_QUICK_FACTS = [
  { label: "MPR", value: "26.5%" },
  { label: "CRR", value: "45%" },
  { label: "LRR (Liquidity Ratio)", value: "30%" },
  { label: "Inflation Rate", value: "15.91%" },
  { label: "USD FTP (indicative)", value: "~9.39% — unconfirmed, internal rate" },
];

export const DAY_COUNT_NOTES = [
  "A year in the dollar market is conventionally treated as 360 days (Actual/360).",
  "A leap year is 366 days.",
  "Naira-denominated deals more commonly use Actual/365 — confirm which basis applies per deal.",
];
