// pages/api/create-payment-intent.js
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  console.log("inside123");
  // if (req.method === "POST") {
  try {
    let body = await req.json();
    console.log("🚀 ~ POST ~ body123:", body);
    const { amount } = body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "INR",
      description: "some dummy testing",
      shipping: {
        name: "some shipping",
        address: {
          city: "mumbai",
          country: "in",
          line1: "12",
          line2: "1a",
          postal_code: "12134",
          state: "mh",
        },
        carrier: "some carrier",
        tracking_number: "13141312",
        phone: "12131415121",
      },
    });
    console.log("🚀 ~ POST ~ paymentIntent:", paymentIntent);

    return NextResponse.json(
      { clientSecret: paymentIntent.client_secret },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "somethingwent wrong" },
      { status: 500 }
    );
  }
  // } else {
  // NextResponse.json({ message: "Something went wrong" }, { status: 405 });
  // }
}
