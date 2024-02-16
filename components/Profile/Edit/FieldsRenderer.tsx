"use client";
import React from "react";
import { Profile } from "@prisma/client";

import InputField from "@/components/shared/InputField";
import TextField from "@/components/shared/TextField.";
import Image from "next/image";
import { Button } from "@/components/shared/Button";

type FieldsRendererProps = {
  title:
    | "General"
    | "Edit Profile"
    | "Password"
    | "Social Profiles"
    | "Email Notifications"
    | "Billing"
    | "Sessions"
    | "Applications"
    | "Data Export"
    | "Delete Account";
  profile: Profile;
};

export default function FieldsRenderer({
  title,
  profile,
}: FieldsRendererProps) {
  const titleMap = {
    General: <General profile={profile} />,
    "Edit Profile": <EditProfile profile={profile} />,
    Password: <div>Password</div>,
    "Social Profiles": <div>Social Profiles</div>,
    "Email Notifications": <div>Email Notifications</div>,
    Billing: <div>Billing</div>,
    Sessions: <div>Sessions</div>,
    Applications: <div>Applications</div>,
    "Data Export": <div>Data Export</div>,
    "Delete Account": <div>Delete Account</div>,
  };

  return titleMap[title] || null;
}

type GeneralProps = {
  profile: Profile;
};

const General: React.FC<GeneralProps> = ({ profile }) => {
  return (
    <div>
      <InputField
        label="Username"
        placeholder={profile?.name?.split(" ")?.join()}
      />
      <InputField label="Email" placeholder={profile?.email} />
    </div>
  );
};

const EditProfile: React.FC<GeneralProps> = ({ profile }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <div className="relative rounded-full h-20 w-20">
          <Image src={profile.imageUrl} alt="" className="rounded-full" fill />
        </div>
        <div className="mx-4">
          <Button className="text-sm py-2 px-6 font-medium text-gray-900  xl:block rounded-full border border-gray-200">
            Upload new picture
          </Button>
        </div>
        <div className="">
          <Button className="text-sm py-2 px-6 font-medium text-gray-900  xl:block rounded-full bg-gray-100">
            Delete
          </Button>
        </div>
      </div>
      <InputField
        label="Name"
        placeholder={profile?.name?.split(" ")?.join()}
      />
      <InputField label="Email" placeholder={profile?.email} />
      <InputField
        label="Location"
        placeholder={profile?.address || "eg. Addis Ababa"}
      />
      <TextField rows={4} label="Bio" />

      <h2>ONLINE PRESENCE</h2>
    </div>
  );
};
