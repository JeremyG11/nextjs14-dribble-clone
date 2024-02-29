import { auth } from "@/auth";
import { stripe } from "./stripe";
import { prisma } from "./prisma";

export interface SubscriptionPlanProps {
  type: string;
  stripePriceId: string;
  price: number;
}

export const proSubscriptionPlans: SubscriptionPlanProps[] = [
  {
    type: "annual",
    stripePriceId: process.env.STRIPE_ANUAL_PRO_PRICE_ID ?? "",
    price: 8,
  },
];

export async function getUserSubscriptionPlan() {
  const session = await auth();

  if (!session) {
    throw new Error("User not found.");
  }

  console.log(
    process.env.STRIPE_ANUAL_PRO_PRICE_ID,
    "process.env.STRIPE_ANUAL_PRO_PRICE_ID"
  );
  const profile = await prisma.user.findFirst({
    where: {
      id: session?.user?.id,
    },
  });

  if (!profile) {
    throw new Error("User not found.");
  }

  const isSubscribed =
    profile.stripePriceId &&
    profile.stripeCurrentPeriodEnd &&
    profile.stripeCurrentPeriodEnd.getTime() + 86_400_000 > Date.now();

  const plan = isSubscribed
    ? proSubscriptionPlans.find(
        (plan) => plan.stripePriceId === profile.stripePriceId
      )
    : null;

  let isCanceled = false;
  if (isSubscribed && profile.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      profile.stripeSubscriptionId
    );
    isCanceled = stripePlan.cancel_at_period_end;
  }

  return {
    ...plan,
    stripeSubscriptionId: profile.stripeSubscriptionId,
    stripeCurrentPeriodEnd: profile.stripeCurrentPeriodEnd,
    stripeCustomerId: profile.stripeCustomerId,
    isSubscribed,
    isCanceled,
  };
}
