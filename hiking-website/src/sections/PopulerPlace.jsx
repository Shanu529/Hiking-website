// import React from "react";
// import PlaceCard from "../Components/Cardplace";

// function PopulerPlace(props) {
//   return (
//     <>
//       <div className="pt-5 mt-10">
//         <div className="  text-center text-[2rem] font-medium flex flex-col  items-center ">
//           {props.heading}
//           <div className="w-[70vw] ">
//             <h2 className="text-[1rem] text-gray-600 mt-2">
//           From majestic mountain peaks to serene forest paths, our popular trekking destinations showcase the diversity and wonder of the great outdoors. Dive into these incredible trails and find your perfect hiking adventure today
//           </h2>
//           </div>
          
//         </div>

//         <PlaceCard />

//       </div>
//     </>
//   );
// }

// export default PopulerPlace;


import React from "react";
import CardOfPlace from "../Components/Cardplace";

function PopulerPlace({ heading }) {
  return (
    <div className="pt-10 pb-10 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">{heading}</h2>
        <p className="text-sm md:text-base text-gray-600 mt-3">
          From majestic mountain peaks to serene forest paths, our popular trekking destinations showcase the diversity and wonder of the great outdoors. Dive into these incredible trails and find your perfect hiking adventure today.
        </p>
      </div>

      <CardOfPlace />
    </div>
  );
}

export default PopulerPlace;

