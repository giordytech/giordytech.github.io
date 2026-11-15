import type { MetadataRoute } from 'next';

import { site } from '@/content/site.ts';

// Written once at build time: the static export has no server to answer requests.
export const dynamic = 'force-static';

const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: '*', allow: '/' },
  sitemap: new URL('sitemap.xml', site.url).href,
});

export default robots;
