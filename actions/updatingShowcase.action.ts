"use server";

import dbConnect from "@/database/mongodb/connections/dbConnect";
import ShowCase from "@/database/mongodb/models/showcase/showcase.schema";
import { deleteImageFromCloudinary, uploadImageToCloud } from "@/utils/common";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const updateFolioData = async (image: string, showCaseId: string) => {
  console.log("🚀 ~ updateFolioData ~ image:", image);

  if (!image) {
    return;
  }

  await dbConnect();
  const user = await currentUser();
  try {
    // Assuming you want to update the coverImage of the showcase with the provided image
    const updatedShowCase = await ShowCase.findByIdAndUpdate(
      showCaseId,
      { $set: { coverImage: image } },
      { new: true } // Returns the updated document
    );

    console.log("Showcase updated successfully:", updatedShowCase);
    // return updatedShowCase;
  } catch (error) {
    console.error("Error updating showcase:", error);
    return null;
  }
  revalidatePath(`/showcase/${showCaseId}`);
  revalidatePath(`/showcase`);
};

// Remove images from an existing showcase
export const removeImages = async (showCaseId: string, imageUrl: string) => {
  console.log("🚀 ~ removeImages ~ showCaseId:", showCaseId, imageUrl);
  await dbConnect();
  try {
    // Delete image from Cloudinary
    await deleteImageFromCloudinary(imageUrl); // Assuming this function handles a single URL
    console.log(imageUrl, "imageUrl being removed");

    // Remove image URL from the MongoDB document
    const updatedShowcase = await ShowCase.findByIdAndUpdate(
      showCaseId,
      { $pull: { images: imageUrl } }, // Directly use imageUrl without $in since it's a single string
      { new: true }
    );

    console.log("Updated Showcase after Removing Image:", updatedShowcase);
    revalidatePath(`/showcase/${showCaseId}`);

    return updatedShowcase;
  } catch (error) {
    console.error("Error in removing images:", error);
    return null;
  }
};

export const addImagesToShowcase = async (
  showCaseId: string,
  formData: FormData
) => {
  console.log("🚀 ~ addImagesToShowcase ~ formData:", formData);
  console.log("🚀 ~ addImagesToShowcase ~ showCaseId:", showCaseId);
  await dbConnect();
  const user = await currentUser();
  try {
    const images = formData.getAll("images");
    if (!images.length) {
      throw new Error("No images provided");
    }

    // Upload images to Cloudinary and get URLs
    const uploadedImageLinks = await Promise.all(
      images.map((image, index) =>
        uploadImageToCloud(
          image,
          `${formData.get("title")}-${user?.fullName}-your-folio`
        )
      )
    );

    // Add new image URLs to the existing showcase
    const updatedShowcase = await ShowCase.findByIdAndUpdate(
      showCaseId,
      { $push: { images: { $each: uploadedImageLinks } } },
      { new: true }
    );

    console.log("Updated Showcase with New Images:", updatedShowcase);

    // Optionally revalidate paths if using Next.js ISR
    revalidatePath(`/showcase/${showCaseId}`);

    return updatedShowcase;
  } catch (error) {
    console.error("Error in adding images to showcase:", error);
    return null;
  }
};
