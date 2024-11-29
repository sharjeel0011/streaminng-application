import React from "react";
import { useRef } from "react";
import MainImg from '../../assets/homeMain.png'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsFire } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";



const MovieShowcase = () => {
    const categories = [
        { category: "Trending", icon: <FaArrowTrendUp /> },
        { category: "Popular", icon: <BsFire /> },
        { category: "Recently added", icon: <FaPlus /> },
        { category: "Premium", icon: <FaStar /> },
        
      ];
      
      const movieData = [
        
        {
          title: "Spider-Man",
          poster: "https://via.placeholder.com/200x300?text=Spider-Man",
        },
        {
          title: "Avengers",
          poster: "https://via.placeholder.com/200x300?text=Avengers",
        },
        {
          title: "Uncharted",
          poster: "https://via.placeholder.com/200x300?text=Uncharted",
        },
        {
            title: "Spider-Man",
            poster: "https://via.placeholder.com/200x300?text=Spider-Man",
          },
          {
            title: "Avengers",
            poster: "https://via.placeholder.com/200x300?text=Avengers",
          },
          {
            title: "Uncharted",
            poster: "https://via.placeholder.com/200x300?text=Uncharted",
          },
          {
            title: "Uncharted",
            poster: "https://via.placeholder.com/200x300?text=Uncharted",
          },
          {
              title: "Spider-Man",
              poster: "https://via.placeholder.com/200x300?text=Spider-Man",
            },
            {
              title: "Avengers",
              poster: "https://via.placeholder.com/200x300?text=Avengers",
            },
            {
              title: "Uncharted",
              poster: "https://via.placeholder.com/200x300?text=Uncharted",
            },
      ];
      const scrollContainerRef = useRef(null); // Create a ref for the container

      // Function to scroll right
      const scrollRight = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: 300, // Scroll by 300px to the right
            behavior: "smooth", // Smooth scroll
          });
        }
      };
  return (
    <div className="bg-gradient-to-b  from-blue-100 to-black text-white min-h-screen">
    <div 
    style={{
        backgroundImage: `url('${MainImg}')`, // Replace with your image URL
      }}
    >
     


<div className="gap-96">
  {/* Search Section */}
 
<div className="relative flex flex-col  items-start px-6 lg:flex-row lg:items-center lg:justify-between lg:px-16 mb-8">
  {/* Search Input with Icon */}
  <div className="relative w-52 mt-10">
    {/* Search Icon */}
    <FaMagnifyingGlass className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
    {/* Input Field */}
    <input
      className="w-full pl-10 pr-3 py-2 rounded-lg bg-transparent border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Search"
      type="search"
    />
  </div>
</div>

  {/* Hero Section */}
  <div className="relative flex flex-col items-start px-6 lg:flex-row lg:items-center lg:justify-between lg:px-16">
    <div className="lg:max-w-md">
      <h1 className="text-5xl font-extrabold">STAR WARS</h1>
      <p className="text-lg mt-4">
        The surviving members of the resistance face the First Order once
        again, and the legendary conflict between the Jedi and the Sith
        reaches its peak bringing the Skywalker saga to its end.
      </p>

    {/* start star */}
    <div className="rating flex space-x-1">
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-yellow-400 border border-yellow-500"
  />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-yellow-400 border border-yellow-500"
    defaultChecked
  />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-yellow-400 border border-yellow-500"
  />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-yellow-400 border border-yellow-500"
  />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-yellow-400 border border-yellow-500"
  />
</div>
{/* end */}

      <div className="flex items-center space-x-4 mt-6">
        <button className="bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-600">
          Watch Now
        </button>
        <button className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-black">
          Trailer
        </button>
      </div>
    </div>
  </div>
</div>



      {/* Popular Movies Section */}
     
<div className="mt-16 px-6 lg:px-16 p-10">
  <h2 className="text-3xl font-bold mb-4">Popular Movies</h2>
  <div className="relative">
    <div
      ref={scrollContainerRef} // Assign ref to the scroll container
      className="flex overflow-x-scroll space-x-4 scrollbar-hidden" // Hide scrollbar for better appearance
    >
      {movieData.map((movie, index) => (
        <div
          key={index}
          className="w-40 sm:w-48 flex-shrink-0 bg-gray-800 rounded-lg shadow-lg"
        >
          <img
            src={movie.poster} // Use the poster URL from the object
            alt={movie.title}
            className="rounded-t-lg"
          />
          <div className="p-2 sm:p-4">
            <p className="text-sm sm:text-base font-bold">{movie.title}</p> {/* Adjust text size */}
          </div>
        </div>
      ))}
    </div>
    {/* Button to scroll the movies to the right */}
    <button
      onClick={scrollRight}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 rounded-full"
    >
      <IoIosArrowForward />
    </button>
  </div>
</div>


</div>
{/* sub ceatageory */}


<div className="mt-8 px-4 sm:px-6 lg:px-16">
  <ul className="flex flex-wrap gap-4 text-sm justify-between sm:justify-center">
    {categories.map((item, index) => (
      <li
        key={index}
        className="px-4 py-2 flex items-center space-x-2 cursor-pointer   "
      >
        {/* Icon */}
        <span className="text-white">{item.icon}</span>
        {/* Category Name */}
        <span className="text-white">{item.category}</span>
      </li>
    ))}
  </ul>
</div>


      {/* Categories Section */}
      <div className="mt-8 px-6 lg:px-16">
  <ul className="flex flex-wrap gap-4 sm:justify-between justify-center text-sm">
    {["Action", "Adventure", "Animation", "Fiction", "Heroes", "Comedy"].map(
      (category, index) => (
        <li
          key={index}
          className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer text-center"
        >
          {category}
        </li>
      )
    )}
  </ul>
</div>

    </div>
  );
};

export default MovieShowcase;










