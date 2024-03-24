import React from "react";

const ModernVideoComponent = () => {
  return (
    <div className="bg-gray-900 p-4 md:p-8 lg:p-12 rounded-lg shadow-lg text-center">
      <div className="aspect-w-21 aspect-h-9">
        <iframe
          className="rounded-lg shadow-lg m-auto h-80"
          src="https://res.cloudinary.com/dhlck4tsv/video/upload/v1710672862/1_fuwsfq.mp4" // Replace YOUR_VIDEO_EMBED_URL with your video embed link
          title="Modern Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          autoFocus={false}
        ></iframe>
      </div>
      <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold mt-4">
        A Glimpse Into Our World
      </h2>
      <p className="text-gray-300 mt-2">
        Experience the innovation and craftsmanship that define our projects.
      </p>
    </div>
  );
};

export default ModernVideoComponent;
