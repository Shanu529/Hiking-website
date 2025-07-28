

import React from "react";
import Facebook from "../icons/facebook.png";
import Instagram from "../icons/instagram.png";
import yt from "../icons/youtube.png";

function Footer() {
  return (
    <footer className="bg-lightGreen text-[rgb(1,37,37)] px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Logo</h2>
          <p className="text-sm">
            Our website is a hiking platform that provides information about
            various trails, tips for hikers, and a community for outdoor
            enthusiasts. We aim to inspire exploration and love for nature.
          </p>
        </div>

        {/* Destinations */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Destinations</h2>
          <ul className="space-y-2 text-sm">
            <li>Mountains</li>
            <li>Forests</li>
            <li>Beaches</li>
            <li>National Parks</li>
            <li>Deserts</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li>Email: treka@gmail.com</li>
            <li>Phone: +91 7825658974</li>
            <li>123 Hiking Lane, Trail City, Nature State, 12345</li>
          </ul>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook">
              <img src={Facebook} alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={Instagram} alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src={yt} alt="YouTube" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
