import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ContentFittedStack from '@/components/ContentFittedStack.tsx';
import { site } from '@/content/site.ts';
import { containerMaxWidth } from '@/styles/staticTheme.ts';

/** The site's footer, as Neve's dark bottom bar: name and contact address. */
const Footer = () => (
  <Box
    component="footer"
    sx={{ bgcolor: 'surface.footer', color: 'surface.footerText' }}
  >
    <ContentFittedStack
      contentMaxWidth={containerMaxWidth}
      paddingX={{ xs: 2, md: 3 }}
      paddingY={3}
    >
      <Typography variant="body2">
        {site.name} ·{' '}
        <Link
          href={`mailto:${site.contact.email}`}
          color="inherit"
          sx={{ color: 'surface.footerLink' }}
        >
          {site.contact.email}
        </Link>
      </Typography>
    </ContentFittedStack>
  </Box>
);

export default Footer;
