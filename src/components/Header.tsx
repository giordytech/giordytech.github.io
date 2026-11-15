import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ContentFittedStack from '@/components/ContentFittedStack.tsx';
import { site } from '@/content/site.ts';
import {
  containerMaxWidth,
  darkSchemeClass,
  staticTheme,
} from '@/styles/staticTheme.ts';

/** The site's header, as Neve's: logo and name on the left, linking home; the contact button on the right. */
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
      spacing={2}
      paddingX={{ xs: 2, md: 3 }}
      minHeight={staticTheme.spacing(10)}
    >
      <Link
        href="/"
        underline="none"
        color="inherit"
        sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}
      >
        <Box
          component="img"
          src={site.logo.src}
          alt=""
          sx={{
            height: 44,
            width: 'auto',
            // The logo is a black figure on a transparent background: white on the dark header. A selector,
            // not `theme.applyStyles`, because a server component can't hand a function to MUI.
            [`.${darkSchemeClass} &`]: { filter: 'invert(1)' },
          }}
        />
        <Typography component="span" variant="h4">
          {site.name}
        </Typography>
      </Link>
      <Button
        variant="contained"
        href={`mailto:${site.contact.email}`}
        sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
      >
        {site.contact.email}
      </Button>
    </ContentFittedStack>
  </Box>
);

export default Header;
