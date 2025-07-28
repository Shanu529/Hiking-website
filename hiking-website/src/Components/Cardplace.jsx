import React from "react";
import hampta from "../assets/img/hampta.jpg";
import sar from "../assets/img/sar-pass.webp";
import triund from "../assets/img/triund.avif";
import chandrashila from "../assets/img/chandrashila.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const imageList = [hampta, chandrashila, sar, triund];
const imageList = [
  {
    para: "The Hampta Pass Trek is a captivating journey through the Himalayas, offering breathtaking views, lush valleys...",
    src: hampta,
  },
  {
    para: "The Sar Pass Trek is a thrilling adventure in the Indian Himalayas,known for its stunning landscapes,challenging trails...",
    src: chandrashila,
  },
  {
    para: "A snowy trail in Uttarakhand, Kedarkantha offers a classic winter trekking experience. With stunning views... ",
    src: sar,
  },
  {
    para: "A high-altitude trek in Ladakh, offering arid landscapes, Buddhist culture, and epic views. Great for those...",
    src: triund,
  },
];

function CardOfPlace() {
  const imgMoving = useRef();

  useGSAP(() => {
    gsap.from(imgMoving.current, {
      y: "200",
      opacity: 0,
      scrollTrigger: {
        trigger: imgMoving.current,
        start: "top 95%",
        end:"top 80%",
        
        scrub:1,
      },
    });
  });

  return (
    <div ref={imgMoving}
      
      className="flex flex-wrap justify-center gap-6 mt-6 px-4 "
    >
      {imageList.map((place, index) => (
        <div 
          key={index}
          className=" relative w-full sm:w-[45%] md:w-[22%] h-[45vh] rounded-lg shadow-2xl overflow-hidden"
        >
          <img
            src={place.src}
            alt={"place"}
            className=" w-full h-full object-cover rounded-lg "
          />

          <div className="absolute top-0 h-full w-full text-white capitalize  opacity-0  hover:opacity-100 transition duration-500">
            <p className="py-5 px-5  absolute bottom-0  "> {place.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardOfPlace;
