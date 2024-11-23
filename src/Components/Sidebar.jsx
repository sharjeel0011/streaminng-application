import { CgHomeAlt } from "react-icons/cg";
import { GoDownload } from "react-icons/go";
import { FaChromecast } from "react-icons/fa";
import { PiStarThin } from "react-icons/pi";

const Sidebar = ({ setActiveScreen }) => {
    return (
      <div
        className=" h-screen w-16 bg-gray-900 flex flex-col items-center py-6 fixed top-0 left-0 z-50"
        style={{ height: "100vh" }}
      >
       
        <button onClick={() => setActiveScreen("Movies")} className="mb-4">
        <CgHomeAlt className="text-white text-3xl" />
        </button>
        <button onClick={() => setActiveScreen("Series")} className="mb-4">
        <GoDownload className="text-white text-3xl" />
        </button>
        <button onClick={() => setActiveScreen("Cartoons")} className="mb-4">
          <FaChromecast className="text-white text-3xl"/>
        </button>
        <button onClick={() => setActiveScreen("MovieDetails")} className="mb-4">
          <PiStarThin className="text-white text-3xl " />
        </button>
        </div>
     
    );
  };
  
  export default Sidebar;
  