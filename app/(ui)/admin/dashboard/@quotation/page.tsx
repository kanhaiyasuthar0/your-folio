import dbConnect from "@/database/mongodb/connections/dbConnect";
import AdminProfile from "@/database/mongodb/models/user/admin.schema";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const Quotation = async () => {
  await dbConnect();
  const user = await currentUser();
  console.log("🚀 ~ Quotation ~ user:", user);
  const adminData = await AdminProfile.findOne({ user: user?.id });
  console.log("🚀 ~ Quotation ~ adminData:", adminData);

  const quotation = adminData.quotation;
  console.log("🚀 ~ Quotation ~ quotation:", quotation);
  return (
    <div>
      <Link href={"/admin/dashboard/quotation-detail"}>
        <div>
          {/* Card to open the quotation file */}
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                {/* <iframe
                  className="h-96"
                  //   className="h-48 w-full object-cover md:w-48"
                  src={quotation}
                  //   alt="Quotation"
                /> */}
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Open File
                </div>
                <p className="mt-2 text-gray-500">
                  View detailed quotation information
                </p>
                <button className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  Open Quotation File
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Quotation;
