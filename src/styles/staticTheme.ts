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
export const containerMaxWidth = 1170;

/** The system's own interface font: no web font to download. */
const systemFont =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

const tabletUp = `@media (min-width:${breakpoints.values.sm}px)`;
const desktopUp = `@media (min-width:${breakpoints.values.md}px)`;

/** A heading size per screen width, mobile first, in pixels. */
const responsiveHeading = (
  mobile: number,
  tablet: number,
  desktop: number,
  lineHeight: number,
) => ({
  fontSize: `${mobile / 16}rem`,
  fontWeight: 700,
  lineHeight,
  [tabletUp]: { fontSize: `${tablet / 16}rem` },
  [desktopUp]: { fontSize: `${desktop / 16}rem` },
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
    h1: responsiveHeading(32, 42, 56, 1.1),
    h2: responsiveHeading(28, 36, 44, 1.2),
    h3: responsiveHeading(20, 22, 24, 1.3),
    h4: responsiveHeading(18, 20, 20, 1.4),
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', lineHeight: 1.6 },
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
