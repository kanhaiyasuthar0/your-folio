"use client";

import { usePathname } from "next/navigation";
import React from "react";

const HoliOfferBanner = () => {
  const pathname = usePathname()!;
  const regex = /^\/showcase\/folioUsers\/.*$/;
  // const regex = /^\/showcase(?:\/folioUsers\/[^/]+\/.*)?$/;

  if (!regex.test(pathname)) {
    return (
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold py-3 overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="animate-marquee-holi whitespace-nowrap">
            🎨 Holi Special: Enjoy colorful deals! Free services for the first
            25 sign-ups! 🎨
          </div>
        </div>
      </div>
    );
  }
};

export default HoliOfferBanner;
