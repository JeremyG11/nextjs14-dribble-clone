import React from "react";
import { redirect } from "next/navigation";

import { authProfile } from "@/libs/auth.user";
import EditContent from "@/components/Profile/Edit/Edit";

export default async function EditProfile() {
  const profile = await authProfile();

  if (!profile) {
    return redirect("/sign-in");
  }
  return <EditContent profile={profile} />;
}
