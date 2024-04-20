import React from "react";
import Link from "next/link";
// import { AiOutlineHeart } from "react-icons/ai"; // For like button, ensure you've installed react-icons
import dbConnect from "@/database/mongodb/connections/dbConnect";
import ShowCase from "@/database/mongodb/models/showcase/showcase.schema";
import ShowcaseCard from "@/components/generics/ShowCaseCard";
import FilterSection from "@/components/generics/FilterSection";
import { FilterQuery } from "mongoose";

const ShowCaseHome = async ({
  searchParams,
}: {
  searchParams?: {
    showcase?: string;
  };
}) => {
  await dbConnect();

  // Build the query object
  let query: FilterQuery<{
    projectName?: string | null | undefined;
    visibility: string;
  }> = {
    visibility: "public",
  };
  if (searchParams && searchParams.showcase) {
    query.projectName = {
      $regex: decodeURIComponent(searchParams.showcase),
      $options: "i",
    }; // 'i' for case-insensitive
  }
  const showcaseItems = await ShowCase.find(query);
  console.log("🚀 ~ ShowCaseHome ~ showcaseItems:", showcaseItems);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <aside className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
          <FilterSection stateKey={"showcase"} />
        </aside>
        <main className="w-full lg:w-3/4 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
