import { useEffect, useState } from "react";

function timeAgo(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  const diffMin = Math.round((Date.now() - d.getTime()) / 60000);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.round(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  return `${Math.round(diffHr / 24)}d ago`;
}

export default function NewsPanel({ limit = 20, onTopHeadline }) {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((data) => {
        setNews(data);
        if (onTopHeadline && data.items && data.items[0]) {
          onTopHeadline(data.items[0]);
        }
      })
      .catch((e) => setError(String(e)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>Trade & FX News</h2>
        <span className="timestamp">
          {news ? `Fetched ${new Date(news.fetchedAt).toLocaleTimeString()} · newest first` : error ? "Unavailable" : "Loading…"}
        </span>
      </div>

      {error && <p className="empty-state" style={{ marginBottom: 16 }}>Could not load news right now — refresh to retry.</p>}

      {news && news.items && news.items.length === 0 && (
        <p className="empty-state">
          No relevant items right now. Feeds checked: {news.failedFeeds && news.failedFeeds.length
            ? `some failed (${news.failedFeeds.join(", ")}) — see README to update feed URLs.`
            : "all responded, nothing matched today's keywords."}
        </p>
      )}

      {news && news.items && news.items.length > 0 && (
        <div className="news-list">
          {news.items.slice(0, limit).map((item, i) => (
            <div className="news-item-card" key={i}>
              <div className="news-item-title">{item.title}</div>
              <div className="news-meta">
                {item.source} · {timeAgo(item.publishedAt)}
              </div>
              {item.why && <div className="news-why">{item.why}</div>}
              <a className="news-original-btn" href={item.link} target="_blank" rel="noreferrer">
                Read original ↗
              </a>
            </div>
          ))}
        </div>
      )}

      {news && news.failedFeeds && news.failedFeeds.length > 0 && news.items.length > 0 && (
        <p className="empty-state" style={{ marginTop: 14 }}>
          Note: {news.failedFeeds.join(", ")} did not respond this time.
        </p>
      )}
    </div>
  );
}
