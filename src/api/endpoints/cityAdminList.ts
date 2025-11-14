import apiRequest from '@/api/apiRequest';
import API_URLS from '@/api/apiURl';
import { RoleValue } from '@/lib/constant';
type CityAdminList = {
  id: string;
  email: string | null;
  username: string | null;
  role: RoleValue;
  firstName: string | null;
  lastName: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AdminListingDataResponse = {
  success: boolean;
  users: CityAdminList[];
  total: number;
  page: number;
  limit: number;
  pages: number;
  message: string;
  timestamp: string;
  path: string;
  statusCode: number;
};

export type AdminListingsQueryParams = {
  page: number;
  limit: number;
  search?: string;
  role?: RoleValue;
  isActive?: boolean;
};

export const getAdminListings = async (
  queryParams: AdminListingsQueryParams
) => {
  return await apiRequest<AdminListingDataResponse>({
    url: API_URLS.GetAdminListing,
    method: 'GET',
    params: queryParams,
  });
};

export const deleteAdminListing = async (listId: number | string) => {
  return await apiRequest({
    url: `adminListings/${listId}`,
    method: 'DELETE',
  });
};
