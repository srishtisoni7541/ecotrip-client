import React from 'react'
import Nav from '../components/Nav'
import DetailHomePage from '../components/DetailHomePage'
import Itinerary from '../components/Itenary'
import TourInfo from '../components/TourInfo'
import TourRefundAndOffers from '../components/TourRefundAndOffers'

const TourDetailPage = () => {
  return (
    <div className='w-full '>
        <Nav/>
        <DetailHomePage/>
        <Itinerary/>
        <TourInfo/>
        <TourRefundAndOffers/>
      
    </div>
  )
}

export default TourDetailPage
