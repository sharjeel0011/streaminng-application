// import React from 'react'
// import MovieShowcase from '../../Components/Home/MoveShowcase'
// import NormalCards from '../../Components/Home/NormalCards'
// import MovieSlider from '../../Components/Home/SlidersCards'
// import HighlightSection from '../../Components/Home/HeilightSection'
// const Home = () => {
//     return (
//         <>
//             <div className='bg-black'>
//                 <MovieShowcase />
//                 <MovieSlider />
//                 <NormalCards />
//                 <HighlightSection/>
//             </div>
//         </>
//     )
// }

// export default Home

















import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar"; // Sidebar Component
import MovieShowcase from "../../Components/Home/MoveShowcase";
import NormalCards from "../../Components/Home/NormalCards";
import MovieSlider from "../../Components/Home/SlidersCards";
import HighlightSection from "../../Components/Home/HeilightSection";

const Home = () => {
  const [activeScreen, setActiveScreen] = useState("Movies"); // Track the active screen

  // Dynamic rendering based on active screen
  const renderActiveScreen = () => {
    switch (activeScreen) {
      case "Movies":
        return (
          <>
            <MovieShowcase />
            <MovieSlider />
            <NormalCards />
            <HighlightSection />
          </>
        );
      case "Series":
        return <h1 className="text-white text-center mt-8">Series Section</h1>;
      case "Cartoons":
        return <h1 className="text-white text-center mt-8">Cartoons Section</h1>;
      case "MovieDetails":
        return <h1 className="text-white text-center mt-8">Movie Details Section</h1>;
      default:
        return <h1 className="text-white text-center mt-8">404 - Page Not Found</h1>;
    }
  };

  return (
    <div className="flex bg-black min-h-screen">
      {/* Sidebar */}
      <Sidebar setActiveScreen={setActiveScreen} />

      {/* Main Content Area */}
      <div className="ml-16 w-full">{renderActiveScreen()}</div>
    </div>
  );
};

export default Home;
