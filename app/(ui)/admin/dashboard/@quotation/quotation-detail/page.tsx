import { CustomModal } from "@/components/admin/CustomModal";
import dbConnect from "@/database/mongodb/connections/dbConnect";
import AdminProfile from "@/database/mongodb/models/user/admin.schema";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const QuotationDetailPage = async () => {
  await dbConnect();
  const user = await currentUser();
  console.log("🚀 ~ Quotation ~ user:", user);
  const adminData = await AdminProfile.findOne({ user: user?.id });
  console.log("🚀 ~ Quotation ~ adminData:", adminData);

  const quotation = adminData?.quotation;
  console.log("🚀 ~ Quotation ~ quotation:", quotation);
  return (
    <div>
      {/* <iframe
        style={{ height: "100vh", width: "w-full" }}
        //   className="h-48 w-full object-cover md:w-48"
        src={quotation}
        //   alt="Quotation"
      /> */}

      <CustomModal quotation={quotation} />

      <Link href={"/admin/dashboard"}></Link>
    </div>
  );
};

export default QuotationDetailPage;
