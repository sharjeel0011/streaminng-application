
// import React, { useState } from "react";
// import Sidebar from "./Components/Sidebar";
// import Navbar from "./Components/Navbar";
// import LoginScreen from "./Components/LoginScreen";
// import SignupScreen from "./Components/Signup";
// import Movi from "./Screen/Movi";
// import Serires from "./Screen/Serires";
// import Cartoons from "./Screen/Cartoons";
// import MovieDetails from "./Screen/Movidetails.jsx/Movidetails";

// const App = () => {
//   const [activeScreen, setActiveScreen] = useState("Cartoons"); // Default screen

//   // Function to render the selected screen dynamically
//   const renderScreen = () => {
//     switch (activeScreen) {
//       case "Login":
//         return <div className=""> <LoginScreen /></div>;
//       case "Signup":
//         return <SignupScreen />;
//       case "Movies":
//         return <div className="p-10"> <Movi /></div>;
//       case "Series":
//         return  <div className="p-10"> <Serires /> </div>;;
//       case "Cartoons":
//         return  <div className="p-10"> <Cartoons /> </div>; 
//         case "Cartoons":
//         return  <div className="p-10"> <MovieDetails /> </div>; 
//       default:
//         return  <div className="p-10"> <Cartoons /></div>;;
//     }
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar setActiveScreen={setActiveScreen} />

//       {/* Main Content Area */}
//       <div className="flex-1">
//         {/* Navbar */}
//         <Navbar />

//         {/* Main Content (Dynamic Screens) */}
//         <div className="p-6 text-white bg-black min-h-screen">{renderScreen()}</div>
//       </div>
//     </div>
//   );
// };

// export default App;











import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import LoginScreen from "./Components/LoginScreen";
import SignupScreen from "./Components/Signup";
import Movi from "./Screen/Movi";
import Serires from "./Screen/Serires";
import Cartoons from "./Screen/Cartoons";
import MovieDetails from "./Screen/Movidetails.jsx/Movidetails";

const App = () => {
  const [activeScreen, setActiveScreen] = useState("Cartoons"); // Default screen

  // Function to render the selected screen dynamically
  const renderScreen = () => {
    switch (activeScreen) {
      case "Login":
        return (
          <div className="">
            <LoginScreen />
          </div>
        );
      case "Signup":
        return <SignupScreen />;
      case "Movies":
        return (
          <div className="p-10">
            <Movi />
          </div>
        );
      case "Series":
        return (
          <div className="p-10">
            <Serires />
          </div>
        );
      case "Cartoons":
        return (
          <div className="p-10">
            <Cartoons />
          </div>
        );
      case "MovieDetails": // Corrected case
        return (
          <div className="p-10">
            <MovieDetails />
          </div>
        );
      default:
        return (
          <div className="p-10">
            <Cartoons />
          </div>
        );
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar setActiveScreen={setActiveScreen} />

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Main Content (Dynamic Screens) */}
        <div className="p-6 text-white bg-black min-h-screen">{renderScreen()}</div>
      </div>
    </div>
  );
};

export default App;
