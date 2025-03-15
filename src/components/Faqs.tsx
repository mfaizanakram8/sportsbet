"use client";

import { useState } from "react";

const CollapsibleText = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center  py-10 px-4">
      {/* Heading */}
      <h2 className="text-lg md:text-xl font-medium text-center mb-4">
        Win the best winnings at Spinwinners.io: the home of Bitcoin betting
      </h2>

      {/* Collapsible Content */}
      <div className={`transition-all duration-500  ${expanded ? "max-h-[5000px] space-y-5" : "max-h-0 overflow-hidden"}`}>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center text-blue-400">Win the Best Winnings at Spinwinners.io: The Home of Bitcoin Betting</h1>
        <p className="text-center mt-2 text-lg">A **trusted** online sports betting and casino site where you can bet in your local currency or cryptocurrency.</p>

        <div className="mt-6 text-center">
            <p className="text-lg">🎯 **Award-winning in-play betting** | ⚡ **Instant withdrawals** | 📈 **Price boosts** | 💬 **24/7 Live Chat in 12 languages**</p>
        </div>

        <section className="mt-10">
            <h2 className="text-2xl font-semibold text-blue-400">Why Bet with Spinwinners.io?</h2>
            <p className="mt-2">Looking for a **fun, fast, and fair** betting experience? Spinwinners.io offers a seamless betting journey with exciting opportunities to **maximize your winnings**.</p>
        </section>

        <section className="mt-10">
            <h2 className="text-2xl font-semibold text-blue-400">Top Sports to Bet On</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                    <h3 className="text-xl font-semibold text-blue-400">⚽ Football</h3>
                    <p>Bet on the **biggest leagues** including:</p>
                    <ul className="list-disc ml-5 mt-2">
                        <li>**English Premier League (EPL)**</li>
                        <li>**La Liga**</li>
                        <li>**Bundesliga**</li>
                        <li>**Serie A**</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                    <h3 className="text-xl font-semibold text-blue-400">🏀 Basketball</h3>
                    <p>Place bets on top basketball leagues:</p>
                    <ul className="list-disc ml-5 mt-2">
                        <li>**NBA**</li>
                        <li>**EuroLeague**</li>
                        <li>**FIBA**</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                    <h3 className="text-xl font-semibold text-blue-400">🎮 Esports</h3>
                    <p>Get into the **hottest** esports tournaments:</p>
                    <ul className="list-disc ml-5 mt-2">
                        <li>**CS:GO**</li>
                        <li>**Dota 2**</li>
                        <li>**League of Legends (LoL)**</li>
                        <li>**FIFA & NBA 2K Tournaments**</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="mt-10">
            <h2 className="text-2xl font-semibold text-blue-400">Types of Bets</h2>
            <p className="mt-2">Explore various betting options:</p>
            <ul className="list-disc ml-5 mt-2">
                <li>🔥 **Live Betting** - Bet while the action happens!</li>
                <li>🎯 **Handicap Bets** - Even the odds between teams.</li>
                <li>💰 **Outright Bets** - Bet on winners before the season starts.</li>
                <li>📊 **Over/Under Bets** - Predict total scores.</li>
            </ul>
        </section>

        <section className="mt-10">
            <h2 className="text-2xl font-semibold text-blue-400">Why Choose Bitcoin Betting?</h2>
            <p className="mt-2">🚀 **Fast Transactions** | 🔒 **Secure & Anonymous** | 🌎 **Global Access**</p>
            <p className="mt-2">Spinwinners.io makes Bitcoin betting seamless with **instant transactions** and multiple cryptocurrency options.</p>
        </section>

       
    </div>
      </div>

      {/* Show More / Show Less Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 px-6 py-2 bg-gray-600 hover:bg-gray-500 rounded-full text-white transition"
      >
        {expanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default CollapsibleText;
