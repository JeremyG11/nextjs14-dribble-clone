import React from "react";
import { prisma } from "@/libs/prisma";

export default async function ShotPage({
  params,
}: {
  params: { shotId: string };
}) {
  const shot = await prisma.shot.findUnique({
    where: {
      id: params.shotId,
    },
  });
  if (!shot) {
    return {
      notFound: true,
    };
  }

  return <div>{shot.title}</div>;
}
