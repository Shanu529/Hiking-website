import React from "react";

function Newsletter() {
  return (
    <>
      <div className=" displaynone  flex justify-evenly mt-[5rem]">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-orange-500">subscribe</h2>

            <h2 className="text-[1.5rem] font-semibold text-black">
              {" "}
              our newsletter
            </h2>
          </div>
          <div>
            <p className="w-1/2 text-sm">
              Stay updated with the latest hiking trails, tips, and exclusive
              offers. Join our community of outdoor enthusiasts!
            </p>
          </div>
        </div>

        <div className="p-4 bg-white">
          <h3 className="text-lg font-normal mb-2">Join with your email</h3>
          <div className="flex  gap-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-400 px-4 py-2 rounded w-full"
            />

            <button className="bg-green-950 text-white py-2 px-5  rounded mt-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
