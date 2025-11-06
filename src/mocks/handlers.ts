import {
  ProfileSuccessData,
  UpdateProfileSuccess,
} from '@/mocks/responses/account';
import { RefreshSuccess } from '@/mocks/responses/refreshToken';
import {
  RegisterErrorResponse,
  RegisterSuccessResponse,
} from '@/mocks/responses/register';
import {
  ErrorUserResponse,
  LogoutUserResponse,
  SuccessUserResponse,
} from '@/mocks/responses/signIn';
import {
  TileDeleteSuccessResponse,
  TileListingsResponse,
} from '@/mocks/responses/tileListings';
import { fetchApi } from '@/mocks/utils/fetchApi';

import {
  TileUploadCreateErrorResponse,
  TileUploadCreateSuccessResponse,
  TileUploadEditErrorResponse,
  TileUploadEditSuccessResponse,
} from './responses/tileUpload';

// ✅ Handlers
export const handlers = [
  fetchApi('signin', 'post', SuccessUserResponse, 'success'),
  fetchApi('signin/error', 'post', ErrorUserResponse, 'error'),
  fetchApi('register', 'post', RegisterSuccessResponse, 'success'),
  fetchApi('register/error', 'post', RegisterErrorResponse, 'error'),
  fetchApi('tileListings', 'get', TileListingsResponse, 'success', 1500),
  fetchApi(
    'tileListings/:id',
    'delete',
    TileDeleteSuccessResponse,
    'success',
    3000
  ),
  fetchApi(
    'tileUploads',
    'post',
    TileUploadCreateSuccessResponse,
    'success',
    1500
  ),
  fetchApi(
    'tileUploads/error',
    'post',
    TileUploadCreateErrorResponse,
    'error',
    1500
  ),
  fetchApi(
    'tileUploads/:id',
    'put',
    TileUploadEditSuccessResponse,
    'success',
    1500
  ),
  fetchApi(
    'tileUploads/:id/error',
    'put',
    TileUploadEditErrorResponse,
    'error',
    1500
  ),
  fetchApi('logout', 'get', LogoutUserResponse, 'success'),
  fetchApi('profile', 'get', ProfileSuccessData, 'success', 1000),
  // fetchApi('profile', 'get', ErrorUserResponse, 'error', 1000, 401),
  fetchApi('refresh-token', 'get', RefreshSuccess, 'success'),
  fetchApi('profile', 'put', UpdateProfileSuccess, 'success', 1000),
  fetchApi('profile', 'delete', ProfileSuccessData, 'success', 2000),
  fetchApi('profile/password', 'put', UpdateProfileSuccess, 'success', 1000),
  fetchApi('profile/metadata', 'put', UpdateProfileSuccess, 'success', 1000),
  fetchApi('verify-reset-token', 'get', UpdateProfileSuccess, 'success', 6000),
];
