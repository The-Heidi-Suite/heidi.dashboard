import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UploadTileBgImage } from '@/api/endpoints/imageUpload';

export const useUploadImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: UploadTileBgImage,
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ['adminListings'] });
      }
    },
  });
};
