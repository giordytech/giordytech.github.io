'use client';

import {
  ThemeProvider as MUIThemeProvider,
  type ThemeProviderProps,
} from '@mui/material/styles';

/** MUI's theme provider, as a client component the root layout can render. From elysium. */
const ThemeProvider = ({ children, theme }: ThemeProviderProps) => (
  <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
);

export default ThemeProvider;
