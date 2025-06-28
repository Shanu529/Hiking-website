// import React from "react";

// function Newsletter() {
//   return (
//     <>
//       <div className=" displaynone  flex justify-evenly mt-[5rem]">
//         <div className="flex flex-col gap-4">
//           <div>
//             <h2 className="text-orange-500">subscribe</h2>

//             <h2 className="text-[1.5rem] font-semibold text-black">
//               {" "}
//               our newsletter
//             </h2>
//           </div>
//           <div>
//             <p className="w-1/2 text-sm">
//               Stay updated with the latest hiking trails, tips, and exclusive
//               offers. Join our community of outdoor enthusiasts!
//             </p>
//           </div>
//         </div>

//         <div className="p-4 bg-white">
//           <h3 className="text-lg font-normal mb-2">Join with your email</h3>
//           <div className="flex  gap-5">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="border border-gray-400 px-4 py-2 rounded w-full"
//             />

//             <button className="bg-green-950 text-white py-2 px-5  rounded mt-2">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Newsletter;
import React from "react";

function Newsletter() {
  return (
    <section className="bg-lightGreen px-6 py-12 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="flex flex-col gap-4 max-w-xl">
          <h2 className="text-orange-500 text-sm uppercase tracking-widest">
            Subscribe
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-black">
            Join Our Newsletter
          </h3>
          <p className="text-sm text-gray-700">
            Stay updated with the latest hiking trails, tips, and exclusive
            offers. Join our community of outdoor enthusiasts!
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-lg">
          <h4 className="text-lg font-medium mb-3 text-gray-800">
            Join with your email
          </h4>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="submit"
              className="bg-green-950 text-white px-5 py-2 rounded-md hover:bg-green-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
