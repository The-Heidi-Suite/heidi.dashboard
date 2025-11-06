import { ApiErrorResponse, ApiSuccessResponse } from '@/api/api.type';
import { RegisterUserResponse } from '@/api/endpoints';
import { USER_ROLE_MAP } from '@/lib/constant';

type SuccessResponse = ApiSuccessResponse<RegisterUserResponse>;

const RegisterSuccessResponse: SuccessResponse = {
  success: true,
  data: {
    userId: 1,
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    role: USER_ROLE_MAP.SUPER_ADMIN,
    accessToken: 'accessToken',
  },
  message: 'Successfully Registered',
};

const RegisterErrorResponse: ApiErrorResponse = {
  success: false,
  error: 'Registration Failed',
  code: 'INTERNAL_SERVER_ERROR',
  status: 500,
};

export { RegisterErrorResponse, RegisterSuccessResponse };
