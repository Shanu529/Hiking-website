// import React from "react";
// import img1 from "../assets/img/img1.jpg";
// import img2 from "../assets/img/img2.avif";
// import location from "../icons/location-unscreen.gif";
// import place from "../icons/earth-unscreen.gif";
// import trails from "../icons/route-unscreen.gif";
// import img3 from "../assets/img/img3.webp";
// import img4 from "../assets/img/img4.avif";
// import img5 from "../assets/img/img5.webp";
// import img6 from "../assets/img/img6.webp";
// import img7 from "../assets/img/img7.jpg";


// function Third(props) {
//   return (
//     <div className="flex  lightGreenBg justify-between mt-20 pt-5 pb-5">
//       <div className="w-[40vw] flex flex-col  gap-7  pl-20 justify-center">
//         <h2 className="text-[1.9rem] text-[rgb(1,37,37)] font-semibolf">
//           Best Features For You
//         </h2>

//         <p className="text-[rgb(1,37,37)] text-[0.9rem]">
//           Explore the most scenic hiking trails with detailed maps, breathtaking
//           photos, and real-time trail updates. Discover your next adventure with
//           features designed for every explorer.
//         </p>
//         <div className="flex gap-3">
//           <div>
//             <img className="w-[4rem]" src={trails} alt="" />
//           </div>
//           <div>
//             <h2 className="text-[1.7rem] font-normal text-[rgb(1,37,37)]">
//               Discover Trails
//             </h2>

//             <p className="text-[0.9em]">
//               Browse a wide range of hiking tracks with interactive maps and
//               essential trail information at your fingertips.{" "}
//             </p>
//           </div>
//         </div>

//         <div className="flex gap-3">
//           <div>
//             <img className="w-[4rem] " src={place} alt="" />
//           </div>
//           <div>
//             <h2 className="font-normal text-[1.7rem]">Popular Places</h2>

//             <p className="text-[0.9em]">
//               Check out the most loved hiking spots by our community. Find
//               trails that are trending and highly rated for unforgettable
//               experiences.
//             </p>
//           </div>
//         </div>

//         <div className="flex gap-3">
//           <div>
//             <img className="w-[4rem] " src={location} alt="" />
//           </div>

//           <div>
//             <h2 className="font-normal text-[1.7rem]">{props.heading}</h2>

//             <p className="text-[0.9em]">
//               {props.section}
//             </p>
//           </div>
//         </div>

//         <div className=" ">
//           <button className="btn-color text-white rounded-lg">See more</button>
//         </div>
//       </div>

//       <div className=" lightGreenBg w-[50vw]  bg ">
//         <div className="flex ga-5 ">
//           <div
//             style={{}}
//             className=" rounded-[2rem]  m-5  w-[20rem] shadow-black-900 shadow-2xl"
//           >
//             <img
//               className=" bg-bottom bg-cover object-bottom w-full h-full  object-cover rounded-[2rem]"
//               src={img3}
//               alt=""
//             />
//           </div>

//           <div
//             style={{}}
//             className=" rounded-[2rem] m-5 h-[20rem] w-full shadow-black-900 shadow-2xl"
//           >
//             <img
//               className=" bg-bottom bg-cover w-full h-full  [object-position:0_70%] object-cover rounded-[2rem]"
//               src={img4}
//               alt=""
//             />
//           </div>
//         </div>

//         <div className="flex ga-5 justify-between">
//           <div
//             style={{}}
//             className=" rounded-[2rem] m-5 w-full h-[10rem]   shadow-black-900 shadow-2xl"
//           >
//             <img
//               className=" bg-bottom bg-cover w-full h-full object-cover rounded-[2rem]"
//               src={img5}
//               alt=""
//             />
//           </div>
//           <div
//             style={{}}
//             className="rounded-[2rem] m-5 w-[30rem] h-[10rem] shadow-black-900 shadow-2xl mb-10"
//           >
//             <img
//               className=" bg-bottom bg-cover w-full h-full object-cover rounded-[2rem]"
//               src={img7}
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Third;


import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.avif";
import location from "../icons/location-unscreen.gif";
import place from "../icons/earth-unscreen.gif";
import trails from "../icons/route-unscreen.gif";
import img3 from "../assets/img/img3.webp";
import img4 from "../assets/img/img4.avif";
import img5 from "../assets/img/img5.webp";
import img6 from "../assets/img/img6.webp";
import img7 from "../assets/img/img7.jpg";

function Third(props) {
  return (
    <div className="flex flex-col lg:flex-row lightGreenBg justify-between mt-20 pt-5 pb-5 px-5 gap-10">
      
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-7 justify-center">
        <h2 className="text-2xl lg:text-3xl text-[rgb(1,37,37)] font-semibold">
          Best Features For You
        </h2>

        <p className="text-[rgb(1,37,37)] text-sm lg:text-base">
          Explore the most scenic hiking trails with detailed maps, breathtaking
          photos, and real-time trail updates. Discover your next adventure with
          features designed for every explorer.
        </p>

        {/* Feature 1 */}
        <div className="flex gap-4 items-start">
          <img className="w-12" src={trails} alt="trails" />
          <div>
            <h2 className="text-xl font-medium text-[rgb(1,37,37)]">
              Discover Trails
            </h2>
            <p className="text-sm">
              Browse a wide range of hiking tracks with interactive maps and
              essential trail information at your fingertips.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex gap-4 items-start">
          <img className="w-12" src={place} alt="place" />
          <div>
            <h2 className="text-xl font-medium">Popular Places</h2>
            <p className="text-sm">
              Check out the most loved hiking spots by our community. Find
              trails that are trending and highly rated for unforgettable
              experiences.
            </p>
          </div>
        </div>

        {/* Feature 3 - dynamic via props */}
        <div className="flex gap-4 items-start">
          <img className="w-12" src={location} alt="location" />
          <div>
            <h2 className="text-xl font-medium">{props.heading}</h2>
            <p className="text-sm">{props.section}</p>
          </div>
        </div>

        <button className="btn-color text-white px-6 py-2 rounded-lg w-fit">
          See more
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="rounded-2xl shadow-2xl overflow-hidden w-full sm:w-1/2 h-60">
            <img src={img3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl shadow-2xl overflow-hidden w-full sm:w-1/2 h-60">
            <img src={img4} alt="" className="w-full h-full object-cover object-bottom" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="rounded-2xl shadow-2xl overflow-hidden w-full sm:w-1/2 h-40">
            <img src={img5} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl shadow-2xl overflow-hidden w-full sm:w-1/2 h-40">
            <img src={img7} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third;

