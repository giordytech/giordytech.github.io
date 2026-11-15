/**
 * The app's MUI theme, in a light and a dark color scheme. The colors are CSS variables, switched by a class
 * on `<html>` (`InitColorSchemeScript` in the root layout sets it before the page shows, so it never flashes
 * the other mode).
 */
'use client';

import { createTheme } from '@mui/material/styles';
import { colorSchemeAttribute, staticThemeOptions } from './staticTheme.ts';

export const theme = createTheme({
  ...staticThemeOptions,
  cssVariables: { colorSchemeSelector: colorSchemeAttribute },
  colorSchemes: { light: true, dark: true },
  components: {
    ...staticThemeOptions.components,
    // A visible keyboard-focus ring on every MUI button, tab and card area: MUI's own is a faint ripple.
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            outline: '3px solid var(--mui-palette-primary-main)',
            outlineOffset: '2px',
          },
        },
      },
    },
  },
});
