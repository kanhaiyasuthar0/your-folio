// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Your-Folio",
//   description: "Your Folio App lets you showcase your real ability",
// };

// export const metadata: Metadata = {
//   title: "Your Folio",
//   description:
//     "Your Folio is your gateway to showcasing creativity and professionalism through a personalized portfolio. Our platform enables artists, designers, writers, and professionals from all industries to build and share their work with a global audience. Experience the simplicity of creating a stunning online presence, supported by our cutting-edge technology and community-driven insights.",
//   openGraph: {
//     type: "website",
//     url: process.env.BASE_URL,
//     title: "Your Folio - Showcase Your Creativity and Professionalism",
//     description:
//       "Your Folio empowers professionals and creatives to build and share their portfolio with the world. Discover a community-driven platform that blends simplicity with powerful technology, designed to elevate your online presence.",
//     siteName: "Your Folio",
//     images: [
//       {
//         url: `${process.env.BASE_URL}/opengraph-image.jpg`, // Ensure to replace '/og-image.jpg' with the actual path to your preferred Open Graph image
//         width: 1200,
//         height: 630,
//         alt: "Your Folio - Elevate Your Online Presence",
//       },
//     ],
//   },
// };

export default function DashboardPageLayout({
  children,
  quotation,
}: Readonly<{
  children: React.ReactNode;
  quotation: React.ReactNode;
}>) {
  //   console.log("🚀 ~ quotation:", quotation);
  return (
    <>
      <div className="flex flex-col items-center align-middle">
        {children}
        {/* {quotation} */}
      </div>
    </>
  );
}
