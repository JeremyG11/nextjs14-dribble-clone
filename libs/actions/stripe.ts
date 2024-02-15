"use server";

import { stripe } from "../stripe";
import { baseURL } from "../utils/baseUrl";

interface createStripeBillingSessionProps {
  isSubscribed: boolean;
  isCurrentPlan: boolean;
  stripeCustomerId?: string | null;
  stripePriceId: string;
  userId: string;
  email: string;
}

export const createStripeBillingSession = async ({
  isSubscribed,
  isCurrentPlan,
  stripeCustomerId,
  stripePriceId,
  userId,
  email,
}: createStripeBillingSessionProps) => {
  const billing_url = baseURL("/billing");
  if (isSubscribed && stripeCustomerId && isCurrentPlan) {
    const session = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: billing_url,
    });

    return {
      url: session.url,
    };
  }

  const checkout_session = await stripe.checkout.sessions.create({
    success_url: billing_url,
    cancel_url: billing_url,
    payment_method_types: ["card"],
    mode: "subscription",
    billing_address_collection: "auto",
    customer_email: email,
    line_items: [
      {
        price: stripePriceId,
        quantity: 1,
      },
    ],
    metadata: {
      userId,
    },
  });

  return { url: checkout_session.url };
};
