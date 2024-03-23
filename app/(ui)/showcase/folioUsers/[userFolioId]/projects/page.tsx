import dbConnect from "@/database/mongodb/connections/dbConnect";
import ShowCase from "@/database/mongodb/models/showcase/showcase.schema";
import AdminProfile from "@/database/mongodb/models/user/admin.schema";
import User from "@/database/mongodb/models/user/user.schema";
import Image from "next/image";
import Link from "next/link";

const folioUserProjects = async ({ params }: any) => {
  // console.log("🚀 ~ FolioUsersDetailPage ~ someData:", someData);
  const { userFolioId } = params;
  // const { name, bio, socialLinks, posts, requirements } = mockUserData;

  await dbConnect();
  const mockUserData1 = await User.findOne({ _id: userFolioId });
  const adminProfilesWithUserDetails = await AdminProfile.findOne({
    user: mockUserData1.external_id,
  });
  const showcases = await ShowCase.find({ user: mockUserData1.external_id });
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {showcases.map((post) => (
          <div
            key={post._id}
            className="flex flex-col transform transition duration-500 hover:scale-105"
          >
            <div className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-between h-full">
              <Image
                className="w-full object-cover transition duration-500 hover:opacity-75"
                style={{ height: "200px" }} // Fixed height for images
                width={200}
                height={200}
                src={post.images[0]}
                alt={post.projectName}
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="font-sans text-lg font-semibold mb-4 truncate">
                  {post.projectName}
                </h3>
                <a
                  href={`/showcase/${post._id}`}
                  className="inline-block mt-auto bg-blue-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-400 text-center"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default folioUserProjects;
