import React from "react";
import Nav from "../components/Nav";
import FeaturedToursSection from "../components/FeaturedTourSection";
import HappyGuestsSection from "../components/HappyGuestsSection";
import GuestExperiencesSection from "../components/GuestExperienceSection";
import FAQSection from "../components/FAQSection";
import FooterSection from "../components/Footer";

const DateWiseTourPage = () => {
  return (
    <div className="w-full p-6">
      <Nav />
      <div className="p-10 flex items-end">
        <h1 className="text-5xl pl-14 font-bold">
          Explore with <br />
          us on{" "}
        </h1>
        <h1 className="text-6xl font-bold text-gray-400 relative left-[-10%] top-2">
          20-06-2025
        </h1>
      </div>

      <FeaturedToursSection />
      <HappyGuestsSection />
      <GuestExperiencesSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default DateWiseTourPage;
