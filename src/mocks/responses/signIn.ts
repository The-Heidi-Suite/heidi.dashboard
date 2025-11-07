import { ApiErrorResponse, ApiSuccessResponse } from '@/api/api.type';
import { SignInUserResponse } from '@/api/endpoints';
import { USER_ROLE_MAP } from '@/lib/constant';

type SuccessResponse = ApiSuccessResponse<SignInUserResponse>;

const SuccessUserResponse: SuccessResponse = {
  success: true,
  data: {
    userId: 1,
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    role: USER_ROLE_MAP.SUPER_ADMIN,
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresIn: 3600,
  },
  message: 'Successfully Signed In',
};

const ErrorUserResponse: ApiErrorResponse = {
  success: false,
  error: 'Wrong Password',
  code: 'INTERNAL_SERVER_ERROR',
  status: 401,
};

const LogoutUserResponse: ApiSuccessResponse<unknown> = {
  success: true,
  message: 'Successfully Signed Out',
  data: null,
};

export { ErrorUserResponse, LogoutUserResponse, SuccessUserResponse };
