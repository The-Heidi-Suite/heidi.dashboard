import { lazy } from 'react';

import { Route } from 'react-router-dom';

import ProtectedRoute from '@/route/ProtectedRoute';

import { TilesRoutes } from './TilesRoute';

const DashboardWrapper = lazy(() => import('@/layout/DashboardWrapper'));
const AccountsPage = lazy(() => import('@/pages/Account'));
const CityAdminPage = lazy(() => import('@/pages/CityAdmin'));

const DashboardRoutes = (
  <Route
    element={
      <ProtectedRoute allowedRoles={['SUPER_ADMIN', 'CITY_ADMIN', 'CITIZEN']} />
    }
  >
    <Route element={<DashboardWrapper />}>
      {TilesRoutes}
      <Route
        element={
          <ProtectedRoute
            allowedRoles={['SUPER_ADMIN', 'CITIZEN', 'CITY_ADMIN']}
          />
        }
      >
        <Route path="accounts" element={<AccountsPage />} />
      </Route>

      {/* City Administrator */}
      <Route element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']} />}>
        <Route path="city-administrator" element={<CityAdminPage />} />
      </Route>
    </Route>
  </Route>
);

export default DashboardRoutes;
