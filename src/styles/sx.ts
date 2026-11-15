/**
 * Helpers for MUI's `sx` prop, from elysium (`ui/types.ts`, `utils/styles/sxProps.ts`). A reusable component
 * accepts `sx` and merges it after its own defaults with `spreadSx`, so callers can extend its styles.
 */
import type { SxProps, Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export type { SxProps, Theme };

export type SxArray<TTheme extends Theme = Theme> = readonly (
  SystemStyleObject<TTheme> | ((theme: TTheme) => SystemStyleObject<TTheme>)
)[];

const isSxArray = <TTheme extends Theme = Theme>(
  sx: SxProps<TTheme> | undefined,
): sx is SxArray<TTheme> => Array.isArray(sx);

/**
 * `sx` as an array to spread: `sx` itself cannot be spread, because it may already be an array.
 * https://mui.com/system/getting-started/the-sx-prop/#passing-the-sx-prop
 */
export const spreadSx = <TTheme extends Theme = Theme>(
  sx: SxProps<TTheme> | undefined,
): SxArray<TTheme> => {
  if (sx == null) {
    return [];
  }
  return isSxArray(sx) ? sx : ([sx] as SxArray<TTheme>);
};
