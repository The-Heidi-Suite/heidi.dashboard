import { z } from 'zod';

export const tileUploadSchema = z.object({
  header: z
    .string()
    .min(2, { message: 'formMessages.uploadField.errorName.minLength' })
    .max(50, { message: 'formMessages.uploadField.errorName.maxLength' }),

  websiteUrl: z
    .string()
    .min(2, { message: 'formMessages.uploadField.errorName.redirectUrl' }),

  headerBackgroundColor: z
    .string()
    .min(1, { message: 'formMessages.uploadField.errorName.titleColor' }),

  iconImageUrl: z
    .instanceof(File)
    .or(z.null())
    .refine((file) => file !== null, {
      message: 'formMessages.uploadField.errorName.tileIcon',
    }),

  subheader: z
    .string()
    .min(2, { message: 'formMessages.uploadField.errorName.subHeader' })
    .max(50, { message: 'formMessages.uploadField.errorName.subHeaderMax' }),

  description: z
    .string()
    .min(10, { message: 'formMessages.uploadField.errorName.tileDescription' }),

  contentBackgroundColor: z.string().min(1, {
    message: 'formMessages.uploadField.errorName.titleDescriptionColor',
  }),

  backgroundImageUrl: z
    .instanceof(File)
    .or(z.null())
    .refine((file) => file !== null, {
      message: 'formMessages.uploadField.errorName.tileImage',
    }),
});

export type TileUploadForm = z.infer<typeof tileUploadSchema>;
