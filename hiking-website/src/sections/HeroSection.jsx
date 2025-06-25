import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col text-white gap-5 h-[50vh] pt-[2.5em] pl-[6em] font-poppins align-center justify-center ">

      <div className=" text-[4em] w-[50%] text-white text-6xl  text-wrap gap-2">
          <h1 className="capitalize">
          Discover Your Next Adventure with tripadvisor
          </h1>
      </div>

      <div>
        <p className=" w-[50%] ">
          Plan unforgettable journeys with expert guides and genuine traveler
          reviews. Tailor each trip to your interests and explore the world with
          confidence.
        </p>

      </div>

    </div>
  );
}

export default HeroSection;
