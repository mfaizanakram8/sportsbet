import FAQ from '@/components/Faqs'
import FeaturedEvents from '@/components/FeaturedEvents'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SportsCarousel from '@/components/SportsCarousel'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <SportsCarousel/>
      <FeaturedEvents/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default page
