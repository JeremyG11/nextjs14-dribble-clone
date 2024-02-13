import { Profile, Shot } from "@prisma/client";

export type ShotWithProfile = Shot & {
  profile: Profile;
};
