"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

const GameSection = () => {
  const pathname = usePathname();

  // Define images based on the pathname
  const images: { [key: string]: string } = {
    "/esports": "/1stsec.png",
    "/marble-racing": "/marble.png",
    "/virtual-sports": "/dark.png",
    "/rapid-betting": "/rapid.png",
    "/bitcoin-up-or-down": "/up.png",
    "/global-squads": "/global.png",
    "/sportsbet-jackpots": "/jackpot.png",
  };

  // Default image if the path is not in the list
  const imageSrc = images[pathname] || "/1stsec.png";

  return (
    <div className="flex flex-col w-[90%] items-center justify-center bg-gray-950 text-white p-6 rounded-lg shadow-lg">
      <Image
        src={imageSrc}
        alt="Section Image"
        width={500}
        height={500}
        className="rounded-lg"
      />
      <h2 className="text-xl font-bold mt-4">
        Connectez-vous pour accéder à des jeux Esports exclusifs
      </h2>
      <p className="text-gray-400 text-sm mt-2">
        Rejoignez notre communauté et commencez votre aventure !
      </p>
      <button className="mt-4 bg-green-500 px-4 py-2 rounded text-white font-semibold hover:bg-green-600">
        Inscrivez-vous pour jouer
      </button>
    </div>
  );
};

export default GameSection;
