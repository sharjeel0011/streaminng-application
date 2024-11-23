import React from "react";
import { FaPlay, FaPlus, FaRegHeart, FaStar } from "react-icons/fa";
import MovieDetailscardsdown from '../../Components/Movidetailcardsdown'
const MovieDetails = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <button className="bg-white text-black p-4 rounded-full">
            <FaPlay className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        {/* Title and Details */}
        <div className="mb-4">
          <h1 className="text-4xl font-bold">Pacific Rim</h1>
          <p className="text-gray-400">To fight monsters, we created monsters</p>
          <div className="flex items-center space-x-4 text-gray-400 mt-2">
            <span>2013</span>
            <span>2h 11m</span>
            <div className="flex items-center space-x-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div>
            <img
              src="https://via.placeholder.com/300x450"
              alt="Movie Poster"
              className="rounded-lg"
            />
            <div className="mt-4 space-y-2">
              <button className="flex items-center justify-center w-full bg-red-600 py-2 rounded-md text-sm font-medium">
                <FaRegHeart className="mr-2" />
                Watch Later
              </button>
              <button className="flex items-center justify-center w-full bg-gray-800 py-2 rounded-md text-sm font-medium">
                <FaPlus className="mr-2" />
                Add to List
              </button>
              <button className="flex items-center justify-center w-full bg-gray-800 py-2 rounded-md text-sm font-medium">
                Schedule
              </button>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Pacific Rim</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              ACTION – SCIENCE FICTION – ADVENTURE
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur. Nunc sit eget pharetra ut
              at duis non justo turpis. Elit aliquam rutrum diam feugiat egestas.
              Egent egestas in egestas tristique eget. Elit aliquam rutrum diam
              feugiat egestas eget volutpat commodo egestas lectus tristique
              mattis. Elit lobortis et malesuada imperdiet nullam venenatis non
              nec.
            </p>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">
                Country: US<br />
                Language: English<br />
                Popularity: 97%
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-6">
              <button className="bg-blue-600 py-2 px-4 rounded-md text-sm font-medium flex items-center">
                <FaPlay className="mr-2" />
                Play
              </button>
              <button className="bg-gray-800 py-2 px-4 rounded-md text-sm font-medium flex items-center">
                <FaPlus className="mr-2" />
                My List
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Gallery</h2>
            <div className="space-y-4">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/300x150"
                  alt="Trailer"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <FaPlay className="text-white text-2xl" />
                </div>
              </div>
              <img
                src="https://via.placeholder.com/300x150"
                alt="Gallery Image"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Cast Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Cast</h2>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
            <button className="text-sm text-gray-400">Show More</button>
          </div>
        </div>
      </div>
      <MovieDetailscardsdown/>
    </div>
  );
};

export default MovieDetails;
