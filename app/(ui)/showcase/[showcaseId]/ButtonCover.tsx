"use client";
import { updateFolioData } from "@/actions/updatingShowcase.action";
import { Wallpaper } from "lucide-react";
import React from "react";

const ButtonCover = ({
  image,
  showCaseId,
}: {
  image: string;
  showCaseId: string;
}) => {
  return (
    <button
      className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
      onClick={async () => await updateFolioData(image, showCaseId)}
    >
      <Wallpaper />
    </button>
  );
};

export default ButtonCover;
