import apiRequest from '@/api/apiRequest';
const logoutUserPath = '/auth/logout';
export const logoutUser = async () => {
  return await apiRequest({
    url: logoutUserPath,
    method: 'POST',
  });
};
