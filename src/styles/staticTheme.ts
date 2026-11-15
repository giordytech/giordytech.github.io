/**
 * Theme options that need no client code: spacing, breakpoints, layout widths, the type scale. From elysium, with
 * the sizes of the WordPress Neve theme's default demo.
 */
const spacing = (factor: number) => `${0.5 * factor}rem`;

const breakpoints = {
  values: {
    xs: 340,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
} as const;

/** The widest the page content gets, as in Neve's default container. */
export const containerMaxWidth = 1200;

/** The system's own interface font: no web font to download. */
const systemFont =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

/** A heading at Neve's default size, in pixels, and weight. */
const heading = (sizePx: number, lineHeight: number) => ({
  fontSize: `${sizePx / 16}rem`,
  fontWeight: 700,
  lineHeight,
});

export const staticThemeOptions = {
  spacing,
  breakpoints,
  shape: { borderRadius: 8 },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
  typography: {
    fontFamily: systemFont,
    h1: heading(40, 1.2),
    h2: heading(32, 1.3),
    h3: heading(28, 1.3),
    h4: heading(24, 1.4),
    h5: heading(20, 1.5),
    h6: heading(16, 1.6),
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    body2: { fontSize: '0.875rem', lineHeight: 1.7 },
    button: { textTransform: 'none', fontWeight: 600, fontSize: '1rem' },
  },
} as const;

/**
 * How the color scheme is marked on `<html>`: by class. The theme and the root layout's
 * `InitColorSchemeScript` both use it, so it lives here, readable by server code.
 */
export const colorSchemeAttribute = 'class';

/** The class MUI puts on `<html>` in dark mode, for styles a server component sets without the theme. */
export const darkSchemeClass = 'dark';

/** The static options under the name the template uses. */
export const staticTheme = staticThemeOptions;
