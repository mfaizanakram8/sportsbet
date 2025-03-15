'use client';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="p-4 flex justify-between items-center relative  ">
        {/* Left Section - Logo & Hamburger Menu */}
        <div className="flex items-center gap-4">
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="text-xl font-bold flex items-center">
            <Image src="/spin.png" alt="Sportsbet.io" className="relative w-40 z-50" width={200} height={200} />
          </Link>
        </div>

        {/* Right Section - Links & Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="#" className="text-gray-400 hover:text-white">Log in</Link>
          <button className="bg-green-600 text-white font-bold px-4 py-2 rounded-full border-2 border-green-700 shadow-md hover:bg-green-500">
            Sign up
          </button>
        </div>
      </nav>
      
      {/* Search Bar Below Navbar */}
      <div className="flex bg-gray-800 rounded-full px-4 py-2 items-center mx-4 my-2 lg:mx-auto lg:w-[90%] ">
        <Search className="text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Seek"
          className="bg-transparent outline-none text-white ml-2 w-full placeholder-gray-400"
        />
      </div>

      {/* Sidebar Menu */}
      <div className={`fixed inset-y-0 left-0 w-64 z-30 backdrop-blur-lg bg-gray-50 p-10 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:w-80` }>
        <button
        title='x'
          className=" absolute top-4 right-4"
          onClick={() => setMenuOpen(false)}
        >
          <X size={28} />
        </button>
        <div className="mt-8 flex flex-col space-y-4">
          <h2 className="text-lg font-bold">Sports</h2>
          <Link href="#" className="text-gray-400 hover:text-white">Stake</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Future</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Esports</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Marble Race</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Virtual Sports</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Fast Paris</Link>

          <h2 className="text-lg font-bold mt-4">Casino</h2>
          <Link href="#" className="text-gray-400 hover:text-white">Favorites</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Live Casino</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Slot Machines</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Clubhouse Games</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
