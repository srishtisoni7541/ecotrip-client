import FAQSection from "../components/FAQSection";
import GuestExperiencesSection from "../components/GuestExperienceSection";
import HappyGuestsSection from "../components/HappyGuestsSection";
import WhatSetsUsApartSection from "../components/WhatSetUsApartSection";

// Main Component that combines all sections
const EcoTripSections = () => {
  return (
    <div className="min-h-screen">
      <WhatSetsUsApartSection />
      <HappyGuestsSection />
      <GuestExperiencesSection />
      <FAQSection />
    </div>
  );
};

export default EcoTripSections;