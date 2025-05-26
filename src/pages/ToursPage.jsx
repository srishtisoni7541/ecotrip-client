import React from 'react'
import Nav from '../components/Nav'
import ToursHomePage from '../components/ToursHomePage'
import FeaturedToursSection from '../components/FeaturedTourSection'
import Button from '../components/Button'
import HappyGuestsSection from '../components/HappyGuestsSection'
import GuestExperiencesSection from '../components/GuestExperienceSection'
import FAQSection from '../components/FAQSection'
import FooterSection from '../components/Footer'

const ToursPage = () => {
  return (
    <div className='w-full flex flex-col overflow-hidden '> 
      <Nav/>
      <ToursHomePage/>
      <FeaturedToursSection/>
      <Button/>
      <HappyGuestsSection/>
      <GuestExperiencesSection/>
      <FAQSection/>
      <FooterSection/>
    </div>
  )
}

export default ToursPage
