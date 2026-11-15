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
          component="span"
          sx={{
            display: 'flex',
            // The logo is a black figure on a transparent background: white on the dark header. A selector,
            // not `theme.applyStyles`, because a server component can't hand a function to MUI.
            [`.${darkSchemeClass} &`]: { filter: 'invert(1)' },
          }}
        >
          {/* A plain <img>: MUI's Box would take width and height as styles, not as the file's size. The file
              is 132 pixels, three times the 44 shown, for sharp high-density screens. */}
          <img
            src={site.logo.src}
            width={132}
            height={132}
            alt=""
            style={{ height: 44, width: 'auto' }}
          />
        </Box>
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
