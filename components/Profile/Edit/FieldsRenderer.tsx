import React from "react";

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
};

export default function FieldsRenderer({ title }: FieldsRendererProps) {
  const titleMap = {
    General: <div>General</div>,
    "Edit Profile": <div>Edit Profile</div>,
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
