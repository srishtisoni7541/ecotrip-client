import React from 'react'
import Nav from '../components/Nav'
import DetailHomePage from '../components/DetailHomePage'
import Itinerary from '../components/Itenary'
import TourInfo from '../components/TourInfo'
import TourRefundAndOffers from '../components/TourRefundAndOffers'
import HappyGuestsSection from '../components/HappyGuestsSection'
import FAQSection from '../components/FAQSection'
import FooterSection from '../components/Footer'

const TourDetailPage = () => {
  return (
    <div className='w-full '>
        <Nav/>
        <DetailHomePage/>
        <Itinerary/>
        <TourInfo/>
        <TourRefundAndOffers/>
        <HappyGuestsSection/>
        <FAQSection/>
        <FooterSection/>
      
    </div>
  )
}

export default TourDetailPage
