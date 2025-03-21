"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname hook
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
  { name: "Football", icon: <SportsSoccerIcon className="text-yellow-500 text-3xl" />, link: "/Football" },
  { name: "Basketball", icon: <SportsBasketballIcon className="text-red-500 text-3xl" />, link: "/Basketball" },
  { name: "Baseball", icon: <SportsBaseballIcon className="text-orange-500 text-3xl" />, link: "/Baseball" },
  { name: "Tennis", icon: <SportsTennisIcon className="text-green-500 text-3xl" />, link: "/Tennis" },
  { name: "Horse Racing", icon: <EmojiEventsIcon className="text-yellow-400 text-3xl" />, link: "/Horse-Racing" },
  { name: "Australian Football", icon: <SportsFootballIcon className="text-blue-500 text-3xl" />, link: "/Australian-Football" },
  { name: "American Football", icon: <SportsFootballIcon className="text-yellow-500 text-3xl" />, link: "/American-Football" },
  { name: "Boxing", icon: <SportsMmaIcon className="text-red-600 text-3xl" />, link: "/Boxing" },
  { name: "Cricket", icon: <SportsCricketIcon className="text-yellow-600 text-3xl" />, link: "/Cricket" },
  { name: "Cycling", icon: <DirectionsBikeIcon className="text-yellow-500 text-3xl" />, link: "/Cycling" },
  { name: "eSoccer", icon: <SportsEsportsIcon className="text-blue-500 text-3xl" />, link: "/Esoccer" },
  { name: "Hockey", icon: <SportsHockeyIcon className="text-red-500 text-3xl" />, link: "/Hockey" },
  { name: "Formula 1", icon: <FlagIcon className="text-red-600 text-3xl" />, link: "/Formula-1" },
];

const LiveCarousel = () => {
  const pathname = usePathname();
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
      requestAnimationFrame(checkScroll);
    }
  };
  useEffect(() => {
    if (!scrollRef.current) return;
  
    const scrollElement = scrollRef.current; // Store reference in a variable
    scrollElement.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
  
    // Ensure check runs after component mounts
    setTimeout(checkScroll, 100); 
  
    const observer = new MutationObserver(() => checkScroll());
    observer.observe(scrollElement, { childList: true, subtree: true });
  
    return () => {
      scrollElement.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      observer.disconnect(); // Prevent memory leaks
    };
  }, []);
  

  return (
    <div className="relative w-full p-2 my-4 bg-gray-950 border-y-2 border-black text-white">
      {showPrev && (
        <button
          title="prev"
          onClick={() => scroll("left")}
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-gray-900 p-1 rounded-xl shadow-md hover:bg-gray-800 transition flex z-10"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
      )}

      <div ref={scrollRef} className="flex space-x-3 overflow-x-auto scroll-smooth px-10 hide-scrollbar">
        {sports.map((sport, index) => (
          <Link key={index} href={sport.link} className="flex flex-col items-center justify-center w-[90px]">
            <div
              className={`flex items-center justify-center transition duration-300 ${
                pathname === sport.link ? "bg-transparent text-white border-t-[0.5px] border-blue-500" : "bg-transparent"
              }`}
            >
              {sport.icon}
            </div>
            <span
              className={`text-[0.5875rem] text-center mt-2 w-full transition ${
                pathname === sport.link ? "text-white font-semibold" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {sport.name}
            </span>
          </Link>
        ))}
      </div>

      {showNext && (
        <button
          title="next"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900 p-1 rounded-xl shadow-md hover:bg-gray-800 transition flex z-10 md:right-4"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      )}

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

export default LiveCarousel;
