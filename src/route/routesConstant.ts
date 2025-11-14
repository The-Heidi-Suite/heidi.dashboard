const ROUTES = {
  LogIn: '/login',
  Register: '/register',
  ResetPasswordToken: '/reset-password/:token',
  Accounts: '/accounts',
  CityAdmin: '/user-management',
  Tiles: '/tiles',
  UploadTile: 'upload',
  EditTile: 'upload/:id',
  TileListing: 'listing',
  Unauthorized: '/unauthorized',
  Dummy: '/dummy',
  PrivacyPolicy: '/privacy',
  TermsConditions: '/terms',
  Default: '/',
  NotFound: '*',
  Dashboard: '/dashboard',
} as const;

export default ROUTES;
