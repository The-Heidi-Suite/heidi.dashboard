const API_URLS = {
  LogIn: 'auth/login',
  LogOut: 'auth/logout',
  RefreshToken: 'auth/refresh',
  ValidateResetPasswordToken: 'auth/validate',
  Register: 'users/register',
  Account: 'users',
  Profile: 'users/profile/me',
  UpdateUserPassword: 'users/profile/me/change-password',
  GetAllTiles: 'core/tiles',
} as const;

export default API_URLS;
