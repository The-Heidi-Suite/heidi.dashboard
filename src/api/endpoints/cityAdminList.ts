import apiRequest from '@/api/apiRequest';
import { RoleValue } from '@/lib/constant';
type CityAdminList = {
  id: number;
  email: string;
  role: RoleValue;
  createdAt: string;
  registered: boolean;
  citiesName: string[];
};

export type AdminListingDataResponse = {
  totalPages: number;
  page: number;
  data: CityAdminList[];
};

export type AdminListingsQueryParams = {
  pageNo: number;
  pageSize: number;
  search?: string;
  showExternalListings?: boolean;
  statusId: number;
};

export const getAdminListings = async (
  queryParams: AdminListingsQueryParams
) => {
  return await apiRequest<AdminListingDataResponse>({
    url: 'adminListings',
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
