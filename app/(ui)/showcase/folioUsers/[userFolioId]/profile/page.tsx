import BarCodeGenerator from "@/components/admin/BarCodeGenerator";
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
    <div className="flex flex-col align-middle items-center">
      <div className="flex flex-col md:flex-row items-center">
        <Image
          height={300}
          width={300}
          src={profileImage}
          alt={first_name}
          className="w-32 h-32 rounded-full mr-4"
        />
        <div>
          <h1 className="text-3xl font-bold">{first_name + " " + last_name}</h1>
          <p className="text-gray-600">{personalDescription}</p>
          <div className="flex mt-2">
            <a href={socialAccounts?.twitter} className="mr-2">
              Twitter
            </a>
            <a href={socialAccounts?.linkedin} className="mr-2">
              LinkedIn
            </a>
            <a href={socialAccounts?.github}>GitHub</a>
          </div>
        </div>
      </div>
      <BarCodeGenerator
        url={`https://yourfolio.in/showcase/folioUsers/${userFolioId}/projects`}
      />
    </div>
  );
};

export default page;
