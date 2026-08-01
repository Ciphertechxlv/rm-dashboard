import { NextResponse } from "next/server";

// Server-side gate for the Portfolio & Targets page. The cookie value
// must exactly match PORTFOLIO_SESSION_SECRET (set in Vercel's Project
// Settings → Environment Variables — never committed to the repo). This
// check runs on Vercel's servers before the page is ever sent to the
// browser, so it can't be bypassed by disabling JavaScript or viewing
// page source.
export function middleware(request) {
  const unlocked = request.cookies.get("portfolio_unlocked")?.value;
  const expected = process.env.PORTFOLIO_SESSION_SECRET;

  if (!expected || unlocked !== expected) {
    const url = request.nextUrl.clone();
    url.pathname = "/unlock";
    url.searchParams.set("next", "/portfolio");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/portfolio",
};
