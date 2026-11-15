import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ContentFittedStack from '@/components/ContentFittedStack.tsx';
import { addressLine, phoneHref, site } from '@/content/site.ts';
import { containerMaxWidth } from '@/styles/staticTheme.ts';

const footerLinkSx = { color: 'surface.footerLink' } as const;

/** The site's footer, as Neve's dark bottom bar: name, email, phone and address. */
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
      <Stack
        component="address"
        direction={{ xs: 'column', md: 'row' }}
        columnGap={3}
        rowGap={1}
        flexWrap="wrap"
        sx={{ fontStyle: 'normal' }}
      >
        <Typography variant="body2" fontWeight={700}>
          {site.name}
        </Typography>
        <Typography variant="body2">
          <Link
            href={`mailto:${site.contact.email}`}
            color="inherit"
            sx={footerLinkSx}
          >
            {site.contact.email}
          </Link>
        </Typography>
        <Typography variant="body2">
          <Link href={phoneHref} color="inherit" sx={footerLinkSx}>
            {site.contact.phone}
          </Link>
        </Typography>
        <Typography variant="body2">{addressLine}</Typography>
      </Stack>
    </ContentFittedStack>
  </Box>
);

export default Footer;
