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
import kedarnath from "../assets/img/kedarkanth.jpg";
import markha from "../assets/img/markha.jpg";

function SectionText(props) {
  return (
    <>
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-3 py-10 px-4 bg-[#DFF5E1] text-center">
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
