export const TASK_GROUPS = [
  {
    id: "daily",
    title: "Daily",
    resetsDaily: true,
    items: [
      "Check today's interest/FX rates before quoting any client — always confirm current rates first",
      "Check fixed deposits and ledger accounts maturing today or this week across all sub-units",
      "Review correspondent bank (nostro/vostro) obligations due today",
      "Check for DFI facility drawdowns or repayments due today",
      "Call at least 2–3 clients for relationship check-ins or updates",
      "Review any virtual account / online banking issues flagged by customer support (Lara/Favour)",
    ],
  },
  {
    id: "weekly",
    title: "Weekly",
    resetsDaily: false,
    items: [
      "Reconcile correspondent banking relationships (Deutsche Bank, Citi, Access Bank UK, Absa, Nedbank, etc.)",
      "Follow up with branch CSM / Head Teller / CSU on account servicing for FIIO clients",
      "Check in with fintech clients (OPay, Kuda, Moniepoint, etc.) on virtual account / payment volumes",
      "Review NBFI clients (asset managers, insurers, pension funds) for renewal or cross-sell opportunities",
      "Check embassy / IO / ECOWAS / BOI relationship status and any funding needs",
    ],
  },
  {
    id: "monthly",
    title: "Monthly / Recurring",
    resetsDaily: false,
    items: [
      "Review mortgage-sector relationships (Jubilee Life, FT Mortgage, Abbey Mortgage, etc.)",
      "Full portfolio maturity ladder review — all fixed deposits/ledger accounts across sub-units",
      "Rate competitiveness review — compare offered rates vs market to retain FI/DFI deposits",
      "Sector performance check-in with Mrs Ijeoma / Mr Laj",
    ],
  },
];

// Who to loop in when something comes up, by sub-unit.
export const TEAM_ROUTING = [
  { area: "Correspondent Banks", contact: "Folakemi" },
  { area: "Fintechs", contact: "Praise" },
  { area: "Insurance", contact: "Ini" },
  { area: "Mortgages", contact: "Folakemi" },
  { area: "Asset Management", contact: "Mr Laj (Deputy Head of Unit)" },
  { area: "Customer support (virtual accounts, online banking)", contact: "Lara or Favour (JJ)" },
  { area: "Escalation / sign-off", contact: "Mrs Ijeoma (Head of Unit)" },
];

export const BRANCH_CONTACTS = ["CSM", "Head Teller", "CSU"];
