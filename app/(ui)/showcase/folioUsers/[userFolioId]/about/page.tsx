import BarCodeGenerator from "@/components/admin/BarCodeGenerator";
import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About YourCompanyName
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Empowering Creativity, One YourCompanyName at a Time
        </p>
      </div>

      <div className="mt-12">
        <div className="text-lg leading-7 text-gray-600 space-y-4">
          <p>
            At YourCompanyName, we believe in the power of individual creativity
            and the immense potential it holds when given the right platform.
            Our mission is to democratize the creation of online portfolios,
            making it accessible, secure, and personalized for everyone,
            regardless of their technical skill level or financial capacity.
          </p>
          <p>
            In today&apos;s digital world, having an online presence is more
            crucial than ever. However, the barriers to creating a website—be it
            cost, complexity, or lack of security—have kept many talented
            individuals in the shadows. YourCompanyName aims to remove these
            barriers, offering a community-driven platform where every user can
            showcase their work confidently and securely at an affordable price.
          </p>
          <p>
            We&apos;re not just about websites; we&apos;re about building a
            community. YourFolio brings together artists, designers,
            photographers, writers, and creative minds from various disciplines
            to share their work, get inspired, and connect with potential
            clients and collaborators. Our platform is a space for growth,
            learning, and inspiration, where users can also access resources to
            stay abreast of the latest trends in the market.
          </p>
          <p>
            Security and personalization are at the heart of what we do. Every
            YourFolio site is designed to be secure from the ground up, ensuring
            your data and digital footprint are protected. Meanwhile, our tools
            and features allow for deep customization and personal expression,
            ensuring your portfolio truly reflects who you are and what you
            stand for.
          </p>
          <p>
            Join us on our journey to make the digital space a more inclusive,
            creative, and connected place. Your story deserves to be told, and
            YourFolio is here to help you tell it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
