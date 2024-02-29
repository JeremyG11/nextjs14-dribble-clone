"use server";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { auth } from "@/auth";
import { prisma } from "@/libs/prisma";
import { ShotSchema } from "@/schemas/ShotSchema";
import { currentUser } from "@/libs/auth/getCurrentUser";

export const createShot = async (data: {}) => {
  try {
    const user = await currentUser();
    if (!user || !user.id) {
      throw new Error("Unauthorized");
    }

    // validate the fields of the shot
    const validatesFields = ShotSchema.safeParse(data);

    if (!validatesFields.success) {
      return {
        erorr: validatesFields.error.flatten().fieldErrors,
        mesage: "Invalid fields! Shot couldn't be created",
      };
    }
    //  get the fields
    const { title } = validatesFields.data;

    // create a shot with draft status
    const shot = await prisma.shot.create({
      data: {
        userId: user.id,
        title,
      },
    });
    revalidatePath(`/shots`);
    return {
      success: true,
      message: "Shot created successfully",
      shot,
    };
  } catch (error: any) {
    return new NextResponse("Shot Creation Error", { status: 500 });
  }
};
// Publish shot
export const publishShot = async (
  id: string,
  files: string[],
  gallery: any,
  atlTexts: { [key: string]: string[] }
) => {
  const user = await currentUser();
  if (!user || !user.id) {
    throw new Error("Unauthorized");
  }
  console.log("atlTexts", atlTexts);
  try {
    const shot = await prisma.shot.findFirst({
      where: {
        id: id,
      },
    });
    if (!shot) {
      throw new Error("Shot not found");
    }
    const user = await currentUser();
    if (!user || !user.id) {
      throw new Error("Unauthorized");
    }
    // updates
    const publishedShot = await prisma.shot.update({
      where: {
        id: shot.id,
      },
      data: {
        status: "PUBLISHED",
        gallery: gallery,
        files: files,
        atlTexts,
      },
    });
    return {
      success: true,
      shot: publishedShot,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
