"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const ShowcaseCard = ({ item }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering && item.images.length > 1) {
      console.log("here");
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % item.images.length
        );
      }, 1500); // Change image every 2 seconds

      return () => clearInterval(interval);
    }
  }, [isHovering, item.images.length]);

  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setCurrentImageIndex(0); // Reset to the first image when not hovering
      }}
    >
      <div className="w-full overflow-hidden" style={{ height: "12rem" }}>
        {" "}
        {/* Fixed image container height */}
        <img
          src={item.images[currentImageIndex]}
          alt={item.projectName}
          className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
        />
      </div>
      <div
        className="p-4 flex flex-col justify-between"
        style={{ height: "10rem" }}
      >
        {" "}
        {/* Fixed content container height */}
        <h3 className="font-bold text-lg mb-2 truncate">
          {item.projectName}
        </h3>{" "}
        {/* Truncate long titles */}
        <p
          className="text-gray-700 text-sm mb-4 overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {item.description}
        </p>{" "}
        {/* Reduced font size and clamped lines for uniform height */}
        <Link href={`/showcase/${item._id}`} passHref>
          <button
            aria-label="View"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 mt-auto"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowcaseCard;
