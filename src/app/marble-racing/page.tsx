import GameSection from '@/components/GameSection'
import Navbar from '@/components/Navbar'
import React from 'react'
import SportsCarousel from '@/components/SportsCarousel'
import Footer from '@/components/Footer'
import FAQS from '@/components/Faqs'

const page = () => {
  return (
    <div>
      <Navbar/>
      <SportsCarousel/>
    <div className='bg-[#293339] h-screen flex justify-center items-center '>
      <GameSection/>
    </div>
    <FAQS/>
<Footer/>
    </div>
  )
}

export default page
