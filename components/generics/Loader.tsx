import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="spinner"></div>
      <p className="text-lg font-semibold text-gray-600 ml-4">
        Loading Your Folio...
      </p>
    </div>
  );
};

export default Loader;
