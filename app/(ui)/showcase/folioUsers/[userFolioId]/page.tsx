import React from "react";
import Link from "next/link";
import RequirementsTable from "@/components/generics/Requirements";
import dbConnect from "@/database/mongodb/connections/dbConnect";
import User from "@/database/mongodb/models/user/user.schema";
import ShowCase from "@/database/mongodb/models/showcase/showcase.schema";
import AdminProfile from "@/database/mongodb/models/user/admin.schema";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
  params: { userFolioId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { userFolioId } = params;
  await dbConnect();
  const mockUserData1 = await User.findOne({ _id: userFolioId });
  // const adminProfilesWithUserDetails = await AdminProfile.findOne({
  //   user: mockUserData1.external_id,
  // });

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  console.log(`${process.env.BASE_URL}/opengraph-image.jpg`, "inside metdata");
  return {
    title: `${mockUserData1.username} | ${mockUserData1.email}`,
    description:
      "Your Folio is your gateway to showcasing creativity and professionalism through a personalized portfolio. Our platform enables artists, designers, writers, and professionals from all industries to build and share their work with a global audience. Experience the simplicity of creating a stunning online presence, supported by our cutting-edge technology and community-driven insights.",
    openGraph: {
      type: "website",
      url: process.env.BASE_URL,
      title: `${mockUserData1.username} | ${mockUserData1.email}`,
      description:
        "Your Folio empowers professionals and creatives to build and share their portfolio with the world. Discover a community-driven platform that blends simplicity with powerful technology, designed to elevate your online presence.",
      siteName: "Your Folio",
      images: [
        // {
        //   url: `${process.env.BASE_URL}/opengraph-image.jpg`, // Ensure to replace '/og-image.jpg' with the actual path to your preferred Open Graph image
        //   width: 1200,
        //   height: 630,
        //   alt: "Your Folio - Elevate Your Online Presence",
        // },
        `https://yourfolio.vercel.app/opengraph-image.jpg`,
        ...previousImages,
      ],
    },
  };
}

const mockUserData = {
  name: "Jane Doe",
  bio: "Digital artist and web designer with a passion for creating unique online experiences.",
  profileImage:
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  socialLinks: {
    twitter: "https://twitter.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
    github: "https://github.com/janedoe",
  },
  posts: [
    {
      id: 1,
      title: "Modern Interior Design - Mumbai",
      thumbnail:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/showcase/1",
    },
    {
      id: 2,
      title: "Best Furniture - Pune",
      thumbnail:
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/showcase/2",
    },
    {
      id: 3,
      title: "Elegant Living Room Ideas - Delhi",
      thumbnail:
        "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/showcase/3",
    },
    {
      id: 4,
      title: "Contemporary Kitchen Styles - Bangalore",
      thumbnail:
        "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/showcase/4",
    },
    {
      id: 5,
      title: "Luxury Bedroom Design - Kolkata",
      thumbnail:
        "https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/showcase/5",
    },
    {
      id: 6,
      title: "Innovative Office Spaces - Hyderabad",
      thumbnail:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/showcase/6",
    },
    {
      id: 7,
      title: "Small Space Decoration - Chennai",
      thumbnail:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/showcase/7",
    },
    {
      id: 8,
      title: "Rustic Bathroom Inspirations - Ahmedabad",
      thumbnail:
        "https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/showcase/8",
    },
    {
      id: 9,
      title: "Outdoor Patio Ideas - Jaipur",
      thumbnail:
        "https://images.unsplash.com/photo-1557690756-62754e561982?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/showcase/9",
    },
    {
      id: 10,
      title: "Cozy Balcony Setups - Surat",
      thumbnail:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/showcase/10",
    },
  ],
  requirements: [
    {
      site: "Portfolio Site",
      type: "Design & Development",
      status: "Open",
      place: "Mumbai",
      publishDate: "2023-01-15",
      estimatedCompletion: "3 months",
      expectedDelivery: "2023-04-15",
    },
    {
      site: "E-commerce Platform",
      type: "SEO Optimization",
      status: "In Progress",
      place: "Pune",
      publishDate: "2023-02-01",
      estimatedCompletion: "6 months",
      expectedDelivery: "2023-08-01",
    },
    // Add more requirements as needed
  ],
};

const FolioUsersDetailPage = async ({ params }: any) => {
  // console.log("🚀 ~ FolioUsersDetailPage ~ someData:", someData);
  const { userFolioId } = params;
  const { name, bio, socialLinks, posts, requirements } = mockUserData;

  await dbConnect();
  const mockUserData1 = await User.findOne({ _id: userFolioId });
  const adminProfilesWithUserDetails = await AdminProfile.findOne({
    user: mockUserData1.external_id,
  });
  const showcases = await ShowCase.find({
    user: mockUserData1.external_id,
  }).sort({ createdAt: -1 });
  console.log("🚀 ~ FolioUsersDetailPage ~ mockUserData1:", mockUserData1);
  const {
    all_info: {
      image_url: profileImage,
      first_name,
      last_name,
      last_active_at,
    },
    email,
  } = mockUserData1;

  const {
    profilePicture = "",
    displayName = "",
    personalDescription = "",
    companyName = "",
    companyDescription = "",
    socialAccounts = {},
    emailAddress = "",
    mobileNumber = "",
    youtubeVideoUrl = "",
    // Add other fields as needed
  } = adminProfilesWithUserDetails || {};

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <Image
          height={300}
          width={300}
          src={profileImage}
          alt={first_name}
          className="w-32 h-32 rounded-full mr-4"
        />
        <div>
          <h1 className="text-3xl font-bold">{first_name + " " + last_name}</h1>
          <p className="text-gray-600">{personalDescription}</p>
          <div className="flex mt-2">
            <a href={socialAccounts?.twitter} className="mr-2">
              Twitter
            </a>
            <a href={socialAccounts?.linkedin} className="mr-2">
              LinkedIn
            </a>
            <a href={socialAccounts?.github}>GitHub</a>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {showcases.map((post) => (
          <div key={post._id} className="rounded overflow-hidden shadow-lg">
            <Image
              height={500}
              width={500}
              className="w-full h-48 object-cover"
              src={post.images[0]}
              alt={post.projectName}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post.projectName}</div>
              <>
                <Link
                  href={`/showcase/${post._id}`}
                  className="text-indigo-600 hover:text-indigo-400"
                >
                  View Project
                </Link>
              </>
            </div>
          </div>
        ))}
      </div>

      <RequirementsTable requirements={requirements} />
    </div>
  );
};

export default FolioUsersDetailPage;
