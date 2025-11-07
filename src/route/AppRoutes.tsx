import { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Dummy from '@/pages/Dummy';
import { UnauthorizedPage } from '@/pages/Unauthorized';
import AuthRoutes from '@/route/AuthRoutes';
import DashboardRoutes from '@/route/DashboardRoutes';

const TermsConditions = lazy(() => import('@/pages/TermsConditions'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      {/* ELEMENT: Auth Routes */}
      {AuthRoutes}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="/dummy" element={<Dummy />} />

      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />

      {/* ELEMENT: Shared Dashboard for all logged-in users */}
      {DashboardRoutes}

      <Route path="*" element={<>404 Not Found</>} />
    </Routes>
  );
}
