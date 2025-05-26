import React from 'react'
import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection'
import OurPartnersSection from '../components/OurPartenersSection'
import IndianWildlifeSection from '../components/IndianWildLifeSection'
import AfricanWildlifeSection from '../components/AfricanWildLifeSection'
import EcoTripSections from './EcoTripSection'
import Footer from '../components/Footer'
import FeaturedToursSection from '../components/FeaturedTourSection'

const Wrapper = () => {
  return (
    <div className='w-full'>
       <Nav/>
      <HeroSection/>
      <OurPartnersSection/>
      <FeaturedToursSection/>
      <IndianWildlifeSection/>
      <AfricanWildlifeSection/>
      <EcoTripSections/>
      <Footer/>
    </div>
  )
}

export default Wrapper
