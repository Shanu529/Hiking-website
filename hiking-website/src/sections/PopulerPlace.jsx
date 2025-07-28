


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

      <CardOfPlace para="lsfj sjfksfhjkd shfdjf "/>
     
      
    </div>
  );
}

export default PopulerPlace;

