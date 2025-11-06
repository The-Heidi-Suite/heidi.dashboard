import apiRequest from '@/api/apiRequest';

export const logoutUser = async () => {
  return await apiRequest({
    url: 'logout',
  });
};
