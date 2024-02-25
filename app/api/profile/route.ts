import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";
import { currentUser, getAuth } from "@clerk/nextjs/server";

export async function PATCH(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    const user = await currentUser();
    const updates = await req.json();
    console.log("UserId", user, userId);
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
