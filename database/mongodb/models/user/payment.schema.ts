import { model, models } from "mongoose";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const paymentRecordSchema = new Schema(
  {
    webhookData: Schema.Types.Mixed, // Stores the entire webhook payload
    plan: { type: String, enum: ["basic", "advance"] }, // Plan determined based on payment amount
  },
  { timestamps: { createdAt: true } }
);

const razorPayWebhookSchema = new Schema(
  {
    email: { type: String, required: true, unique: true }, // User's email as a unique identifier
    contact: String, // User's contact number
    paymentRecords: [paymentRecordSchema], // Array of payment records
  },
  { timestamps: true }
);

const RazorPayWebhook =
  models?.RazorPayWebhook || model("RazorPayWebhook", razorPayWebhookSchema);
export default RazorPayWebhook;
