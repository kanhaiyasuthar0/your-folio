import { AnimatedPinDemo } from "@/components/generics/ThreeDPin";
import React from "react";

const Services = () => {
  // List of service plans
  const plans = [
    {
      id: 1,
      name: "Basic Site",
      price: 99,
      features: [
        "Admin Panel",
        "Secured",
        "8GB Storage",
        "Community Access",
        "No Video Support",
        "No Requirements Access",
      ],
    },
    {
      id: 2,
      name: "Complete Site",
      price: 299,
      features: [
        "Admin Panel + AI Support",
        "Secured with Advanced Protocols",
        "20GB Storage",
        "Community Access with Posting Rights",
        "Video Support",
        "Requirements Access",
        "No Ads",
        "Custom Design Templates",
        "Multilingual Support",
        // Add more features as needed
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <div className="flex flex-wrap justify-center -mx-4">
        {plans.map((plan, index) => (
          // <div key={plan.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
          //   <div className="border rounded-lg shadow-lg p-6">
          //     <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
          //     <h4 className="text-lg mb-4">₹{plan.price}</h4>
          //     <ul className="mb-6">
          //       {plan.features.map((feature, index) => (
          //         <li key={index} className="text-sm mb-2">
          //           ✓ {feature}
          //         </li>
          //       ))}
          //     </ul>
          //   </div>
          // </div>

          <AnimatedPinDemo key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Services;
