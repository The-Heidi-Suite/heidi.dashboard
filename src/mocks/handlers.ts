import API_URLS from '@/api/apiURl';
import {
  ProfileSuccessData,
  UpdateProfileSuccess,
} from '@/mocks/responses/account';
import {
  AdminDeleteSuccessResponse,
  AdminListingsResponse,
} from '@/mocks/responses/adminListings';
import { CreateAdminResponse } from '@/mocks/responses/createAdmin';
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

const {
  LogIn,
  LogOut,
  Register,
  RefreshToken,
  UpdateUserPassword,
  GetAllTiles,
} = API_URLS;

// ✅ Handlers
export const handlers = [
  fetchApi(LogIn, 'post', SuccessUserResponse, 'success'),
  fetchApi('signin/error', 'post', ErrorUserResponse, 'error'),
  fetchApi(Register, 'post', RegisterSuccessResponse, 'success'),
  fetchApi('users/:id', 'patch', RegisterSuccessResponse, 'success'),
  fetchApi('create-admin', 'post', CreateAdminResponse, 'success'),
  fetchApi('register/error', 'post', RegisterErrorResponse, 'error'),
  fetchApi(GetAllTiles, 'get', TileListingsResponse, 'success', 1500),
  fetchApi('adminListings', 'get', AdminListingsResponse, 'success', 1500),
  fetchApi(
    'adminListings/:id',
    'delete',
    AdminDeleteSuccessResponse,
    'success',
    3000
  ),
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
  fetchApi(LogOut, 'post', LogoutUserResponse, 'success'),
  fetchApi('profile/me', 'get', ProfileSuccessData, 'success', 1000),
  // fetchApi('profile', 'get', ErrorUserResponse, 'error', 1000, 401),
  fetchApi(RefreshToken, 'get', RefreshSuccess, 'success'),
  fetchApi('profile', 'put', UpdateProfileSuccess, 'success', 1000),
  fetchApi('profile', 'delete', ProfileSuccessData, 'success', 2000),
  fetchApi(UpdateUserPassword, 'post', UpdateProfileSuccess, 'success', 1000),
  fetchApi('profile/metadata', 'put', UpdateProfileSuccess, 'success', 1000),
  fetchApi('verify-reset-token', 'get', UpdateProfileSuccess, 'success', 6000),
];
