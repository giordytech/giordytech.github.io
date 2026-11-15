import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ContentFittedStack from '@/components/ContentFittedStack.tsx';
import { site } from '@/content/site.ts';

/** The site's footer: name and contact address. */
const Footer = ({ contentMaxWidth }: { contentMaxWidth: number }) => (
  <ContentFittedStack
    component="footer"
    contentMaxWidth={contentMaxWidth}
    padding={2}
    sx={{ borderTop: 1, borderColor: 'divider' }}
  >
    <Typography variant="body2" color="text.secondary">
      {site.name} ·{' '}
      <Link href={`mailto:${site.contact.email}`}>{site.contact.email}</Link>
    </Typography>
  </ContentFittedStack>
);

export default Footer;
