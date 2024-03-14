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
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setCurrentImageIndex(0); // Reset to the first image when not hovering
      }}
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          src={item.images[currentImageIndex]}
          alt={item.projectName}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{item.projectName}</h3>
        <p className="text-gray-700 mb-4">{item.description}</p>
        <Link href={`/showcase/${item._id}`} passHref>
          <button
            aria-label="View"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowcaseCard;
