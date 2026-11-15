import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import type { Metadata } from 'next';

import AppRouterCacheProvider from '@/components/AppRouterCacheProvider.tsx';
import ThemeProvider from '@/components/ThemeProvider.tsx';
import { site } from '@/content/site.ts';
import { colorSchemeAttribute } from '@/styles/staticTheme.ts';
import { theme } from '@/styles/theme.ts';

export const metadata: Metadata = {
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.tagline,
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
