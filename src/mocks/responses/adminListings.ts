import { ApiErrorResponse, ApiSuccessResponse } from '@/api/api.type';
import { AdminListingDataResponse } from '@/api/endpoints/cityAdminList';
import { USER_ROLE_MAP } from '@/lib/constant';

type SuccessResponse = ApiSuccessResponse<AdminListingDataResponse>;

const AdminListingsResponse: SuccessResponse = {
  success: true,
  data: {
    totalPages: 30,
    page: 1,
    data: [
      {
        id: 1,
        email: 'admin@example.com',
        role: USER_ROLE_MAP.SUPER_ADMIN,
        createdAt: '2022-01-01T00:00:00.000Z',
        registered: true,
        citiesName: ['New York', 'Los Angeles', 'Chicago'],
      },
      {
        id: 2,
        email: 'city-admin@example.com',
        role: USER_ROLE_MAP.CITY_ADMIN,
        createdAt: '2022-01-01T00:00:00.000Z',
        registered: true,
        citiesName: ['New York', 'Los Angeles'],
      },
      {
        id: 3,
        email: 'citizen@example.com',
        role: USER_ROLE_MAP.CITIZEN,
        createdAt: '2022-01-01T00:00:00.000Z',
        registered: true,
        citiesName: ['Chicago', 'Houston'],
      },
      {
        id: 4,
        email: 'citizen2@example.com',
        role: USER_ROLE_MAP.CITIZEN,
        createdAt: '2022-01-01T00:00:00.000Z',
        registered: true,
        citiesName: ['Philadelphia', 'Phoenix'],
      },
      {
        id: 5,
        email: 'citizen3@example.com',
        role: USER_ROLE_MAP.CITIZEN,
        createdAt: '2022-01-01T00:00:00.000Z',
        registered: true,
        citiesName: ['San Antonio', 'San Diego'],
      },
    ],
  },
};

const ErrorAdminListingsResponse: ApiErrorResponse = {
  success: false,
  error: 'Wrong Password',
  code: 'INTERNAL_SERVER_ERROR',
  status: 500,
};

const AdminDeleteSuccessResponse: ApiSuccessResponse<unknown> = {
  data: undefined,
  message: 'Successfully Deleted',
  success: true,
  status: 200,
};

const AdminDeleteErrorResponse: ApiErrorResponse = {
  error: 'Failed to Delete Admin',
  code: 'INTERNAL_SERVER_ERROR',
  status: 500,
  success: false,
};

export {
  AdminDeleteErrorResponse,
  AdminDeleteSuccessResponse,
  AdminListingsResponse,
  ErrorAdminListingsResponse,
};
