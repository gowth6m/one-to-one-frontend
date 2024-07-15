/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBarMobile from '@/layouts/appbar/nav-bar-mobile';

import { PublicGuard } from 'src/routes/guards/public-guard';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// PUBLIC PAGES
const LoginPage = lazy(() => import('src/pages/user/login'));
const RegisterView = lazy(() => import('src/pages/user/register'));

// ----------------------------------------------------------------------

const publicRoutes = [
  {
    path: '/user',
    element: (
      <PublicGuard>
        <Suspense fallback={<SplashScreen />}>
          <NavBarMobile />
          <Outlet />
        </Suspense>
      </PublicGuard>
    ),
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterView />,
      },
    ],
  },
];

export { publicRoutes };
