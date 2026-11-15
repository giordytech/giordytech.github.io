import Stack, { type StackProps } from '@mui/material/Stack';

interface Props extends Omit<StackProps, 'maxWidth' | 'width'> {
  contentMaxWidth: StackProps['maxWidth'];
}

/** Fits its content within a maximum width, centred. From elysium. */
const ContentFittedStack = ({
  contentMaxWidth,
  children,
  ...contentProps
}: Props) => (
  <Stack width="100%" alignItems="center">
    <Stack width="100%" maxWidth={contentMaxWidth} {...contentProps}>
      {children}
    </Stack>
  </Stack>
);

export default ContentFittedStack;
