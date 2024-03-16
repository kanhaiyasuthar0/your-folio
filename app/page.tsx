import { ImagesSliderDemo } from "@/components/generics/ImageSlider";
import { InfiniteMovingCardsDemo } from "@/components/generics/Testimonial";
import { Globe } from "@/components/ui/globe";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [
  "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const HomePage = () => {
  // Example feature list, adapt according to your actual features and content
  const features = [
    {
      title: "Portfolio @ ₹99",
      description:
        "Get your professional portfolio website with unparalleled features at an unbeatable price.",
      imageUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      details: [
        "Secure and reliable",
        "Admin panels for easy management",
        "Part of a vibrant community",
      ],
    },
    {
      title: "Latest Market Trends",
      description:
        "Stay updated with the latest trends in the market through daily blogs and community discussions.",
      imageUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      details: [
        "Daily blogs on new trends",
        "Community discussions for networking",
        "Project showcases to inspire",
      ],
    },
    {
      title: "AI-Enabled Solutions",
      description:
        "Leverage the power of AI for your website, from automated image compression to chat support.",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      details: [
        "Auto image compression with quality retention",
        "24x7 AI-powered chat support",
        "AI-driven content suggestions",
      ],
    },
    // Add more features as needed
  ];

  return (
    <main className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section>
        <ImagesSliderDemo />
      </section>
      <section>
        <InfiniteMovingCardsDemo />
      </section>

      <section
        className="bg-cover bg-center py-36 px-4 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        }}
      >
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Your Own Website for Just ₹99
          </h1>
          <p className="mb-8">
            Secure, personalized, SEO-friendly, multilingual sites with the
            latest technology.
          </p>
          <>
            <Link
              href="/admin"
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Get Started
            </Link>
          </>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-gray-800"
            >
              {/* Adjusting image container for consistent height */}
              <div className="w-full h-56 overflow-hidden">
                <Image
                  height={1000}
                  width={1000}
                  className="w-full h-full object-cover"
                  src={feature.imageUrl}
                  alt={feature.title}
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{feature.title}</div>
                <p className="text-gray-400 text-base">{feature.description}</p>
                <ul className="list-disc list-inside text-gray-400">
                  {feature.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Section - Testimonial/Blog Highlight */}
      <section className="bg-gray-800 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Hear From Our Community</h2>
        <p className="text-lg mx-auto leading-relaxed max-w-3xl mb-8">
          Discover the stories of success from our diverse community of
          creators, designers, and entrepreneurs. YourFolio is not just a
          platform; it&apos;s a launching pad for your dreams.
        </p>

        <Link
          href="/testimonials"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Testimonials
        </Link>
      </section>

      {/* Registration Call to Action */}
      <section className="bg-blue-600 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Growing Community</h2>
        <p className="mb-8">
          Start building your dream website today with just ₹99. Secure, fast,
          and tailored just for you.
        </p>
        <>
          <a className="inline-block bg-white text-blue-600 font-bold py-2 px-4 rounded">
            Register Now
          </a>
        </>
      </section>
    </main>
  );
};

export default HomePage;
