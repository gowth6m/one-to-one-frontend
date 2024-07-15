/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBarPublic from '@/layouts/appbar/nav-bar-public';

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
          <NavBarPublic />
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
