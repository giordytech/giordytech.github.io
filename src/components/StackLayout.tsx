import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { spreadSx, type SxProps } from '@/styles/sx.ts';

interface Container {
  children: React.ReactNode;
  sx?: SxProps;
}

interface Props {
  slotProps: { mainContainer: Container; footerContainer?: Container };
  sx?: SxProps;
}

/** A full-height stack with an optional footer kept at the bottom. From elysium. */
const StackLayout = ({ slotProps, sx }: Props) => (
  <Stack sx={[{ minHeight: '100vh', width: '100%' }, ...spreadSx(sx)]}>
    <Box
      sx={[
        {
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        },
        ...spreadSx(slotProps.mainContainer.sx),
      ]}
    >
      {slotProps.mainContainer.children}
    </Box>
    {slotProps.footerContainer != null && (
      <Box sx={[{ width: '100%' }, ...spreadSx(slotProps.footerContainer.sx)]}>
        {slotProps.footerContainer.children}
      </Box>
    )}
  </Stack>
);

export default StackLayout;
