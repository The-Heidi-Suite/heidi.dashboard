import apiRequest from '@/api/apiRequest';

export type UserProfileData = Partial<{
  name: string;
  username: string;
  email: string;
  phoneNumber: string;
  description: string;
  website: string;
}>;

export type UserProfileMetaData = {
  id?: number;
  name: string;
  link: string;
};

export type GetUserProfileResponse = UserProfileData & {
  metadata: UserProfileMetaData[];
  id: number;
};

export const getUserProfile = async () => {
  return await apiRequest<GetUserProfileResponse>({
    url: 'profile',
  });
};

export const updateUserProfile = async (data: UserProfileData) => {
  return await apiRequest({
    url: 'profile',
    method: 'PUT',
    data,
  });
};

export const updateUserMetadata = async (data: UserProfileMetaData[]) => {
  return await apiRequest({
    url: 'profile/metadata',
    method: 'PUT',
    data,
  });
};

type UpdateUserPassword = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export const updateUserPassword = async (data: UpdateUserPassword) => {
  return await apiRequest({
    url: 'profile/password',
    method: 'PUT',
    data,
  });
};

export const deleteAccount = async () => {
  return await apiRequest({
    url: 'profile',
    method: 'DELETE',
  });
};
