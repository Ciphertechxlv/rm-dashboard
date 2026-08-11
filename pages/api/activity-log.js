import { getRedis } from "../../lib/redis";

const HASH_KEY = "activity_log";

export default async function handler(req, res) {
  const redis = getRedis();

  if (!redis) {
    res.status(200).json({
      configured: false,
      message: "Cloud storage isn't set up yet — see the README for the one-time Upstash setup. Nothing will save until this is configured.",
      entries: {},
    });
    return;
  }

  try {
    if (req.method === "GET") {
      const entries = (await redis.hgetall(HASH_KEY)) || {};
      res.status(200).json({ configured: true, entries });
      return;
    }

    if (req.method === "POST") {
      const { date, text } = req.body || {};
      if (!date) {
        res.status(400).json({ configured: true, message: "Missing date." });
        return;
      }
      if (!text || !text.trim()) {
        await redis.hdel(HASH_KEY, date);
      } else {
        await redis.hset(HASH_KEY, { [date]: text });
      }
      res.status(200).json({ configured: true, ok: true });
      return;
    }

    if (req.method === "DELETE") {
      const { date } = req.body || {};
      if (!date) {
        res.status(400).json({ configured: true, message: "Missing date." });
        return;
      }
      await redis.hdel(HASH_KEY, date);
      res.status(200).json({ configured: true, ok: true });
      return;
    }

    res.status(405).json({ configured: true, message: "Method not allowed." });
  } catch (err) {
    res.status(500).json({ configured: true, message: String(err.message || err) });
  }
}
