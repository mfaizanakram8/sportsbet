
import FeaturedEvents from '@/components/FeaturedEvents'
import React from 'react'
import FAQ from '@/components/Faqs'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SportsCarousel from '@/components/SportsCarousel'

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
