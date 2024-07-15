/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '@/layouts/appbar/nav-bar';

import { LoadingScreen } from 'src/components/loading-screen';

import { PrivateGuard } from '../guards/private-guard';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/index'));
const DashboardPage = lazy(() => import('src/pages/dashboard'));
const UserProfilePage = lazy(() => import('src/pages/user/[userId]'));
const OneToOnesPage = lazy(() => import('src/pages/one-to-ones'));
const GoalsPage = lazy(() => import('src/pages/goals'));
const DevelopmentPage = lazy(() => import('src/pages/development'));
const ReportingPage = lazy(() => import('src/pages/reporting'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: '/',
    element: (
      <PrivateGuard>
        <>
          <Suspense fallback={<LoadingScreen />}>
            <NavBar />
            <Outlet />
          </Suspense>
        </>
      </PrivateGuard>
    ),
    children: [
      // Base
      { index: true, element: <IndexPage /> },
      { path: 'dashboard', element: <DashboardPage /> },

      // Dashboard
      {
        path: 'one-to-ones',
        element: <OneToOnesPage />,
      },
      {
        path: 'goals',
        element: <GoalsPage />,
      },
      {
        path: 'development',
        element: <DevelopmentPage />,
      },
      {
        path: 'reporting',
        element: <ReportingPage />,
      },

      // User
      {
        path: 'user/:userId',
        element: <UserProfilePage />,
      },
    ],
  },
];
