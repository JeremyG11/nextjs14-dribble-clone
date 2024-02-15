import React from "react";
import { redirect } from "next/navigation";

import { authProfile } from "@/libs/auth.user";
import EditNavbar from "@/components/Profile/Edit/EditNavbar";
import FieldsRenderer from "@/components/Profile/Edit/FieldsRenderer";

export default async function EditProfile() {
  const profile = await authProfile();
  if (!profile) {
    return redirect("/sign-in");
  }
  return (
    <>
      <EditNavbar
        profile={profile}
        title="General"
        subtitle="Update your username and manage your account"
      />
      <div className="pt-8 flex justify-between max-w-5xl mx-auto px-4  md:px-8 ">
        <ul className="w-full xl:w-1/4">
          {[
            { title: "General" },
            { title: "Edit Profile" },
            { title: "Password" },
            { title: "Social Profiles" },
            { title: "Email Notifications" },
            { title: "Billing" },
            { title: "Sessions" },
            { title: "Applications" },
            { title: "Data Export" },
          ].map((item, i) => (
            <li key={i} className="py-1">
              {item.title}
            </li>
          ))}
          <li className="text-red-500 py-4 my-4 border-t">Delete Account</li>
        </ul>
        <div className="w-full rounded py-2 px-10 flex items-center justify-center flex-col hover:bg-gray-100 hover:text-primary">
          <FieldsRenderer title="General" />
        </div>
      </div>
    </>
  );
}
