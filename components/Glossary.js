import { useState } from "react";
import { GLOSSARY } from "../lib/glossary";

export default function Glossary() {
  const [query, setQuery] = useState("");

  const filtered = GLOSSARY.filter((g) => {
    const q = query.toLowerCase();
    return g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q);
  }).sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>Correspondent Banking Glossary</h2>
        <span className="timestamp">{GLOSSARY.length} terms</span>
      </div>

      <input
        className="unlock-input"
        style={{ textAlign: "left", letterSpacing: "normal", fontSize: "0.92rem", marginBottom: 18, textTransform: "none" }}
        placeholder="Search terms — e.g. nostro, RTGS, de-risking…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="glossary-list">
        {filtered.map((g) => (
          <div className="glossary-item" key={g.term}>
            <div className="glossary-term">
              {g.term}
              {g.phrase && <span className="glossary-phrase">{g.phrase}</span>}
            </div>
            <div className="glossary-def">{g.def}</div>
          </div>
        ))}
        {filtered.length === 0 && <p className="empty-state">No terms match "{query}".</p>}
      </div>
    </div>
  );
}
