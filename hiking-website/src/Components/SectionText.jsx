// import React from "react";
// import hampta from "../assets/img/hampta.jpg";
// import sar from "../assets/img/sar-pass.webp";
// import triund from "../assets/img/triund.avif";
// import kedarnath from "../assets/img/kedarkanth.jpg";
// import markha from "../assets/img/markha.jpg";

// function SectionText(props) {
//   return (
//     <>
//       <div className="  flex flex-col justify-center items-center gap-5  bg-lightGreen">
//         {/* paigng 20 */}
//         <h2 className="font-medium text-[2rem]">{props.heading}</h2>
//         <p className="w-1/2 text-center">{props.heading2}</p>
//       </div>

//       <div className=" cards-placecss  p-10 flex  flex-wrap flex-col gap-5 mr-[2rem] ml-[2rem]">
//         <div className=" flex xl:felx-wrap gap-20">
            
//           <div className="flex gap-4">
//             <div className="w-[30rem] h-[15rem]  shadow-black-900 shadow-2xl rounded-[0.5rem]">
//               <img
//                 className="h-full w-full object-cover rounded-md"
//                 src={hampta}
//                 alt=""
//               />
//             </div>

//             <div className=" flex flex-col gap-4">
//               <h2 className="text-[1.7rem]">Hampta Pass Trek</h2>

//               <p className="text-[0.9em]">
//                 The Hampta Pass Trek is a captivating journey through the
//                 Himalayas, offering breathtaking views, lush valleys, and a
//                 unique blend of adventure and tranquility. This trek takes you
//                 from the lush green landscapes of Kullu to the...
//               </p>
//               <span>
//                 <button className="text-start  btnblue rounded-lg text-white pt-2 pb-2 pr-4 pl-4 text-sm">
//                   See more
//                 </button>
//               </span>
//             </div>
//           </div>

//           <div className="flex felx-wrap">
//             <div className="flex gap-4">
//               <div className="w-[30rem] h-[15rem] shadow-black-900 shadow-2xl rounded-[0.5rem]">
//                 <img
//                   className="h-full w-full object-cover  rounded-md"
//                   src={sar}
//                   alt=""
//                 />
//               </div>

//               <div className="flex flex-col gap-5">
//                 <h2 className="text-[1.7rem]">Sar Pass Trek</h2>

//                 <p className="text-[0.9em]">
//                   The Sar Pass Trek is a thrilling adventure in the Indian
//                   Himalayas, known for its stunning landscapes, challenging
//                   trails, and breathtaking views. This trek takes you through
//                   lush forests....
//                 </p>
//                 <span>
//                  <button className="text-start  btnblue rounded-lg text-white pt-2 pb-2 pr-4 pl-4 text-sm">
//                   See more
//                 </button>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>


//         <div>
//              <div className="flex felx-wrap gap-20">
//                 {/* slo there */}
//           <div className="flex gap-4">
//             <div className="w-[30rem] h-[15rem]  shadow-black-900 shadow-2xl rounded-[0.5rem]">
//               <img
//                 className="h-full w-full object-cover rounded-md"
//                 src={kedarnath}
//                 alt=""
//               />
//             </div>

//             <div className=" flex flex-col gap-5">
//               <h2 className="text-[1.7rem]">Hampta Pass Trek</h2>

//               <p className="text-[0.9em]">
//                 The Hampta Pass Trek is a captivating journey through the
//                 Himalayas, offering breathtaking views, lush valleys, and a
//                 unique blend of adventure and tranquility. This trek takes you
//                 from the lush green landscapes of Kullu to the...
//               </p>
//               <span>
//                 <button className="text-start  btnblue rounded-lg text-white pt-2 pb-2 pr-4 pl-4 text-sm">
//                   See more
//                 </button>
//               </span>
//             </div>
//           </div>

//           <div className="flex felx-wrap">
//             <div className="flex gap-4">
//               <div className="w-[30rem] h-[15rem] shadow-black-900 shadow-2xl rounded-[0.5rem]">
//                 <img
//                   className="h-full w-full object-cover  rounded-md"
//                   src={markha}
//                   alt=""
//                 />
//               </div>

//               <div className="flex flex-col gap-5">
//                 <h2 className="text-[1.7rem]">Sar Pass Trek</h2>

//                 <p className="text-[0.9em]">
//                   The Sar Pass Trek is a thrilling adventure in the Indian
//                   Himalayas, known for its stunning landscapes, challenging
//                   trails, and breathtaking views. This trek takes you through
//                   lush forests....
//                 </p>
//                 <span>
//                   <button className="text-start  btnblue rounded-lg text-white pt-2 pb-2 pr-4 pl-4 text-sm">
//                   See more
//                 </button>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SectionText;


import React from "react";
import hampta from "../assets/img/hampta.jpg";
import sar from "../assets/img/sar-pass.webp";
import triund from "../assets/img/triund.avif";
import kedarnath from "../assets/img/kedarkanth.jpg";
import markha from "../assets/img/markha.jpg";

function SectionText(props) {
  return (
    <>
      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center gap-5 bg-lightGreen px-4 py-8 text-center">
        <h2 className="font-medium text-[2rem]">{props.heading}</h2>
        <p className="w-full md:w-2/3 lg:w-1/2">{props.heading2}</p>
      </div>

      {/* Cards Wrapper */}
      <div className="px-4 py-10 flex flex-col gap-10">
        {/* Card Group 1 */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Card 1 */}
          <div className="flex flex-col lg:flex-row gap-6 flex-1">
            <div className="w-full lg:w-[30rem] h-[15rem] shadow-2xl rounded-lg overflow-hidden">
              <img src={hampta} alt="" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-[1.7rem]">Hampta Pass Trek</h2>
              <p className="text-sm">
                The Hampta Pass Trek is a captivating journey through the
                Himalayas, offering breathtaking views, lush valleys, and a
                unique blend of adventure and tranquility. This trek takes you
                from the lush green landscapes of Kullu to the...
              </p>
              <button className="btnblue rounded-lg text-white px-4 py-2 text-sm w-max">See more</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col lg:flex-row gap-6 flex-1">
            <div className="w-full lg:w-[30rem] h-[15rem] shadow-2xl rounded-lg overflow-hidden">
              <img src={sar} alt="" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-[1.7rem]">Sar Pass Trek</h2>
              <p className="text-sm">
                The Sar Pass Trek is a thrilling adventure in the Indian
                Himalayas, known for its stunning landscapes, challenging
                trails, and breathtaking views. This trek takes you through
                lush forests...
              </p>
              <button className="btnblue rounded-lg text-white px-4 py-2 text-sm w-max">See more</button>
            </div>
          </div>
        </div>

        {/* Card Group 2 */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Card 3 */}
          <div className="flex flex-col lg:flex-row gap-6 flex-1">
            <div className="w-full lg:w-[30rem] h-[15rem] shadow-2xl rounded-lg overflow-hidden">
              <img src={kedarnath} alt="" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-[1.7rem]">Kedarnath Trek</h2>
              <p className="text-sm">
                The Kedarnath Trek is a captivating journey through the
                Himalayas, offering breathtaking views, lush valleys, and a
                unique blend of adventure and spirituality.
              </p>
              <button className="btnblue rounded-lg text-white px-4 py-2 text-sm w-max">See more</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col lg:flex-row gap-6 flex-1">
            <div className="w-full lg:w-[30rem] h-[15rem] shadow-2xl rounded-lg overflow-hidden">
              <img src={markha} alt="" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-[1.7rem]">Markha Valley Trek</h2>
              <p className="text-sm">
                The Markha Valley Trek is a thrilling adventure in Ladakh with
                river crossings, Himalayan views, and peaceful monasteries.
              </p>
              <button className="btnblue rounded-lg text-white px-4 py-2 text-sm w-max">See more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionText;
