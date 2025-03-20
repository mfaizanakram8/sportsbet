'use client'
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { MdSportsSoccer, MdSportsBasketball } from 'react-icons/md';

const sportsData = [
  {
    name: 'Soccer',
    icon: <MdSportsSoccer className="text-red-500 text-xl" />,
    leagues: [
      {
        name: 'Italy / Serie A',
        matches: [
          {
            teams: ['Venice', 'SSC Naples'],
            date: '03/16',
            time: '4:30 p.m.',
            odds: ['7.60', '4.10', '1.49'],
            handicap: [['+1.0', '2.02'], ['-1.0', '1.83']],
            overUnder: [['o2/2.5', '1.89'], ['u2/2.5', '2.01']],
            extra: '+235'
          },
          {
            teams: ['Juventus', 'AC Milan'],
            date: '03/18',
            time: '6:00 p.m.',
            odds: ['2.10', '3.50', '3.75'],
            handicap: [['+0.5', '1.80'], ['-0.5', '2.00']],
            overUnder: [['o3.0', '1.95'], ['u3.0', '1.85']],
            extra: '+120'
          }
        ]
      },
      {
        name: 'England / Premier League',
        matches: [
          {
            teams: ['Manchester United', 'Chelsea'],
            date: '03/19',
            time: '8:00 p.m.',
            odds: ['2.90', '3.10', '2.50'],
            handicap: [['+0.5', '2.10'], ['-0.5', '1.90']],
            overUnder: [['o2.5', '2.00'], ['u2.5', '1.95']],
            extra: '+180'
          },
          {
            teams: ['Liverpool', 'Arsenal'],
            date: '03/20',
            time: '7:30 p.m.',
            odds: ['2.45', '3.20', '2.85'],
            handicap: [['+0.5', '2.05'], ['-0.5', '1.95']],
            overUnder: [['o3.0', '2.10'], ['u3.0', '1.90']],
            extra: '+140'
          }
        ]
      }
    ]
  },
  {
    name: 'Basketball',
    icon: <MdSportsBasketball className="text-orange-500 text-xl" />,
    leagues: [
      {
        name: 'NBA',
        matches: [
          {
            teams: ['Lakers', 'Warriors'],
            date: '03/17',
            time: '7:00 p.m.',
            odds: ['2.50', '1.90', '3.75'],
            handicap: [['+5.5', '1.95'], ['-5.5', '1.85']],
            overUnder: [['o210.5', '1.92'], ['u210.5', '1.98']],
            extra: '+150'
          },
          {
            teams: ['Boston Celtics', 'Miami Heat'],
            date: '03/18',
            time: '9:00 p.m.',
            odds: ['1.80', '2.00', '2.20'],
            handicap: [['+4.0', '1.88'], ['-4.0', '1.92']],
            overUnder: [['o215.5', '1.94'], ['u215.5', '1.96']],
            extra: '+160'
          }
        ]
      },
      {
        name: 'EuroLeague',
        matches: [
          {
            teams: ['Real Madrid', 'Barcelona'],
            date: '03/19',
            time: '8:30 p.m.',
            odds: ['1.75', '2.15', '2.40'],
            handicap: [['+3.5', '2.00'], ['-3.5', '1.85']],
            overUnder: [['o19.5', '2.05'], ['u18.5', '1.90']],
            extra: '+130'
          }
        ]
      }
    ]
  },
  {
    name: 'Tennis',
    icon: <span className="text-purple-500 text-xl">🎾</span>,
    leagues: [
      {
        name: 'ATP Masters',
        matches: [
          {
            teams: ['Nadal', 'Djokovic'],
            date: '03/21',
            time: '3:00 p.m.',
            odds: ['2.20', '1.80'],
            handicap: [['+1.5 ', '2.00'], ['-1.5 ', '1.90']],
            overUnder: [['o22.5 ', '2.05'], ['u22.5 ', '1.95']],
            extra: '+120'
          }
        ]
      },
      {
        name: 'WTA Finals',
        matches: [
          {
            teams: ['Serena Williams', 'Naomi Osaka'],
            date: '03/22',
            time: '5:00 p.m.',
            odds: ['1.95', '2.05'],
            handicap: [['+2.0 ', '1.98'], ['-2.0 ', '1.92']],
            overUnder: [['o21.5 ', '1.95'], ['u21.5 ', '1.90']],
            extra: '+140'
          }
        ]
      }
    ]
  },
  {
    name: 'Cricket',
    icon: <span className="text-green-500 text-xl">🏏</span>,
    leagues: [
      {
        name: 'Indian Premier League (IPL)',
        matches: [
          {
            teams: ['Mumbai Indians', 'Chennai Super Kings'],
            date: '03/23',
            time: '6:30 p.m.',
            odds: ['1.90', '2.10'],
            handicap: [['+20.5 ', '1.85'], ['-20.5 ', '2.05']],
            overUnder: [['o18.5 ', '1.92'], ['u10.5 ', '1.88']],
            extra: '+110'
          },
     
        ]
      }
    ]
  }
];

const FeaturedEvents = () => {
  const [openLeague, setOpenLeague] = useState<{ sport: number; league: number } | null>(null);

  const toggleLeague = (sportIndex: number, leagueIndex: number) => {
    setOpenLeague((prev) =>
      prev?.sport === sportIndex && prev?.league === leagueIndex
        ? null
        : { sport: sportIndex, league: leagueIndex }
    );
  };

  return (
    <div className='flex justify-center items-center bg-[#293339] w-full '>
      <div className='bg-gray-950 w-[95%] p-8 rounded-3xl'>
        <h1 className='text-3xl text-white font-bold'>Featured Events</h1>
        
        {sportsData.map((sport, sportIndex) => (
          <div key={sportIndex}>
            <div className="flex justify-between mt-4 items-center p-4 bg-[#293339] rounded-t-xl text-sm font-semibold h-[50px]">
              <div className="flex items-center gap-2">
                {sport.icon}
                <span className='text-white text-xl'>{sport.name}</span>
              </div>
              <button className="text-green-400 text-xs font-bold">Show all</button>
            </div>

            {sport.leagues.map((league, leagueIndex) => (
              <div key={leagueIndex} className="flex flex-col mt-1 w-full">
                <div className="flex w-full">
                  <div className="flex items-center justify-between bg-[#293339] text-sm font-semibold h-[40px] w-[95%] p-4">
                    <span className='text-green-400 text-sm'>{league.name}</span>
                    <span className="text-gray-400 text-sm">{league.matches.length}</span>
                  </div>
                  <div 
                    className="flex justify-center items-center bg-[#293339] w-[5%] ml-[5px] cursor-pointer"
                    onClick={() => toggleLeague(sportIndex, leagueIndex)}
                  >
                    {openLeague?.sport === sportIndex && openLeague?.league === leagueIndex ? (
                      <MdKeyboardArrowUp className="text-green-400 text-xl" />
                    ) : (
                      <MdKeyboardArrowDown className="text-green-400 text-xl" />
                    )}
                  </div>
                </div>

                {openLeague?.sport === sportIndex && openLeague?.league === leagueIndex && league.matches.map((match, matchIndex) => (
                  <div key={matchIndex}>
                    <div className="flex lg:space-x-24 space-x-11 justify-end items-center bg-[#293339] w-full h-[30px] p-4 mt-1 text-gray-400 text-[8px] font-semibold">
                      <span>1</span>
                      <span>X</span>
                      <span className='mr-24 lg:mr-[140px]'>2</span>
                      <span className='hidden lg:block lg:mr-24 '>HCP</span>
                      <span className='hidden lg:block lg:mx-20 lg:mr-64'>EARLY</span>
                    </div>
                    <div className="bg-gray-950 border-b-2 border-black text-white p-4 rounded-lg flex items-center justify-end space-x-6">
                      <div className="flex flex-col mr-12 lg:mr-48">
                        <span className="text-sm font-semibold">{match.teams[0]}</span>
                        <span className="text-sm">{match.teams[1]}</span>
                        <div className="text-gray-400 text-[9px] flex lg:hidden">
                          <span>{match.date}</span>
                          <br />
                          <span>{match.time}</span>
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm hidden lg:flex">
                        <span>{match.date}</span>
                        <br />
                        <span>{match.time}</span>
                      </div>
                      <div className='flex flex-col text-[9px] lg:text-sm text-green-400'>
                        <span>0</span>
                        <span>1</span>
                      </div>
                      <div className="flex space-x-2">
                        {match.odds.map((odd, i) => (
                          <div key={i} className="bg-[#293339] px-2 py-3 lg:px-6 lg:py-3 rounded-md text-[10px] lg:text-sm">{odd}</div>
                        ))}
                      </div>
                      <div className="hidden lg:flex space-x-2">
                        {match.handicap.map(([left, right], i) => (
                          <div key={i} className="bg-[#293339] px-3 py-3 rounded-md text-sm">
                            <span className="text-yellow-400">{left}</span> {right}
                          </div>
                        ))}
                      </div>
                      <div className="space-x-2 hidden lg:flex">
                        {match.overUnder.map(([left, right], i) => (
                          <div key={i} className="bg-[#293339] px-3 py-3 rounded-md text-sm">
                            <span className="text-yellow-400">{left}</span> {right}
                          </div>
                        ))}
                      </div>
                      <div className="text-green-400 bg-[#293339] px-3 py-2 rounded-md text-sm">{match.extra}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedEvents;
