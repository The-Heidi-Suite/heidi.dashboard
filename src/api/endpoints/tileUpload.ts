import apiRequest from '@/api/apiRequest';
import API_URLS from '@/api/apiURl';

export type TileUploadPayload = {
  tileName: string;
  titleColor: string;
  tileIcon: File | null;
  tileDescription: string;
  tileDescriptionColor: string;
  tileImage: File | null;
};

export type TileUploadResponse = {
  success: boolean;
  message: string;
  data?: {
    id: number;
    tileName: string;
    tileIcon: string;
    tileDescription: string;
    titleColor: string;
    tileDescriptionColor: string;
    tileImage: string;
  };
};

export const createTileUpload = async (payload: TileUploadPayload) => {
  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (value !== null) {
      formData.append(key, value as Blob | string);
    }
  });

  return await apiRequest<TileUploadResponse>({
    url: 'tileUploads',
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
