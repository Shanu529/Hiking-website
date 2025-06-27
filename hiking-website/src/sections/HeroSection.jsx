import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroSection() {
  const mainHeading = useRef();

  useGSAP(()=>{
    gsap.from(mainHeading.current,{
      x:-200,
      duration:1.7,
      opacity:0,
      
    })
  })
  

  return (
    <div ref={mainHeading} className="  flex flex-col text-white gap-5 h-[50vh] pt-[2.5em] pl-[6em] font-poppins align-center justify-center ">

      <div className=" text-[4em] w-[50%] text-white text-6xl  text-wrap gap-2">
          <h1 className="capitalize textheadingmain">
          Discover Your Next Adventure with tripadvisor
          </h1>
      </div>

      <div>
        <p className=" w-[50%] textheadingmainP ">
          Plan unforgettable journeys with expert guides and genuine traveler
          reviews. Tailor each trip to your interests and explore the world with
          confidence.
        </p>

      </div>

    </div>
  );
}

export default HeroSection;
