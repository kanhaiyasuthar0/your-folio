import BarCodeGenerator from "@/components/admin/BarCodeGenerator";
import { BoxesCore } from "@/components/ui/background-boxes";
import dbConnect from "@/database/mongodb/connections/dbConnect";
import AdminProfile from "@/database/mongodb/models/user/admin.schema";
import User from "@/database/mongodb/models/user/user.schema";
import Image from "next/image";
import React from "react";

const page = async ({ params }: any) => {
  // console.log("🚀 ~ FolioUsersDetailPage ~ someData:", someData);
  const { userFolioId } = params;
  //  const { name, bio, socialLinks, posts, requirements } = mockUserData;

  await dbConnect();
  const mockUserData1 = await User.findOne({ _id: userFolioId });
  const adminProfilesWithUserDetails = await AdminProfile.findOne({
    user: mockUserData1.external_id,
  });
  const {
    all_info: {
      image_url: profileImage,
      first_name,
      last_name,
      last_active_at,
    },
    email,
  } = mockUserData1;

  const {
    profilePicture = "",
    displayName = "",
    personalDescription = "",
    companyName = "",
    companyDescription = "",
    socialAccounts = {},
    emailAddress = "",
    mobileNumber = "",
    youtubeVideoUrl = "",
    // Add other fields as needed
  } = adminProfilesWithUserDetails || {};
  return (
    <div className="flex flex-col items-center bg-gray-50 py-10">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex p-10">
        <img
          src={profileImage}
          alt={first_name}
          className="w-48 h-48 rounded-full mx-auto md:mx-0 md:mr-10"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            {first_name + " " + last_name}
          </h1>
          <p className="text-gray-600 mt-4">{personalDescription}</p>
          <div className="flex justify-center md:justify-start mt-4">
            <a
              href={socialAccounts?.twitter}
              className="text-blue-500 hover:text-blue-600 mr-4"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href={socialAccounts?.linkedin}
              className="text-blue-700 hover:text-blue-800 mr-4"
            >
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a
              href={socialAccounts?.github}
              className="text-gray-800 hover:text-black"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <BarCodeGenerator
          url={`https://yourfolio.in/showcase/folioUsers/${userFolioId}/projects`}
          // className="shadow-xl"
        />
      </div>
    </div>
  );
};

export default page;
