import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import type { Metadata } from 'next';

import AppRouterCacheProvider from '@/components/AppRouterCacheProvider.tsx';
import ThemeProvider from '@/components/ThemeProvider.tsx';
import { site } from '@/content/site.ts';
import { colorSchemeAttribute } from '@/styles/staticTheme.ts';
import { theme } from '@/styles/theme.ts';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.tagline,
  // No title here: each page's own title becomes its og:title and twitter:title. A page that sets its own
  // openGraph replaces this whole object (Next merges metadata one level deep), image included: repeat it there.
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: site.name,
    description: site.tagline,
    images: [
      {
        url: site.sharePreview.src,
        width: site.sharePreview.width,
        height: site.sharePreview.height,
        alt: site.sharePreview.alt,
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  // The color-scheme script changes <html>'s class before React hydrates: React is told to expect it.
  <html lang="it" suppressHydrationWarning>
    <body>
      <InitColorSchemeScript attribute={colorSchemeAttribute} />
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;
