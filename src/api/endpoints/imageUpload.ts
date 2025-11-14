import apiRequest from '@/api/apiRequest';
import API_URLS from '@/api/apiURl';

export type TileUploadPayload = {
  headerBackgroundColor: string;
  header: string;
  subheader: string;
  description: string;
  contentBackgroundColor: string;
  websiteUrl: string;
  opnInExternalBrowser?: false;
  displayOrder?: number;
  isActive?: boolean;
  backgroundImageUrl: File | null;
  iconImageUrl: File | null;
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

export type TileImageUpload = {
  file: File | null;
};
type ImageUploadPayload = {
  payload: TileImageUpload;
  id: string;
};
export const UploadTileBgImage = async ({
  payload,
  id,
}: ImageUploadPayload) => {
  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (value !== null) {
      formData.append(key, value as Blob | string);
    }
  });
  return await apiRequest<TileUploadResponse>({
    url: API_URLS.Tiles + `/${id}` + '/background-image',
    method: 'POST',
    data: formData,
  });
};
