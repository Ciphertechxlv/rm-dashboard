import { Redis } from "@upstash/redis";

// Vercel's storage integrations have used a couple of different env var
// names over time (the old Vercel KV integration used KV_REST_API_URL /
// KV_REST_API_TOKEN; the current Upstash Marketplace integration uses
// UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN). Support both so
// this keeps working regardless of which one Vercel injects.
export function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (!url || !token) return null;

  return new Redis({ url, token });
}
