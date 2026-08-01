export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, message: "Method not allowed" });
    return;
  }

  const { pin } = req.body || {};
  const correctPin = process.env.PORTFOLIO_PIN;
  const secret = process.env.PORTFOLIO_SESSION_SECRET;

  if (!correctPin || !secret) {
    res.status(500).json({
      ok: false,
      message: "PIN lock isn't configured yet — set PORTFOLIO_PIN and PORTFOLIO_SESSION_SECRET in your deployment's environment variables.",
    });
    return;
  }

  if (pin !== correctPin) {
    res.status(401).json({ ok: false, message: "Incorrect PIN." });
    return;
  }

  const maxAge = 60 * 60 * 12; // 12 hours
  res.setHeader(
    "Set-Cookie",
    `portfolio_unlocked=${secret}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax; Secure`
  );
  res.status(200).json({ ok: true });
}
