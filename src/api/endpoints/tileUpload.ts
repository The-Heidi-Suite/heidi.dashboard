import apiRequest from '@/api/apiRequest';
import API_URLS from '@/api/apiURl';

export type TileUploadPayload = {
  headerBackgroundColor: string;
  header: string;
  subheader: string;
  description: string;
  contentBackgroundColor: string;
  websiteUrl: string;
  opnInExternalBrowser?: boolean;
  displayOrder?: number;
  isActive?: boolean;
  backgroundImageUrl?: File | null;
  iconImageUrl?: File | null;
  cities?: [
    {
      cityId: string;
      isPrimary: boolean;
      displayOrder: number;
    },
  ];
};

export type TileUploadResponse = {
  success: boolean;
  message: string;
  data?: {
    id: string;
    slug: string;
  } & TileUploadPayload;
};

export const createTileUpload = async (payload: TileUploadPayload) => {
  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (value !== null) {
      formData.append(key, value as Blob | string);
    }
  });

  return await apiRequest<TileUploadResponse>({
    url: API_URLS.Tiles,
    method: 'POST',
    data: formData,
  });
};

export const editTileUpload = async (
  tileId: string | number,
  payload: TileUploadPayload
) => {
  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (value !== null) {
      formData.append(key, value as Blob | string);
    }
  });

  return await apiRequest<TileUploadResponse>({
    url: API_URLS.Tiles + `/${tileId}`,
    method: 'PATCH',
    data: formData,
  });
};

export const getTile = async (tileId: string | number) => {
  return await apiRequest<TileUploadPayload>({
    url: API_URLS.Tiles + `/${tileId}`,
  });
};
