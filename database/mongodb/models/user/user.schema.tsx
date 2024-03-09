import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: String,
    registrationDate: { type: Date, default: Date.now },
    showcases: [{ type: Schema.Types.ObjectId, ref: "Showcase" }],
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
  },
  { timestamps: true }
);

const User = models?.User || model("User", userSchema);
export default User;
