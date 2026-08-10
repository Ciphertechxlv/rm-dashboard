import { useState } from "react";
import { INSTITUTION_DIRECTORY, KNOWN_CONTACTS } from "../lib/institutionDirectory";

export default function InstitutionDirectory() {
  const [query, setQuery] = useState("");
  const q = query.toLowerCase();

  const filtered = INSTITUTION_DIRECTORY.map((group) => ({
    ...group,
    items: group.items.filter((item) => item.toLowerCase().includes(q)),
  })).filter((group) => group.items.length > 0);

  const total = INSTITUTION_DIRECTORY.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <main className="page">
      <div className="page-header">
        <h1>Institution Directory</h1>
        <p>{total} real-world institutions across your FIIO categories, for research and prospecting reference.</p>
      </div>

      <div className="panel">
        <p className="empty-state">
          <strong>This is not a confirmed Ecobank client list.</strong> It's a reference set of
          real institutions that plausibly fit each category, useful for prospecting and research
          context. Nothing here has been verified as an actual Ecobank Nigeria relationship —
          always confirm independently before treating any name as a client or counterparty.
        </p>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Known Contacts</h2>
          <span className="timestamp">Firsthand-confirmed — higher confidence than the directory below</span>
        </div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Institution</th><th>Contact</th><th>Note</th></tr></thead>
            <tbody>
              {KNOWN_CONTACTS.map((c) => (
                <tr key={c.institution}>
                  <td style={{ color: "var(--blue)", fontWeight: 600 }}>{c.institution}</td>
                  <td>{c.contact || "—"}</td>
                  <td>{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel">
        <input
          className="unlock-input"
          style={{ textAlign: "left", letterSpacing: "normal", fontSize: "0.92rem", textTransform: "none" }}
          placeholder="Search institutions — e.g. Citibank, OPay, AFC…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {filtered.map((group) => (
        <div className="panel" key={group.category}>
          <div className="panel-head">
            <h2>{group.category}</h2>
            <span className="timestamp">{group.items.length} {group.note && `· ${group.note}`}</span>
          </div>
          <div className="subunit-grid">
            {group.items.map((item) => (
              <div className="subunit-tile" key={item}>{item}</div>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <p className="empty-state">No institutions match "{query}".</p>
      )}
    </main>
  );
}
