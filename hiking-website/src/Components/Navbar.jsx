import React from "react";

function Navbar() {
  return (
    <div className="navbar flex justify-between p-[2rem]  items-center ">
      <div className="">
        <h2 className="text-xl text-white font-bold">Logo</h2>
      </div>

      <div className="flex justify-between items-center">
        <ul className="flex justify-between gap-5 text-white font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>

      <button
        className="bg-green-400 text-white font-semibold"
        style={{ padding: "0.5rem 1rem", borderRadius: "5px" }}
      >
        click
      </button>
    </div>
  );
}

export default Navbar;
