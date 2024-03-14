import dbConnect from "@/database/mongodb/connections/dbConnect";
import User from "@/database/mongodb/models/user/user.schema";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user, index) => (
          <Link href={`/showcase/folioUsers/${user._id}`} key={user._id}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={user?.all_info?.profile_image_url}
                alt={user?.username}
                className="w-full h-48 object-cover"
                width={300}
                height={300}
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{user.username}</h2>
                <p className="text-gray-700 text-base">{user.email}</p>
                <p></p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FolioUsers;
