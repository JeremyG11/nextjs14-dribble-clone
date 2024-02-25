"use server";
import axios from "axios";
import { auth } from "@clerk/nextjs";

export const updateUserProfilePicture = async (data: { imageUrl: string }) => {
  const { userId } = auth();
  try {
    if (!userId) {
      throw new Error("Unauthorized");
    }
    await axios.patch(`http://localhost:3000/api/profile`, {
      data,
    });
  } catch (error: any) {
    console.error(error.message);
  }
};
