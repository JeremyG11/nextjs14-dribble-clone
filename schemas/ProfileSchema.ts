import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  username: z.string().min(4, {
    message: "Username is required and should be minimum 4 characters long",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const SigninSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const ProfileImageSchema = z.object({
  image: z.string().url({
    message: "Invalid image url",
  }),
});
