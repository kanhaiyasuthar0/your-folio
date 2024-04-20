"use client";
import { formatDistanceToNow } from "date-fns";
import { ListCollapse } from "lucide-react";
import Image from "next/image";
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

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentImageIndex(0); // Reset to the first image when not hovering
  };

  // const cardStyle = {
  //   backgroundColor: theme.colors.cardBackground,
  //   boxShadow: isHovering
  //     ? `0px 10px 20px ${theme.colors.shadowHover}`
  //     : `0px 5px 10px ${theme.colors.shadow}`,
  //   transition: "box-shadow 0.3s ease-in-out",
  // };

  console.log(item.coverImage, "item.coverImage");
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="w-full h-52 overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src={
            isHovering
              ? item.images[currentImageIndex]
              : item.coverImage[0] ?? item.images[currentImageIndex]
          }
          alt={item.projectName}
          className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 truncate">{item.projectName}</h3>
        <p className="text-gray-700 text-sm mb-4 overflow-hidden max-h-20">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Posted {formatDistanceToNow(new Date(item.createdAt))} ago
          </p>
          <Link href={`/showcase/${item._id}`} passHref>
            <button
              aria-label="View"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <ListCollapse />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
