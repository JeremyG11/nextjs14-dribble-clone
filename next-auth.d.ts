import { User } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  user: User;
};

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
