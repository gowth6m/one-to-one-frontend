/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';

import { PublicGuard } from 'src/routes/guards/public-guard';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// PUBLIC PAGES
const LoginPage = lazy(() => import('src/pages/user/login'));

// ----------------------------------------------------------------------

const publicRoutes = [
  {
    path: 'user/login',
    element: (
      <PublicGuard>
        <Suspense fallback={<SplashScreen />}>
          <LoginPage />
        </Suspense>
      </PublicGuard>
    ),
  },
];

export { publicRoutes };
