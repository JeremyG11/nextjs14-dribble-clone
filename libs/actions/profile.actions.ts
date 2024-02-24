import axios from "axios";
import { auth } from "@clerk/nextjs";

export const updateUserProfilePicture = async (formData: FormData) => {
  const { userId } = auth();
  try {
    if (!userId) {
      throw new Error("Unauthorized");
    }
    await axios.patch(`/api/profile`, {
      method: "PATCH",
      body: formData,
    });
  } catch (error) {
    console.error(error);
  }
};
