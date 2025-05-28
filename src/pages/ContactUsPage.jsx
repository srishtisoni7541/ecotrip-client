import React from 'react'
import Nav from '../components/Nav'
import ContactHomePage from '../components/ContactHomePage'
import WhatSetsUsApartSection from '../components/WhatSetUsApartSection'
import HappyGuestsSection from '../components/HappyGuestsSection'
import GuestExperiencesSection from '../components/GuestExperienceSection'
import FAQSection from '../components/FAQSection'
import FooterSection from '../components/Footer'


const ContactUsPage = () => {
  return (
    <div className='w-full'>
        <Nav/>
        <ContactHomePage/>
        <WhatSetsUsApartSection/>
        <HappyGuestsSection/>
        <GuestExperiencesSection/>
        <FAQSection/>
        <FooterSection/>
      
    </div>
  )
}

export default ContactUsPage
