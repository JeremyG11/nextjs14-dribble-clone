import React from "react";

import { User } from "@prisma/client";
import { General } from "./EditBlocks/Edit.general";
import { EditProfileBlock } from "./EditBlocks/Edit.profile";

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
  profile: User;
};

export default function FieldsRenderer({
  title,
  profile,
}: FieldsRendererProps) {
  const titleMap = {
    General: <General profile={profile} />,
    "Edit Profile": <EditProfileBlock profile={profile} />,
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
