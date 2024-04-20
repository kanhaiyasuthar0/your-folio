import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
// import "./globals.css";
import { EnvelopeOpenIcon, HomeIcon, IdCardIcon } from "@radix-ui/react-icons"; // Dashboard
import { FileIcon } from "@radix-ui/react-icons"; // Projects
import { PersonIcon } from "@radix-ui/react-icons"; // Profile
import { RulerSquareIcon } from "@radix-ui/react-icons"; // Account Management
import { GroupIcon } from "@radix-ui/react-icons"; // Team Management
import { StarIcon } from "@radix-ui/react-icons"; // Testimonials
import { GearIcon } from "@radix-ui/react-icons"; // Settings// Logout
import Button from "@/components/generics/Button";
import dbConnect from "@/database/mongodb/connections/dbConnect";
import RazorPayWebhook from "@/database/mongodb/models/user/payment.schema";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loader from "@/components/generics/Loader";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Your-Folio",
//   description: "Your Folio App lets you showcase your real ability",
// };

export const metadata: Metadata = {
  title: "Your Folio",
  description:
    "Your Folio is your gateway to showcasing creativity and professionalism through a personalized portfolio. Our platform enables artists, designers, writers, and professionals from all industries to build and share their work with a global audience. Experience the simplicity of creating a stunning online presence, supported by our cutting-edge technology and community-driven insights.",
  openGraph: {
    type: "website",
    url: process.env.BASE_URL,
    title: "Your Folio - Showcase Your Creativity and Professionalism",
    description:
      "Your Folio empowers professionals and creatives to build and share their portfolio with the world. Discover a community-driven platform that blends simplicity with powerful technology, designed to elevate your online presence.",
    siteName: "Your Folio",
    images: [
      {
        url: `${process.env.BASE_URL}/opengraph-image.jpg`, // Ensure to replace '/og-image.jpg' with the actual path to your preferred Open Graph image
        width: 1200,
        height: 630,
        alt: "Your Folio - Elevate Your Online Presence",
      },
    ],
  },
};

export default async function AdminPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConnect();

  const user = await currentUser();
  console.log("🚀 ~ user:123", user?.emailAddresses[0]?.emailAddress);
  let email = user?.emailAddresses[0]?.emailAddress;
  const response = await RazorPayWebhook.findOne({
    email,
  });
  console.log("🚀 ~ response:", response);
  // let freeUsers = [""]
  // if (email == !response) {
  // currently allowing all
  // redirect("/services"); // Use the router to redirect
  // }

  return (
    <>
      {/* <main className="min-h-96">{}</main> */}

      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 0.5 }}>
          <aside className="bg-gray-800 text-white w-64 h-screen">
            <div className="flex flex-col p-4 space-y-4">
              <Link href={"/admin/folio/add"} className="py-4">
                <Button text="Create folio"></Button>
              </Link>
              <nav>
                <Link
                  href="/admin/dashboard"
                  className="flex items-center p-2 text-lg font-medium text-gray-200 rounded-lg hover:bg-gray-700"
                >
                  <HomeIcon className="w-6 h-6 mr-3" />
                  Dashboard
                </Link>
                <Link
                  href="/admin/folio"
                  className="flex items-center p-2 text-lg font-medium text-gray-200 rounded-lg hover:bg-gray-700"
                >
                  {/* Icon for Projects */}
                  <FileIcon className="w-6 h-6 mr-3" />
                  Projects
                </Link>
                <Link
                  href="/admin/profile"
                  className="flex items-center p-2 text-lg font-medium text-gray-200 rounded-lg hover:bg-gray-700"
                >
                  {/* Icon for Profile */}
                  <PersonIcon className="w-6 h-6 mr-3" />
                  Profile
                </Link>
                <Link
                  href="/admin/requirements"
                  className="flex items-center p-2 text-lg font-medium text-gray-200 rounded-lg hover:bg-gray-700"
                >
                  {/* Icon for Account Management */}
                  <RulerSquareIcon className="w-6 h-6 mr-3" />
                  Requirements
                </Link>
                <Link
                  href="/admin/quotation"
                  className="flex items-center p-2 text-lg font-medium text-gray-200 rounded-lg hover:bg-gray-700"
                >
                  {/* Icon for Team Management */}
                  <GroupIcon className="w-6 h-6 mr-3" />
                  Quotations
                </Link>
                <Link
                  href="/admin/meta"
                  className="flex items-center p-2 text-lg font-medium text-gray-200 rounded-lg hover:bg-gray-700"
                >
                  {/* Icon for Team Management */}
                  <StarIcon className="w-6 h-6 mr-3" />
                  Meta info
                </Link>
                <Link
                  href="/admin/enquiries"
                  className="flex items-center p-2 text-lg font-medium text-gray-200 rounded-lg hover:bg-gray-700"
                >
                  {/* Icon for Team Management */}
                  <EnvelopeOpenIcon className="w-6 h-6 mr-3" />
                  Enquiries
                </Link>
                <Link
                  href="/admin/testimonials"
                  className="flex items-center p-2 text-lg font-medium text-gray-200 rounded-lg hover:bg-gray-700"
                >
                  {/* Icon for Team Management */}
                  <IdCardIcon className="w-6 h-6 mr-3" />
                  Testimonials
                </Link>
                {/* <Link
                  href="/admin/testimonials"
                  className="flex items-center p-2 text-lg font-medium text-gray-200 rounded-lg hover:bg-gray-700"
                  >
                  
                  Testimonials
                </Link> */}
                {/* Additional links with icons */}
              </nav>
              {/* <div className="mt-auto">
                <Link
                  href="/admin/settings"
                  className="flex items-center p-2 text-lg font-medium text-gray-400 rounded-lg hover:bg-gray-700"
                >
                  <GearIcon className="w-6 h-6 mr-3" />

                  Settings
                </Link>
                <Link
                  href="/logout"
                  className="flex items-center p-2 text-lg font-medium text-gray-400 rounded-lg hover:bg-gray-700"
                >
                  Logout
                </Link>
              </div> */}
            </div>
          </aside>
        </div>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen w-full">
              <div className="spinner"></div>
              <p className="text-lg font-semibold text-gray-600 ml-4">
                Loading Your Folio...
              </p>
            </div>
          }
        >
          <div style={{ flex: 2 }}>{children}</div>
        </Suspense>
      </section>
      {/* <section> {} </section>
      <section></section> */}
    </>
  );
}
