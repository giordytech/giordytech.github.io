import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ContentFittedStack from '@/components/ContentFittedStack.tsx';
import { site } from '@/content/site.ts';
import { staticTheme } from '@/styles/staticTheme.ts';

/** The site's header: logo and name, linking home, with the tagline. */
const Header = ({ contentMaxWidth }: { contentMaxWidth: number }) => (
  <ContentFittedStack
    component="header"
    contentMaxWidth={contentMaxWidth}
    direction="row"
    alignItems="center"
    spacing={2}
    paddingX={2}
    minHeight={staticTheme.spacing(10)}
    sx={{ borderBottom: 1, borderColor: 'divider', flexShrink: 0 }}
  >
    <Link href="/" underline="none" color="inherit" sx={{ display: 'flex' }}>
      <Box
        component="img"
        src={site.logo.src}
        alt={site.logo.alt}
        sx={{ height: 48, width: 'auto' }}
      />
    </Link>
    <Box>
      <Typography variant="h5" component="p" fontWeight={700}>
        {site.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {site.tagline}
      </Typography>
    </Box>
  </ContentFittedStack>
);

export default Header;
