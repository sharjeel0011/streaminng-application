import React from "react";
import { CgAdd } from "react-icons/cg";
const movies = [
  { title: "Top Gun: Maverick", year: 2022, rating: 4.8, image: "topgun.jpg" },
  { title: "Star Wars: The Force Awakens", year: 2015, rating: 4.5, image: "starwars.jpg" },
  { title: "Captain America: Civil War", year: 2016, rating: 4.7, image: "civilwar.jpg" },
  { title: "Man of Steel", year: 2013, rating: 4.3, image: "manofsteel.jpg" },
  { title: "Top Gun: Maverick", year: 2022, rating: 4.8, image: "topgun.jpg" },
  { title: "Star Wars: The Force Awakens", year: 2015, rating: 4.5, image: "starwars.jpg" },
  { title: "Captain America: Civil War", year: 2016, rating: 4.7, image: "civilwar.jpg" },
  { title: "Man of Steel", year: 2013, rating: 4.3, image: "manofsteel.jpg" },
  // Add more movie objects as needed
];

const SimilarContents = () => {
  return (
    <div className="bg-black text-white py-8 px-4">
      <h2 className="text-xl font-semibold mb-6">Similar contents</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transform transition duration-300"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium truncate">{movie.title}</h3>
              <p className="text-sm text-gray-400">{movie.year}</p>
              <div className="flex items-center mt-2 space-x-2">
                <button className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                <span className="text-gray-400">{movie.rating}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full bg-neutral-800 text-white py-3 px-6 rounded-md hover:bg-gray-400 flex items-center justify-center gap-2 transition">
      <CgAdd  className="text-lg" />
      <span>Show More</span>
     
    </button>
    </div>
  );
};

export default SimilarContents;
