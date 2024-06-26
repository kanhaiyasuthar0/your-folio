import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HoliOfferBanner from "@/components/generics/HoliOfferBanner";
import { Toaster } from "@/components/ui/toaster";
// import { Analytics } from "@vercel/analytics/react";
// export const metadata: Metadata = {
//   title: "Your-Folio",
//   description: "Your Folio App lets you showcase your real ability",
// };

export const metadata: Metadata = {
  title: {
    template: "%s | Your Folio",
    default: "Your Folio", // a default is required when creating a template
  },

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
        url: `https://yourfolio.vercel.app/opengraph-image.jpg`, // Ensure to replace '/og-image.jpg' with the actual path to your preferred Open Graph image
        width: 1200,
        height: 630,
        alt: "Your Folio - Elevate Your Online Presence",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log(params, "p123");
  // const adminData = await AdminProfile.findOne({user : })
  return (
    <ClerkProvider>
      {/* <Analytics> */}
      <html lang="en">
        <body className={inter.className}>
          <header>
            {/* <HoliOfferBanner /> */}
            <Navbar />
          </header>
          <main className="min-h-[42vw]">{children}</main>
          <ToastContainer />
          <footer>
            <Footer />
          </footer>
          <Toaster />
          <script
            defer
            src="https://analytics.us.umami.is/script.js"
            data-website-id="876c46db-2ebf-40ea-bb86-df1bfa6fef1e"
          ></script>
        </body>
      </html>
      {/* </Analytics> */}
    </ClerkProvider>
  );
}
