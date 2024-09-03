import { z } from 'zod';

export const userRegister = z
  .object({
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
    confirmPassword: z
      .string()
      .min(1, { message: 'should contain atleast 8 character long' }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        message: "Passwords doesn't match",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type userLoginSchema = z.infer<typeof userRegister>;
