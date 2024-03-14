import { Schema, models, model } from "mongoose";

const adminProfileSchema = new Schema(
  {
    user: {
      type: String,
      ref: "User",
      required: true,
      unique: true,
    },
    companyName: { type: String, required: false },
    displayName: { type: String, required: false },
    personalDescription: { type: String, required: false },
    companyDescription: { type: String, required: false },
    themeColor: { type: String, required: false },
    companyAddress: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    status: { type: String, enum: ["Active", "On Leave"], default: "Active" },
    mobileNumber: { type: String, required: false },
    emailAddress: { type: String, required: false },
    youtubeVideoUrl: { type: String, required: false },
    socialAccounts: {
      facebook: String,
      twitter: String,
      linkedin: String,
      instagram: String,
      // Add other social platforms as needed
    },
    profilePicture: { type: String, required: false }, // URL to the profile picture
  },
  { timestamps: true }
);

const AdminProfile =
  models?.AdminProfile || model("AdminProfile", adminProfileSchema);
export default AdminProfile;
