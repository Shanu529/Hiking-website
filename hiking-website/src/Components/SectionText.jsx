import React from "react";
import hampta from "../assets/img/hampta.jpg";
import sar from "../assets/img/sar-pass.webp";
import triund from "../assets/img/triund.avif";
import kedarnath from "../assets/img/kedarkanth.jpg";
import markha from "../assets/img/markha.jpg";

function SectionText(props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5  bg-lightGreen">
        {/* paigng 20 */}
        <h2 className="font-medium text-[2rem]">{props.heading}</h2>
        <p className="w-1/2 text-center">{props.heading2}</p>
      </div>

      <div className="p-10 flex flex-col gap-5 mr-[2rem] ml-[2rem]">
        <div className="flex felx-wrap gap-20 ">
            {/* pading 5rem */}
          <div className="flex gap-4">
            <div className="w-[30rem] h-[15rem]  shadow-black-900 shadow-2xl rounded-[0.5rem]">
              <img
                className="h-full w-full object-cover rounded-md"
                src={hampta}
                alt=""
              />
            </div>

            <div className=" flex flex-col gap-4">
              <h2 className="text-[1.7rem]">Hampta Pass Trek</h2>

              <p className="text-[0.9em]">
                The Hampta Pass Trek is a captivating journey through the
                Himalayas, offering breathtaking views, lush valleys, and a
                unique blend of adventure and tranquility. This trek takes you
                from the lush green landscapes of Kullu to the...
              </p>
              <span>
                <button className="text-start  btnblue rounded-lg text-white pt-2 pb-2 pr-4 pl-4 text-sm">
                  See more
                </button>
              </span>
            </div>
          </div>

          <div className="flex felx-wrap">
            <div className="flex gap-4">
              <div className="w-[30rem] h-[15rem] shadow-black-900 shadow-2xl rounded-[0.5rem]">
                <img
                  className="h-full w-full object-cover  rounded-md"
                  src={sar}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-[1.7rem]">Sar Pass Trek</h2>

                <p className="text-[0.9em]">
                  The Sar Pass Trek is a thrilling adventure in the Indian
                  Himalayas, known for its stunning landscapes, challenging
                  trails, and breathtaking views. This trek takes you through
                  lush forests....
                </p>
                <span>
                 <button className="text-start  btnblue rounded-lg text-white pt-2 pb-2 pr-4 pl-4 text-sm">
                  See more
                </button>
                </span>
              </div>
            </div>
          </div>
        </div>


        <div>
             <div className="flex felx-wrap gap-20">
                {/* slo there */}
          <div className="flex gap-4">
            <div className="w-[30rem] h-[15rem]  shadow-black-900 shadow-2xl rounded-[0.5rem]">
              <img
                className="h-full w-full object-cover rounded-md"
                src={kedarnath}
                alt=""
              />
            </div>

            <div className=" flex flex-col gap-5">
              <h2 className="text-[1.7rem]">Hampta Pass Trek</h2>

              <p className="text-[0.9em]">
                The Hampta Pass Trek is a captivating journey through the
                Himalayas, offering breathtaking views, lush valleys, and a
                unique blend of adventure and tranquility. This trek takes you
                from the lush green landscapes of Kullu to the...
              </p>
              <span>
                <button className="text-start  btnblue rounded-lg text-white pt-2 pb-2 pr-4 pl-4 text-sm">
                  See more
                </button>
              </span>
            </div>
          </div>

          <div className="flex felx-wrap">
            <div className="flex gap-4">
              <div className="w-[30rem] h-[15rem] shadow-black-900 shadow-2xl rounded-[0.5rem]">
                <img
                  className="h-full w-full object-cover  rounded-md"
                  src={markha}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-5">
                <h2 className="text-[1.7rem]">Sar Pass Trek</h2>

                <p className="text-[0.9em]">
                  The Sar Pass Trek is a thrilling adventure in the Indian
                  Himalayas, known for its stunning landscapes, challenging
                  trails, and breathtaking views. This trek takes you through
                  lush forests....
                </p>
                <span>
                  <button className="text-start  btnblue rounded-lg text-white pt-2 pb-2 pr-4 pl-4 text-sm">
                  See more
                </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default SectionText;
