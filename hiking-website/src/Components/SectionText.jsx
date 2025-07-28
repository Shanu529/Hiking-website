


import React, { useRef } from "react";
import hampta from "../assets/img/hampta.jpg";
import sar from "../assets/img/sar-pass.webp";
import kedarnath from "../assets/img/kedarkanth.jpg";
import markha from "../assets/img/markha.jpg";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function SectionText(props) {


 const textanime = useRef();

   useGSAP(() => {
    gsap.from(textanime.current, {
      scale: "-2",
      opacity: 0,
    
      scrollTrigger:{
        trigger: textanime.current,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      
      },
    });
  });


  return (
    <>
      {/* Section Heading */}
      <div ref={textanime} className="flex flex-col justify-center items-center gap-3 py-10 px-4 bg-[#DFF5E1] text-center">
        <h2 className="font-semibold text-2xl md:text-3xl">{props.heading}</h2>
        <p className="w-full max-w-2xl text-base text-gray-700">{props.heading2}</p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col gap-10 px-5 md:px-10 py-10 bg-white">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row gap-5 flex-1">
            <div className="w-full md:w-[40%] h-60 rounded-md shadow-xl overflow-hidden">
              <img src={hampta} className="w-full h-full object-cover" alt="Hampta" />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h2 className="text-xl font-semibold">Hampta Pass Trek</h2>
              <p className="text-sm text-gray-700">
                The Hampta Pass Trek is a captivating journey through the
                Himalayas, offering breathtaking views, lush valleys, and a
                unique blend of adventure and tranquility. This trek takes you
                from the lush green landscapes of Kullu to the...
              </p>
              <button className="btnblue text-white text-sm px-4 py-2 rounded-lg w-fit">
                See more
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row gap-5 flex-1">
            <div className="w-full md:w-[40%] h-60 rounded-md shadow-xl overflow-hidden">
              <img src={sar} className="w-full h-full object-cover" alt="Sar Pass" />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h2 className="text-xl font-semibold">Sar Pass Trek</h2>
              <p className="text-sm text-gray-700">
                The Sar Pass Trek is a thrilling adventure in the Indian
                Himalayas, known for its stunning landscapes, challenging
                trails, and breathtaking views. This trek takes you through
                lush forests....
              </p>
              <button className="btnblue text-white text-sm px-4 py-2 rounded-lg w-fit">
                See more
              </button>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Card 3 */}
          <div className="flex flex-col md:flex-row gap-5 flex-1">
            <div className="w-full md:w-[40%] h-60 rounded-md shadow-xl overflow-hidden">
              <img src={kedarnath} className="w-full h-full object-cover" alt="Kedarnath" />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h2 className="text-xl font-semibold">Kedarkantha Trek</h2>
              <p className="text-sm text-gray-700">
                A snowy trail in Uttarakhand, Kedarkantha offers a classic winter trekking
                experience. With stunning views of the Himalayas, it's ideal for beginners
                and perfect for snowy adventures...
              </p>
              <button className="btnblue text-white text-sm px-4 py-2 rounded-lg w-fit">
                See more
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col md:flex-row gap-5 flex-1">
            <div className="w-full md:w-[40%] h-60 rounded-md shadow-xl overflow-hidden">
              <img src={markha} className="w-full h-full object-cover" alt="Markha" />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h2 className="text-xl font-semibold">Markha Valley Trek</h2>
              <p className="text-sm text-gray-700">
                A high-altitude trek in Ladakh, offering arid landscapes, Buddhist culture,
                and epic views. Great for those seeking solitude, history, and raw nature.
              </p>
              <button className="btnblue text-white text-sm px-4 py-2 rounded-lg w-fit">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionText;
