// import dbConnect from "@/database/mongodb/connections/dbConnect";
// import User from "@/database/mongodb/models/user/user.schema";
import { createUser } from "@/utils/common";
import { userSchema } from "@/utils/types";
import { NextResponse } from "next/server";

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
