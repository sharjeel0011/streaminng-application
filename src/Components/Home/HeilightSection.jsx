import React from "react";
import { CgAdd } from "react-icons/cg";
const HighlightSection = () => {
  // Sample Data for the movies carousel
  const movies = [
    {
      title: "Fallout",
      year: 2024,
      image:
        "https://storage.googleapis.com/a1aa/image/AzgBbCwuZqKMA10F963ReJukA97LKTktfmA7kuPndgbOjk1TA.jpg",
    },
    {
      title: "Arcane",
      year: 2021,
      image:
        "https://storage.googleapis.com/a1aa/image/daKaeCia5y1PditRCgOXb40YWy4rsieDRDvmbFDgwX5Vjk1TA.jpg",
    },
    {
      title: "Invincible",
      year: 2023,
      image:
        "https://storage.googleapis.com/a1aa/image/dnBleBGxk9wVXygJu9I01vEoUmMqeRatA8LRLsG2xXSPjk1TA.jpg",
    },
    {
      title: "Reacher",
      year: 2022,
      image:
        "https://storage.googleapis.com/a1aa/image/DkkycTKWYfyfWETYY0nEpXR6RxGmNwdsvby2OtXQw5bMjk1TA.jpg",
    },
    {
      title: "Cyberpunk: Edgerunners",
      year: 2022,
      image:
        "https://storage.googleapis.com/a1aa/image/Pe21YKfGwLt7CEanPuxiUyQs66vSR1wWxtMFr5MwULBUjk1TA.jpg",
    },
    {
      title: "Vikings: Valhalla",
      year: 2022,
      image:
        "https://storage.googleapis.com/a1aa/image/AodYseGWxbVpWye084h54HQtfsHcY8cNy42uMHJd49OiGJrnA.jpg",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto p-4">
        {/* Header Section */}
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTExqpInUmbliK00sQ580GLXtP97fpWS2eg&s"
            alt="House of the Dragon background"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <div className="bg-red-600 text-white px-2 py-1 rounded">16</div>
            <div className="text-gray-300">2022</div>
            <div className="text-gray-300">|</div>
            <div className="text-gray-300">2 Seasons</div>
            <div className="text-gray-300">|</div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-gray-500"></i>
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <h1 className="text-3xl font-bold">House of the Dragon</h1>
            <p className="text-gray-300 mt-2">
              Lorem ipsum dolor sit amet consectetur. Rutrum ultricies amet
              class hac vivamus semper inceptos condimentum. Est mattis bibendum
              euismod sed facilisis laoreet.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Watch
              </button>
              <button className="text-white px-4 py-2 rounded border border-white">
                MY LIST
              </button>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="text-gray-300">
                Information
              </a>
              <a href="#" className="text-gray-300">
                Trailer
              </a>
              <a href="#" className="text-gray-300">
                Reviews
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mt-8">
          <div className="flex space-x-4 overflow-x-auto">
            {movies.map((movie, index) => (
              <div key={index} className="flex-none w-48">
                <img
                  src={movie.image}
                  alt={`${movie.title} poster`}
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="mt-2 text-center">
                  <h2 className="text-lg font-bold">{movie.title}</h2>
                  <p className="text-gray-400">{movie.year}</p>
                  <div className="flex justify-center space-x-2 mt-1">
                    <i className="fas fa-heart text-red-500"></i>
                    <i className="fas fa-eye text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
        <button className="mt-6 w-full bg-neutral-800 text-white py-3 px-6 rounded-md hover:bg-gray-400 flex items-center justify-center gap-2 transition">
      <CgAdd  className="text-lg" />
      <span>Show More</span>
     
    </button>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
