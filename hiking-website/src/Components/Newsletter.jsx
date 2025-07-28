
import React, { useRef } from "react";

function Newsletter() {


  const userEmail = useRef();

  const userHeandler=((event)=>{
    console.log(event);
    event.preventDefault();
    const email = userEmail.current.value;
    console.log(email);
    userEmail.current.value = " ";

  });


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




          <form  onSubmit={userHeandler}  className="flex flex-col sm:flex-row gap-4">
            <input ref={userEmail}
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
