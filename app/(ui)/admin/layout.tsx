import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
// import "./globals.css";

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

export default function AdminPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <main className="min-h-96">{}</main> */}

      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 0.5 }}>
          <aside className="w-64 bg-white">
            <div className="flex flex-col space-y-4 p-4">
              <>
                <Link
                  href="/admin/dashboard"
                  className="text-lg font-medium text-gray-900 hover:bg-gray-100 p-2 rounded"
                >
                  Dashboard
                </Link>
              </>
              <>
                <Link
                  href="/admin/folio"
                  className="text-lg font-medium text-gray-900 hover:bg-gray-100 p-2 rounded"
                >
                  Folio Management
                </Link>
              </>
              <>
                <Link
                  href="/admin/profile"
                  className="text-lg font-medium text-gray-900 hover:bg-gray-100 p-2 rounded"
                >
                  Profile Management
                </Link>
              </>
              <>
                <Link
                  href="/admin/account"
                  className="text-lg font-medium text-gray-900 hover:bg-gray-100 p-2 rounded"
                >
                  Account Management
                </Link>
              </>
              {/* Add more links as needed */}
            </div>
          </aside>
        </div>
        <div style={{ flex: 2 }}>{children}</div>
      </section>
      {/* <section> {} </section>
      <section></section> */}
    </>
  );
}
