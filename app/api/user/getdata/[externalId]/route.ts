import AdminProfile from "@/database/mongodb/models/user/admin.schema";
import User from "@/database/mongodb/models/user/user.schema";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {
  console.log("🚀 ~ GET ~ params:", params);
  const { externalId } = params;

  const profileData = await AdminProfile.findOne({ user: externalId });
  // console.log("🚀 ~ Profile ~ profileData1:", profileData);
  //   const userData = await User.findOne({ external_id: user?.id });

  try {
    return NextResponse.json(
      {
        data: profileData,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
