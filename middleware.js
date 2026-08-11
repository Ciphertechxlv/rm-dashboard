import { NextResponse } from "next/server";

// Server-side gate for pages/APIs holding your real work data. The
// cookie value must exactly match PORTFOLIO_SESSION_SECRET (set in
// Vercel's Project Settings → Environment Variables — never committed to
// the repo). This check runs on Vercel's servers before the page/API
// response is ever sent to the browser, so it can't be bypassed by
// disabling JavaScript or viewing page source.
//
// Activity Log is included here because it moved from browser-only
// localStorage to real cloud storage (Upstash Redis) — meaning it's now
// reachable from any device, so it needs the same protection Portfolio
// already had.
export function middleware(request) {
  const unlocked = request.cookies.get("portfolio_unlocked")?.value;
  const expected = process.env.PORTFOLIO_SESSION_SECRET;
  const { pathname } = request.nextUrl;

  if (expected && unlocked === expected) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ message: "Locked. Unlock at /unlock first." }, { status: 401 });
  }

  const url = request.nextUrl.clone();
  url.pathname = "/unlock";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/portfolio", "/activity-log", "/api/activity-log"],
};
