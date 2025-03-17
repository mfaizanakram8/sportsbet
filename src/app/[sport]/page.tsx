'use client'
import React, { useState } from 'react';
import { useParams } from "next/navigation";
import { SportsSoccer as SportsSoccerIcon, SportsBasketball as SportsBasketballIcon, SportsBaseball as SportsBaseballIcon, SportsTennis as SportsTennisIcon, EmojiEvents as EmojiEventsIcon, SportsFootball as SportsFootballIcon, SportsMma as SportsMmaIcon, SportsCricket as SportsCricketIcon, DirectionsBike as DirectionsBikeIcon, SportsEsports as SportsEsportsIcon, SportsHockey as SportsHockeyIcon } from "@mui/icons-material";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import FlagIcon from "@mui/icons-material/Flag";

// Mapping sports to icons
const sportIcons: Record<string, React.ReactNode> = {
  soccer: <SportsSoccerIcon className="text-yellow-500 text-3xl" />,
  football: <SportsSoccerIcon className="text-yellow-500 text-3xl" />,
  basketball: <SportsBasketballIcon className="text-red-500 text-3xl" />,
  baseball: <SportsBaseballIcon className="text-orange-500 text-3xl" />,
  cricket: <SportsCricketIcon className="text-yellow-600 text-3xl" />,
  tennis: <SportsTennisIcon className="text-green-500 text-3xl" />,
  mma: <SportsMmaIcon className="text-purple-500 text-xl" />,
  cycling: <DirectionsBikeIcon className="text-yellow-500 text-3xl" />,
  esports: <SportsEsportsIcon className="text-pink-500 text-xl" />,
  hockey: <SportsHockeyIcon className="text-red-500 text-3xl" />,
  awards: <EmojiEventsIcon className="text-gold-500 text-xl" />,
  boxing: <SportsMmaIcon className="text-red-600 text-3xl" />,
  esoccer: <SportsEsportsIcon className="text-blue-500 text-3xl" />,
  "horse-racing": <EmojiEventsIcon className="text-yellow-400 text-3xl" />,
  "australian-football": <SportsFootballIcon className="text-blue-500 text-3xl" />,
  "american-football": <SportsFootballIcon className="text-yellow-500 text-3xl" />,
  "formula-1": <FlagIcon className="text-red-600 text-3xl" />,
};


const SportsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { sport } = useParams();

  const sportKey = Array.isArray(sport) ? sport[0] : sport; // Ensure it's a string
  const sportIcon = sportIcons[sportKey?.toLowerCase() || ""] || <SportsSoccerIcon className="text-gray-500 text-xl" />;
  
  return (
    <div className='flex justify-center items-center bg-[#293339] w-full '>
      <div className='bg-transparent w-[95%] p-8 rounded-3xl'>
        

        {/* Soccer Header */}
        <div className="flex justify-between items-center bg-gray-950 p-4 rounded-t-2xl text-white text-sm font-semibold">
          <div className="flex items-center gap-2">
            {sportIcon}
            <span className='text-white text-xl'> {sport} : In play</span>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="flex gap-4 bg-gray-950 p-3 text-gray-400 text-sm">
          <span className='text-green-400 border-b-2 border-green-400 pb-1'>Stake</span>
          <span>Next 24 hours</span>
          <span>Future</span>
          <span>Outrights</span>
          <span>Leagues</span>
        </div>
        <div className="flex gap-4 bg-gray-950 p-3 text-gray-400 text-sm">
          <span >Home Page</span>
          <span> 	&gt; </span>
          <span>{sport}</span>
          
        </div>

        {/* League Row */}
        <div className="flex flex-col mt-1 w-full">
          {/* Upper Bar (95% + 5% dropdown) */}
          <div className="flex w-full">
            <div className="flex items-center justify-between bg-[#293339] border-b-1 border-gray-950 text-sm font-semibold h-[40px] w-[95%] p-4">
              <span className='text-green-400 text-sm'>Italy / Serie A</span>
              <span className="text-gray-400 text-sm">4</span>
            </div>

            {/* Dropdown Button */}
            <div 
              className="flex justify-center items-center bg-[#293339] border-l-1 border-b-1 border-gray-950  w-[5%] ml-[5px] cursor-pointer"
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
              <span className='hidden lg:block  lg:mx-20 lg:mr-48'>EARLY</span>
            </div>

              <div className="bg-gray-950 border-b-2 border-black text-white p-4  flex items-center justify-end space-x-6">
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
  );
}

export default SportsPage;
