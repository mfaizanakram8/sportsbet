'use client'
import React, { useState } from 'react';
import { MdSportsSoccer } from 'react-icons/md';
import LiveCarousel from '@/components/LiveCarousel'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/Faqs';

const FeaturedEvents = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar/>

    <div className='flex justify-center items-center bg-[#293339] w-full '>
      <div className='bg-gray-950 w-[95%] p-8 rounded-3xl'>
        <h1 className='text-3xl text-white font-bold'>Inplay Events</h1>
<LiveCarousel/>
        {/* Soccer Header */}
        <div className="flex justify-between mt-4 items-center p-4 bg-[#293339] rounded-t-xl text-sm font-semibold h-[50px]">
          <div className="flex items-center gap-2">
            <MdSportsSoccer className="text-red-500 text-xl" />
            <span className='text-white text-xl'>Soccer</span>
          </div>
          <button className="text-green-400 text-xs font-bold">Show all</button>
        </div>

        {/* League Row */}
        <div className="flex flex-col mt-1 w-full">
          {/* Upper Bar (95% + 5% dropdown) */}
          <div className="flex w-full">
            <div className="flex items-center justify-between bg-[#293339] text-sm font-semibold h-[40px] w-[95%] p-4">
              <span className='text-green-400 text-sm'>Italy / Serie A</span>
              <span className="text-gray-400 text-sm">4</span>
            </div>

            {/* Dropdown Button */}
            <div 
              className="flex justify-center items-center bg-[#293339] w-[5%] ml-[5px] cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <MdKeyboardArrowUp className="text-green-400 text-xl" />
              ) : (
                <MdKeyboardArrowDown className="text-green-400 text-xl" />
              )}
            </div>
          </div>

          {/* Bottom Bar (Only visible when expanded) */}
          {isOpen && (
                 <div>
            <div className="flex lg:space-x-24 space-x-11  justify-end items-center bg-[#293339] w-full h-[30px] p-4 mt-1 text-gray-400 text-[8px] font-semibold">
              <span >1</span>
              <span>X</span>
              <span className='mr-24 lg:mr-[140px]'>2</span>
              <span className='hidden lg:block  lg:mr-24 '>HCP</span>
              <span className='hidden lg:block  lg:mx-20 lg:mr-64'>EARLY</span>
            </div>

              <div className="bg-gray-950 border-b-2 border-black text-white p-4 rounded-lg flex items-center justify-end space-x-6">
              {/* Team Names */}
              <div className="flex flex-col mr-12 lg:mr-48">
                <span className="text-sm font-semibold">Venice</span>
                <span className="text-sm ">SSC Naples</span>
                <div className="text-gray-400 text-[9px] flex lg:hidden">
                <span>03/16</span>
                <br />
                <span>4:30 p.m.</span>
              </div>
              </div>
              
              {/* Match Time */}
              <div className="text-gray-400 text-sm hidden lg:flex">
                <span>03/16</span>
                <br />
                <span>4:30 p.m.</span>
              </div>
              <div className='flex flex-col text-[9px] lg:text-sm text-green-400'>
                <span>0</span>
                <span>1</span>
              </div>
              
              {/* Odds */}
              <div className="flex space-x-2">
                <div className="bg-[#293339] px-2 py-3 lg:px-6 lg:py-3 rounded-md text-[10px] lg:text-sm">7.60</div>
                <div className="bg-[#293339]  px-2 py-3 lg:px-6 lg:py-3 rounded-md text-[10px] lg:text-sm">4.10</div>
                <div className="bg-[#293339]  px-2 py-3 lg:px-6 lg:py-3 rounded-md text-[10px] lg:text-sm">1.49</div>
              </div>
              
              {/* Handicap */}
              <div className="hidden lg:flex space-x-2">
                <div className="bg-[#293339] px-3 py-3 rounded-md text-sm">
                  <span className="text-yellow-400">(+1.0)</span> 2.02
                </div>
                <div className="bg-[#293339] px-3 py-3 rounded-md text-sm">
                  <span className="text-yellow-400">(-1.0)</span> 1.83
                </div>
              </div>
              
              {/* Over/Under */}
              <div className="space-x-2 hidden lg:flex ">
                <div className="bg-[#293339] px-3 py-3 rounded-md text-sm">
                  <span className="text-yellow-400">o2/2.5</span> 1.89
                </div>
                <div className=" bg-[#293339] px-3 py-2 rounded-md text-sm ">
                  <span className="text-yellow-400">u2/2.5</span> 2.01
                </div>
              </div>
              
              {/* Extra Button */}
              <div className="text-green-400 bg-[#293339] px-3 py-2 rounded-md text-sm">+235</div>
            </div>
       </div>
            
          )}
        </div>

      </div>
    </div>
    <FAQ/>
    <Footer/>
    </div>
  );
}

export default FeaturedEvents;
