import { Profile, Shot } from "@prisma/client";

export type ShotWithProfile = Shot & {
  profile: Profile;
};

export type Uploader = "imageUploader" | "videoUploader" | "galleryUploader";

export type TBoardData = {
  [key: string]: {
    files: {
      file: any;
      type: string;
      altText: string;
    }[];
  };
};

export type EditNavLinks =
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
