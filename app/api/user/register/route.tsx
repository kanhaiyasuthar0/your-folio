// import dbConnect from "@/database/mongodb/connections/dbConnect";
// import User from "@/database/mongodb/models/user/user.schema";
import { createUser } from "@/utils/common";
import { NextResponse } from "next/server";

import z from "zod";

export const userSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  phone: z.string().optional(),
  address: z
    .object({
      street: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      zipCode: z.string().optional(),
      country: z.string().optional(),
    })
    .optional(),
  showcases: z.array(z.string()).optional(), // Assuming showcases are referenced by string IDs
  products: z.array(z.string()).optional(), // Assuming products are referenced by string IDs
});

export const GET = async (request: Request) => {
  try {
    return NextResponse.json(
      {
        message: "welcome users",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async (request: Request) => {
  try {
    const bodyData = await request.json();
    const parsedBody = userSchema.safeParse(bodyData);
    if (parsedBody.success) {
      // Here, parsedBody.data is of type UserType, and you can pass it directly
      const newUser = await createUser(parsedBody.data);
      return NextResponse.json(
        {
          message: newUser,
        },
        { status: 201 }
      );
    }
    // Handle parsing error
    return NextResponse.json({ error: parsedBody.error }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
