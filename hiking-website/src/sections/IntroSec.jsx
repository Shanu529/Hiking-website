



import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.avif";

gsap.registerPlugin(ScrollTrigger);

function Second() {
  const imgmoving2 = useRef();
  const imgMoving = useRef();
  const text = useRef();

  useGSAP(() => {
    gsap.from(imgmoving2.current, {
      x: "-500",
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: imgmoving2.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });
  });

  useGSAP(() => {
    gsap.from(imgMoving.current, {
      x: "-800",
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: imgMoving.current,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      
      },
    });
  });

  useGSAP(() => {
    gsap.from(text.current, {
      x: "500",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: text.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });
  });

  return (
    <div className="flex flex-col lg:flex-row  gap-10 mt-[10rem] px-6 lg:px-20 lg:my-[15rem]">
      
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex flex-col ">
        <div
          ref={imgMoving}
          className="absolute hidden lg:block rounded-2xl shadow-2xl left-[12rem] top-[10rem] w-64 h-64"
        >
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div
          ref={imgmoving2}
          className="rounded-2xl shadow-2xl w-64 h-64 mb-10 z-10"
        >
          <img
            src={img2}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Text Section */}
      <div
        ref={text}
        className="w-full lg:mt-10 lg:w-1/2 flex flex-col gap-8 text-center lg:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[rgb(1,37,37)] leading-tight">
          Discover Every Corner Of The World With Us
        </h2>
        <p className="text-base text-[rgb(1,37,37)]">
          Our passionate team is committed to guiding you through diverse
          destinations and providing inspiring journeys tailored for you, with
          expertise that turns every trip into a remarkable experience.
        </p>
        <button className="btn-color text-white rounded-lg px-5 py-2 self-center lg:self-start">
          See more
        </button>
      </div>
    </div>
  );
}

export default Second;
