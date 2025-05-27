import React from "react";

import img from "../Images/testimonial.png";
const TestimonialHome = () => {
  return (
    <div className="w-full px-28 p-10 bg-white">
      {/* Top Image */}
      <img
        src={img}
        alt="Guest Safari Experience"
        className="w-full h-auto object-cover rounded"
      />

      {/* Heading */}
      <h2 className="text-center text-black text-5xl  font-bold mt-6 mb-6">
        What Our Guests
      </h2>
      <h2 className="text-center text-black text-5xl  font-bold">
        Wants To Say
      </h2>
    </div>
  );
};

export default TestimonialHome;
