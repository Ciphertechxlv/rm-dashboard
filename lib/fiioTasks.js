export const TASK_GROUPS = [
  {
    id: "daily",
    title: "Daily",
    resetsDaily: true,
    items: [
      "Log today's activities in the Daily Activity Log — for accountability and Monday's meeting",
      "Check today's interest/FX/CBN rates before quoting any client — always confirm current rates first",
      "Check fixed deposits and ledger accounts maturing today or this week across all sub-units",
      "Review correspondent bank (nostro/vostro) obligations due today",
      "Handle email confirmations for the accounts you support (Folakemi & Praise's clients, Mr Omolaja's confirmations) — supervised by Ini",
      "Check for DFI facility drawdowns or repayments due today",
      "Call at least 2–3 clients for relationship check-ins — with CASA mobilisation in mind",
      "Stay current on inflation, OMO, T-bills, capital/money market news, and news on your customers (check the Desk's live feed)",
      "Review any virtual account / online banking issues flagged by customer support (Lara/Favour)",
    ],
  },
  {
    id: "weekly",
    title: "Weekly",
    resetsDaily: false,
    items: [
      "Prep for Monday's 8am weekly meeting — review your Daily Activity Log from the past week, and your plan for the new week",
      "Reconcile correspondent banking relationships (Deutsche Bank, Citi, Access Bank UK, Absa, Nedbank, etc.)",
      "Follow up with branch CSM / Head Teller / CSU on account servicing for FIIO clients",
      "Check in with fintech clients (OPay, Kuda, Moniepoint, etc.) on virtual account / payment volumes",
      "Review NBFI clients (asset managers, insurers, pension funds) for renewal or cross-sell opportunities — factor in NRFF spread",
      "Check embassy / IO / ECOWAS / BOI relationship status and any funding needs",
      "Track progress toward this month's account-opening target (1 new corporate account)",
    ],
  },
  {
    id: "monthly",
    title: "Monthly / Recurring",
    resetsDaily: false,
    items: [
      "Review mortgage-sector relationships (Jubilee Life, FT Mortgage, Abbey Mortgage, etc.)",
      "Full portfolio maturity ladder review — all fixed deposits/ledger accounts across sub-units",
      "Rate competitiveness review — compare offered rates vs FTP/market to protect NRFF spread",
      "Sector performance check-in with Mrs Ijeoma / Mr Laj",
      "Check progress against the year's KPI targets — Deposit Mobilisation, Revenue, Account Opening, Fees & Commission (see the KPI page)",
    ],
  },
];

// Who to loop in when something comes up, by sub-unit ownership.
// For the confirmation/support routing specifically, see the FIIO Unit
// page's "Client Handling & Routing" table.
export const TEAM_ROUTING = [
  { area: "Correspondent Banks", contact: "Folakemi" },
  { area: "Fintechs", contact: "Praise" },
  { area: "Insurance", contact: "Ini" },
  { area: "Mortgages", contact: "Folakemi" },
  { area: "Asset Management", contact: "Mr Laj (Deputy Head of Unit) / Omolaja (Custodian Asset Mgmt)" },
  { area: "Customer support (virtual accounts, online banking)", contact: "Lara or Favour (JJ)" },
  { area: "Escalation / sign-off", contact: "Mrs Ijeoma (Head of Unit)" },
];

export const BRANCH_CONTACTS = ["CSM", "Head Teller", "CSU"];
