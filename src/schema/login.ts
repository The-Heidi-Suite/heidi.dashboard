import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(3, 'invalidMail')
    .or(
      z
        .email('invalidMail')
        .min(3, 'minContainInMail')
        .max(50, 'maxContentInMail')
    ),
  password: z.string().min(1, 'passwordRequired'),
  rememberMe: z.boolean(),
});

export type LoginForm = z.infer<typeof loginSchema>;
