import { auth } from "@clerk/nextjs";
import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { userId } = auth();
    const updates = await req.json();
    if (!userId) {
      throw new Error("Unauthorized");
    }
    const profile = await prisma.profile.findFirst({
      where: {
        userId,
      },
    });

    if (!profile || profile.userId !== userId) {
      throw new Error("Profile not found");
    }
    await prisma.profile.update({
      where: {
        userId: profile.userId,
      },
      data: {
        ...updates,
      },
    });

    return new NextResponse("Profile Patched", { status: 200 });
  } catch (error: any) {
    return new NextResponse("Profile Patch Error", { status: 500 });
  }
}
