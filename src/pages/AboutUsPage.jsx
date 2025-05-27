
import Nav from '../components/Nav'
import AboutSection from '../components/AboutSection'
import WhatSetsUsApartSection from '../components/WhatSetUsApartSection'
import HappyGuestsSection from '../components/HappyGuestsSection'
import GuestExperiencesSection from '../components/GuestExperienceSection'
import FAQSection from '../components/FAQSection'
import FooterSection from '../components/Footer'


const AboutUsPage = () => {
  return (
    <div className='w-full'>
        <Nav/>

        <AboutSection/>
        <WhatSetsUsApartSection/>
        <HappyGuestsSection/>
        <GuestExperiencesSection/>
        <FAQSection/>
        <FooterSection/>
      
    </div>
  )
}

export default AboutUsPage
