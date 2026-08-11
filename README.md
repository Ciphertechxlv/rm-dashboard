# Trade Desk — Daily RM Briefing & Portfolio Tool

A personal dashboard for a Trade Finance Relationship Manager. Every time you
load it, it fetches live FX rates and filtered trade/FX news. Your client
list, targets, and daily notes are saved privately in your own browser.

## What's actually live vs. manual

| Feature | How current is it? |
|---|---|
| USD/GBP/EUR → NGN rates | Live, fetched fresh on every page load (5-min edge cache) from a free, keyless FX API |
| News feed | Live, pulled from 5 Nigerian business news RSS feeds on every load, filtered by trade/FX keywords |
| Parallel ("black market") NGN rate | **Manual** — there's no reliable free public API for this. Type it in yourself each morning; it's saved to your browser |
| CBN policy alerts | Not automated — no free structured feed exists. Check the CBN links on the Reference and Policy Rates pages |
| Activity Log | **Cloud-synced** via Upstash Redis (free tier) — same log on every device, once set up. See setup section below |
| Client/deal tracker, targets, counterparty snapshots, BD pipeline | Fully yours, saved in your browser only (not on any server) |

This is deliberately honest rather than fake: nothing on this page pretends
to be live if it isn't.

## Setting up cloud storage for the Activity Log (one-time, free)

The Activity Log now saves to the cloud instead of just your browser, so
the same log shows up whether you open the site on your phone, laptop,
or anywhere else. This needs a free database connected through Vercel's
Marketplace (Vercel's own built-in database offerings were retired, so
this now goes through a partner called Upstash — still free, still all
managed from your Vercel dashboard).

1. In your Vercel project, look for a **"Storage"** tab (next to
   Deployments, Settings, etc.) — or search "Marketplace" if you don't
   see Storage directly.
2. Find **Upstash** in the list and click to create/connect a database.
   Choose the free tier.
3. Vercel will automatically add the right environment variables to your
   project for you — you don't need to copy/paste anything yourself.
4. Go to **Deployments → (latest) → ⋯ → Redeploy** so the new connection
   takes effect.
5. Open your live site, go to the Activity Log page, and save an entry.
   Then open the site on a different device (or a different browser) and
   confirm the same entry shows up there too.

The Activity Log page is now PIN-locked with the same PIN as Portfolio &
Targets, since it holds real, centrally-stored work data — see the
section above for that PIN setup if you haven't done it yet.

If you skip this setup, the Activity Log page will still load and tell
you clearly that cloud storage isn't configured yet, rather than failing
silently.

## Locking the Portfolio & Targets page

Only you should see your client list. This is enforced on Vercel's servers
(not just hidden with JavaScript), using two environment variables:

1. In Vercel, open your project → **Settings → Environment Variables**.
2. Add `PORTFOLIO_PIN` — the PIN you'll type to unlock the page (e.g. `4821`).
3. Add `PORTFOLIO_SESSION_SECRET` — any long random string (e.g. mash your
   keyboard for 20+ characters). This is never shown to visitors; it's just
   what proves your session is unlocked.
4. Redeploy (Vercel → Deployments → ⋯ → Redeploy) so the new variables take
   effect.

Neither value is ever committed to your GitHub repo — they only exist in
Vercel's dashboard. Visiting `/portfolio` without unlocking redirects to a
PIN screen; a correct PIN unlocks it for 12 hours on that device.

## Deploy it for real (one-time setup, ~15 minutes)

You need a free [Vercel](https://vercel.com) account and a free
[GitHub](https://github.com) account. No API keys are required for the MVP —
both data sources used are free and keyless.

1. **Create a GitHub repo** and push this folder to it:
   ```bash
   cd rm-dashboard
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/rm-dashboard.git
   git push -u origin main
   ```
2. **Go to vercel.com → Add New Project → Import** your GitHub repo.
3. Leave all settings as default (Vercel auto-detects Next.js) → **Deploy**.
4. You'll get a live URL like `rm-dashboard.vercel.app`. Bookmark it, or set
   it as your browser's home page / new-tab page.

That's it — no environment variables, no backend to babysit. Vercel rebuilds
automatically every time you push a change to GitHub.

### Alternative: deploy without GitHub

If you'd rather not use git, install the Vercel CLI and deploy directly from
this folder:
```bash
npm install -g vercel
cd rm-dashboard
vercel
```
Follow the prompts (link to your Vercel account, accept defaults). Run
`vercel --prod` to push it live.

## Customizing it as your job becomes real

- **News feeds**: edit `pages/api/news.js` — the `FEEDS` array. RSS URLs
  occasionally change; if a source stops showing up, check that outlet's
  site for its current `/feed` path.
- **Relevance keywords**: edit `lib/keywords.js` — add client names, their
  industries, or specific commodities once you have a real portfolio.
- **Products/statuses in the tracker**: edit the `PRODUCTS` / `STATUSES`
  arrays in `components/PortfolioTable.js`.
- **Colors/fonts**: all design tokens are CSS variables at the top of
  `styles/globals.css`.

## Adding real CBN/oil-price data later

If you want to go further:
- **Oil price**: services like [oilpriceapi.com](https://oilpriceapi.com) or
  [commodities-api.com](https://commodities-api.com) offer free tiers but
  require a key. Add it as a Vercel environment variable and extend
  `pages/api/fx.js`.
- **CBN circulars**: no official feed exists; you could set up a scheduled
  scraper (Vercel Cron + a small scraper function) against the CBN circulars
  page, but this is more fragile and worth doing only once you know exactly
  which circulars matter to your desk.

## Local development

```bash
npm install
npm run dev
```
Open http://localhost:3000.
