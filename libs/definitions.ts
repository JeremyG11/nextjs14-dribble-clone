import { User, Shot } from "@prisma/client";

export type ShotWithProfile = Shot & {
  user: User;
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
