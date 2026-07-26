import Parser from "rss-parser";
import { scoreRelevance, getImplication } from "../../lib/keywords";

const parser = new Parser({
  timeout: 8000,
  headers: { "User-Agent": "Mozilla/5.0 (rm-trade-desk feed reader)" },
});

// Public RSS feeds covering Nigerian business/economy news.
// Feed URLs occasionally change — if one starts failing silently,
// check the outlet's site for its current /feed path and swap it
// in here. A single broken feed will not break the others.
const FEEDS = [
  { name: "Nairametrics", url: "https://nairametrics.com/feed/" },
  { name: "BusinessDay NG", url: "https://businessday.ng/feed/" },
  { name: "Vanguard Business", url: "https://www.vanguardngr.com/category/business/feed/" },
  { name: "The Cable Business", url: "https://www.thecable.ng/category/business/feed" },
  { name: "Punch", url: "https://punchng.com/feed/" },
];

export default async function handler(req, res) {
  const results = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      const parsed = await parser.parseURL(feed.url);
      return (parsed.items || []).map((item) => ({
        title: item.title,
        link: item.link,
        source: feed.name,
        publishedAt: item.isoDate || item.pubDate || null,
        summary: (item.contentSnippet || "").slice(0, 220),
      }));
    })
  );

  const allItems = [];
  const failedFeeds = [];

  results.forEach((r, i) => {
    if (r.status === "fulfilled") {
      allItems.push(...r.value);
    } else {
      failedFeeds.push(FEEDS[i].name);
    }
  });

  const scored = allItems
    .map((item) => {
      const combined = item.title + " " + item.summary;
      return {
        ...item,
        relevance: scoreRelevance(combined),
        why: getImplication(combined),
      };
    })
    .filter((item) => item.relevance > 0)
    // Ranked purely by when it was posted — most recent first.
    .sort((a, b) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 20);

  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=1200");
  res.status(200).json({
    items: scored,
    failedFeeds,
    fetchedAt: new Date().toISOString(),
  });
}
