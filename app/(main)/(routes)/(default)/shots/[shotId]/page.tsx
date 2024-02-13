import React from "react";
import { prisma } from "@/libs/prisma";
import ShotDetailPage from "@/components/shared/ShotDetailPage";

export default async function ShotPage({
  params,
}: {
  params: { shotId: string };
}) {
  const shot = await prisma.shot.findUnique({
    where: {
      id: params.shotId,
    },
    include: {
      profile: true,
    },
  });
  if (!shot) {
    return {
      notFound: true,
    };
  }

  return <ShotDetailPage shot={shot} />;
}
