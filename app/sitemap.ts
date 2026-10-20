import type { MetadataRoute } from 'next';
import { publicPaths, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map(path => ({ url: `${site.url}${path}`, changeFrequency: 'monthly', priority: path === '/' ? 1 : 0.7 }));
}
