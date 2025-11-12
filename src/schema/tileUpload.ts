import { z } from 'zod';

export const tileUploadSchema = z.object({
  tileName: z
    .string()
    .min(2, { message: 'formMessages.uploadField.errorName.minLength' })
    .max(50, { message: 'formMessages.uploadField.errorName.maxLength' }),

  redirectUrl: z
    .string()
    .min(2, { message: 'formMessages.uploadField.errorName.redirectUrl' }),

  titleColor: z
    .string()
    .min(1, { message: 'formMessages.uploadField.errorName.titleColor' }),

  tileIcon: z
    .instanceof(File)
    .or(z.null())
    .refine((file) => file !== null, {
      message: 'formMessages.uploadField.errorName.tileIcon',
    }),

  subHeader: z
    .string()
    .min(2, { message: 'formMessages.uploadField.errorName.subHeader' })
    .max(50, { message: 'formMessages.uploadField.errorName.subHeaderMax' }),

  tileDescription: z
    .string()
    .min(10, { message: 'formMessages.uploadField.errorName.tileDescription' }),

  tileDescriptionColor: z.string().min(1, {
    message: 'formMessages.uploadField.errorName.titleDescriptionColor',
  }),

  tileImage: z
    .instanceof(File)
    .or(z.null())
    .refine((file) => file !== null, {
      message: 'formMessages.uploadField.errorName.tileImage',
    }),
});

export type TileUploadForm = z.infer<typeof tileUploadSchema>;
