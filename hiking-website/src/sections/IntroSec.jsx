import React from "react";
// import img1 from "../public/images/img1.png";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.avif";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Second() {
  const imgmoving2 = useRef();
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

  const imgMoving = useRef();
  useGSAP(() => {
    gsap.from(imgMoving.current, {
      x: "-800", // slide in from fully off-screen left
      duration: 1,
      opacity: 0,

      scrollTrigger: {
        trigger: imgMoving.current,
        start: "top 90%", // when top of section hits 80% of screen height
        end: "top 50%", // animation finishes as it reaches 30%
        scrub: true, // scroll-linked and smooth
        markers: true, // remove in production
        // pin: true,       // remove unless you want the whole section to freeze
      },
    });
  });

  const text = useRef();
  useGSAP(() => {
    gsap.from(text.current, {
      x: "500",
      opacity:0,
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
    <>
      <div className="flex gap-5 mt-[20rem] displaynone">
        <div className="   w-[50vw] p-20 relative ">
          <div
            ref={imgMoving}
            style={{ height: "20rem", width: "20rem" }}
            className=" rounded-[2rem] absolute left-[15rem] top-[10rem]  shadow-black-900 shadow-2xl"
          >
            <img
              className=" bg-bottom bg-cover w-full h-full  object-cover rounded-[2rem]"
              src={img1}
              alt=""
            />
          </div>

          <div
            ref={imgmoving2}
            style={{ height: "20rem", width: "20rem" }}
            className="rounded-[2rem]  shadow-black-900 shadow-2xl mb-10"
          >
            <img
              className=" bg-bottom bg-cover w-full h-full object-cover rounded-[2rem]"
              src={img2}
              alt=""
            />
          </div>
        </div>

        <div ref={text} className=" headingcss w-[40vw] flex flex-col justify-center gap-7 ">
          <h2  className=" textheadingmain text-[2.6rem] text-[rgb(1,37,37)]">
            Discover Every Corner Of The World With Us
          </h2>

          <p ref={text} className="text-[rgb(1,37,37)]">
            Our passionate team is committed to guiding you through diverse
            destinations and providing inspiring journeys tailored for you, with
            expertise that turns every trip into a remarkable experience.
          </p>

          <div className=" ">
            <button className="btn-color text-white rounded-lg">
              See more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Second;
