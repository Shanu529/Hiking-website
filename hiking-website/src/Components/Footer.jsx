// import React from "react";
// import Facebook from "../icons/facebook.png";
// import Instagram from "../icons/instagram.png";
// import yt from "../icons/youtube.png";

// function Footer() {
//   return (
//     <div className=" displaynone flex justify-around gap-5 p-8 mt-5">
//       <div className="flex flex-col gap-5 w-[35vw]">
//         <h2 className="text-lg capitalize font-medium">Logo</h2>
//         <p className="">
//           over website is a hiking website that provides information about
//           various hiking trails, tips for hikers, and a community for outdoor
//           enthusiasts. Our mission is to inspire people to explore the great
//           outdoors and enjoy the beauty of nature.
//         </p>
//       </div>

//       <div className="flex flex-col gap-5">
//         <h2 className="text-lg capitalize font-medium">destinations</h2>
//         <div className="flex flex-col gap-2">
//           <li className="list-none">Mountains</li>
//           <li className="list-none">Forests</li>
//           <li className="list-none">Beaches</li>
//           <li className="list-none">National Parks</li>
//           <li className="list-none">Deserts</li>
//         </div>
//       </div>

//       <div className="flex flex-col gap-5">
//         <h2 className="text-lg capitalize font-medium">Contact Us</h2>
//         <div className="flex flex-col gap-2">
//           <p>treka@gmail.com</p>
//           <p>+91 7825658974</p>
//           <p>
//              123 Hiking Lane, Trail City, Nature State, 12345
//           </p>

//           <div className="h-5 w-5 flex gap-5" >

//             <img src={Facebook} alt="Facebook" className="h-full w-full" />
//             <img src={Instagram} alt="Facebook" className="h-full w-full" />
//             <img src={yt} alt="Facebook" className="h-full w-full" />

           


//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
import React from "react";
import Facebook from "../icons/facebook.png";
import Instagram from "../icons/instagram.png";
import yt from "../icons/youtube.png";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 p-8 mt-5 bg-gray-100 text-gray-800">
      {/* Logo Section */}
      <div className="flex flex-col gap-5 md:w-1/3">
        <h2 className="text-xl font-semibold">Logo</h2>
        <p className="text-sm">
          Our website is a hiking platform offering details on trails, tips for hikers,
          and a community for outdoor enthusiasts. Explore the beauty of nature with us.
        </p>
      </div>

      {/* Destinations */}
      <div className="flex flex-col gap-5">
        <h2 className="text-lg font-medium">Destinations</h2>
        <ul className="flex flex-col gap-2 text-sm">
          <li>Mountains</li>
          <li>Forests</li>
          <li>Beaches</li>
          <li>National Parks</li>
          <li>Deserts</li>
        </ul>
      </div>

      {/* Contact Us */}
      <div className="flex flex-col gap-5">
        <h2 className="text-lg font-medium">Contact Us</h2>
        <div className="flex flex-col gap-2 text-sm">
          <p>treka@gmail.com</p>
          <p>+91 7825658974</p>
          <p>123 Hiking Lane, Trail City, Nature State, 12345</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <img src={Facebook} alt="Facebook" className="h-6 w-6" />
            <img src={Instagram} alt="Instagram" className="h-6 w-6" />
            <img src={yt} alt="YouTube" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
