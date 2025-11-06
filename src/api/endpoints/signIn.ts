import { RoleValue } from '@/lib/constant';

import apiRequest from '../apiRequest';

export type SignInUserResponse = {
  userId: number;
  id: number;
  firstName: string;
  lastName: string;
  role: RoleValue;
  accessToken: string;
};

type LoginForm = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const signInUser = async (userFormData: LoginForm) => {
  return await apiRequest<SignInUserResponse, LoginForm>({
    url: 'signin',
    method: 'POST',
    data: userFormData,
  });
};
