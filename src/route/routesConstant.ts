const ROUTES = {
  LogIn: '/login',
  Register: '/register',
  ResetPasswordToken: '/reset-password/:token',
  Accounts: 'accounts',
  CityAdmin: 'city-administrator',
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
} as const;

export default ROUTES;
