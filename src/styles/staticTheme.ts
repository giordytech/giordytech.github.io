/** Theme options that need no client code: spacing, breakpoints, the font. From elysium. */
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

/** The system's own interface font: no web font to download. */
const systemFont =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export const staticThemeOptions = {
  spacing,
  breakpoints,
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
  typography: {
    fontFamily: systemFont,
  },
} as const;

/**
 * How the color scheme is marked on `<html>`: by class. The theme and the root layout's
 * `InitColorSchemeScript` both use it, so it lives here, readable by server code.
 */
export const colorSchemeAttribute = 'class';

/** The static options under the name the template uses. */
export const staticTheme = staticThemeOptions;
