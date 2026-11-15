import Stack from '@mui/material/Stack';

import { staticTheme } from '@/styles/staticTheme.ts';

/** The thin colored band at the top of every page, as in swiftpost-site-template. */
const TopBar = () => (
  <Stack
    height={staticTheme.spacing(1)}
    width="100%"
    sx={{ backgroundColor: 'primary.dark', flexShrink: 0 }}
  />
);

export default TopBar;
