// import { userSchema } from "@/app/api/user/register/route";
import dbConnect from "@/database/mongodb/connections/dbConnect";
import User from "@/database/mongodb/models/user/user.schema";
import bcrypt from "bcryptjs";
import z from "zod";
import { userSchema } from "./types";
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
