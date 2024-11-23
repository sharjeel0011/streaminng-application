import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black text-white w-full h-16 flex justify-between items-center px-8">
      {/* Left Section */}
      <div className="flex space-x-6">
        <a href="#" className="text-sm uppercase hover:text-gray-400">
          New
        </a>
        <a href="#" className="text-sm uppercase hover:text-gray-400">
          Movies
        </a>
        <a href="#" className="text-sm uppercase hover:text-gray-400">
          Series
        </a>
        <a href="#" className="text-sm uppercase hover:text-gray-400">
          Cartoons
        </a>
      </div>

      {/* Logo */}
      <div className="text-2xl font-bold">AGENCY</div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <button className="text-xl hover:text-gray-400">🔔</button>
        {/* Profile */}
        <div className="text-sm font-medium cursor-pointer hover:text-gray-400">
          John M
        </div>
      </div>
    </div>
  );
};

export default Navbar;
