import { Redis } from "@upstash/redis";

// Vercel's Upstash integration names its environment variables based on
// whatever custom prefix was chosen during setup, combined with a few
// different internal naming patterns depending on integration version.
// Rather than assume one exact name, check every pattern that's been
// observed in practice, in priority order, and use the first pair found.
const URL_CANDIDATES = [
  "UPSTASH_REDIS_KV_REST_API_URL",
  "UPSTASH_REDIS_REST_URL",
  "KV_REST_API_URL",
  "STORAGE_KV_REST_API_URL",
  "STORAGE_REST_API_URL",
];

const TOKEN_CANDIDATES = [
  "UPSTASH_REDIS_KV_REST_API_TOKEN",
  "UPSTASH_REDIS_REST_TOKEN",
  "KV_REST_API_TOKEN",
  "STORAGE_KV_REST_API_TOKEN",
  "STORAGE_REST_API_TOKEN",
];

function firstDefined(candidates) {
  for (const name of candidates) {
    if (process.env[name]) return process.env[name];
  }
  return null;
}

export function getRedis() {
  const url = firstDefined(URL_CANDIDATES);
  const token = firstDefined(TOKEN_CANDIDATES);

  if (!url || !token) return null;

  return new Redis({ url, token });
}
