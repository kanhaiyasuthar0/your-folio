import dbConnect from "@/database/mongodb/connections/dbConnect";
import ShowCase from "@/database/mongodb/models/showcase/showcase.schema";
import AdminProfile from "@/database/mongodb/models/user/admin.schema";
import User from "@/database/mongodb/models/user/user.schema";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const folioUserProjects = async ({ params }: any) => {
  // console.log("🚀 ~ FolioUsersDetailPage ~ someData:", someData);
  const { userFolioId } = params;
  // const { name, bio, socialLinks, posts, requirements } = mockUserData;

  await dbConnect();
  const mockUserData1 = await User.findOne({ _id: userFolioId });
  // const adminProfilesWithUserDetails = await AdminProfile.findOne({
  //   user: mockUserData1.external_id,
  // });
  const showcases = await ShowCase.find({
    user: mockUserData1?.external_id,
  }).sort({ createdAt: -1 });
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-wrap -mx-4">
        <aside className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
          <div className="sticky top-0 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="mb-4">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="search"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Search..."
              />
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Date Range</h3>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <span className="mx-2">to</span>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Type</h3>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option value="">All Types</option>
                <option value="photography">Photography</option>
                <option value="design">Design</option>
                <option value="art">Art</option>
              </select>
            </div>
            {/* Additional filters as needed */}
          </div>
        </aside>
        <main className="w-full lg:w-3/4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5 mb-5">
          {showcases.map((post) => (
            <div
              key={post?._id}
              className="flex flex-col transform transition duration-500 hover:scale-105"
            >
              <div className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col justify-between h-full">
                <Image
                  className="w-full object-cover transition duration-500 hover:opacity-75"
                  style={{ height: "200px" }} // Fixed height for images
                  width={200}
                  height={200}
                  src={post?.images[0]}
                  alt={post?.projectName}
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h3 className="font-sans text-lg font-semibold mb-4 truncate">
                    {post?.projectName}
                  </h3>
                  <p className="text-gray-700 mb-4">{post?.description}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Posted {formatDistanceToNow(new Date(post?.createdAt))} ago
                  </p>
                  <a
                    href={`/showcase/folioUsers/${userFolioId}/projects/${post._id}`}
                    className="inline-block mt-auto bg-blue-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-400 text-center"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"> */}

      {/* </div> */}
    </div>
  );
};

export default folioUserProjects;
