import React from "react";

const YourFolioBenefits = () => {
  return (
    <div className="bg-white text-gray-600">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          Elevate Your Professional Presence with YourFolio
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-500 text-center">
          Discover the pivotal reasons everyone needs a personal website and why
          YourFolio is the go-to choice.
        </p>

        <div className="mt-10">
          <div className="text-center mb-10">
            <h3 className="text-2xl leading-9 font-bold text-gray-900">
              Why Everyone Needs a Personal Website
            </h3>
            <p className="mt-1 text-lg leading-6 text-gray-500">
              Unlocking the full potential of your professional identity.
            </p>
          </div>
          <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Global Reach",
              "Professional Credibility",
              "Effective Communication",
              "SEO Benefits",
              "Effortless Marketing",
              "Showcase Your Work",
              "Direct Lead Generation",
            ].map((benefit, index) => (
              <li key={index} className="mt-3 flex items-center">
                <span className="h-6 w-6 rounded-full flex items-center justify-center bg-blue-500 text-white mr-4">
                  {index + 1}
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl leading-9 font-bold text-gray-900">
              Why Choose YourFolio?
            </h3>
            <p className="mt-1 text-lg leading-6 text-gray-500">
              The comprehensive solution for building your online brand.
            </p>
          </div>
          <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Affordable Accessibility",
              "Community Engagement",
              "Simplified Portfolio Management",
              "Cloud Storage Solutions",
              "Customization at Your Fingertips",
              "SEO-Optimized",
              "Comprehensive Security and Easy Authentication",
              "Reliable Support",
              "Innovative AI Features",
              "Integrated Business Tools",
              "Responsive Design",
              "Enhanced Sharing with Open Graph",
              "Lead Generation",
              "Direct Access Philosophy",
              "Modern QR Code Sharing",
              "Continuous Innovation",
            ].map((feature, index) => (
              <li key={index} className="mt-3 flex items-center">
                <span className="h-6 w-6 rounded-full flex items-center justify-center bg-green-500 text-white mr-4">
                  {index + 1}
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default YourFolioBenefits;
