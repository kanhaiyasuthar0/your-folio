import { Schema, models, model } from "mongoose";

const productSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  productName: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  images: [String], // Array of image URLs
  stockQuantity: Number,
  dateAdded: { type: Date, default: Date.now },
  tags: [String], // Optional tags for categorization
});

module.exports = models?.Product || model("Product", productSchema);
