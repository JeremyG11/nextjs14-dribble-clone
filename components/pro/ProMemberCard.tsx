import React from "react";
import Avatar from "../shared/Avatar";
import ButtonBage from "../shared/ButtonBage";

interface ProMemberCardProps {
  member: {
    media: {
      src: string;
    };
    skills: string[];
  };
}

export default function ProMemberCard({ member }: ProMemberCardProps) {
  return (
    <li className="relative mx-3 w-96 h-44 rounded-2xl overflow-hidden bg-white ">
      <div className=" space-y-5 p-8">
        <div className="flex items-center">
          <Avatar imageUrl={member.media.src} className="w-20 h-20 " />
          <div className="ml-6 w-full">
            <span className="bg-black uppercase py-0.5 font-medium px-1.5 text-xs rounded text-white">
              Pro
            </span>
            <div className="mt-4">
              <div className="w-3/4 p-[3px] my-1 rounded-full bg-gray-100" />
              <div className="w-full p-[3px] my-2 rounded-full bg-gray-100" />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-nowrap">
          {member.skills.map((skill) => (
            <ButtonBage
              key={skill}
              text={skill}
              className="bg-gray-100 border-none mr-2 p-0.5 text-sm px-3"
            />
          ))}
        </div>
      </div>
    </li>
  );
}
