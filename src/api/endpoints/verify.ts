import apiRequest from '@/api/apiRequest';

export const verifyResetPassToken = async (token: string) => {
  return await apiRequest({
    url: 'verify-reset-token',
    params: { token },
  });
};
