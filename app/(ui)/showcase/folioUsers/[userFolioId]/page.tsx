import React from "react";
import Link from "next/link";
import RequirementsTable from "@/components/generics/Requirements";

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
        "https://images.unsplash.com/photo-1592231262903-abf7e4f5c079?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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

const FolioUsersDetailPage = () => {
  const { name, bio, profileImage, socialLinks, posts, requirements } =
    mockUserData;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={profileImage}
          alt={name}
          className="w-32 h-32 rounded-full mr-4"
        />
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-600">{bio}</p>
          <div className="flex mt-2">
            <a href={socialLinks.twitter} className="mr-2">
              Twitter
            </a>
            <a href={socialLinks.linkedin} className="mr-2">
              LinkedIn
            </a>
            <a href={socialLinks.github}>GitHub</a>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {posts.map((post) => (
          <div key={post.id} className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src={post.thumbnail}
              alt={post.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post.title}</div>
              <>
                <Link
                  href={post.link}
                  className="text-indigo-600 hover:text-indigo-400"
                >
                  View Project
                </Link>
              </>
            </div>
          </div>
        ))}
      </div>

      {/* <h2 className="text-2xl font-bold mt-8">Requirements</h2>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Site</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {requirements.map((req, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
            >
              <td className="border px-4 py-2">{req.site}</td>
              <td className="border px-4 py-2">{req.type}</td>
              <td className="border px-4 py-2">{req.status}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <RequirementsTable requirements={requirements} />
    </div>
  );
};

export default FolioUsersDetailPage;