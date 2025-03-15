'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const sportsData = [
  {
    league: 'Spain / LaLiga',
    matches: [
      {
        team1: 'Real Valladolid',
        team2: 'Celta Vigo',
        time: '03/15 6:00 p.m.',
        odds: [4.90, 3.90, 1.72],
        hcp: '(+0.5/+1) 1.96 | (-0.5/-1) 1.89',
        early: ['o2.5 1.91', 'u2.5 1.91'],
        points: '+208',
      },
      {
        team1: 'Majorca',
        team2: 'Espanyol Barcelona',
        time: '03/15 8:15 p.m.',
        odds: [1.84, 3.35, 4.90],
        hcp: '(-0.5) 1.83 | (+0.5) 2.04',
        early: ['o2 1.99', 'u2 1.91'],
        points: '+225',
      },
      {
        team1: 'CF Villarreal',
        team2: 'Real Madrid',
        time: '03/15 10:30 p.m.',
        odds: [2.90, 3.75, 2.32],
        hcp: '(0/+0.5) 1.84 | (0/-0.5) 2.02',
        early: ['o3/3.5 2.07', 'u3/3.5 1.83'],
        points: '+210',
      },
    ],
  },
  {
    league: 'Italy / Serie A',
    matches: [
      {
        team1: 'AC Monza',
        team2: 'Parma Calcio',
        time: '03/15 7:00 p.m.',
        odds: [3.05, 3.25, 2.48],
        hcp: '(0/+0.5) 1.79 | (-0.5) 2.08',
        early: ['o2.5 2.04', 'u2.5 1.86'],
        points: '+214',
      },
      {
        team1: 'Udinese Calcio',
        team2: 'Hellas Verona',
        time: '03/15 7:00 p.m.',
        odds: [1.71, 3.65, 5.30],
        hcp: '(-0.5/-1) 1.97 | (+0.5/+1) 1.88',
        early: ['o2/2.5 1.90', 'u2/2.5 2.00'],
        points: '+221',
      },
      {
        team1: 'AC Milan',
        team2: 'Como 1907',
        time: '03/15 10:00 p.m.',
        odds: [1.78, 3.70, 4.70],
        hcp: '(-0.5/-1) 1.98 | (+0.5/+1) 1.87',
        early: ['o2.5/3 1.87', 'u2.5/3 2.03'],
        points: '+225',
      },
      {
        team1: 'Torino FC',
        team2: 'Empoli FC',
        time: '03/16 00:45',
        odds: [1.87, 3.30, 4.80],
        hcp: '(-0.5) 1.85 | (+0.5) 2.00',
        early: ['o2/2.5 1.95', 'u2/2.5 1.95'],
        points: '+222',
      },
    ],
  },
];

export default function FeaturedEvents() {
  const [openLeagues, setOpenLeagues] = useState<Record<string, boolean>>({});

  const toggleLeague = (league: string) => {
    setOpenLeagues((prev) => ({ ...prev, [league]: !prev[league] }));
  };

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-7xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4">Featured Events</h2>

      {sportsData.map((leagueData) => (
        <div key={leagueData.league} className="mb-4 border-b pb-3">
          <div
            className="flex justify-between items-center cursor-pointer py-2"
            onClick={() => toggleLeague(leagueData.league)}
          >
            <span className="text-lg font-semibold">{leagueData.league}</span>
            {openLeagues[leagueData.league] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {openLeagues[leagueData.league] && (
            <div className="bg-gray-100 p-3 rounded-lg">
              {leagueData.matches.map((match, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row justify-between items-start md:items-center p-3 border-b last:border-0 text-sm space-y-3 md:space-y-0"
                >
                  {/* Team Names & Time */}
                  <div className="flex flex-col w-full md:w-1/4">
                    <p className="font-semibold">{match.team1}</p>
                    <p className="text-gray-600">{match.team2}</p>
                    <p className="text-gray-500 text-xs">{match.time}</p>
                  </div>

                  {/* Odds */}
                  <div className="flex space-x-2 md:space-x-3 w-full md:w-1/4 justify-between md:justify-start">
                    {match.odds.map((odd, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-200 rounded-lg">{odd}</span>
                    ))}
                  </div>

                  {/* HCP */}
                  <div className="w-full md:w-1/4 text-orange-600">{match.hcp}</div>

                  {/* Early Odds */}
                  <div className="flex space-x-2 md:space-x-3 w-full md:w-1/6 justify-between md:justify-start">
                    {match.early.map((odd, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-200 rounded-lg">{odd}</span>
                    ))}
                  </div>

                  {/* Points */}
                  <div className="w-full md:w-1/12 text-green-600 font-semibold text-right md:text-left">{match.points}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
