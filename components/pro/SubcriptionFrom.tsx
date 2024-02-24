"use client";
import React from "react";

import { Button } from "../shared/Button";
import { createStripeBillingSession } from "@/libs/actions/stripe";

interface SubcriptionFromProps {
  userId: string;
  email: string;
  isCurrentPlan: boolean;
  isSubscribed: boolean;
  stripeCustomerId?: string | null;
  stripePriceId: string;
}

export default function SubcriptionFrom({
  userId,
  email,
  isCurrentPlan,
  isSubscribed,
  stripeCustomerId,
  stripePriceId,
}: SubcriptionFromProps) {
  const [isPending, startTransition] = React.useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        const session = await createStripeBillingSession({
          email,
          userId,
          isSubscribed,
          isCurrentPlan,
          stripePriceId,
          stripeCustomerId,
        });
        console.log("Error", JSON.stringify(session));
        if (session) {
          window.location.href = session.url ?? "/dashboard/billing";
        }
      } catch (err) {
        console.error((err as Error).message);
        // toast({
        //   description: "Something went wrong, please try again later.",
        // });
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Button
        type="submit"
        disabled={isPending}
        className="mt-8 w-full block font-normal rounded-full bg-primary px-12 py-3 text-center text-sm text-white hover:ring-pink-700 focus:outline-none active:text-pink-500"
      >
        Get started today
      </Button>
    </form>
  );
}
