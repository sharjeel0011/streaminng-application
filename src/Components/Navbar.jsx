



// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Use Link for routing

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-black text-white w-full h-16 flex items-center px-8">
//       {/* Logo */}
//       <div className="flex-1 text-2xl font-bold">AGENCY</div>

//       {/* Desktop Links */}
//       <div className="hidden md:flex space-x-6">
//         <Link to="/movies" className="text-sm uppercase hover:text-gray-400">
//           Movies
//         </Link>
//         <Link to="/series" className="text-sm uppercase hover:text-gray-400">
//           Series
//         </Link>
//         <Link to="/cartoon" className="text-sm uppercase hover:text-gray-400">
//           Cartoons
//         </Link>
//       </div>

//       {/* Right Section (Notifications and Profile) */}
//       <div className="hidden md:flex items-center space-x-6">
//         <button className="text-xl hover:text-gray-400">🔔</button>
//         <div className="text-sm font-medium cursor-pointer hover:text-gray-400">
//           John M
//         </div>
//       </div>

//       {/* Hamburger Menu for Mobile */}
//       <button
//         className="block md:hidden text-xl"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         ☰
//       </button>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-black z-50 flex flex-col items-center space-y-4 py-4">
//           <Link
//             to="/movies"
//             className="text-sm uppercase hover:text-gray-400"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Movies
//           </Link>
//           <Link
//             to="/series"
//             className="text-sm uppercase hover:text-gray-400"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Series
//           </Link>
//           <Link
//             to="/cartoon"
//             className="text-sm uppercase hover:text-gray-400"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Cartoons
//           </Link>
//           <div className="text-sm font-medium cursor-pointer hover:text-gray-400">
//             John M
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;















import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for routing

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white w-full h-16 flex items-center px-8">
      {/* Logo */}
      <div className="flex-1 text-2xl font-bold">AGENCY</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-sm uppercase hover:text-gray-400">
          Home
        </Link>
        <Link to="/movies" className="text-sm uppercase hover:text-gray-400">
          Movies
        </Link>
        <Link to="/series" className="text-sm uppercase hover:text-gray-400">
          Series
        </Link>
        <Link to="/cartoon" className="text-sm uppercase hover:text-gray-400">
          Cartoons
        </Link>
        <Link to="/movedetails" className="text-sm uppercase hover:text-gray-400">
          Movie Details
        </Link>
        <Link to="/login" className="text-sm uppercase hover:text-gray-400">
          Login
        </Link>
        <Link to="/signup" className="text-sm uppercase hover:text-gray-400">
          Sign Up
        </Link>
      </div>

      {/* Right Section (Notifications and Profile) */}
      <div className="hidden md:flex items-center space-x-6">
        <button className="text-xl hover:text-gray-400">🔔</button>
        <div className="text-sm font-medium cursor-pointer hover:text-gray-400">
          John M
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="block md:hidden text-xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black z-50 flex flex-col items-center space-y-4 py-4">
          <Link
            to="/"
            className="text-sm uppercase hover:text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="text-sm uppercase hover:text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Movies
          </Link>
          <Link
            to="/series"
            className="text-sm uppercase hover:text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Series
          </Link>
          <Link
            to="/cartoon"
            className="text-sm uppercase hover:text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cartoons
          </Link>
          <Link
            to="/movedetails"
            className="text-sm uppercase hover:text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Movie Details
          </Link>
          <Link
            to="/login"
            className="text-sm uppercase hover:text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-sm uppercase hover:text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
