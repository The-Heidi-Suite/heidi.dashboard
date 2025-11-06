import { RoleValue } from '@/lib/constant';

import apiRequest from '../apiRequest';

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
  userName: string;
  password: string;
  confirmPassword: string;
  acceptPolicy: boolean;
};

export const registerUser = async (userFormData: RegisterForm) => {
  return await apiRequest<RegisterUserResponse, RegisterForm>({
    url: 'register',
    method: 'POST',
    data: userFormData,
  });
};
