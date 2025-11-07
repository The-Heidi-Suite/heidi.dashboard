import { ApiErrorResponse, ApiSuccessResponse } from '@/api/api.type';
import { TileUploadResponse } from '@/api/endpoints/tileUpload';

const TileUploadCreateSuccessResponse: ApiSuccessResponse<TileUploadResponse> = {
  success: true,
  message: 'Tile successfully created',
  status: 200,
  data: {
    success: true,
    message: 'Tile successfully created',
    data: {
      id: 101,
      tileName: 'New Dashboard Tile',
      tileIcon: 'https://i.pravatar.cc/300?u=101',
      tileDescription: 'This is a newly created tile for testing purposes.',
      titleColor: '#3B82F6',
      tileDescriptionColor: '#6B7280',
      tileImage: 'https://picsum.photos/210',
    },
  },
};

const TileUploadCreateErrorResponse: ApiErrorResponse = {
  success: false,
  error: 'Failed to create tile upload',
  code: 'INTERNAL_SERVER_ERROR',
  status: 500,
};

const TileUploadEditSuccessResponse: ApiSuccessResponse<TileUploadResponse> = {
  success: true,
  message: 'Tile successfully updated',
  status: 200,
  data: {
    success: true,
    message: 'Tile successfully updated',
    data: {
      id: 1,
      tileName: 'Updated Tile Name',
      tileIcon: 'https://i.pravatar.cc/300?u=1',
      tileDescription: 'Tile description updated successfully.',
      titleColor: '#10B981',
      tileDescriptionColor: '#374151',
      tileImage: 'https://picsum.photos/215',
    },
  },
};

const TileUploadEditErrorResponse: ApiErrorResponse = {
  success: false,
  error: 'Failed to edit tile upload',
  code: 'INTERNAL_SERVER_ERROR',
  status: 500,
};

export {
  TileUploadCreateErrorResponse,
  TileUploadCreateSuccessResponse,
  TileUploadEditErrorResponse,
  TileUploadEditSuccessResponse,
};
