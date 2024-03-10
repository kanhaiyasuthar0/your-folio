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
  await dbConnect();
  const newUser = await User.create(userData);
  return newUser;
};

export const findUserByEmail = async (email: string) => {
  await dbConnect();
  const user = await User.findOne({ email }).exec();
  return user;
};
