// import React from "react";
// // import img1 from "../public/images/img1.png";
// import img1 from "../assets/img/img1.jpg";
// import img2 from "../assets/img/img2.avif";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// function Second() {
//   const imgmoving2 = useRef();
//   useGSAP(() => {
//     gsap.from(imgmoving2.current, {
//       x: "-500",
//       duration: 1,
//       opacity: 0,
//       scrollTrigger: {
//         trigger: imgmoving2.current,
//         start: "top 90%",
//         end: "top 40%",
//         scrub: true,
//       },
//     });
//   });

//   const imgMoving = useRef();
//   useGSAP(() => {
//     gsap.from(imgMoving.current, {
//       x: "-800", // slide in from fully off-screen left
//       duration: 1,
//       opacity: 0,

//       scrollTrigger: {
//         trigger: imgMoving.current,
//         start: "top 90%", // when top of section hits 80% of screen height
//         end: "top 50%", // animation finishes as it reaches 30%
//         scrub: true, // scroll-linked and smooth
//         markers: true, // remove in production
//         // pin: true,       // remove unless you want the whole section to freeze
//       },
//     });
//   });

//   const text = useRef();
//   useGSAP(() => {
//     gsap.from(text.current, {
//       x: "500",
//       opacity:0,
//       duration: 1,
//       scrollTrigger: {
//         trigger: text.current,
//         start: "top 90%",
//         end: "top 40%",
//         scrub: true,
//       },
//     });
//   });

//   return (
//     <>
//       <div className="flex gap-5 mt-[20rem] displaynone ">
//         <div className="   w-[50vw] p-20 relative ">
//           <div
//             ref={imgMoving}
//             style={{ height: "20rem", width: "20rem" }}
//             className=" rounded-[2rem] absolute left-[15rem] top-[10rem]  shadow-black-900 shadow-2xl"
//           >
//             <img
//               className=" bg-bottom bg-cover w-full h-full  object-cover rounded-[2rem]"
//               src={img1}
//               alt=""
//             />
//           </div>

//           <div
//             ref={imgmoving2}
//             style={{ height: "20rem", width: "20rem" }}
//             className="rounded-[2rem]  shadow-black-900 shadow-2xl mb-10"
//           >
//             <img
//               className=" bg-bottom bg-cover w-full h-full object-cover rounded-[2rem]"
//               src={img2}
//               alt=""
//             />
//           </div>
//         </div>

//         <div ref={text} className=" headingcss w-[40vw] flex flex-col justify-center gap-7 ">
//           <h2  className=" textheadingmain text-[2.6rem] text-[rgb(1,37,37)]">
//             Discover Every Corner Of The World With Us
//           </h2>

//           <p ref={text} className="text-[rgb(1,37,37)]">
//             Our passionate team is committed to guiding you through diverse
//             destinations and providing inspiring journeys tailored for you, with
//             expertise that turns every trip into a remarkable experience.
//           </p>

//           <div className=" ">
//             <button className="btn-color text-white rounded-lg">
//               See more
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Second;

// import React from "react";
// // import img1 from "../public/images/img1.png";
// import img1 from "../assets/img/img1.jpg";
// import img2 from "../assets/img/img2.avif";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// function Second() {
//   const imgmoving2 = useRef();
//   const imgMoving = useRef();
//   const text = useRef();

//   useGSAP(() => {
//     gsap.from(imgmoving2.current, {
//       x: "-500",
//       duration: 1,
//       opacity: 0,
//       scrollTrigger: {
//         trigger: imgmoving2.current,
//         start: "top 90%",
//         end: "top 40%",
//         scrub: true,
//       },
//     });

//     gsap.from(imgMoving.current, {
//       x: "-800",
//       duration: 1,
//       opacity: 0,
//       scrollTrigger: {
//         trigger: imgMoving.current,
//         start: "top 90%",
//         end: "top 50%",
//         scrub: true,
//         markers: true, // remove in production
//       },
//     });

//     gsap.from(text.current, {
//       x: "500",
//       opacity: 0,
//       duration: 1,
//       scrollTrigger: {
//         trigger: text.current,
//         start: "top 90%",
//         end: "top 40%",
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
//     <div className="flex flex-col lg:flex-row gap-10 mt-[10rem] px-4 md:px-10">
//       <div className="w-full lg:w-1/2 relative">
//         <div
//           ref={imgMoving}
//           className="w-[80%] max-w-[20rem] h-[20rem] absolute left-[10rem] top-[10rem] shadow-black-900 shadow-2xl rounded-[2rem]"
//         >
//           <img
//             className="w-full h-full object-cover rounded-[2rem]"
//             src={img1}
//             alt=""
//           />
//         </div>

//         <div
//           ref={imgmoving2}
//           className="w-[80%] max-w-[20rem] h-[20rem] shadow-black-900 shadow-2xl rounded-[2rem]"
//         >
//           <img
//             className="w-full h-full object-cover rounded-[2rem]"
//             src={img2}
//             alt=""
//           />
//         </div>
//       </div>

//       <div
//         ref={text}
//         className="w-full lg:w-1/2 flex flex-col justify-center gap-7"
//       >
//         <h2 className="text-[2rem] md:text-[2.6rem] text-[rgb(1,37,37)] font-bold">
//           Discover Every Corner Of The World With Us
//         </h2>

//         <p className="text-[rgb(1,37,37)] text-base">
//           Our passionate team is committed to guiding you through diverse
//           destinations and providing inspiring journeys tailored for you, with
//           expertise that turns every trip into a remarkable experience.
//         </p>

//         <button className="btn-color text-white rounded-lg px-6 py-2 w-max">
//           See more
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Second;

import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.avif";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Second() {
  const imgmoving2 = useRef();
  const imgMoving = useRef();
  const text = useRef();

  useGSAP(() => {
    gsap.from(imgMoving.current, {
      x: "-100%",
      opacity: 0,
      scrollTrigger: {
        trigger: imgMoving.current,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
    });

    // gsap.from(imgmoving2.current, {
    //   x: "-100%",
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: imgmoving2.current,
    //     start: "top 95%",
    //     end: "top 60%",
    //     scrub: true,
    //   },
    // });

    gsap.from(text.current, {
      x: "100%",
      opacity: 0,
      scrollTrigger: {
        trigger: text.current,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
    });
  }, []);

  useGSAP(() => {
    gsap.from(imgmoving2.current, {
      x: -500,
      opacity: 0,
      scrollTrigger: {
        trigger: imgmoving2.current,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
    });
  });

  return (
    <div className="flex  h-full flex-col lg:flex-row gap-5 mt-[20rem] px-6 items-center">
      <div className="w-full h-full lg:w-1/2 relative">
        <div
          ref={imgMoving}
          className="w-[80%] max-w-[20rem] h-[20rem] absolute left-[10rem] top-[10rem] shadow-black-900 shadow-2xl rounded-[2rem]"
        >
          <img
            className="w-full h-full object-cover rounded-[2rem]"
            src={img1}
            alt=""
          />
        </div>

        <div
          ref={imgmoving2}
          className="w-[80%] max-w-[20rem] h-[20rem] shadow-black-900 shadow-2xl rounded-[2rem]"
        >
          <img
            className="w-full h-full object-cover rounded-[2rem]"
            src={img2}
            alt=""
          />
        </div>
      </div>

      <div
        ref={text}
        className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-center lg:text-left"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[rgb(1,37,37)]">
          Discover Every Corner Of The World With Us
        </h2>

        <p className="text-[rgb(1,37,37)] px-2 lg:px-0">
          Our passionate team is committed to guiding you through diverse
          destinations and providing inspiring journeys tailored for you, with
          expertise that turns every trip into a remarkable experience.
        </p>

        <div>
          <button className="btn-color text-white rounded-lg py-2 px-6">
            See more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Second;
