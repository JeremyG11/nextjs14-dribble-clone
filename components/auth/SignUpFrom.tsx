"use client";
import { z } from "zod";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/libs/utils/tw.util";
import { Button } from "@/components/shared/Button";
import { SignUpSchema } from "@/schemas/ProfileSchema";
import InputField from "@/components/shared/InputField";
import { signupUser } from "@/libs/actions/profile.actions";

export default function SignUpFrom() {
  const router = useRouter();
  const { reset, control, handleSubmit, formState } = useForm<
    z.infer<typeof SignUpSchema>
  >({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {
    try {
      const response = await signupUser(values);
      if (response.success) {
        router.push(`/profile/${response.user.id}`);
      }
    } catch (error) {
      console.error("ERROR", error);
      console.log(formState.errors);
    }
  };

  return (
    <div className="hide-scroll-bar max-w-2xl w-full py-10 overflow-y-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md space-y-8 mx-auto text-gray-600"
      >
        <div className="space-y-6 ">
          <div className="flex gap-x-4">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  label="Name"
                  labelClassName="font-bold text-gray-800"
                />
              )}
            />

            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  label="Username"
                  labelClassName="font-bold text-gray-800"
                />
              )}
            />
          </div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                type="email"
                label="Email"
                labelClassName="font-bold text-gray-800"
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                placeholder="6+ characters"
                type="password"
                label="Password"
                labelClassName="font-bold text-gray-800"
              />
            )}
          />
        </div>
        <div className="flex flex-nowrap justify-evenly gap-x-3">
          {/* <Controller
            name="checkbox"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="checkbox"
                id="term-and-privacy-me-checkbox"
                className="checkbox-item peer hidden"
              />
            )}
          /> */}

          <label
            htmlFor="term-and-privacy-me-checkbox"
            className="my-1 relative flex w-5 h-5 bg-white peer-checked:bg-pink-600 rounded-md border ring-offset-2 ring-pink-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
          ></label>
          <span className="w-11/12 text-sm">
            I agree with Dribbble&apos;s
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
        <Button
          type="submit"
          className={cn(
            "px-3 py-2.t md:py-4 md:px-6 w-full capitalize font-bold text-white text-sm bg-primary",
            formState.isSubmitting && "cursor-not-allowed bg-opacity-70"
          )}
        >
          Create account
        </Button>
        <p className="mt-2 font-light text-sm text-center ">
          Already have an account?
          <Link href="#" className="mx-1 font-light underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}
