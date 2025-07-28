

import React, { useRef } from "react";
import img3 from "../assets/img/img3.webp";
import img4 from "../assets/img/img4.avif";
import img5 from "../assets/img/img5.webp";
import img7 from "../assets/img/img7.jpg";
import location from "../icons/location-unscreen.gif";
import place from "../icons/earth-unscreen.gif";
import trails from "../icons/route-unscreen.gif";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Timeline } from "gsap/gsap-core";

function Third(props) {
  const animetionText = useRef();
  const nextimg = useRef();
  const animetionSec = useRef();

  useGSAP(() => {
    gsap.from(animetionText.current, {
      x: "-500",
      opacity: 0,
      duration: 1,

      scrollTrigger: {
        trigger: animetionText.current,
        start: "top 80%",
        end: "top 90%",
      
      },
    });
  });
  useGSAP(() => {
    gsap.from(animetionSec.current, {
      x: "500",
      opacity: 0,
      duration: 1,

      scrollTrigger: {
        trigger: animetionSec.current,
        start: "top 80%",
        end: "top 90%",
      
      },
    });
  });
  useGSAP(() => {
    gsap.from(nextimg.current, {
      x: "500",
      opacity: 0,
      duration: 1,

      scrollTrigger: {
        trigger: nextimg.current,
        start: "top 80%",
        end: "top 90%",
      
      },
    });
  });

  

  

  return (
    <div className="flex flex-col mt-5  lg:flex-row justify-between items-center gap-10 bg-[#DFF5E1] p-5 lg:p-10">
      {/* Left Section */}
      <div
        className="w-full lg:w-1/2 flex flex-col gap-6 px-2  "
        ref={animetionText}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[#012525]">
          Best Features For You
        </h2>

        <p className="text-sm md:text-base text-[#012525]">
          Explore the most scenic hiking trails with detailed maps, breathtaking
          photos, and real-time trail updates. Discover your next adventure with
          features designed for every explorer.
        </p>

        {/* Feature 1 */}
        <div className="flex gap-4 items-start">
          <img className="w-12 h-12" src={trails} alt="Trail" />
          <div>
            <h3 className="text-lg font-medium text-[#012525]">
              Discover Trails
            </h3>
            <p className="text-sm">
              Browse a wide range of hiking tracks with interactive maps and
              essential trail information at your fingertips.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex gap-4 items-start">
          <img className="w-12 h-12" src={place} alt="Places" />
          <div>
            <h3 className="text-lg font-medium text-[#012525]">
              Popular Places
            </h3>
            <p className="text-sm">
              Check out the most loved hiking spots by our community. Find
              trails that are trending and highly rated.
            </p>
          </div>
        </div>

        {/* Feature 3 (dynamic from props) */}
        <div className="flex gap-4 items-start">
          <img className="w-12 h-12" src={location} alt="Location" />
          <div>
            <h3 className="text-lg font-medium text-[#012525]">
              {props.heading}
            </h3>
            <p className="text-sm">{props.section}</p>
          </div>
        </div>

        <button className="btn-color w-fit text-white rounded-lg px-4 py-2">
          See more
        </button>
      </div>

      {/* Right Section (Images) */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 px-2 md:px-6">
        {/* Top Row */}
        <div  ref={animetionSec} className="flex flex-col md:flex-row gap-4">
          <img
            src={img3}
            alt="img3"
            className=" img1 rounded-2xl w-full md:w-1/2 h-52 object-cover shadow-xl"
          />
          <img
            src={img4}
            alt="img4"
            className=" img2 rounded-2xl w-full md:w-1/2 h-52 object-cover shadow-xl"
          />
        </div>

        {/* Bottom Row */}
        <div ref={nextimg} className="flex flex-col md:flex-row gap-4">
          <img
            src={img5}
            alt="img5"
            className=" img3 rounded-2xl w-full md:w-1/2 h-40 object-cover shadow-xl"
          />
          <img
            src={img7}
            alt="img7"
            className="img4 rounded-2xl w-full md:w-1/2 h-40 object-cover shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Third;
