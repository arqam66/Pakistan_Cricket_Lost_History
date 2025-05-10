
export interface MatchData {
  id: number;
  date: string;
  opponent: string;
  tournament: string;
  venue: string;
  scorecard: string;
  margin: string;
  description: string;
  year: number;
}

export const significantLosses: MatchData[] = [
  {
    id: 1,
    date: "March 17, 1999",
    opponent: "India",
    tournament: "Cricket World Cup",
    venue: "Old Trafford, Manchester",
    scorecard: "India 227/6 (50 overs) vs Pakistan 180 all out (45.3 overs)",
    margin: "Lost by 47 runs",
    description: "A crushing defeat in the Super Six stage of the 1999 World Cup as Pakistan failed to chase a modest total against their arch-rivals.",
    year: 1999
  },
  {
    id: 2,
    date: "March 1, 2003",
    opponent: "India",
    tournament: "Cricket World Cup",
    venue: "Centurion, South Africa",
    scorecard: "India 273/7 (50 overs) vs Pakistan 273/7 (50 overs)",
    margin: "Lost by 6 wickets",
    description: "Sachin Tendulkar's masterful 98 helped India maintain their unbeaten World Cup record against Pakistan.",
    year: 2003
  },
  {
    id: 3,
    date: "March 30, 2011",
    opponent: "India",
    tournament: "Cricket World Cup",
    venue: "Mohali, India",
    scorecard: "India 260/9 (50 overs) vs Pakistan 231 all out (49.5 overs)",
    margin: "Lost by 29 runs",
    description: "In a high-pressure semifinal, Pakistan's batting faltered despite their bowlers containing India to a chaseable total.",
    year: 2011
  },
  {
    id: 4,
    date: "June 18, 2017",
    opponent: "India",
    tournament: "ICC Champions Trophy Final",
    venue: "The Oval, London",
    scorecard: "Pakistan 338/4 (50 overs) vs India 158 all out (30.3 overs)",
    margin: "Won by 180 runs",
    description: "A rare victory - included to highlight contrast. Pakistan stunned India with an all-round performance to win their first Champions Trophy.",
    year: 2017
  },
  {
    id: 5,
    date: "June 16, 2019",
    opponent: "India",
    tournament: "Cricket World Cup",
    venue: "Old Trafford, Manchester",
    scorecard: "India 336/5 (50 overs) vs Pakistan 212/6 (40 overs)",
    margin: "Lost by 89 runs (DLS method)",
    description: "Rain-affected match where Pakistan never looked competitive, extending their World Cup drought against India.",
    year: 2019
  },
  {
    id: 6,
    date: "October 24, 2021",
    opponent: "India",
    tournament: "T20 World Cup",
    venue: "Dubai International Stadium, UAE",
    scorecard: "India 151/7 (20 overs) vs Pakistan 152/0 (17.5 overs)",
    margin: "Won by 10 wickets",
    description: "Another rare victory - Pakistan broke their World Cup jinx against India with a commanding 10-wicket win.",
    year: 2021
  },
  {
    id: 7,
    date: "February 25, 2023",
    opponent: "England",
    tournament: "Test Series",
    venue: "Rawalpindi Cricket Stadium",
    scorecard: "England 657 & 264/7d vs Pakistan 579 & 268",
    margin: "Lost by 74 runs",
    description: "England's 'Bazball' approach stunned Pakistan on a flat pitch, taking the game away from the hosts in dramatic fashion.",
    year: 2023
  },
  {
    id: 8,
    date: "October 14, 2023",
    opponent: "India",
    tournament: "ODI World Cup",
    venue: "Narendra Modi Stadium, Ahmedabad",
    scorecard: "Pakistan 191 all out (42.5 overs) vs India 192/3 (30.3 overs)",
    margin: "Lost by 7 wickets",
    description: "Another World Cup loss to India where Pakistan's batting collapsed after a promising start.",
    year: 2023
  },
  {
    id: 9,
    date: "March 10, 1996",
    opponent: "India",
    tournament: "Cricket World Cup",
    venue: "M. Chinnaswamy Stadium, Bangalore",
    scorecard: "India 287/8 (50 overs) vs Pakistan 248/9 (49 overs)",
    margin: "Lost by 39 runs",
    description: "In a high-scoring quarter-final, Pakistan failed to chase India's challenging total despite Aamer Sohail's aggressive batting.",
    year: 1996
  },
  {
    id: 10,
    date: "February 1, 1992",
    opponent: "England",
    tournament: "Cricket World Cup",
    venue: "Adelaide Oval, Australia",
    scorecard: "England 236/8 (50 overs) vs Pakistan 174 all out (40.1 overs)",
    margin: "Lost by 62 runs",
    description: "Early setback in the 1992 World Cup before Pakistan's eventual triumph under Imran Khan's leadership.",
    year: 1992
  }
];

// Helper function to group matches by decade
export const getMatchesByDecade = () => {
  const matchesByDecade: Record<string, MatchData[]> = {};
  
  significantLosses.forEach(match => {
    const decade = Math.floor(match.year / 10) * 10;
    const decadeLabel = `${decade}s`;
    
    if (!matchesByDecade[decadeLabel]) {
      matchesByDecade[decadeLabel] = [];
    }
    
    matchesByDecade[decadeLabel].push(match);
  });
  
  return matchesByDecade;
};
