import { RoleValue } from '@/lib/constant';

import apiRequest from '../apiRequest';

export const REGISTER_ENDPOINT = 'users/register';

export type RegisterUserResponse = {
  userId: number;
  id: number;
  firstName: string;
  lastName: string;
  role: RoleValue;
  accessToken: string;
};

type RegisterForm = {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
};

export const registerUser = async (userFormData: RegisterForm) => {
  return await apiRequest<RegisterUserResponse, RegisterForm>({
    url: REGISTER_ENDPOINT,
    method: 'POST',
    data: userFormData,
  });
};
