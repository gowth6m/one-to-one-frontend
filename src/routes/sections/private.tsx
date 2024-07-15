/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { LoadingScreen } from 'src/components/loading-screen';

import { PrivateGuard } from '../guards/private-guard';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/index'));
const DashboardPage = lazy(() => import('src/pages/dashboard'));
const UserProfilePage = lazy(() => import('src/pages/user/[userId]'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: '/',
    element: (
      <PrivateGuard>
        <>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </>
      </PrivateGuard>
    ),
    children: [
      // Base
      { index: true, element: <IndexPage /> },
      { path: 'dashboard', element: <DashboardPage /> },

      // User
      {
        path: 'user/:userId',
        element: <UserProfilePage />,
      },
    ],
  },
];
