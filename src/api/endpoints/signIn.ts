import { RoleValue } from '@/lib/constant';

import apiRequest from '../apiRequest';
const signInUserPath = '/auth/login';
export type SignInUserResponse = {
  userId: number;
  id: number;
  firstName: string;
  lastName: string;
  role: RoleValue;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

type LoginForm = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const signInUser = async (userFormData: LoginForm) => {
  return await apiRequest<SignInUserResponse, LoginForm>({
    url: signInUserPath,
    method: 'POST',
    data: userFormData,
  });
};
