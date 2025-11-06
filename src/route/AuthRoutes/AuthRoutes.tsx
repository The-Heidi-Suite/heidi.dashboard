import { lazy } from 'react';

import { Route } from 'react-router-dom';

const SignInPage = lazy(() => import('@/pages/SignIn/SignIn'));
const AuthWrapper = lazy(() => import('@/layout/AuthWrapper'));
const RegisterPage = lazy(() => import('@/pages/Register'));
const ResetPasswordPage = lazy(() => import('@/pages/ResetPassword'));

const AuthRoutes = (
  <Route>
    <Route element={<AuthWrapper heading="signIntoAccount" />}>
      <Route path="/login" element={<SignInPage />} />
    </Route>

    <Route element={<AuthWrapper heading="createAccount" />}>
      <Route path="/register" element={<RegisterPage />} />
    </Route>

    <Route element={<AuthWrapper heading="resetPassword" />}>
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
    </Route>
  </Route>
);

export default AuthRoutes;
