import { lazy } from 'react';

import { Route } from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute';

const TileUploadPage = lazy(() => import('@/pages/Tiles/TileUpload'));
const TileListingPage = lazy(() => import('@/pages/Tiles/TileListings'));

export const TilesRoutes = (
  <Route path="/tiles">
    <Route element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']} />}>
      <Route path="upload" element={<TileUploadPage />} />
    </Route>
    <Route
      element={<ProtectedRoute allowedRoles={['SUPER_ADMIN', 'CITY_ADMIN']} />}
    >
      <Route path="listing" element={<TileListingPage />} />
    </Route>
  </Route>
);
