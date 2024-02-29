import React from "react";
import { redirect } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { currentUser } from "@/libs/auth/getCurrentUser";

export default async function DefaultLayout({
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
    <div>
      <Navbar profile={profile} />
      {children}
      <Footer />
    </div>
  );
}
