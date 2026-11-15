import {
  AppRouterCacheProvider as MUIAppRouterCacheProvider,
  type AppRouterCacheProviderProps,
} from '@mui/material-nextjs/v16-appRouter';

/** MUI's Emotion cache for the App Router, with this app's cache key. From elysium. */
const AppRouterCacheProvider = ({
  children,
  options,
  ...otherProps
}: AppRouterCacheProviderProps) => (
  <MUIAppRouterCacheProvider
    options={{ key: 'giordytech', ...options }}
    {...otherProps}
  >
    {children}
  </MUIAppRouterCacheProvider>
);

export default AppRouterCacheProvider;
