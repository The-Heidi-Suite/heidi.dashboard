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
  const { rememberMe, ...formData } = userFormData;
  return await apiRequest<SignInUserResponse, Omit<LoginForm, 'rememberMe'>>({
    url: signInUserPath,
    method: 'POST',
    data: formData,
  });
};
