import React from "react";
import hampta from "../assets/img/hampta.jpg";
import sar from "../assets/img/sar-pass.webp";
import triund from "../assets/img/triund.avif";
import kedarnath from "../assets/img/kedarkanth.jpg";
import markha from "../assets/img/markha.jpg";
import chandrashimla from "../assets/img/chandrashila.jpg";

function CardOfPlace(props) {
  return (
    <>
      <div className="    flex gap-5 mt-5 justify-center">
        <div className="flex ">
          <div className="w-[15vw] h-[50vh] shadow-black-900 shadow-2xl rounded-[0.5rem]">
            <img
              className="w-full h-full rounded-[0.5rem] object-cover"
              src={hampta}
              alt=""
            />
          </div>
        </div>
        <div className="flex ">
          <div className="w-[15vw] h-[50vh]  shadow-black-900 shadow-2xl rounded-[0.5rem]">
            <img
              className="w-full h-full object-cover rounded-[0.5rem] "
              src={chandrashimla}
              alt=""
            />
          </div>
        </div>
        <div className="flex ">
          <div className="w-[15vw] h-[50vh]  shadow-black-900 shadow-2xl rounded-[0.5rem]">
            <img
              className="w-full h-full  object-cover rounded-[0.5rem]"
              src={sar}
              alt=""
            />
          </div>
        </div>
        <div className="flex ">
          <div className="w-[15vw] h-[50vh]  shadow-black-900 shadow-2xl rounded-[0.5rem]">
            <img
              className="w-full h-full  object-cover rounded-[0.5rem]"
              src={triund}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardOfPlace;
