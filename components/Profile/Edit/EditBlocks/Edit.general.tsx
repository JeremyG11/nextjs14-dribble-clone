"use client";
import { Profile } from "@prisma/client";
import InputField from "@/components/shared/InputField";

interface GeneralProps {
  profile: Profile;
}
export const General: React.FC<GeneralProps> = ({ profile }) => {
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
