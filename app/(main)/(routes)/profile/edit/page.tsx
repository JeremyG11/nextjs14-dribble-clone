import React from "react";
import { redirect } from "next/navigation";

import EditContent from "@/components/Profile/Edit/Edit";
import { currentUser } from "@/libs/auth/getCurrentUser";

export default async function EditProfile() {
  const profile = await currentUser();
  if (!profile) {
    return redirect("/signin");
  }
  return <EditContent profile={profile} />;
}
