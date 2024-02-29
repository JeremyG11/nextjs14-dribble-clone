"use client";
import { z } from "zod";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useTransition } from "react";

import { cn } from "@/libs/utils/tw.util";
import { Button } from "@/components/shared/Button";
import { SignUpSchema } from "@/schemas/ProfileSchema";
import InputField from "@/components/shared/InputField";
import GoogleIcon from "@/components/shared/GoogleIcon";
import DividerLine from "@/components/shared/DividerLine";

export default function SignInForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, formState } = useForm<
    z.infer<typeof SignUpSchema>
  >({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    console.log("values", values);
  };

  return (
    <div className="hide-scroll-bar max-w-2xl w-full overflow-y-auto">
      <h1 className="max-w-md py-8 mx-auto font-bold text-black text-2xl ">
        Sign in to Dribble
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md space-y-4 mx-auto text-gray-600"
      >
        <div className="space-y-6 ">
          <Button
            onClick={() => signIn("google")}
            type="submit"
            className={cn(
              "px-3 py-2.t md:py-4 md:px-6 w-full flex items-center justify-center gap-x-4 text-sm border-[1px]",
              formState.isSubmitting && "cursor-not-allowed bg-opacity-70"
            )}
          >
            <GoogleIcon />
            <p className=" font-bold text-black ">Sign in with Google</p>
          </Button>
          <DividerLine height={1}>
            or sign in with email
            <p className="mt-2 font-light text-sm text-center "></p>
          </DividerLine>
          <InputField
            {...register("email")}
            disabled={isPending}
            type="email"
            label="Username or Email"
            labelClassName="font-bold text-gray-800"
          />

          <InputField
            {...register("password")}
            type="password"
            label="Password"
            labelClassName="font-bold text-gray-800"
          />
        </div>
        <span className="w-full flex justify-end text-sm">
          <Link href="#" className="mx-1 font-light underline">
            Forgot password?
          </Link>
        </span>

        <Button
          disabled={isPending}
          type="submit"
          className={cn(
            "px-3 py-2.t md:py-4 md:px-6 w-full capitalize font-bold text-white text-sm bg-primary",
            formState.isSubmitting && "cursor-not-allowed bg-opacity-70"
          )}
        >
          Sign in
        </Button>
        <p className="mt-2 font-light text-sm text-center ">
          Don&apos;t have an account?
          <Link href="#" className="mx-1 font-light underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
