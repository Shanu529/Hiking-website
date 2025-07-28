


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
