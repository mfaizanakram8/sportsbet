"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import FlagIcon from "@mui/icons-material/Flag";

const sports = [
  { name: "Football", icon: <SportsSoccerIcon className="text-yellow-500 text-3xl" /> },
  { name: "Basketball", icon: <SportsBasketballIcon className="text-red-500 text-3xl" /> },
  { name: "Baseball", icon: <SportsBaseballIcon className="text-orange-500 text-3xl" /> },
  { name: "Tennis", icon: <SportsTennisIcon className="text-green-500 text-3xl" /> },
  { name: "Horse Racing", icon: <EmojiEventsIcon className="text-yellow-400 text-3xl" /> },
  { name: "Australian Football", icon: <SportsFootballIcon className="text-blue-500 text-3xl" /> },
  { name: "American Football", icon: <SportsFootballIcon className="text-yellow-500 text-3xl" /> },
  { name: "Boxing", icon: <SportsMmaIcon className="text-red-600 text-3xl" /> },
  { name: "Cricket", icon: <SportsCricketIcon className="text-yellow-600 text-3xl" /> },
  { name: "Cycling", icon: <DirectionsBikeIcon className="text-yellow-500 text-3xl" /> },
  { name: "eSoccer", icon: <SportsEsportsIcon className="text-blue-500 text-3xl" /> },
  { name: "Hockey", icon: <SportsHockeyIcon className="text-red-500 text-3xl" /> },
  { name: "Formula 1", icon: <FlagIcon className="text-red-600 text-3xl" /> },
  { name: "Tennis", icon: <SportsTennisIcon className="text-green-500 text-3xl" /> },
  { name: "Horse Racing", icon: <EmojiEventsIcon className="text-yellow-400 text-3xl" /> },
  { name: "Australian Football", icon: <SportsFootballIcon className="text-blue-500 text-3xl" /> },
  { name: "American Football", icon: <SportsFootballIcon className="text-yellow-500 text-3xl" /> },
  { name: "Boxing", icon: <SportsMmaIcon className="text-red-600 text-3xl" /> },
];

const SportsNav = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowPrev(scrollLeft > 0);
      setShowNext(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });

      setTimeout(checkScroll, 300); // Smooth scrolling ke baad check karega
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScroll);
      checkScroll(); // Initial check
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <div className="relative w-full p-4 bg-[#293339] text-white">
      {/* Left Scroll Button (Prev) */}
      {showPrev && (
        <button
        title="prev"
          onClick={() => scroll("left")}
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-gray-900 p-1 rounded-xl shadow-md hover:bg-gray-800 transition flex z-10"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
      )}

      {/* Scrollable Sports List */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth px-10 hide-scrollbar"
      >
        {sports.map((sport, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-[90px]"
          >
            <div className="w-[60px] h-[60px] flex items-center justify-center bg-gray-900 rounded-lg hover:bg-gray-800 transition duration-300">
              {sport.icon}
            </div>
            <span className="text-gray-400 hover:text-gray-200 text-[0.6875rem] text-center mt-2 w-full">{sport.name}</span>
          </div>
        ))}
      </div>

      {/* Right Scroll Button (Next) */}
      {showNext && (
        <button
        title="next"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900 p-1 rounded-xl shadow-md hover:bg-gray-800 transition flex z-10 md:right-4"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      )}

      {/* Hide Scrollbar via Tailwind Custom CSS */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default SportsNav;
