import ContentFittedStack from '@/components/ContentFittedStack.tsx';
import Footer from '@/components/Footer.tsx';
import Header from '@/components/Header.tsx';
import StackLayout from '@/components/StackLayout.tsx';
import TopBar from '@/components/TopBar.tsx';
import { staticTheme } from '@/styles/staticTheme.ts';

const contentMaxWidth = staticTheme.breakpoints.values.md;

/**
 * Every page's frame: top bar, header, content centered within a readable width, footer. After
 * swiftpost-site-template's SimplePageTemplate.
 */
const PageTemplate = ({ children }: { children: React.ReactNode }) => (
  <StackLayout
    slotProps={{
      mainContainer: {
        children: (
          <>
            <TopBar />
            <Header contentMaxWidth={contentMaxWidth} />
            <ContentFittedStack
              component="main"
              contentMaxWidth={contentMaxWidth}
              padding={2}
              spacing={6}
              sx={{ paddingY: 6 }}
            >
              {children}
            </ContentFittedStack>
          </>
        ),
      },
      footerContainer: {
        children: <Footer contentMaxWidth={contentMaxWidth} />,
      },
    }}
  />
);

export default PageTemplate;
