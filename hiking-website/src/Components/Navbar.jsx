import React from "react";
gsap.registerPlugin(useGSAP);
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Navbar() {
  useGSAP (()=>{
    gsap.from(".parent-nav-div", {
      y: -100,
      duration: 0.7,
      opacity: 0,
      delay:1
    })
  })


  return (
    <div className=" parent-nav-div navbar flex justify-between p-[2rem]  items-center ">
      <div className="logoM">
        <h2 className=" logoM text-[0.7rem] md:text-[1rem] lg:text-xl text-white font-bold">Logo</h2>
      </div>

      <div className=" naviconsSize flex justify-between items-center">
        <ul className="flex justify-between gap-5 text-white font-semibold text-[0.7rem] md:text-[1rem] lg:text-xl">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>

      <button
        className=" btncss bg-green-400 text-white font-semibold hidden sm:hidden lg:block"
        style={{ padding: "0.5rem 1rem", borderRadius: "5px" }}
      >
        click
      </button>
    </div>
  );
}

export default Navbar;