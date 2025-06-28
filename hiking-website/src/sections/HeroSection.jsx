// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// function HeroSection() {
//   const mainHeading = useRef();

//   useGSAP(()=>{
//     gsap.from(mainHeading.current,{
//       x:-200,
//       duration:1.7,
//       opacity:0,

//     })
//   })

//   return (
//     <div ref={mainHeading} className="  flex flex-col text-white gap-5 h-[50vh] pt-[2.5em] pl-[6em] font-poppins align-center justify-center ">

//       <div className="  lg:text-[4em] w-[50%] text-white text-6xl  text-wrap gap-2">
//           <h1 className="sm:text-[1rem] capitalize textheadingmain">
//           Discover Your Next Adventure with tripadvisor
//           </h1>
//       </div>

//       <div>
//         <p className=" sm:w-screen lg:w-[50%] sm:text-[0.1rem] textheadingmainP ">
//           Plan unforgettable journeys with expert guides and genuine traveler
//           reviews. Tailor each trip to your interests and explore the world with
//           confidence.
//         </p>

//       </div>

//     </div>
//   );
// }

// export default HeroSection;


import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroSection() {
  const mainHeading = useRef();

  useGSAP(() => {
    gsap.from(mainHeading.current, {
      x: -200,
      duration: 1.7,
      opacity: 0,
    });
  });

  return (
    <div
      ref={mainHeading}
      className="flex flex-col gap-6 px-6 md:px-12 lg:px-24 py-16 min-h-[60vh] justify-center items-start bg-transparent"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-[700px]">
        Discover Your Next Adventure with Tripadvisor
      </h1>

      {/* Paragraph */}
      <p className="text-sm sm:text-base md:text-lg text-white max-w-[700px]">
        Plan unforgettable journeys with expert guides and genuine traveler
        reviews. Tailor each trip to your interests and explore the world with
        confidence.
      </p>
    </div>
  );
}

export default HeroSection;
