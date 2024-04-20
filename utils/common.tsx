// import { userSchema } from "@/app/api/user/register/route";
import dbConnect from "@/database/mongodb/connections/dbConnect";
import User from "@/database/mongodb/models/user/user.schema";
import bcrypt from "bcryptjs";
import z from "zod";

import { userSchema } from "./types";
import Razorpay from "razorpay";

import { v2 as cloudinary } from "cloudinary";
import crypto from "crypto";

cloudinary.config({
  cloud_name: process.env.NEXT_CLOUD_NAME,
  api_key: process.env.NEXT_API_KEY,
  api_secret: process.env.NEXT_SECRET_KEY,
});

type UserType = z.infer<typeof userSchema>;
export async function uploadImageToCloud(
  image: any,
  folderName: string = "no-name"
) {
  "use server";
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "tlgdfr2f");
    formData.append("cloud_name", "dthmtmcvm");
    formData.append("folder", folderName);
    console.log("🚀 ~ uploadImageToCloud ~ formData:", formData.get("file"));
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dthmtmcvm/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    console.log("🚀 ~ uploadImageToCloud ~ data:", data);
    return data.url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

function generateSignature(params: any, apiSecret: any) {
  const stringToSign = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  return crypto
    .createHash("sha256")
    .update(stringToSign)
    .update(apiSecret)
    .digest("hex");
}

function extractPublicId(url: string) {
  const decodedUrl = decodeURIComponent(url);
  const urlParts = decodedUrl.split("/");

  const indexAfterUpload = urlParts.indexOf("upload") + 2; // Skip 'upload' and version
  const publicIdWithExtension = urlParts.slice(indexAfterUpload).join("/");

  return publicIdWithExtension.replace(/\.[^/.]+$/, ""); // Remove extension
}

export async function deleteImageFromCloudinary(url: any) {
  const publicId = extractPublicId(url);
  // "JP%20Nagar%20Site%20Goregaon%20%28Mumbai%29-Kanhaiya%20Suthar-your-folio/l6i0kvuoyuqorwwftxin";
  console.log("🚀 ~ deleteImageFromCloudinary ~ publicId:", publicId);

  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      invalidate: true,
    });
    console.log("Delete result:", result);
    return true;
  } catch (error) {
    console.error("Error deleting image from Cloudinary:", error);
    throw error;
  }
}

export const verifyPassword = async (
  candidatePassword: string,
  userPassword: string
) => {
  return await bcrypt.compare(candidatePassword, userPassword);
};

export const createUser = async (userData: any) => {
  console.log("🚀 ~ createUser ~ userData:", userData);
  await dbConnect();

  try {
    // Attempt to find and update the user, or create a new one if they don't exist
    const user = await User.findOneAndUpdate(
      { email: userData.email }, // Criteria to find the user
      { $set: userData }, // Update operation
      {
        new: true, // Return the modified document rather than the original
        upsert: true, // Create a new document if one doesn't exist
      }
    );

    console.log("User upserted:", user);
    return { user, status: user ? 200 : 201 };
  } catch (error) {
    console.error("Error in createUser:", error);
    throw error; // Consider re-throwing the error or handling it as per your error handling policy
  }
};

export const findUserByEmail = async (email: string) => {
  await dbConnect();
  const user = await User.findOne({ email }).exec();
  return user;
};

export function verifyPaymentId(paymentId: string) {
  const razorpay = new Razorpay({
    key_id: "YOUR_API_KEY",
    key_secret: "YOUR_API_SECRET",
  });

  razorpay.payments
    .fetch(paymentId)
    .then((paymentDetails) => {
      console.log(paymentDetails);
      // You can now extract and use the customer's email and phone number
      const email = paymentDetails.email;
      const contact = paymentDetails.contact;
      // Link this payment to your user based on these details
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
}
