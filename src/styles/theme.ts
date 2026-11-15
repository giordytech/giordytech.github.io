/**
 * The app's MUI theme, in a light and a dark color scheme. The colors are CSS variables, switched by a class
 * on `<html>` (`InitColorSchemeScript` in the root layout sets it before the page shows, so it never flashes
 * the other mode).
 *
 * The colors follow the WordPress Neve theme's "Base" and "Dark Mode" palettes. One departure, for contrast:
 * Neve's dark accent (#0065cb) reads at about 3.2:1 as text on its dark background, under the 4.5:1 that body
 * text needs, so in dark mode links and focus rings use a lighter blue while buttons keep the Neve fill.
 */
'use client';

import { createTheme } from '@mui/material/styles';
import { colorSchemeAttribute, staticThemeOptions } from './staticTheme.ts';

declare module '@mui/material/styles' {
  interface SurfacePalette {
    /** The background of every other section, as Neve's "light background". */
    alt: string;
    footer: string;
    footerText: string;
    footerLink: string;
    /** Links and focus rings: the primary color where it reads well as text, a lighter blue where it doesn't. */
    link: string;
  }
  interface Palette {
    surface: SurfacePalette;
  }
  interface PaletteOptions {
    surface?: SurfacePalette;
  }
}

export const theme = createTheme({
  ...staticThemeOptions,
  cssVariables: { colorSchemeSelector: colorSchemeAttribute },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#2f5aae', dark: '#24478c', contrastText: '#ffffff' },
        // Neve has one text color: no lighter shade for secondary text.
        text: { primary: '#272626', secondary: '#272626' },
        background: { default: '#ffffff', paper: '#ffffff' },
        divider: '#d9d9d9',
        surface: {
          alt: '#f4f5f7',
          footer: '#24292e',
          footerText: '#ffffff',
          footerLink: '#ffffff',
          link: '#2f5aae',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#0065cb',
          dark: '#0057ad',
          light: '#66b2ff',
          contrastText: '#ffffff',
        },
        text: { primary: '#ffffff', secondary: '#b0bec5' },
        background: { default: '#0d1821', paper: '#14232f' },
        divider: 'rgba(255, 255, 255, 0.12)',
        surface: {
          alt: '#14232f',
          footer: '#070e13',
          footerText: '#ffffff',
          footerLink: '#66b2ff',
          link: '#66b2ff',
        },
      },
    },
  },
  components: {
    ...staticThemeOptions.components,
    // A visible keyboard-focus ring on every MUI button, tab and card area: MUI's own is a faint ripple.
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            outline: '3px solid var(--mui-palette-surface-link)',
            outlineOffset: '2px',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { padding: '10px 20px', borderRadius: '3px' },
        sizeLarge: { padding: '12px 24px' },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ ownerState }) =>
          ownerState.color === undefined || ownerState.color === 'primary' ?
            {
              color: 'var(--mui-palette-surface-link)',
              textDecorationColor: 'currentColor',
              textUnderlineOffset: '0.15em',
            }
          : {},
      },
    },
  },
});
