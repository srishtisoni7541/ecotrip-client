import React from 'react'
import Nav from '../components/Nav'
import TestimonialHome from '../components/TestimonialHome'
import GuestExperiencesSection from '../components/GuestExperienceSection'
import Button from '../components/Button'
import WhatSetsUsApartSection from '../components/WhatSetUsApartSection'
import HappyGuestsSection from '../components/HappyGuestsSection'
import FAQSection from '../components/FAQSection'
import FooterSection from '../components/Footer'

const TestimonialPage = () => {
  return (
    <div className='w-full'>
        <Nav/>
        <TestimonialHome/>
        <GuestExperiencesSection/>
        <GuestExperiencesSection/>
        <GuestExperiencesSection/>
        <Button/>
        <WhatSetsUsApartSection/>
        <HappyGuestsSection/>
        <FAQSection/>
        <FooterSection/>      
    </div>
  )
}

export default TestimonialPage
