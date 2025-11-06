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
    username: z
      .string()
      .min(3, 'registration.form.username.error.minContent')
      .max(30, 'registration.form.username.error.maxContent'),
    firstName: z
      .string()
      .min(2, 'registration.form.firstName.error.minContent')
      .max(50, 'registration.form.firstName.error.maxContent'),
    lastName: z
      .string()
      .min(2, 'registration.form.lastName.error.minContent')
      .max(50, 'registration.form.lastName.error.maxContent'),
    password: z
      .string()
      .min(6, 'registration.form.password.error.minContent')
      .max(50, 'registration.form.password.error.maxContent'),
    confirmPassword: z
      .string()
      .min(1, 'registration.form.confirmPassword.error.required'),
    acceptPolicy: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'registration.form.confirmPassword.error.mismatch',
    path: ['confirmPassword'],
  })
  .refine((data) => data.acceptPolicy === true, {
    message: 'registration.general.mustAcceptTermsAndPrivacy',
    path: ['acceptPolicy'],
  });

export type RegisterForm = z.infer<typeof registerSchema>;
