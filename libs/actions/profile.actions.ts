"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { prisma } from "@/libs/prisma";
// import { sendVerificationEmail } from "@/lib/mail";
// import { generateVerificationToken } from "@/lib/tokens";

import { getUserByEmail } from "@/libs/auth";
import { currentUser } from "../auth/getCurrentUser";
import { SignUpSchema, ProfileImageSchema } from "@/schemas/ProfileSchema";
import { revalidatePath } from "next/cache";

export const updateUserProfilePicture = async (
  values: z.infer<typeof ProfileImageSchema>
) => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not found!");
    }
    const validatedFields = ProfileImageSchema.safeParse(values);
    if (!validatedFields.success) {
      console.log(validatedFields.error);
      return { error: "Invalid fields!" };
    }
    const { image } = validatedFields.data;
    const updateProfile = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        image,
      },
    });
    console.log(updateProfile);
    revalidatePath("/profile/edit");
  } catch (error: any) {
    console.error("ERROR SERV", error.message);
  }
};

export const signupUser = async (values: z.infer<typeof SignUpSchema>) => {
  try {
    const validatedFields = SignUpSchema.safeParse(values);

    if (!validatedFields.success) {
      throw new Error("Invalid fields!");
    }

    const { email, username, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userXists = await getUserByEmail(email);

    if (userXists) {
      throw new Error("Email already in use!");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        username,
        password: hashedPassword,
      },
    });
    // const verificationToken = await generateVerificationToken(email);
    // await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return { success: true, user, message: "User registered successfully!" };
  } catch (error: any) {
    console.error("ERROR SERV", error.message);
    return { error: "Something went wrong!" };
  }
};
