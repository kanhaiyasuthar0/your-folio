"use server";

import dbConnect from "@/database/mongodb/connections/dbConnect";
import ShowCase from "@/database/mongodb/models/showcase/showcase.schema";
import { uploadImageToCloud } from "@/utils/common";
import { currentUser } from "@clerk/nextjs/server";

import { z } from "zod";

// Define the schema for the address subdocument
const addressSchema = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
});

// Define the main schema for formData
const folioSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  images: z.array(z.string()).optional(), // Assuming these might be empty
  tags: z.array(z.string()).optional(),
  category: z.string().optional(),
  visibility: z.enum(["private", "public"]).optional(),
  address: addressSchema,
  completionDate: z.string().optional(), // Adjust based on actual data format
  status: z.enum(["ongoing", "completed"]).optional(),
  type: z.string().optional(),
  budget: z.string().optional(),
  clientName: z.string().optional(),
  clientPhone: z.string().optional(),
});

export const submitFolio = async (formData: FormData) => {
  const user = await currentUser();
  const getOrUndefined = (value: any) => (value ? value.trim() : undefined);

  console.log("🚀 ~ submitFolio ~ user:", user);
  try {
    // Connect to the database
    await dbConnect();

    // Extract data from formData
    // Assuming formData is a key-value representation of your event data
    // For Node.js environments, you might need to adjust how you extract formData values
    // const eventData: any = Object.fromEntries(formData.entries());

    // Prepare eventData with optional fields handled
    const eventData = {
      title: formData.get("title"),
      description: formData.get("description") || "",
      images: formData.getAll("images") || [],
      tags: getOrUndefined(formData.get("tags"))
        ?.split(",")
        .map((tag: string) => tag.trim()),
      category: formData.get("category"),
      visibility: formData.get("visibility"),
      address: {
        street: getOrUndefined(formData.get("address.street")),
        city: getOrUndefined(formData.get("address.city")),
        state: getOrUndefined(formData.get("address.state")),
        zipCode: getOrUndefined(formData.get("address.zipCode")),
        country: getOrUndefined(formData.get("address.country")),
      },
      completionDate: getOrUndefined(formData.get("completionDate")),
      status: getOrUndefined(formData.get("status")),
      type: getOrUndefined(formData.get("type")),
      budget: getOrUndefined(formData.get("budget")),
      clientName: getOrUndefined(formData.get("client-name")),
      clientPhone: getOrUndefined(formData.get("client-phone")),
    };
    // eventData["images"] = ["url1"];
    // console.log("🚀 ~ submitFolio ~ eventData:", eventData);

    // console.log("🚀 ~ submitFolio ~ validatedData:", validatedData);
    const validatedData = folioSchema.safeParse(eventData);

    const images = formData.get("images") ? formData.getAll("images") : [];
    const title = formData.get("title");
    // console.log(title, "title");
    // console.log(user, "user");
    const promises = await images
      .slice(0, 10)
      .map((image: any, index: number) =>
        uploadImageToCloud(
          image,
          `${title}-${user?.fullName}-your-folio` ?? "unknown-your-folio"
        )
      );

    const uploadedImageLinks = await Promise.all(promises);
    eventData["images"] = uploadedImageLinks;

    console.log(eventData, "eventData");

    // Create a new event instance and save it to the database
    const event = new ShowCase({
      ...eventData,
      user: user?.id,
      projectName: eventData.title,
    });
    console.log("🚀 ~ eventPost ~ event:", event);
    const savedEvent = await event.save();

    // Return the saved event object
    return savedEvent;
  } catch (error) {
    console.error("Failed to post event:", error);
    throw error; // Rethrow or handle error as appropriate
  }
};
