import { ApiErrorResponse, ApiSuccessResponse } from '@/api/api.type';
import { TileListingDataResponse } from '@/api/endpoints/tileListings';

type SuccessResponse = ApiSuccessResponse<TileListingDataResponse>;

const TileListingsResponse: SuccessResponse = {
  success: true,
  data: {
    totalPages: 30,
    page: 1,
    data: [
      {
        id: 1,
        tileName: 'Kachelverwaltung',
        tileIcon: 'https://i.pravatar.cc/300?u=1',
        description: 'Verwalten Sie Ihre Kacheln',
        bgImage: 'https://picsum.photos/200',
        status: 'ACTIVE',
      },
      {
        id: 2,
        tileName: 'Stadtverwaltung',
        tileIcon: 'https://i.pravatar.cc/300?u=2',
        description: 'Verwalten Sie Ihre Stadt',
        bgImage: 'https://picsum.photos/201',
        status: 'ACTIVE',
      },
      {
        id: 3,
        tileName: 'Konten',
        tileIcon: 'https://i.pravatar.cc/300?u=3',
        description: 'Verwalten Sie Ihre Konten',
        bgImage: 'https://picsum.photos/202',
        status: 'ACTIVE',
      },
      {
        id: 4,
        tileName: 'Kachel-Upload',
        tileIcon: 'https://i.pravatar.cc/300?u=4',
        description: 'Laden Sie Ihre Kacheln hoch',
        bgImage: 'https://picsum.photos/203',
        status: 'ACTIVE',
      },
      {
        id: 5,
        tileName: 'Kachel-Liste',
        tileIcon: 'https://i.pravatar.cc/300?u=5',
        description: 'Listen Sie Ihre Kacheln',
        bgImage: 'https://picsum.photos/204',
        status: 'ACTIVE',
      },
      {
        id: 6,
        tileName: 'Kachel-Liste',
        tileIcon: 'https://i.pravatar.cc/300?u=6',
        description: 'Listen Sie Ihre Kacheln',
        bgImage: 'https://picsum.photos/205',
        status: 'ACTIVE',
      },
      {
        id: 7,
        tileName: 'Kachel-Liste',
        tileIcon: 'https://i.pravatar.cc/300?u=7',
        description: 'Listen Sie Ihre Kacheln',
        bgImage: 'https://picsum.photos/206',
        status: 'ACTIVE',
      },
      {
        id: 8,
        tileName: 'Kachel-Liste',
        tileIcon: 'https://i.pravatar.cc/300?u=8',
        description: 'Listen Sie Ihre Kacheln',
        bgImage: 'https://picsum.photos/207',
        status: 'ACTIVE',
      },
    ],
  },
};

const ErrorTileListingsResponse: ApiErrorResponse = {
  success: false,
  error: 'Wrong Password',
  code: 'INTERNAL_SERVER_ERROR',
  status: 500,
};

const TileDeleteSuccessResponse: ApiSuccessResponse<unknown> = {
  data: undefined,
  message: 'Successfully Deleted',
  success: true,
  status: 200,
};

const TileDeleteErrorResponse: ApiErrorResponse = {
  error: 'Failed to Delete Tile',
  code: 'INTERNAL_SERVER_ERROR',
  status: 500,
  success: false,
};

export {
  ErrorTileListingsResponse,
  TileDeleteErrorResponse,
  TileDeleteSuccessResponse,
  TileListingsResponse,
};
