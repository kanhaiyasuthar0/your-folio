"use server";
import dbConnect from "@/database/mongodb/connections/dbConnect";
import AdminProfile from "@/database/mongodb/models/user/admin.schema";
import { uploadImageToCloud } from "@/utils/common";
import { currentUser } from "@clerk/nextjs/server";

import { z } from "zod";

const socialAccountsSchema = z.object({
  facebook: z.string().url().optional(),
  twitter: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  instagram: z.string().url().optional(),
  // Add more social platforms as necessary
});

const companyAddressSchema = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
});

const adminProfileSchema = z.object({
  companyName: z.string().optional(),
  displayName: z.string().optional(),
  personalDescription: z
    .string()
    .min(1, "Personal description is required")
    .optional(),
  companyDescription: z
    .string()
    .min(1, "Company description is required")
    .optional(),
  themeColor: z.string().optional(), // Assuming HEX color code
  companyAddress: z.string().optional(),
  status: z.enum(["Active", "On Leave"]).optional(),
  mobileNumber: z.string().optional(), // Could add regex validation for phone numbers
  emailAddress: z.string().email().optional(),
  youtubeVideoUrl: z.string().url().optional(), // Assuming it's a URL
  socialAccounts: socialAccountsSchema,
  profilePicture: z.any().optional(), // Assuming it's a URL to the picture
});

export const submitProfile = async (formData: FormData) => {
  const user = await currentUser();

  console.log("🚀 ~ submitFolio ~ user:", user);
  try {
    // Connect to the database
    await dbConnect();

    const profileData = {
      companyName: formData.get("companyName"),
      displayName: formData.get("displayName"),
      personalDescription: formData.get("personalDescription"),
      companyDescription: formData.get("companyDescription"),
      themeColor: formData.get("themeColor"),
      companyAddress: formData.get("companyAddress"),
      status: formData.get("status"),
      mobileNumber: formData.get("mobileNumber"),
      emailAddress: formData.get("emailAddress"),
      youtubeVideoUrl: formData.get("youtubeVideoUrl"),
      socialAccounts: {
        facebook: formData.get("socialAccounts[facebook]"),
        twitter: formData.get("socialAccounts[twitter]"),
        linkedin: formData.get("socialAccounts[linkedin]"),
        // instagram: formData.get("social.instagram"),
        // Include other platforms as needed
      },
      profilePicture: formData.get("profilePicture"), // Assuming this is a file input's name attribute
    };
    // eventData["images"] = ["url1"];
    // console.log("🚀 ~ submitFolio ~ eventData:", eventData);

    // console.log("🚀 ~ submitFolio ~ validatedData:", validatedData);
    // Example of how to use this schema to parse and validate
    // This part goes where you're handling the form submission
    const result = adminProfileSchema.safeParse(profileData);

    if (result.success) {
      // Proceed with the validated data
      const validatedData = result.data;

      const uploadedImageLinks: string = await uploadImageToCloud(
        validatedData.profilePicture,

        `${profileData.companyName}-${user?.fullName}-your-folio` ??
          "no-logo-your-folio"
      );
      validatedData.profilePicture = uploadedImageLinks;

      // Create a new event instance and save it to the database
      const filter = { user: user?.id }; // The criterion to find the existing document
      const update = { ...validatedData, user: user?.id }; // The data to be updated or inserted

      // Set new: true to return the document after update, and upsert: true to create a new one if it doesn't exist
      const options = { new: true, upsert: true, setDefaultsOnInsert: true };

      const profile = await AdminProfile.findOneAndUpdate(
        filter,
        update,
        options
      );

      // Return the saved event object
      return profile;
    } else {
      // Handle validation errors
      console.error(result.error.issues);
      throw result.error.issues; // Rethrow or handle error as appropriate
    }
  } catch (error) {
    console.error("Failed to post event:", error);
    throw error; // Rethrow or handle error as appropriate
  }
};
