import type { MetadataRoute } from 'next';

import { contactPage, privacyPage } from '@/content/pages.ts';
import { site } from '@/content/site.ts';

// Written once at build time: the static export has no server to answer requests.
export const dynamic = 'force-static';

// No lastModified: the build date would claim a change on every build, which search engines learn to ignore.
const sitemap = (): MetadataRoute.Sitemap => [
  { url: site.url },
  { url: new URL(contactPage.path, site.url).href },
  { url: new URL(privacyPage.path, site.url).href },
];

export default sitemap;
