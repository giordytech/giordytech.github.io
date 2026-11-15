import Box from '@mui/material/Box';

import Footer from '@/components/Footer.tsx';
import Header from '@/components/Header.tsx';
import StackLayout from '@/components/StackLayout.tsx';

/**
 * Every page's frame, as the WordPress Neve theme's: header, full-width content bands, dark footer. The page
 * lays out its own bands (`Section`), each holding its content within the site's container.
 */
const PageTemplate = ({ children }: { children: React.ReactNode }) => (
  <StackLayout
    slotProps={{
      mainContainer: {
        children: (
          <>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
          </>
        ),
      },
      footerContainer: {
        children: <Footer />,
      },
    }}
  />
);

export default PageTemplate;
