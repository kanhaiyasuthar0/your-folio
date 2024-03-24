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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Map through showcaseItems to display content */}
            {showcaseItems.map((item) => (
              <ShowcaseCard key={item._id} item={item} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShowCaseHome;
