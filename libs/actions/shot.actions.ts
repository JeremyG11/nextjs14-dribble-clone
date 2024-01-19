"use server";

import { prisma } from "@/libs/prisma";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { Shot, ShotSchema } from "@/schemas/ShotSchema";

export const createShot = async (data: Shot) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const validatesFields = ShotSchema.safeParse(data);

  if (!validatesFields.success) {
    return {
      erorr: validatesFields.error.flatten().fieldErrors,
      mesage: "Invalid fields! Shot couldn't be created",
    };
  }
  //  get the fields
  const { title, files, gallery } = validatesFields.data;
  try {
    await prisma.shot.create({
      data: {
        title,
        userId,
        files: {
          create: files.map((file) => ({
            fileUrl: file.fileUrl,
            fileMeta: file.fileMeta,
            altText: file.altText,
          })),
        },
        gallery,
      },
    });
  } catch (error: any) {
    return {
      error,
      message: "Something went wrong! Shot couldn't be created",
    };
  }
  revalidatePath("/shots");
};
