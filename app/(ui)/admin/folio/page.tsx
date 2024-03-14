import React from "react";
import Link from "next/link";
import ShowCase from "@/database/mongodb/models/showcase/showcase.schema";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import dbConnect from "@/database/mongodb/connections/dbConnect";

// Dummy data for folio items
const folioItems = [
  { id: 1, title: "Folio Item 1", description: "Description for Folio Item 1" },
  { id: 2, title: "Folio Item 2", description: "Description for Folio Item 2" },
  // Add more folio items as needed
];

const Folio = async () => {
  await dbConnect();
  const user = await currentUser();
  console.log("🚀 ~ Folio ~ user:", user);
  const folioItems = await ShowCase.find({ user: user?.id });

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Folios</h1>
        <Link href="/admin/folio/add">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Folio
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {folioItems.map(({ id, projectName, description, images }) => (
          <div key={id} className="bg-white p-6 rounded-lg shadow-md">
            <Image src={images[0]} alt={projectName} height={50} width={50} />
            <h2 className="text-xl font-semibold mb-2">{projectName}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folio;
