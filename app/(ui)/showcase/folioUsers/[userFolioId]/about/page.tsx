import BarCodeGenerator from "@/components/admin/BarCodeGenerator";
import dbConnect from "@/database/mongodb/connections/dbConnect";
import AdminProfile from "@/database/mongodb/models/user/admin.schema";
import User from "@/database/mongodb/models/user/user.schema";
import { formatDistanceToNow } from "date-fns";
import React from "react";

const folioUserAbout = async ({ params }: any) => {
  const { userFolioId } = params;
  //  const { name, bio, socialLinks, posts, requirements } = mockUserData;

  await dbConnect();
  const mockUserData1 = await User.findOne({ _id: userFolioId });
  const adminProfilesWithUserDetails = await AdminProfile.findOne({
    user: mockUserData1.external_id,
  });
  console.log(
    "🚀 ~ folioUserAbout ~ adminProfilesWithUserDetails:",
    adminProfilesWithUserDetails
  );
  const { companyName, companyDescription, mobileNumber, updatedAt } =
    adminProfilesWithUserDetails || {};
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About {companyName}
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Empowering Creativity, One {companyName} at a Time
        </p>
      </div>

      <div className="mt-12">
        <div className="text-lg leading-7 text-gray-600 space-y-4">
          <p>{companyDescription}</p>
          <p>Contact - {mobileNumber}</p>
          <p>
            Last updated{" "}
            {updatedAt ? formatDistanceToNow(new Date(updatedAt)) : ""} ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default folioUserAbout;
