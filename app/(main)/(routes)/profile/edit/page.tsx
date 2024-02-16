import React from "react";
import { redirect } from "next/navigation";

import { authProfile } from "@/libs/auth.user";
import EditContent from "@/components/Profile/Edit/Edit";
import EditNavbar from "@/components/Profile/Edit/EditNavbar";

export default async function EditProfile() {
  const profile = await authProfile();

  if (!profile) {
    return redirect("/sign-in");
  }
  return <EditContent profile={profile} />;
}
