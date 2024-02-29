import { prisma } from "@/libs/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    const profile = await prisma.user.findUnique({ where: { email } });
    return profile;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const profile = await prisma.user.findUnique({ where: { id } });
    return profile;
  } catch {
    return null;
  }
};
