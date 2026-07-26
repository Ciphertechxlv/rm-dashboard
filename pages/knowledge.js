const TOPICS = [
  {
    title: "Letter of Credit (LC)",
    body:
      "A bank's promise to pay the exporter once documents proving shipment match the LC terms exactly. Protects both sides: the exporter gets a bank's word instead of the buyer's, and the importer only pays once shipment is proven.",
    points: [
      "Governed by UCP 600 (and eUCP for electronic docs)",
      "Confirmed LC = a second bank also guarantees payment — used when the issuing bank's country risk is high",
      "Common trip-up: document discrepancies (wrong dates, mismatched descriptions) — this is where deals stall",
    ],
  },
  {
    title: "Bills for Collection",
    body:
      "Exporter ships goods and sends shipping documents through banks to the importer's bank, which releases them only against payment (D/P) or acceptance of a bill of exchange (D/A). Cheaper than an LC but less secure — no bank payment guarantee.",
    points: [
      "D/P: importer must pay before getting the documents needed to clear goods",
      "D/A: importer accepts a bill promising to pay later, then gets the documents",
      "Governed by ICC's URC 522",
    ],
  },
  {
    title: "Bank Guarantees",
    body:
      "The bank promises to pay a beneficiary if your client fails to perform — used to win contracts (bid bonds), guarantee performance, or secure advance payments.",
    points: [
      "Common in government/NNPC contract bidding",
      "Governed by URDG 758",
      "Ties up the client's credit line — factor this into your risk conversations",
    ],
  },
  {
    title: "Invoice Discounting / Receivables Finance",
    body:
      "The bank advances cash against unpaid invoices so a client doesn't have to wait 30–90 days for a buyer to pay. Useful for distributors and suppliers to large corporates (FMCG, manufacturing).",
    points: [
      "Recourse vs non-recourse: who bears the loss if the buyer never pays",
      "Works well for value-chain financing (anchor buyer + many small suppliers)",
    ],
  },
  {
    title: "Incoterms (2020)",
    body:
      "Standard trade terms defining who pays for shipping, insurance, and risk at each stage. You'll see these on every commercial invoice and LC.",
    points: [
      "EXW — buyer takes on almost everything from the seller's door",
      "FOB — seller's risk ends once goods are on the ship",
      "CIF — seller pays freight + insurance to destination port",
      "DDP — seller delivers, duty paid, all the way to buyer's door",
    ],
  },
  {
    title: "UCP 600 — the LC rulebook",
    body:
      "The ICC's Uniform Customs and Practice for Documentary Credits. Nearly every LC references it. Know the core principle: banks deal in documents, not goods — if the paperwork matches, the bank pays, even if the goods themselves have a problem.",
    points: [
      "Doctrine of strict compliance: documents must match the LC exactly",
      "Banks have 5 banking days to examine documents and flag discrepancies",
    ],
  },
];

const LINKS = [
  { label: "CBN — Circulars", href: "https://www.cbn.gov.ng/documents/circulars.asp" },
  { label: "CBN — Trade & Exchange", href: "https://www.cbn.gov.ng/tradeexchange/" },
  { label: "NEXIM Bank", href: "https://neximbank.com.ng/" },
  { label: "ICC — UCP 600 & Trade Rules", href: "https://iccwbo.org/business-solutions/trade-finance/" },
  { label: "AfCFTA Secretariat", href: "https://au-afcfta.org/" },
  { label: "Incoterms 2020 Overview", href: "https://iccwbo.org/business-solutions/incoterms-rules/" },
  { label: "CITF Certification (LIBF)", href: "https://www.libf.ac.uk/study/qualifications/certificate-in-international-trade-and-finance" },
  { label: "CDCS Certification (IFS/BAFT)", href: "https://www.ifsuniversity.ac.uk/qualifications/professional-qualifications/cdcs" },
];

export default function Knowledge() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Reference</h1>
        <p>Quick refreshers for the concepts clients and colleagues assume you already know cold.</p>
      </div>

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
