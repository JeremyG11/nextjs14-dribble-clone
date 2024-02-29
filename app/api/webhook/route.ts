import Stripe from "stripe";
import { headers } from "next/headers";
import { prisma } from "@/libs/prisma";
import { stripe } from "@/libs/stripe";

export async function POST(request: Request) {
  let event: Stripe.Event;
  const body = await request.text();
  const signiture = headers().get("Stripe-Signature") as string;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signiture,
      process.env.STRIPE_WEBHOOK_SECRET ?? ""
    );
  } catch (err) {
    return new Response(
      `Webhook Error: ${err instanceof Error ? err.message : "Unknown Error"}`,
      { status: 400 }
    );
  }
  const session = event.data.object as Stripe.Checkout.Session;

  if (!session?.metadata?.userId) {
    return new Response(null, {
      status: 200,
    });
  }
  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    console.log(
      subscription.id,
      subscription.customer,
      subscription.items.data[0].price.id,
      subscription.current_period_end
    );
    await prisma.user.update({
      where: {
        userId: session.metadata.userId,
      },
      data: {
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(
          subscription.current_period_end * 1000
        ),
      },
    });
  }
  return new Response(null, { status: 200 });
}
