import Box from '@mui/material/Box';
import type { StackProps } from '@mui/material/Stack';

import ContentFittedStack from '@/components/ContentFittedStack.tsx';
import { containerMaxWidth } from '@/styles/staticTheme.ts';

const toneStyles = {
  plain: { bgcolor: 'background.default' },
  alt: { bgcolor: 'surface.alt' },
  primary: { bgcolor: 'primary.main', color: 'primary.contrastText' },
} as const;

export type SectionTone = keyof typeof toneStyles;

interface Props extends Omit<StackProps, 'component' | 'id'> {
  tone?: SectionTone;
  /** The band's anchor, such as `riparazioni` for `#riparazioni`. */
  id?: string;
  component?: React.ElementType;
}

/** A full-width band of the page with its content in the site's container, as Neve's page sections. */
const Section = ({
  tone = 'plain',
  id,
  component = 'section',
  children,
  ...contentProps
}: Props) => (
  <Box component={component} id={id} sx={toneStyles[tone]}>
    <ContentFittedStack
      contentMaxWidth={containerMaxWidth}
      paddingX={{ xs: 2, md: 3 }}
      paddingY={{ xs: 6, md: 10 }}
      {...contentProps}
    >
      {children}
    </ContentFittedStack>
  </Box>
);

export default Section;
