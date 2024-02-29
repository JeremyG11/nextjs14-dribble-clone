"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { prisma } from "@/libs/prisma";
// import { sendVerificationEmail } from "@/lib/mail";
// import { generateVerificationToken } from "@/lib/tokens";

import axios from "axios";
import { getUserByEmail } from "@/libs/auth";
import { SignUpSchema } from "@/schemas/ProfileSchema";

export const updateUserProfilePicture = async (data: { image: string }) => {
  const validatedFields = SignUpSchema.safeParse(data);
  if (!validatedFields.success) {
    console.log(validatedFields.error);
  }
  try {
    const res = await axios.get(`http://localhost:3000/api/profile`, {
      data,
    });
    return res.data;
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
