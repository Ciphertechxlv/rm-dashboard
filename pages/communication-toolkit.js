import { useState } from "react";
import {
  EMAIL_ETIQUETTE_RULES,
  PHONE_ETIQUETTE_RULES,
  CELL_PHONE_RULES,
  RESEARCH_METHOD,
  RESEARCH_PROMPT,
  EMAIL_TEMPLATES,
  PHONE_TEMPLATES,
} from "../lib/communicationToolkit";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="cbn-source-link"
      style={{ border: "1px solid var(--border-soft)", cursor: "pointer" }}
      onClick={() => {
        navigator.clipboard?.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

export default function CommunicationToolkit() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>Communication Toolkit</h1>
        <p>Your research method, Outlook setup, and email/phone templates — tailored to you, FIIO, Ecobank Nigeria.</p>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Researching a Prospect or Counterparty</h2>
        </div>
        <ul className="topic-points">
          {RESEARCH_METHOD.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
        <div style={{ marginTop: 16 }}>
          <div className="panel-head" style={{ marginBottom: 8 }}>
            <span className="stat-sub" style={{ textTransform: "uppercase" }}>The Research Prompt</span>
            <CopyButton text={RESEARCH_PROMPT} />
          </div>
          <pre className="prompt-block">{RESEARCH_PROMPT}</pre>
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Email Templates</h2>
        </div>
        {EMAIL_TEMPLATES.map((t) => (
          <div className="snapshot-card" key={t.title}>
            <div className="glossary-term" style={{ marginBottom: 8 }}>{t.title}</div>
            <div className="stat-sub" style={{ marginBottom: 6 }}>Subject: {t.subject}</div>
            <pre className="prompt-block">{t.body}</pre>
            <CopyButton text={`Subject: ${t.subject}\n\n${t.body}`} />
          </div>
        ))}
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Phone Call Templates</h2>
        </div>
        {PHONE_TEMPLATES.map((t) => (
          <div className="news-item-card" key={t.title}>
            <div className="news-item-title">{t.title}</div>
            <div className="news-why">{t.script}</div>
          </div>
        ))}
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Email Etiquette — Quick Rules</h2>
        </div>
        <div className="kb-grid">
          {EMAIL_ETIQUETTE_RULES.map((r) => (
            <div className="kb-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Phone Etiquette — Quick Rules</h2>
        </div>
        <div className="kb-grid">
          {PHONE_ETIQUETTE_RULES.map((r) => (
            <div className="kb-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2>Cell Phone Etiquette at Work</h2>
        </div>
        <div className="kb-grid">
          {CELL_PHONE_RULES.map((r) => (
            <div className="kb-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
