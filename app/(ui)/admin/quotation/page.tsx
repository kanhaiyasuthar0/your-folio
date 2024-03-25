import CreatePdfFromTable from "@/components/admin/CreatePdfFromTabel";
import UnderConstruction from "@/components/generics/UnderConstruction";
import dbConnect from "@/database/mongodb/connections/dbConnect";
import AdminProfile from "@/database/mongodb/models/user/admin.schema";
import User from "@/database/mongodb/models/user/user.schema";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const QuotationManagment = async () => {
  const user = await currentUser();
  await dbConnect();
  const profileData = await AdminProfile.findOne({ user: user?.id });
  console.log("🚀 ~ Profile ~ profileData1:", profileData);
  const userData = await User.findOne({ external_id: user?.id });
  return (
    <div>
      {/* <CreatePdfFromTable profileData={profileData} /> */}
      <UnderConstruction />
    </div>
  );
};

export default QuotationManagment;
