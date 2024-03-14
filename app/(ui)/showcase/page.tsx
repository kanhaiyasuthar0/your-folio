import React from "react";
import Link from "next/link";
// import { AiOutlineHeart } from "react-icons/ai"; // For like button, ensure you've installed react-icons
import dbConnect from "@/database/mongodb/connections/dbConnect";
import ShowCase from "@/database/mongodb/models/showcase/showcase.schema";
import ShowcaseCard from "@/components/generics/ShowCaseCard";

const ShowCaseHome = async () => {
  await dbConnect();
  const showcaseItems = await ShowCase.find({ visibility: "public" });
  console.log("🚀 ~ ShowCaseHome ~ showcaseItems:", showcaseItems);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <aside className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          {/* Sidebar content like search and filters */}
        </aside>
        <main className="w-full md:w-3/4 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {showcaseItems.map((item) => (
              // <div
              //   key={item._id}
              //   className="bg-white shadow-lg rounded-lg overflow-hidden group"
              //   style={{ height: "100%" }}
              // >
              //   <div className="relative w-full h-48">
              //     {/* Overlay to show images on hover */}
              //     <div className="absolute inset-0 flex overflow-hidden">
              //       {item.images.map((image, index) => (
              //         <img
              //           key={index}
              //           src={image}
              //           alt={`Image ${index + 1}`}
              //           className="transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              //           style={{ width: `${100 / item.images.length}%` }}
              //         />
              //       ))}
              //     </div>
              //     <img
              //       src={item.images[0]}
              //       alt={item.projectName}
              //       className="w-full h-full object-cover"
              //     />
              //   </div>
              //   <div className="p-4">
              //     <h3 className="font-bold text-lg mb-2">{item.projectName}</h3>
              //     <p className="text-gray-700 mb-4">{item.description}</p>
              //     <div className="flex justify-between items-end mt-auto">
              //       <div className="text-sm text-gray-600">
              //         {/* Display tags or any additional data here */}
              //       </div>
              //       <Link href={`/showcase/${item._id}`} passHref>
              //         <button
              //           aria-label="View"
              //           className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              //         >
              //           View Details
              //         </button>
              //       </Link>
              //     </div>
              //   </div>
              // </div>
              <ShowcaseCard key={item._id} item={item} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShowCaseHome;
