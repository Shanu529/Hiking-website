import React from "react";
// import img1 from "../public/images/img1.png";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.avif";

function Second() {
  return (
    <>
      <div className="flex gap-5 lightGreenBg">
        <div className=" lightGreenBg w-[50vw] p-20 relative ">
          <div
            style={{ height: "20rem", width: "20rem" }}
            className=" rounded-[2rem] absolute left-[15rem] top-[10rem]  shadow-black-900 shadow-2xl"
          >
            <img
              className=" bg-bottom bg-cover w-full h-full object-cover object-cover rounded-[2rem]"
              src={img1}
              alt=""
            />
          </div>

          <div
            style={{ height: "20rem", width: "20rem" }}
            className="rounded-[2rem]  shadow-black-900 shadow-2xl mb-10"
          >
            <img
              className=" bg-bottom bg-cover w-full h-full object-cover object-cover rounded-[2rem]"
              src={img2}
              alt=""
            />
          </div>
        </div>

        <div className="w-[40vw] flex flex-col justify-center gap-7 ">
          <h2 className="text-[2.6rem] text-[rgb(1,37,37)]">
            Discover Every Corner Of The World With Us
          </h2>

          <p className="text-[rgb(1,37,37)]">
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
