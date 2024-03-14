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
    console.log("🚀 ~ POST ~ bodyData:", bodyData);
    // const parsedBody = userSchema.safeParse(bodyData);
    // console.log("🚀 ~ POST ~ parsedBody:", parsedBody);
    let email = bodyData.data.email_addresses;
    console.log("🚀 ~ POST ~ email:", email);
    // return;
    if (true) {
      // Here, parsedBody.data is of type UserType, and you can pass it directly
      const newUser = await createUser({
        username: bodyData?.data.username ?? "",
        email: email[0]["email_address"] ?? "",
        external_id: bodyData.data.id,
        all_info: bodyData.data,
      });
      return NextResponse.json(
        {
          message: newUser,
        },
        { status: 201 }
      );
    }
    // Handle parsing error
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
