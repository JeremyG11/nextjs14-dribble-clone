import React from "react";

import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer/Footer";
import { authProfile } from "@/libs/auth.user";
import { redirectToSignIn } from "@clerk/nextjs";
export default async function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await authProfile();
  if (!profile) {
    return redirectToSignIn();
  }
  return (
    <div>
      <Navbar profile={profile} />
      {children}
      <Footer />
    </div>
  );
}
