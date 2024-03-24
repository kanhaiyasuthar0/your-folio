import Link from "next/link";
import React from "react";

const Quotation = () => {
  return (
    <div>
      <Link href={"/admin/dashboard/quotation-detail"}>GoToDetailPage</Link>
    </div>
  );
};

export default Quotation;
