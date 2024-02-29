"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useState } from "react";

import { cn } from "@/libs/utils/tw.util";
import { Button } from "@/components/shared/Button";
import GoogleIcon from "@/components/shared/GoogleIcon";
import DividerLine from "@/components/shared/DividerLine";

const DynamicSignUpFrom = dynamic(() => import("@/components/auth/SignUpFrom"));

export default function SignUpOptions() {
  const [isFormActive, setIsFormActive] = useState<boolean>(false);

  return isFormActive ? (
    <DynamicSignUpFrom />
  ) : (
    <div className="flex flex-col justify-center items-center hide-scroll-bar max-w-2xl w-full overflow-y-auto">
      <h1 className="max-w-md w-full text-start py-8 mx-auto font-bold text-black text-2xl ">
        Sign up to Dribbble
      </h1>
      <div className="max-w-md w-full space-y-6 mx-auto text-gray-600">
        <div className="space-y-4">
          <Button
            type="submit"
            className={cn(
              "px-3 py-2.t md:py-4 md:px-6 w-full flex items-center justify-center gap-x-4 text-sm bg-primary"
            )}
          >
            <GoogleIcon />
            <p className=" font-bold text-white ">Sign in with Google</p>
          </Button>
        </div>
        <DividerLine height={1}>
          or
          <p className="mt-2 font-light text-sm text-center "></p>
        </DividerLine>

        <Button
          onClick={() => setIsFormActive(true)}
          type="submit"
          className={cn(
            "px-3 py-2.t md:py-4 md:px-6 w-full font-bold text-black text-sm border-[1px]"
          )}
        >
          Continue with email
        </Button>
        <div className="flex flex-nowrap justify-evenly gap-x-3">
          <span className="w-full  text-xs text-center">
            By creating an account you agree with ou
            <Link href="#" className="mx-1 font-light underline">
              Terms of Service
            </Link>
            ,
            <Link href="#" className="mx-1 font-light underline">
              Privacy Policy
            </Link>
            , and default
            <Link href="#" className="mx-1 font-light underline">
              Notification Settings
            </Link>
            .
          </span>
        </div>
        <p className="mt-2 font-light text-sm text-center ">
          Don&apos;t have an account?
          <Link href="#" className="mx-1 font-light underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
