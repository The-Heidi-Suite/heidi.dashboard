import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z
      .string()
      .min(3, 'invalidMail')
      .or(
        z
          .email('invalidMail')
          .min(3, 'minContainInMail')
          .max(50, 'maxContentInMail')
      ),
    userName: z
      .string()
      .min(3, 'usernameMinLength')
      .max(30, 'usernameMaxLength'),
    password: z
      .string()
      .min(6, 'passwordMinLength')
      .max(50, 'passwordMaxLength'),
    confirmPassword: z.string().min(1, 'confirmPasswordRequired'),
    acceptPolicy: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'passwordsDoNotMatch',
    path: ['confirmPassword'],
  })
  .refine((data) => data.acceptPolicy === true, {
    message: 'mustAcceptTermsAndPrivacy',
    path: ['acceptPolicy'],
  });

export type RegisterForm = z.infer<typeof registerSchema>;
