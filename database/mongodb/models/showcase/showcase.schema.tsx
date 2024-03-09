import { Schema, models, model } from "mongoose";

const showcaseSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    projectName: { type: String, required: true },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    clientName: String,
    clientPhone: String,
    description: String,
    images: [String], // Array of image URLs
    tags: [String], // Optional tags for better searchability
    type: { type: Schema.Types.ObjectId, ref: "Type", required: true },
  },
  { timestamps: true }
);

module.exports = models?.Showcase || model("Showcase", showcaseSchema);
