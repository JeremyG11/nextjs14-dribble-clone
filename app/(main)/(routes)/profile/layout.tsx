import React from "react";
import { redirect } from "next/navigation";

import Navbar from "@/components/Navbar";
import { currentUser } from "@/libs/auth/getCurrentUser";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await currentUser();
  if (!profile) {
    redirect("/signin");
  }
  console.log(profile);
  return (
    <div className="w-full ">
      <Navbar profile={profile} />
      <div className="xl:px-16">{children}</div>
    </div>
  );
}
