
import Nav from '../components/Nav';
import IndianDestinationHome from '../components/IndianDestinationHome';
import IndianWildlifeSection from '../components/IndianWildLifeSection';
import FeaturedToursSection from '../components/FeaturedTourSection';
import WhatSetsUsApartSection from '../components/WhatSetUsApartSection';
import HappyGuestsSection from '../components/HappyGuestsSection';
import GuestExperiencesSection from '../components/GuestExperienceSection';
import FAQSection from '../components/FAQSection';
import FooterSection from '../components/Footer';
import { useLocation } from 'react-router-dom';
import AfricanWildlifeSection from '../components/AfricanWildLifeSection';

const WildLifeDestinationPage = () => {
  const location = useLocation();

  return (
    <div className="w-full">
      <Nav />
      <IndianDestinationHome />

      {location.pathname === '/indian-destination' ? (
        <>
          <IndianWildlifeSection />
          <IndianWildlifeSection />
        </>
      ) : (
        <>
          <AfricanWildlifeSection />
          <AfricanWildlifeSection />
        </>
      )}

      <FeaturedToursSection />
      <WhatSetsUsApartSection />
      <HappyGuestsSection />
      <GuestExperiencesSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default WildLifeDestinationPage;
