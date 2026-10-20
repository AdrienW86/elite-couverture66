/** Défense locale par instance. Compléter par une règle WAF sur /api/contact en production. */
export function createRateLimiter(limit = 5, windowMs = 600_000, maxEntries = 10_000) {
  const buckets = new Map<string, { count: number; expiresAt: number }>();
  return (key: string, now = Date.now()): boolean => {
    for (const [id, bucket] of buckets) if (bucket.expiresAt <= now) buckets.delete(id);
    const existing = buckets.get(key);
    if (existing) { if (existing.count >= limit) return false; existing.count++; return true; }
    if (buckets.size >= maxEntries) return false;
    buckets.set(key, { count: 1, expiresAt: now + windowMs });
    return true;
  };
}
