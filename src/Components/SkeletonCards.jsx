// import React from "react";



// const DynamicCardLayout = ({ sections }) => {
//   return (
//     <div className="bg-black text-white min-h-screen p-6">
//       {sections.map((section, index) => (
//         <div key={index} className="mb-8">
//           {/* Section Title */}
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-bold mb-4">{section.title}</h2>
//             {/* Pagination Dots */}
//             <div className="flex space-x-2">
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//               <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
//               <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
//             </div>
//           </div>

//           {/* Card Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {section.cards.map((card, cardIndex) => (
//               <div
//                 key={cardIndex}
//                 className="bg-gray-700 h-32 rounded-lg flex items-center justify-center"
//               >
//                 {card.title && (
//                   <span className="text-sm font-medium text-gray-300">
//                     {card.title}
//                   </span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DynamicCardLayout;





const DynamicCardLayout = ({ sections }) => {
    return (
      <div className="bg-black text-white min-h-screen p-6">
        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            {/* Section Title */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold mb-4">{section.title}</h2>
              {/* Pagination Dots */}
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
            </div>
  
            {/* Card Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {section.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="bg-gray-700 aspect-square w-full max-w-[120px] rounded-lg flex items-center justify-center"
                >
                  {card.title && (
                    <span className="text-sm font-medium text-gray-300 text-center">
                      {card.title}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default DynamicCardLayout;
  




















