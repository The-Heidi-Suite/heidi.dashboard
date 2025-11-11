import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  AdminListingsQueryParams,
  createAdmin,
  deleteAdminListing,
  getAdminListings,
} from '@/api/endpoints';
import i18n from '@/i18n';

export const useGetAdminListings = (queryParams: AdminListingsQueryParams) =>
  useQuery({
    queryKey: ['adminListings', queryParams, i18n.language],
    queryFn: () => getAdminListings(queryParams),
  });

export const useDeleteAdminListing = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAdminListing,
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ['adminListings'] });
      }
    },
  });
};

export const useCreateAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createAdmin,
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ['adminListings'] });
      }
    },
  });
};
