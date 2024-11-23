import React from "react";

const SeriesBanner = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center">
      {/* Center Text */}
      <h1 className="text-6xl font-bold">SERIES</h1>

      {/* Bottom Left Text */}
      <div className="absolute bottom-4 left-4">
        <p className="text-sm">En tendencia</p>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default SeriesBanner;
