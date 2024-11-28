// import { useState, useRef } from "react";

// // Sample movie data
// const movies = [
//   { title: "Top Gun: Maverick", year: 2022, rating: 4.8, image: "topgun.jpg" },
//   { title: "Star Wars: The Force Awakens", year: 2015, rating: 4.5, image: "starwars.jpg" },
//   { title: "Captain America: Civil War", year: 2016, rating: 4.7, image: "civilwar.jpg" },
//   { title: "Man of Steel", year: 2013, rating: 4.3, image: "manofsteel.jpg" },
//   { title: "Top Gun: Maverick", year: 2022, rating: 4.8, image: "topgun.jpg" },
//   { title: "Star Wars: The Force Awakens", year: 2015, rating: 4.5, image: "starwars.jpg" },
//   { title: "Captain America: Civil War", year: 2016, rating: 4.7, image: "civilwar.jpg" },
//   { title: "Man of Steel", year: 2013, rating: 4.3, image: "manofsteel.jpg" },
//   { title: "Top Gun: Maverick", year: 2022, rating: 4.8, image: "topgun.jpg" },
//   { title: "Star Wars: The Force Awakens", year: 2015, rating: 4.5, image: "starwars.jpg" },
//   { title: "Captain America: Civil War", year: 2016, rating: 4.7, image: "civilwar.jpg" },
//   { title: "Man of Steel", year: 2013, rating: 4.3, image: "manofsteel.jpg" },
//   { title: "Top Gun: Maverick", year: 2022, rating: 4.8, image: "topgun.jpg" },
//   { title: "Star Wars: The Force Awakens", year: 2015, rating: 4.5, image: "starwars.jpg" },
//   { title: "Captain America: Civil War", year: 2016, rating: 4.7, image: "civilwar.jpg" },
//   { title: "Man of Steel", year: 2013, rating: 4.3, image: "manofsteel.jpg" },
//   // Add more movie objects as needed
// ];

// const MovieSlider = () => {
//   const scrollContainerRef = useRef(null); // Reference to the scroll container
//   const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position

//   // Get card width dynamically
//   const cardWidth = 300; // Set card width manually if not dynamic
//   const slideWidth = cardWidth + 16; // Card width + margin for space-x-4 (16px)

//   // Function to scroll to the right
//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       setScrollPosition(scrollPosition + slideWidth); // Move the container by one slide width
//       scrollContainerRef.current.scrollTo({
//         left: scrollPosition + slideWidth, // Scroll to the new position
//         behavior: "smooth", // Smooth scrolling
//       });
//     }
//   };

//   // Function to scroll to the left
//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       setScrollPosition(scrollPosition - slideWidth); // Move the container by one slide width
//       scrollContainerRef.current.scrollTo({
//         left: scrollPosition - slideWidth, // Scroll to the new position
//         behavior: "smooth", // Smooth scrolling
//       });
//     }
//   };

//   return (
//     <div className="bg-black text-white py-8 px-4">
//       <h2 className="text-xl font-semibold mb-6">Similar Contents</h2>
//       <div className="relative">
//         {/* Scrollable container */}
//         <div
//           ref={scrollContainerRef}
//           className="flex overflow-x-scroll space-x-4 scrollbar-hidden"
//         >
//           {movies.map((movie, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transform transition duration-300 w-64 sm:w-72 md:w-80"
//             >
//               <img
//                 src={movie.image}
//                 alt={movie.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-medium truncate">{movie.title}</h3>
//                 <p className="text-sm text-gray-400">{movie.year}</p>
//                 <div className="flex items-center mt-2 space-x-2">
//                   <button className="text-red-500">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       className="w-5 h-5"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                     </svg>
//                   </button>
//                   <span className="text-gray-400">{movie.rating}</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     className="w-5 h-5 text-yellow-400"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Left Arrow Button */}
//         <button
//           onClick={scrollLeft}
//           className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//         >
//           &#8592; {/* Left arrow symbol */}
//         </button>

//         {/* Right Arrow Button */}
//         <button
//           onClick={scrollRight}
//           className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//         >
//           &#8594; {/* Right arrow symbol */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MovieSlider;





















import { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; // Importing arrow icons

// Sample movie data
const movieData = [
  { title: "Top Gun: Maverick", year: 2022, rating: 4.8, image: "topgun.jpg" },
  { title: "Star Wars: The Force Awakens", year: 2015, rating: 4.5, image: "starwars.jpg" },
  { title: "Captain America: Civil War", year: 2016, rating: 4.7, image: "civilwar.jpg" },
  { title: "Man of Steel", year: 2013, rating: 4.3, image: "manofsteel.jpg" },
  { title: "Inception", year: 2010, rating: 4.9, image: "inception.jpg" },
  { title: "The Dark Knight", year: 2008, rating: 4.9, image: "darkknight.jpg" },
  { title: "Avatar", year: 2009, rating: 4.5, image: "avatar.jpg" },
  { title: "Spider-Man: No Way Home", year: 2021, rating: 4.7, image: "spiderman.jpg" },
  { title: "Top Gun: Maverick", year: 2022, rating: 4.8, image: "topgun.jpg" },
  { title: "Star Wars: The Force Awakens", year: 2015, rating: 4.5, image: "starwars.jpg" },
  { title: "Captain America: Civil War", year: 2016, rating: 4.7, image: "civilwar.jpg" },
  { title: "Man of Steel", year: 2013, rating: 4.3, image: "manofsteel.jpg" },
  { title: "Inception", year: 2010, rating: 4.9, image: "inception.jpg" },
  { title: "The Dark Knight", year: 2008, rating: 4.9, image: "darkknight.jpg" },
  { title: "Avatar", year: 2009, rating: 4.5, image: "avatar.jpg" },
  { title: "Spider-Man: No Way Home", year: 2021, rating: 4.7, image: "spiderman.jpg" },
];

const MovieSlider = () => {
  const scrollContainerRef = useRef(null); // Reference to the scroll container

  // Function to scroll to the right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.offsetWidth; // Get the width of the container
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + scrollWidth, // Scroll to the right by container's width
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  // Function to scroll to the left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.offsetWidth; // Get the width of the container
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - scrollWidth, // Scroll to the left by container's width
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <div className="bg-black mt-16 px-6 lg:px-16">
      <h2 className="text-3xl font-bold mb-4">Popular Movies</h2>
      <div className="relative">
        {/* Scrollable container */}
        <div
          ref={scrollContainerRef} // Assign ref to the scroll container
          className="flex overflow-x-scroll space-x-4 scrollbar-hidden" // Added custom class to hide scrollbar
        >
          {movieData.map((movie, index) => (
            <div
              key={index}
              className="w-48 flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transform transition duration-300"
            >
              <img
                src={movie.image} // Use the poster URL from the object
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

        {/* Button to scroll the movies to the left */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2 rounded-full"
        >
          <IoIosArrowBack size={30} /> {/* Left arrow symbol */}
        </button>

        {/* Button to scroll the movies to the right */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 rounded-full"
        >
          <IoIosArrowForward size={30} /> {/* Right arrow symbol */}
        </button>
      </div>
    </div>
  );
};

export default MovieSlider;
