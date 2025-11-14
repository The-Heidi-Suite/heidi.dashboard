import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  createTileUpload,
  editTileUpload,
  getTile,
  TileUploadPayload,
} from '@/api/endpoints/tileUpload';
import i18n from '@/i18n';

export const useCreateTileUpload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTileUpload,
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ['tileListings'] });
      }
    },
  });
};

export const useEditTileUpload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      tileId,
      payload,
    }: {
      tileId: number | string;
      payload: TileUploadPayload;
    }) => editTileUpload(tileId, payload),
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ['tileListings'] });
      }
    },
  });
};

export const useGetTile = (id: string | number) => {
  return useQuery({
    queryKey: ['userGetTile', i18n.language],
    queryFn: () => getTile(id),
  });
};
