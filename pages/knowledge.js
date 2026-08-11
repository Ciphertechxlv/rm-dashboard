import Glossary from "../components/Glossary";

const TOPICS = [
  {
    title: "Nostro & Vostro Accounts",
    body:
      "The core mechanics of correspondent banking. A Nostro account is your bank's account held abroad in foreign currency. A Vostro account is the correspondent's account held with your bank in local currency.",
    points: [
      "Nostro = 'ours, with them' — how Ecobank accesses foreign currency abroad",
      "Vostro = 'theirs, with us' — how a correspondent bank accesses Naira liquidity through Ecobank",
      "Reconciliation of these accounts is a routine but critical FIIO operational task",
    ],
  },
  {
    title: "SWIFT Messaging",
    body:
      "The global network correspondent banks use to instruct and confirm payments. Nearly every cross-border transaction your unit touches passes through it.",
    points: [
      "MT103 — customer payment instruction",
      "MT202 — bank-to-bank transfer",
      "Industry migration underway from MT to the richer ISO 20022 (MX) format",
    ],
  },
  {
    title: "DFI Co-Financing & Guarantees",
    body:
      "Development Finance Institutions often don't just lend — they provide guarantee or risk-sharing structures that make a deal viable for a commercial bank that otherwise couldn't take the full exposure.",
    points: [
      "AFC — African-led, infrastructure-focused, strong credit rating",
      "IFC — World Bank Group's private-sector financing arm",
      "EBRD — expanding footprint beyond its traditional Eastern Europe/Central Asia base",
    ],
  },
  {
    title: "Fintech Licensing Categories (CBN)",
    body:
      "What a fintech can legally do depends entirely on its CBN licence category — check this before assuming scope of activity.",
    points: [
      "Mobile Money Operator (MMO) — e-wallet/mobile money services",
      "Payment Service Bank (PSB) — deposit-taking with restrictions, no lending",
      "PSSP/Switching — payment processing, switching, aggregation",
    ],
  },
  {
    title: "NBFI Regulators",
    body:
      "Three different regulators oversee the three main NBFI types you'll deal with — know which applies before onboarding.",
    points: [
      "NAICOM — regulates insurance companies (watch: solvency ratio)",
      "SEC — regulates asset managers and capital market operators",
      "PenCom — regulates Pension Fund Administrators and Custodians",
    ],
  },
  {
    title: "IO & Embassy Account Considerations",
    body:
      "International organizations and diplomatic missions carry unique documentation and compliance considerations beyond standard corporate KYC.",
    points: [
      "Mandate letters and authorised signatory documentation are essential",
      "Relationship value is usually deposits, FX, and payments — not credit risk",
      "Global IOs: HQ outside Africa, presence in several African countries. Regional IOs: HQ in Africa.",
    ],
  },
];

const LINKS = [
  { label: "CBN — Monetary Policy Decisions", href: "https://www.cbn.gov.ng/MonetaryPolicy/decisions.html" },
  { label: "CBN — Circulars", href: "https://www.cbn.gov.ng/Documents/circulars.html" },
  { label: "CBN — Live Monetary Policy Rate", href: "https://www.cbn.gov.ng/rates/mnymktind.html" },
  { label: "CBN — Live Inflation Rate", href: "https://www.cbn.gov.ng/rates/inflrates.html" },
  { label: "CBN — Development Finance", href: "https://www.cbn.gov.ng/Documents/DevelopmentFinance.html" },
  { label: "NAICOM (Insurance Regulator)", href: "https://naicom.gov.ng/" },
  { label: "SEC Nigeria (Asset Managers)", href: "https://sec.gov.ng/" },
  { label: "PenCom (Pension Regulator)", href: "https://www.pencom.gov.ng/" },
  { label: "Africa Finance Corporation (AFC)", href: "https://www.africafc.org/" },
  { label: "IFC — World Bank Group", href: "https://www.ifc.org/" },
  { label: "EBRD", href: "https://www.ebrd.com/" },
  { label: "ECOWAS", href: "https://ecowas.int/" },
  { label: "Bank of Industry Nigeria", href: "https://www.boi.ng/" },
];

export default function Knowledge() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Reference</h1>
        <p>Core FIIO concepts and the real regulators/institutions you'll deal with.</p>
      </div>

      <Glossary />

      <div className="panel">
        <div className="panel-head">
          <h2>Real resources</h2>
        </div>
        <div className="kb-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="kb-grid">
        {TOPICS.map((t) => (
          <div className="panel kb-card" key={t.title}>
            <h3>{t.title}</h3>
            <p>{t.body}</p>
            <ul>
              {t.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
