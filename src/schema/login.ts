import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(3, 'minContentInMail')
    .max(50, 'maxContentInMail')
    .regex(/^\S+$/, 'Email or Username must not contain spaces'), // Allows either valid email or username pattern
  password: z
    .string()
    .min(6, 'registration.form.password.error.minContent')
    .max(50, 'registration.form.password.error.maxContent')
    .regex(/^\S+$/, 'Password must not contain spaces'), // Allows either valid email or username pattern
  rememberMe: z.boolean(),
});

export type LoginForm = z.infer<typeof loginSchema>;
