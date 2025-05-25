
import React from "react";
import { Instagram, Youtube, X } from "lucide-react";
export default function FooterSection() {
  return (
    <div className="bg-[#f5f5f5] relative">
      {/* WhatsApp Banner */}
      <div className="bg-white w-[65%] absolute rounded-md left-[15%] top-[-10%] py-8 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between border-b">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">
            Get latest updates on your{" "}
            <span className="text-green-500">Whatsapp</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Be the first to know about offers, promos, and updates.
          </p>
        </div>
        <div className="flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter Your Whatsapp No."
            className="px-4 py-2 border border-gray-300 rounded-l-full w-full md:w-64 outline-none"
          />
          <button className="bg-green-500 text-white px-6 py-2 rounded-r-full hover:bg-green-600">
            Submit
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0c121f] text-white px-4 md:px-16 py-30">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo & Social */}
          <div>
            <h1 className="text-2xl font-bold mb-4">
              ecotr<span className="text-green-500">!p</span>
            </h1>
            <div>
              <p className="text-gray-300 mb-4">
                Let's connect with our socials
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <X size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* DISCOVER US */}
          <div>
            <h3 className="font-semibold mb-3">DISCOVER US</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Guest Review</li>
              <li>About Us</li>
              <li>Customize Your Trip</li>
              <li>Events</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* PAGES */}
          <div>
            <h3 className="font-semibold mb-3">PAGES</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Home</li>
              <li>Tours</li>
              <li>Indian Wildlife Destination</li>
              <li>African Wildlife Destinations</li>
              <li>About us</li>
              <li>Moments With Our Guests</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="font-semibold mb-3">SUPPORT</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Contact Us</li>
              <li>Leave Your Feedback</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-semibold mb-3">Get in Touch</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>+91 1234567548</li>
              <li>hello@ecotrip.com</li>
              <li>
                23-B, Near Datta College
                <br />
                Yavatmal, Maharashtra,
                <br />
                pin code
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
          ©copyright 2024 all right reserved
        </div>
      </footer>
    </div>
  );
}
