import { HoverEffect } from "@/components/ui/card-hover-effect";
import dbConnect from "@/database/mongodb/connections/dbConnect";
import User from "@/database/mongodb/models/user/user.schema";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { HoverEffect } from "../ui/card-hover-effect";

// export function CardHoverEffectDemo() {
//   return (
//     <div className="max-w-5xl mx-auto px-8">
//       <HoverEffect items={projects} />
//     </div>
//   );
// }
// Mock data for demonstration
// const users = [
//   {
//     id: 1,
//     name: "Jane Doe",
//     bio: "Digital artist and web designer with a passion for creating unique online experiences.",
//     profileImage:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 2,
//     name: "John Smith",
//     bio: "Freelance photographer and content creator specializing in travel and landscape photography.",
//     profileImage:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   },
//   // Add more users as needed
// ];

const FolioUsers = async () => {
  await dbConnect();
  const users = await User.find({});

  return (
    // <div className="container mx-auto px-4 py-8">

    //   <HoverEffect items={users} />

    // </div>

    <div className="container mx-auto px-4 py-8">
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
        <main className="w-full lg:w-3/4 px-4">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
          {/* {users.map((user) => (
              <div
                key={user.id}
                className="relative overflow-hidden bg-white shadow-lg rounded-lg group"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out flex justify-center items-center opacity-0 group-hover:opacity-100">
                  <div className="text-center">
                    <p className="text-white text-xl font-semibold">
                      {user.name}
                    </p>
                    <p className="text-white text-sm">{user.profession}</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))} */}
          <HoverEffect items={users} />
          {/* </div> */}
        </main>
      </div>
    </div>
  );
};

export default FolioUsers;
