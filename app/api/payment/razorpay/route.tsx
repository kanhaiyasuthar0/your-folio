// pages/api/create-payment-intent.js
import callPaymentPage from "@/actions/initiatePayment.action";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  console.log("inside123");
  // if (req.method === "POST") {
  try {
    let body = await req.json();
    // console.log("🚀 ~ POST ~ body123:", body);
    const { amount } = body;
    console.log("🚀 ~ POST ~ amount:", amount);
    // const response = await callPaymentPage(amount);
    // console.log("🚀 ~ POST ~ response:", response);
    let url = "";
    if (amount == 99) {
      url = "https://pages.razorpay.com/pl_NoA5I4JXsdNVgE/view";
    } else if (amount == 299) {
      url = "https://rzp.io/l/KAhPe9r8R";
    }
    return NextResponse.json(
      { url },

      // new URL(response.data.data.instrumentResponse.redirectInfo.url)

      // { url: "done" },
      // { url: response.data.data.instrumentResponse.redirectInfo.url },
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
