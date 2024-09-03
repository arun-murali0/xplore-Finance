import { z } from 'zod';

export const userLogin = z.object({
  email: z
    .string()
    .email({ message: 'Invalid Email' })
    .min(1, { message: 'Please Enter the Email' }),
  password: z
    .string()
    .refine(
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/.test(value),
      {
        message:
          'Password should be minimum 8 character long and must contain uppercase, lowercase, digits, and special characters',
      }
    ),
});

export type userLoginSchema = z.infer<typeof userLogin>;
