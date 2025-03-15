"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sports = [
  { name: "Soccer", icon: "⚽" },
  { name: "Basketball", icon: "🏀" },
  { name: "Baseball", icon: "⚾" },
  { name: "Tennis", icon: "🎾" },
  { name: "Horse Racing", icon: "🏇" },
  { name: "Australian Football", icon: "🏉" },
  { name: "American Football", icon: "🏈" },
  { name: "Skiing", icon: "⛷️" },
  { name: "Badminton", icon: "🏸" },
  { name: "Boxing", icon: "🥊" },
  { name: "Cricket", icon: "🏏" },
  { name: "Cycling", icon: "🚴" },
  { name: "eBasketball", icon: "🎮" },
  { name: "eSoccer", icon: "⚽" },
];

const SportsNav = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6; // Adjust scroll distance
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full p-4">
      {/* Left Scroll Button (now visible on mobile too) */}
      <button
       title="prev"
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700 transition flex z-10"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      {/* Scrollable Sports List */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth px-10 hide-scrollbar"
      >
        {sports.map((sport, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300 min-w-[90px]"
          >
            <span className="text-2xl">{sport.icon}</span>
            <span className="text-white text-[12px] text-center mt-1">{sport.name}</span>
          </div>
        ))}
      </div>

      {/* Right Scroll Button (now visible on mobile too) */}
      <button
      title="next"
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700 transition flex z-10"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

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
