import apiRequest from '@/api/apiRequest';

type TileData = {
  id: number;
  tileName: string;
  tileIcon: string;
  description: string;
  bgImage: string;
  status: string;
};

export type TileListingDataResponse = {
  totalPages: number;
  page: number;
  data: TileData[];
};

export type TileListingsQueryParams = {
  pageNo: number;
  pageSize: number;
  search?: string;
  showExternalListings?: boolean;
  statusId: number;
};

export const getTileListings = async (queryParams: TileListingsQueryParams) => {
  return await apiRequest<TileListingDataResponse>({
    url: 'tileListings',
    method: 'GET',
    params: queryParams,
  });
};

export const deleteTileListing = async (tileId: number | string) => {
  return await apiRequest({
    url: `tileListings/${tileId}`,
    method: 'DELETE',
  });
};
