import dbConnect from "@/database/mongodb/connections/dbConnect";
import ShowCase from "@/database/mongodb/models/showcase/showcase.schema";
import User from "@/database/mongodb/models/user/user.schema";
import Image from "next/image";
import Link from "next/link";

// Mock data for the example
const showcaseData = {
  id: "1",
  images: [
    "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1584111671211-bc0c192ceb95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1566112718365-4c8ccbedc3d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  ],

  title: "Showcase Title",
  description: "This is a detailed description of the showcase.",
  user: {
    name: "Janny desouza",
    socialMedia: {
      twitter: "https://twitter.com/user",
      linkedin: "https://linkedin.com/in/user",
      github: "https://github.com/user",
    },
    id: "userid",
  },
  requirements: [
    {
      type: "Development",
      place: "Remote",
      date: "2024-01-01",
      publishDate: "2023-12-01",
      estimatedCompletion: "3 months",
      expectedDelivery: "2024-04-01",
    },
  ],
  testimonials: [
    {
      name: "Alex Johnson",
      role: "Homeowner",
      company: "",
      testimony:
        "Thanks to the incredible design team, my apartment has been transformed into a cozy and stylish space. Every detail was considered, resulting in a home that perfectly reflects my personality and lifestyle.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Samantha Lee",
      role: "CEO",
      company: "Tech Innovations Inc.",
      testimony:
        "Our office space needed a major overhaul to suit our growing team and embody our brand's image. The transformation was beyond our expectations, creating a dynamic, efficient, and inviting environment.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Michael Davis",
      role: "Restaurant Owner",
      company: "Davis' Culinary",
      testimony:
        "The redesign of our restaurant has not only improved its aesthetics but also enhanced our guests' dining experience. The team's innovative approach to design has made our space unique and welcoming.",
      image:
        "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ],

  events: [
    {
      id: 1,
      name: "Interior Design Expo 2024",
      date: "2024-03-15",
      location: "New York City, NY",
      description:
        "Join us for the largest interior design expo in the country, featuring the latest trends, tools, and talks by leading designers.",
      link: "https://example.com/events/interior-design-expo",
    },
    {
      id: 2,
      name: "Modern Home Workshop",
      date: "2024-04-10",
      location: "Online",
      description:
        "A hands-on workshop focused on modern home aesthetics, from minimalism to smart home integration.",
      link: "https://example.com/events/modern-home-workshop",
    },
    {
      id: 3,
      name: "Sustainable Design Webinar",
      date: "2024-05-05",
      location: "Online",
      description:
        "Learn about sustainable living spaces and how to incorporate eco-friendly practices into your design projects.",
      link: "https://example.com/events/sustainable-design-webinar",
    },
  ],

  videoLinks: [
    {
      id: 1,
      title: "5 Interior Design Trends for 2024",
      url: "https://www.youtube.com/watch?v=example1",
      description:
        "Explore the top 5 interior design trends shaping homes in 2024.",
    },
    {
      id: 2,
      title: "DIY Home Office Makeover",
      url: "https://www.youtube.com/watch?v=example2",
      description:
        "Step-by-step guide to transforming your home office into a modern and productive space.",
    },
    {
      id: 3,
      title: "Eco-Friendly Living Spaces",
      url: "https://www.youtube.com/watch?v=example3",
      description:
        "Discover how to design living spaces that are both beautiful and eco-friendly.",
    },
  ],
};
const ShowCaseDetailPage = async ({ params }: any) => {
  const { showcaseId } = params;
  const { requirements, testimonials } = showcaseData;
  await dbConnect();
  const showCaseDetail = await ShowCase.findOne({ _id: showcaseId });
  console.log("🚀 ~ ShowCaseDetailPage ~ showCaseDetail:", showCaseDetail);
  const { images, description, projectName, user } = showCaseDetail;

  const userData = await User.findOne({ external_id: user });
  return (
    <div className="container max-w-6xl mx-auto p-6">
      {/* Hero Section with the first image as a backdrop */}
      <div
        className="hero-section bg-cover bg-center py-20 mb-8"
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-md">
          <h1 className="text-4xl font-bold text-white mb-4">{projectName}</h1>
          <p className="text-xl text-gray-200">{description}</p>
        </div>
      </div>

      {/* Grid Display for Additional Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {images?.slice(1).map((image: string, index: number) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <Image
              height={500}
              width={500}
              src={image}
              alt={`Showcase ${index + 2}`}
              className="w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* User Details */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Creator Information</h2>
        <p className="mb-4">{user?.name}</p>
        <div className="flex gap-4">
          <>
            <Link
              href={user?.socialMedia?.twitter ?? ""}
              className="text-blue-500 hover:underline"
            >
              Twitter
            </Link>
          </>
          <>
            <Link
              href={user?.socialMedia?.linkedin ?? ""}
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </Link>
          </>
          <>
            <Link
              href={user?.socialMedia?.github ?? ""}
              className="text-blue-500 hover:underline"
            >
              GitHub
            </Link>
          </>
        </div>
      </div>

      {/* Requirements Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Project Requirements</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-2 font-semibold text-gray-600 border-b">
                  Type
                </th>
                <th className="p-2 font-semibold text-gray-600 border-b">
                  Place
                </th>
                <th className="p-2 font-semibold text-gray-600 border-b">
                  Date
                </th>
                <th className="p-2 font-semibold text-gray-600 border-b">
                  Estimated Completion
                </th>
                <th className="p-2 font-semibold text-gray-600 border-b">
                  Expected Delivery
                </th>
              </tr>
            </thead>
            <tbody>
              {requirements.map((req, index) => (
                <tr key={index}>
                  <td className="p-2 border-b border-gray-200">{req.type}</td>
                  <td className="p-2 border-b border-gray-200">{req.place}</td>
                  <td className="p-2 border-b border-gray-200">{req.date}</td>
                  <td className="p-2 border-b border-gray-200">
                    {req.estimatedCompletion}
                  </td>
                  <td className="p-2 border-b border-gray-200">
                    {req.expectedDelivery}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Link to More from This Creator */}
      <div className="text-center">
        <>
          <Link
            href={`/showcase/folioUsers/${userData._id}/projects`}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            More from this creator
          </Link>
        </>
      </div>
    </div>
  );
};

export default ShowCaseDetailPage;
