import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ContentFittedStack from '@/components/ContentFittedStack.tsx';
import { contactPage, navigation } from '@/content/pages.ts';
import { site } from '@/content/site.ts';
import {
  containerMaxWidth,
  darkSchemeClass,
  staticTheme,
} from '@/styles/staticTheme.ts';

/** The site's header, as Neve's: logo and name on the left, linking home; the menu and the request button on the right. */
const Header = () => (
  <Box
    component="header"
    sx={{
      bgcolor: 'background.default',
      borderBottom: 1,
      borderColor: 'divider',
    }}
  >
    <ContentFittedStack
      contentMaxWidth={containerMaxWidth}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={{ xs: 1, sm: 2 }}
      paddingX={{ xs: 1.5, sm: 2, md: 3 }}
      minHeight={staticTheme.spacing(10)}
    >
      <Link
        href="/"
        underline="none"
        color="inherit"
        sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}
      >
        {/* The mark is a shape, not a picture: the file is used as a mask and the theme paints it, brand blue on
            the white header and white on the dark one. The name beside it already names the link, so it is
            hidden from screen readers. */}
        <Box
          component="span"
          aria-hidden
          sx={{
            display: 'block',
            height: 44,
            aspectRatio: `${site.logo.width} / ${site.logo.height}`,
            bgcolor: 'primary.main',
            maskImage: `url(${site.logo.src})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            // A selector, not `theme.applyStyles`, because a server component can't hand a function to MUI.
            [`.${darkSchemeClass} &`]: { bgcolor: 'common.white' },
            // High-contrast modes and printing drop background colors, which would erase a painted mask.
            printColorAdjust: 'exact',
            '@media (forced-colors: active)': {
              bgcolor: 'CanvasText',
              forcedColorAdjust: 'none',
            },
          }}
        />
        <Typography component="span" variant="h4">
          {site.name}
        </Typography>
      </Link>
      <Box
        component="nav"
        aria-label="Menu principale"
        sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 3 } }}
      >
        {navigation
          .filter(({ href }) => href !== contactPage.path)
          .map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              underline="hover"
              color="text.primary"
              // The logo already links home: on a phone the menu keeps only the request button.
              sx={{ display: { xs: 'none', sm: 'inline' } }}
            >
              {label}
            </Link>
          ))}
        <Button
          variant="contained"
          href={contactPage.path}
          sx={{ whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          {/* The full wording doesn't fit beside the logo and name on a phone. */}
          <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
            Richiedi assistenza
          </Box>
          <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
            Contattaci
          </Box>
        </Button>
      </Box>
    </ContentFittedStack>
  </Box>
);

export default Header;
