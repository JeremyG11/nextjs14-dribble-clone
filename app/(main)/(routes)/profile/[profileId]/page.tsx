import React from "react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Button } from "@/components/shared/Button";
import DropDown from "@/components/shared/DropDown";
import TooltipButton from "@/components/shared/Tooltip";
import ButtonTabs from "@/components/Profile/ButtonTabs";
import { currentUser } from "@/libs/auth/getCurrentUser";
import EditButton from "@/components/Profile/Edit/EditButton";

export default async function Profile() {
  const profile = await currentUser();
  if (!profile) {
    return redirect("/signin");
  }
  const shots = await prisma?.shot.findMany({
    take: 8,
    include: {
      user: true,
    },
  });

  return (
    <main>
      <div className="py-14 flex justify-center max-w-screen-xl mx-auto px-4  md:px-8 ">
        <div className="relative rounded-full h-10 w-10 xl:w-32 xl:h-32 xl:mx-10">
          <Image
            src={profile.image as string}
            alt=""
            className="rounded-full"
            fill
          />
        </div>

        <div className="py-3">
          <div className="max-w-xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Gatwech Tap Nguth
            </h3>
            <p className="mt-3 text-gray-600">Addis Ababa</p>
          </div>
          <div className="flex gap-3 items-center mt-4 ">
            <EditButton />
            <DropDown />

            {!profile.stripeCustomerId && (
              <TooltipButton
                className="hidden peer-hover:flex absolute max-h-24  peer-hover:items-center peer-hover:justify-center w-64 p-2 text-white -translate-x-1/2 bg-black rounded-md -top-32 left-1/2"
                description={
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <p className="line-clamp-3 text-center">
                      Your account is only visible to logged in users and cannot
                      be followed or discovered in public feeds
                    </p>
                    <Link href="#" className="underline">
                      Learn more
                    </Link>
                  </div>
                }
              >
                <Button className="cursor-pointer font-bold text-xs p-2 px-3 bg-indigo-50 text-indigo-500 uppercase xl:block rounded-full">
                  Limitted account
                </Button>
              </TooltipButton>
            )}
          </div>
        </div>
      </div>
      <ButtonTabs shots={shots ?? []} />
    </main>
  );
}
