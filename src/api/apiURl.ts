const API_URLS = {
  LogIn: 'auth/login',
  LogOut: 'auth/logout',
  RefreshToken: 'auth/refresh',
  ValidateResetPasswordToken: 'auth/validate',
  Register: 'users/register',
  GetAdminListing: 'users/',
} as const;

export default API_URLS;
