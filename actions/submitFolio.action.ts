"use server";

import dbConnect from "@/database/mongodb/connections/dbConnect";
import ShowCase from "@/database/mongodb/models/showcase/showcase.schema";
import { uploadImageToCloud } from "@/utils/common";
import { currentUser } from "@clerk/nextjs/server";

import { z } from "zod";

// Define the schema for the address subdocument
const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
});

// Define the main schema for formData
const folioSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  images: z.array(z.string()), // Assuming these are URLs or file paths as strings
  tags: z.array(z.string()),
  category: z.string(),
  visibility: z.enum(["private", "public"]),
  address: addressSchema,
  // Add other fields here as necessary, for example:
  clientName: z.string().optional(),
  clientPhone: z.string().optional(),
  completionDate: z.string().optional(), // or use z.date() if you're working with Date objects
  status: z.enum(["ongoing", "completed"]).optional(),
  type: z.string(), // or z.instanceof(Schema.Types.ObjectId) if you're directly passing an ObjectId
  budget: z.string().optional(),
  "client-name": z.string().optional(),
  "client-phone": z.string().optional(),
});

export const submitFolio = async (formData: FormData) => {
  const user = await currentUser();

  console.log("🚀 ~ submitFolio ~ user:", user);
  try {
    // Connect to the database
    await dbConnect();

    // Extract data from formData
    // Assuming formData is a key-value representation of your event data
    // For Node.js environments, you might need to adjust how you extract formData values
    // const eventData: any = Object.fromEntries(formData.entries());

    const eventData = {
      title: formData.get("title"),
      description: formData.get("description"),
      // For non-file fields, use `formData.get`
      images: formData.getAll("images"), // Assuming 'images' is the name attribute for file input and you're allowing multiple files
      tags: (formData.get("tags") as string)
        ?.split(",")
        .map((tag) => tag.trim()), // Split string into array if tags are submitted as a comma-separated string
      category: formData.get("category"),
      visibility: formData.get("visibility"),
      // Extract and structure address fields similarly
      address: {
        street: formData.get("address.street"),
        city: formData.get("address.city"),
        state: formData.get("address.state"),
        zipCode: formData.get("address.zipCode"),
        country: formData.get("address.country"),
      },

      completionDate: formData.get("completionDate"), // or use z.date() if you're working with Date objects
      status: formData.get("status"),
      type: formData.get("address.street"), // or z.instanceof(Schema.Types.ObjectId) if you're directly passing an ObjectId
      budget: formData.get("budget"),
      "client-name": formData.get("client-name"),
      "client-phone": formData.get("client-phone"),
    };
    // eventData["images"] = ["url1"];
    // console.log("🚀 ~ submitFolio ~ eventData:", eventData);

    // console.log("🚀 ~ submitFolio ~ validatedData:", validatedData);
    const validatedData = folioSchema.safeParse(eventData);

    const images = formData.get("images") ? formData.getAll("images") : [];
    const title = formData.get("title");
    // console.log(title, "title");
    // console.log(user, "user");
    const promises = await images.map((image: any) =>
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
