import { useState } from "react";
import FxPanel from "../components/FxPanel";
import NewsPanel from "../components/NewsPanel";

export default function Home() {
  const [fxHeadline, setFxHeadline] = useState(null);
  const [topHeadline, setTopHeadline] = useState(null);

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="page">
      <div className="page-header">
        <h1>The Desk</h1>
      </div>

      <section className="briefing">
        <div className="briefing-top">
          <h2><span className="stamp">Must Know Today</span></h2>
          <span className="briefing-date">{today}</span>
        </div>
        <div className="briefing-grid">
          <div className="briefing-card">
            <h3>FX Headline</h3>
            <div>{fxHeadline || "Loading…"}</div>
          </div>
          <div className="briefing-card">
            <h3>Top Trade/FX Headline</h3>
            <div>
              {topHeadline ? (
                <a href={topHeadline.link} target="_blank" rel="noreferrer">
                  {topHeadline.title}
                </a>
              ) : (
                "Loading…"
              )}
            </div>
          </div>
        </div>
      </section>

      <FxPanel onHeadline={setFxHeadline} />
      <NewsPanel onTopHeadline={setTopHeadline} />
    </main>
  );
}
