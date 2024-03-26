// Example of an API route for webhooks: pages/api/razorpayWebhook.js

import dbConnect from "@/database/mongodb/connections/dbConnect";
import RazorPayWebhook from "@/database/mongodb/models/user/payment.schema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const webhookData = await req.json();
  const event = webhookData.event;

  if (event !== "order.paid") {
    return NextResponse.json(
      { message: "Payment information processed successfully." },
      { status: 201 }
    );
  }

  //   if (req.method === "POST") {
  await dbConnect(); // Ensure DB connection is established

  const email = webhookData.payload.payment.entity.email;
  const contact = webhookData.payload.payment.entity.contact;
  const amount = webhookData.payload.payment.entity.amount;

  // Determine the plan based on the payment amount
  const plan = amount === 29900 ? "advance" : "basic";

  const paymentRecord = {
    webhookData, // Store the entire webhook data
    plan, // Store the determined plan
  };

  try {
    // Check if a record with the email already exists
    const existingRecord = await RazorPayWebhook.findOne({ email });

    if (existingRecord) {
      // Make sure paymentRecords is initialized
      if (!existingRecord.paymentRecords) {
        existingRecord.paymentRecords = [];
      }
      // Update the existing record with the new payment information
      existingRecord.paymentRecords.push(paymentRecord);
      await existingRecord.save();
    } else {
      // Create a new record if one does not exist
      const newUserPayment = new RazorPayWebhook({
        email,
        contact,
        paymentRecords: [paymentRecord],
      });
      await newUserPayment.save();
    }

    console.log("Payment information processed successfully.", req);
    return NextResponse.json(
      { message: "Success" },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error processing payment information:", error);
    return NextResponse.json(
      { message: "Error processing payment information" },
      { status: 500 }
    );
  }
}
