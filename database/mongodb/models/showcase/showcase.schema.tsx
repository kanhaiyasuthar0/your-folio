import { Schema, models, model } from "mongoose";

const showcaseSchema = new Schema(
  {
    user: { type: String, ref: "User", required: true },
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
    type: {
      type: String,
      ref: "Type",
      required: false,
    },
    category: String,
    visibility: {
      type: String,
      enum: ["private", "public"],
      default: "public",
    },
  },
  { timestamps: true }
);
const ShowCase = models.Showcase || model("Showcase", showcaseSchema);
export default ShowCase;
