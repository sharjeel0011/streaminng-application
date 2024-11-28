// import { CgHomeAlt } from "react-icons/cg";
// import { GoDownload } from "react-icons/go";
// import { FaChromecast } from "react-icons/fa";
// import { PiStarThin } from "react-icons/pi";

// const Sidebar = ({ setActiveScreen }) => {
//     return (
//       <div
//         className=" h-screen w-16 bg-neutral-800 flex flex-col items-center py-6 fixed top-0 left-0 z-50"
//         style={{ height: "100vh" }}
//       >
       
//         <button onClick={() => setActiveScreen("Movies")} className="mb-4">
//         <CgHomeAlt className="text-white text-2xl" />
//         </button>
//         <button onClick={() => setActiveScreen("Series")} className="mb-4">
//         <GoDownload className="text-white text-2xl" />
//         </button>
//         <button onClick={() => setActiveScreen("Cartoons")} className="mb-4">
//           <FaChromecast className="text-white text-2xl"/>
//         </button>
//         <button onClick={() => setActiveScreen("MovieDetails")} className="mb-4">
//           <PiStarThin className="text-white text-2xl " />
//         </button>
//         </div>
     
//     );
//   };
  
//   export default Sidebar;
  












import { useState } from "react";
import { CgHomeAlt } from "react-icons/cg";
import { GoDownload } from "react-icons/go";
import { FaChromecast } from "react-icons/fa";
import { PiStarThin } from "react-icons/pi";

const Sidebar = ({ setActiveScreen }) => {
  // State to manage expanded menu items
  const [expanded, setExpanded] = useState("");

  // Toggle the expanded state for specific items
  const toggleExpand = (item) => {
    setExpanded((prev) => (prev === item ? "" : item));
  };

  return (
    <div className="h-screen w-16 bg-gray-900 flex flex-col items-center py-6 fixed top-0 left-0 z-50">
      {/* Movies Section */}
      <div className="mb-4">
        <button onClick={() => toggleExpand("Movies")}>
          <CgHomeAlt className="text-white text-3xl" />
        </button>
        {expanded === "Movies" && (
          <div className="mt-2 text-center text-sm text-gray-300">
            <p onClick={() => setActiveScreen("Movies")} className="cursor-pointer hover:text-white">
              Movies
            </p>
          </div>
        )}
      </div>

      {/* Series Section */}
      <div className="mb-4">
        <button onClick={() => toggleExpand("Series")}>
          <GoDownload className="text-white text-3xl" />
        </button>
        {expanded === "Series" && (
          <div className="mt-2 text-center text-sm text-gray-300">
            <p onClick={() => setActiveScreen("Series")} className="cursor-pointer hover:text-white">
              Series
            </p>
          </div>
        )}
      </div>

      {/* Cartoons Section */}
      <div className="mb-4">
        <button onClick={() => toggleExpand("Cartoons")}>
          <FaChromecast className="text-white text-3xl" />
        </button>
        {expanded === "Cartoons" && (
          <div className="mt-2 text-center text-sm text-gray-300">
            <p onClick={() => setActiveScreen("Cartoons")} className="cursor-pointer hover:text-white">
              Cartoons
            </p>
          </div>
        )}
      </div>

      {/* Movie Details Section */}
      <div className="mb-4">
        <button onClick={() => toggleExpand("MovieDetails")}>
          <PiStarThin className="text-white text-3xl" />
        </button>
        {expanded === "MovieDetails" && (
          <div className="mt-2 text-center text-sm text-gray-300">
            <p onClick={() => setActiveScreen("MovieDetails")} className="cursor-pointer hover:text-white">
              Details
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
