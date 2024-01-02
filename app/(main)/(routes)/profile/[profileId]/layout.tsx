import React from "react";
import { redirect } from "next/navigation";

import Navbar from "@/components/Navbar";
import { getAuthUser } from "@/libs/auth.user";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await getAuthUser();
  if (!profile) {
    redirect("/signin");
  }
  return (
    <div className="w-full ">
      <Navbar profile={profile} />
      <div className="xl:px-16">{children}</div>
    </div>
  );
}
