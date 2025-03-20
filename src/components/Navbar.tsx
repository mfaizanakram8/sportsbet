'use client';
import { useState } from 'react';
import { Menu, X, Search, Calendar, Gamepad2,  Star,  Globe,  CircleDollarSign, MonitorPlay, ListVideo, Joystick, Bolt, Bitcoin } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPm, setIsPm] = useState(true); // Toggle state for AM/PM
  const [language, setLanguage] = useState("English");
  const [format, setFormat] = useState("Decimal");

  return (
    <>
      <nav className="p-4 flex justify-between items-center relative bg-[#293339] text-white">
        {/* Left Section - Logo & Hamburger Menu */}
        <div className="flex items-center gap-4">
          <button className="focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="text-xl font-bold flex items-center">
            <Image src="/spin2.png" alt="Sportsbet.io" className="relative w-40 z-50" width={200} height={200} />
          </Link>
        </div>

        {/* Right Section - Links & Buttons */}
        <div className="block lg:flex items-center gap-4">
          <Link href="/login" className="text-gray-400 hover:text-white mr-6">Log in</Link>
          <Link href="/SignUp" className="bg-green-600 text-white font-bold px-4 py-2 rounded-full border-2 border-green-700 shadow-md hover:bg-green-500">
            Sign up
          </Link>
        </div>
      </nav>

      {/* Search Bar Below Navbar */}
      <div className="flex bg-[#293339] px-4 py-2 items-center lg:w-full">
        <div className="flex bg-gray-950 rounded-full px-4 py-2 items-center mx-4 my-2 w-[97%] lg:mx-auto ">
          <Search className="text-gray-400" size={16} />
          <input type="text" placeholder="Seek" className="bg-gray-950 outline-none text-white ml-2 w-full placeholder-gray-400 border-none" />
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className={`absolute inset-y-0 left-0 w-64 h-[730px] z-30 backdrop-blur-lg  bg-[#293339] p-10 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:w-80`}>
        <button title='x' className="absolute top-4 text-white right-4" onClick={() => setMenuOpen(false)}>
          <X size={28} />
        </button>
        <div className="mt-8 flex flex-col space-y-4">
          <h2 className="text-lg text-gray-300 font-bold">Sports</h2>

          <Link href="/LiveEvents" className="text-gray-100 hover:text-white flex items-center gap-2">
            <MonitorPlay size={18} /> Inplay
          </Link>
          <Link href="/Upcoming" className="text-gray-100 hover:text-white flex items-center gap-2">
            <Calendar size={18} /> Upcoming
          </Link>
          <Link href="/esports" className="text-gray-100 hover:text-white flex items-center gap-2">
            <Gamepad2 size={18} /> Esports
          </Link>
          <Link href="/marble-racing" className="text-gray-100 hover:text-white flex items-center gap-2">
            <ListVideo size={18} /> Marble Racing
          </Link>
          <Link href="/virtual-sports" className="text-gray-100 hover:text-white flex items-center gap-2">
            <Joystick size={18} /> Virtual Sports
          </Link>
          <Link href="/rapid-betting" className="text-gray-100 hover:text-white flex items-center gap-2">
            <Bolt size={18} /> Rapid Betting
          </Link>
          <Link href="/bitcoin-up-or-down" className="text-gray-100 hover:text-white flex items-center gap-2">
            <Bitcoin size={18} /> Bitcoin Up or Down
          </Link>
          <Link href="/Formula-1" className="text-gray-100 hover:text-white flex items-center gap-2">
            <Star size={18} /> Premier League
          </Link>
          <Link href="/global-squads" className="text-gray-100 hover:text-white flex items-center gap-2">
            <Globe size={18} /> Global Squads
          </Link>
          <Link href="/sportsbet-jackpots" className="text-gray-100 hover:text-white flex items-center gap-2">
            <CircleDollarSign size={18} /> Sportsbet Jackpots
          </Link>
        </div>

        {/* Toggle Switch & Dropdowns */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          {/* AM/PM Toggle */}
          <div className="flex justify-between items-center text-gray-300">
            <span className="text-sm">AM</span>
            <button 
            title='hello'
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${isPm ? "bg-gray-600" : "bg-gray-400"}`} 
              onClick={() => setIsPm(!isPm)}
            >
              <div 
                className={`w-5 h-5 bg-white rounded-full shadow-md transform ${isPm ? "translate-x-6" : "translate-x-0"}`}
              ></div>
            </button>
            <span className="text-sm">PM</span>
          </div>

          {/* Language Dropdown */}
          <div className="mt-4">
            <select 
            title='hello'
              className="w-[70%] p-3 bg-gray-800 border border-black text-white rounded-2xl"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Urdu">Urdu</option>
              <option value="Hindi">Hindi</option>
              <option value="French">French</option>
            </select>
          </div>

          {/* Format Dropdown */}
          <div className="mt-4">
            <select 
            title='hello'
              className="w-full p-3 bg-gray-800 border border-black text-white rounded-2xl"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            >
              <option value="Decimal">Decimal</option>
              <option value="Fractional">Fractional</option>
              <option value="American">American</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
