import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  createTileUpload,
  editTileUpload,
  TileUploadPayload,
} from '@/api/endpoints/tileUpload';

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
