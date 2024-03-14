// "use client";
import dbConnect from "@/database/mongodb/connections/dbConnect";
import ShowCase from "@/database/mongodb/models/showcase/showcase.schema";
import Link from "next/link";
import React, { ChangeEventHandler, useState } from "react";
// const showcaseItems = [
//   {
//     id: 1,
//     title: "Modern Furniture Designs",
//     description: "Innovative and ergonomic furniture designs.",
//     imageUrl: "https://source.unsplash.com/featured/?furniture",
//   },
//   {
//     id: 2,
//     title: "Luxury Interiors",
//     description: "Elegant interior designs for modern living spaces.",
//     imageUrl: "https://source.unsplash.com/featured/?interior",
//   },
//   {
//     id: 3,
//     title: "Marble Fittings",
//     description: "Premium marble fittings for kitchens and bathrooms.",
//     imageUrl: "https://source.unsplash.com/featured/?marble",
//   },
//   {
//     id: 4,
//     title: "Jewelers Work",
//     description: "Exquisite craftsmanship in jewelry design.",
//     imageUrl: "https://source.unsplash.com/featured/?jewelry",
//   },
//   {
//     id: 5,
//     title: "Shop Fittings",
//     description: "Custom fittings to enhance retail spaces.",
//     imageUrl: "https://source.unsplash.com/featured/?shopfitting",
//   },
//   {
//     id: 6,
//     title: "Building Fittings",
//     description: "High-quality fittings for commercial buildings.",
//     imageUrl: "https://source.unsplash.com/featured/?building",
//   },
//   {
//     id: 7,
//     title: "Construction Projects",
//     description: "Showcasing our latest construction projects.",
//     imageUrl: "https://source.unsplash.com/featured/?construction",
//   },
//   {
//     id: 8,
//     title: "Handcrafted Woodwork",
//     description: "Sustainable and artistic woodcraft.",
//     imageUrl: "https://source.unsplash.com/featured/?woodwork",
//   },
//   {
//     id: 9,
//     title: "Innovative Lighting Solutions",
//     description: "Brighten your spaces with our lighting designs.",
//     imageUrl: "https://source.unsplash.com/featured/?lighting",
//   },
//   {
//     id: 10,
//     title: "Home Renovation Ideas",
//     description: "Transform your home with these renovation ideas.",
//     imageUrl: "https://source.unsplash.com/featured/?renovation",
//   },
// ];

const ShowCaseHome = async () => {
  // const [searchTerm, setSearchTerm] = useState("");

  // // Example handler for search input changes
  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setSearchTerm(e.target.value);
  // };

  await dbConnect();
  const showcaseItems = await ShowCase.find({ visibility: "public" });
  console.log("🚀 ~ ShowCaseHome ~ showcaseItems:", showcaseItems);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {/* Sidebar for Search and Filters */}
        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full p-2 border rounded mb-4"
            // onChange={handleSearchChange}
          />
          {/* Additional filters can be added here */}
          <div>
            <h3 className="font-bold text-lg mb-2">Status</h3>
            {/* Example filters */}
            <div className="mb-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Completed</span>
              </label>
            </div>
            <div className="mb-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Ongoing</span>
              </label>
            </div>
          </div>
        </div>

        {/* Main Content for Portfolio Cards */}
        <div className="w-full md:w-3/4 px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Example Portfolio Card */}
            {showcaseItems.map((item, index) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
              >
                <Link href={`/showcase/${item._id}`}>
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                    {/* Adjusted image container */}
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.projectName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h3 className="font-bold mb-2">{item.projectName}</h3>
                      <p className="mb-4 flex-1">{item.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            {/* Repeat Portfolio Cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseHome;
