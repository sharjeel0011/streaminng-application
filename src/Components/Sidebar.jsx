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
  











// import { CgHomeAlt } from "react-icons/cg";
// import { GoDownload } from "react-icons/go";
// import { FaChromecast } from "react-icons/fa";
// import { PiStarThin } from "react-icons/pi";

// const Sidebar = ({ setActiveScreen }) => {
//   return (
//     <div
//       className="h-[500px] mt-16 w-12 bg-neutral-900 flex flex-col items-center py-4 fixed top-0 left-0 z-50 shadow-lg"
//       style={{ height: "100vh" }}
//     >
//       {/* Home Button */}
//       <button
//         onClick={() => setActiveScreen("Movies")}
//         className="mb-4 flex flex-col items-center group"
//       >
//         <CgHomeAlt className="text-white text-xl group-hover:text-teal-400 transition-colors duration-200" />
//         <span className="text-[10px] text-white mt-1 hidden group-hover:block">
//           Home
//         </span>
//       </button>

//       {/* Series Button */}
//       <button
//         onClick={() => setActiveScreen("Series")}
//         className="mb-4 flex flex-col items-center group"
//       >
//         <GoDownload className="text-white text-xl group-hover:text-teal-400 transition-colors duration-200" />
//         <span className="text-[10px] text-white mt-1 hidden group-hover:block">
//           Series
//         </span>
//       </button>

//       {/* Cartoons Button */}
//       <button
//         onClick={() => setActiveScreen("Cartoons")}
//         className="mb-4 flex flex-col items-center group"
//       >
//         <FaChromecast className="text-white text-xl group-hover:text-teal-400 transition-colors duration-200" />
//         <span className="text-[10px] text-white mt-1 hidden group-hover:block">
//           Cartoons
//         </span>
//       </button>

//       {/* Movie Details Button */}
//       <button
//         onClick={() => setActiveScreen("MovieDetails")}
//         className="mb-4 flex flex-col items-center group"
//       >
//         <PiStarThin className="text-white text-xl group-hover:text-teal-400 transition-colors duration-200" />
//         <span className="text-[10px] text-white mt-1 hidden group-hover:block">
//           Details
//         </span>
//       </button>
//     </div>
//   );
// };

// export default Sidebar;










import { CgHomeAlt } from "react-icons/cg";
import { GoDownload } from "react-icons/go";
import { FaChromecast } from "react-icons/fa";
import { PiStarThin } from "react-icons/pi";

const Sidebar = ({ setActiveScreen }) => {
  return (
    <div
      className="h-[300px] mt-24 w-10 bg-neutral-800 flex flex-col items-center py-4 fixed top-0 left-0 z-50 shadow-lg"
    >
      <button onClick={() => setActiveScreen("Movies")} className="mb-4">
        <CgHomeAlt className="text-white text-2xl" />
      </button>
      <button onClick={() => setActiveScreen("Series")} className="mb-4">
        <GoDownload className="text-white text-2xl" />
      </button>
      <button onClick={() => setActiveScreen("Cartoons")} className="mb-4">
        <FaChromecast className="text-white text-2xl" />
      </button>
      <button onClick={() => setActiveScreen("MovieDetails")} className="mb-4">
        <PiStarThin className="text-white text-2xl" />
      </button>
    </div>
  );
};

export default Sidebar;
