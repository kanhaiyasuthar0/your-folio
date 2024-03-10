// pages/api/create-payment-intent.js
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      let body = await req.json();
      const { amount } = body;

      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
      });

      NextResponse.json(paymentIntent, { status: 200 });
    } catch (err) {
      NextResponse.json({ message: JSON.stringify(err) }, { status: 500 });
    }
  } else {
    NextResponse.json({ message: "Something went wrong" }, { status: 405 });
  }
}
