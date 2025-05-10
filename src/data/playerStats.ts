export interface PlayerPerformance {
  id: number;
  matchId: number;
  playerName: string;
  role: 'Batsman' | 'Bowler' | 'All-rounder';
  performance: {
    batting?: {
      runs: number;
      balls: number;
      fours: number;
      sixes: number;
      strikeRate: number;
    };
    bowling?: {
      overs: number;
      maidens: number;
      runs: number;
      wickets: number;
      economy: number;
    };
  };
  impactRating: number; // 1-10 rating of player's impact on match
  wasKeyfactor: boolean; // Whether player's performance was a key factor in the loss
  analysis: string;
}

export interface TopPlayer {
  id: number;
  name: string;
  role: 'Batsman' | 'Bowler' | 'All-rounder';
  matches: number;
  achivements: string;
  avgPerformance: number;
  imageUrl?: string;
  stats: {
    batting?: {
      innings: number;
      runs: number;
      average: number;
      strikeRate: number;
      hundreds: number;
      fifties: number;
    };
    bowling?: {
      innings: number;
      wickets: number;
      average: number;
      economy: number;
      fiveWickets: number;
    };
  };
  biography: string;
}

// Performance data for specific matches (connect to matches by matchId)
export const playerPerformances: PlayerPerformance[] = [
  {
    id: 1,
    matchId: 1, // Linked to World Cup 1999 vs India
    playerName: 'Saeed Anwar',
    role: 'Batsman',
    performance: {
      batting: {
        runs: 36,
        balls: 51,
        fours: 5,
        sixes: 0,
        strikeRate: 70.58
      }
    },
    impactRating: 5,
    wasKeyfactor: false,
    analysis: 'Started well but couldn\'t convert to a big score when the team needed it.'
  },
  {
    id: 2,
    matchId: 1,
    playerName: 'Inzamam-ul-Haq',
    role: 'Batsman',
    performance: {
      batting: {
        runs: 41,
        balls: 63,
        fours: 3,
        sixes: 0,
        strikeRate: 65.07
      }
    },
    impactRating: 4,
    wasKeyfactor: true,
    analysis: 'Failed to accelerate when required, putting pressure on other batsmen.'
  },
  {
    id: 3,
    matchId: 3, // World Cup 2011 vs India
    playerName: 'Shahid Afridi',
    role: 'All-rounder',
    performance: {
      batting: {
        runs: 19,
        balls: 17,
        fours: 2,
        sixes: 1,
        strikeRate: 111.76
      },
      bowling: {
        overs: 10,
        maidens: 0,
        runs: 53,
        wickets: 0,
        economy: 5.30
      }
    },
    impactRating: 3,
    wasKeyfactor: true,
    analysis: 'As captain, failed to make an impact with either bat or ball in a crucial knockout game.'
  },
  {
    id: 4,
    matchId: 5, // World Cup 2019 vs India
    playerName: 'Babar Azam',
    role: 'Batsman',
    performance: {
      batting: {
        runs: 48,
        balls: 75,
        fours: 3,
        sixes: 0,
        strikeRate: 64.00
      }
    },
    impactRating: 6,
    wasKeyfactor: false,
    analysis: 'Showed resilience but struggled to rotate strike, affecting the required run rate.'
  },
  {
    id: 5,
    matchId: 5,
    playerName: 'Mohammad Amir',
    role: 'Bowler',
    performance: {
      bowling: {
        overs: 10,
        maidens: 1,
        runs: 47,
        wickets: 3,
        economy: 4.70
      }
    },
    impactRating: 8,
    wasKeyfactor: false,
    analysis: 'One of the few bright spots for Pakistan, bowling exceptionally well despite the loss.'
  },
  {
    id: 6,
    matchId: 8, // ODI World Cup 2023 vs India
    playerName: 'Shaheen Shah Afridi',
    role: 'Bowler',
    performance: {
      bowling: {
        overs: 10,
        maidens: 0,
        runs: 58,
        wickets: 1,
        economy: 5.80
      }
    },
    impactRating: 4,
    wasKeyfactor: true,
    analysis: 'Failed to provide early breakthroughs as expected from Pakistan\'s premier fast bowler.'
  },
  {
    id: 7,
    matchId: 8,
    playerName: 'Babar Azam',
    role: 'Batsman',
    performance: {
      batting: {
        runs: 18,
        balls: 24,
        fours: 2,
        sixes: 0,
        strikeRate: 75.00
      }
    },
    impactRating: 3,
    wasKeyfactor: true,
    analysis: 'As captain and team\'s best batter, this underwhelming performance significantly hurt Pakistan\'s chances.'
  },
  {
    id: 8,
    matchId: 9, // World Cup 1996 vs India
    playerName: 'Aamer Sohail',
    role: 'Batsman',
    performance: {
      batting: {
        runs: 55,
        balls: 46,
        fours: 9,
        sixes: 0,
        strikeRate: 119.56
      }
    },
    impactRating: 7,
    wasKeyfactor: false,
    analysis: 'Played aggressively but his confrontation with Venkatesh Prasad led to his wicket at a crucial juncture.'
  }
];

// Great players despite team's poor performances
export const greatPlayers: TopPlayer[] = [
  {
    id: 1,
    name: 'Wasim Akram',
    role: 'All-rounder',
    matches: 356,
    achivements: 'Sultan of Swing, 502 ODI wickets',
    avgPerformance: 9.2,
    imageUrl: '/wasim-akram.jpg',
    stats: {
      bowling: {
        innings: 356,
        wickets: 502,
        average: 23.52,
        economy: 3.89,
        fiveWickets: 6
      },
      batting: {
        innings: 282,
        runs: 3717,
        average: 16.52,
        strikeRate: 88.33,
        hundreds: 0,
        fifties: 6
      }
    },
    biography: 'Widely regarded as one of the greatest fast bowlers of all time, Wasim Akram\'s ability to swing the ball both ways and execute precise yorkers made him a feared opponent. Despite Pakistan\'s inconsistencies, he remained a match-winner throughout his career.'
  },
  {
    id: 2,
    name: 'Inzamam-ul-Haq',
    role: 'Batsman',
    matches: 378,
    achivements: 'ICC Hall of Fame, 11,739 ODI runs',
    avgPerformance: 8.7,
    imageUrl: '/inzamam.jpg',
    stats: {
      batting: {
        innings: 350,
        runs: 11739,
        average: 39.52,
        strikeRate: 74.24,
        hundreds: 10,
        fifties: 83
      }
    },
    biography: 'A master of crisis management, Inzamam-ul-Haq often stood tall amidst batting collapses. His calm demeanor and ability to pace innings made him one of Pakistan\'s greatest batsmen, despite the team\'s frequent setbacks in crucial matches.'
  },
  {
    id: 3,
    name: 'Saeed Ajmal',
    role: 'Bowler',
    matches: 113,
    achivements: 'World\'s #1 ranked ODI bowler (2011-2012)',
    avgPerformance: 8.5,
    imageUrl: '/saeed-ajmal.jpg',
    stats: {
      bowling: {
        innings: 113,
        wickets: 184,
        average: 22.72,
        economy: 4.18,
        fiveWickets: 2
      }
    },
    biography: 'With his mysterious doosra and excellent control, Saeed Ajmal was virtually unplayable during his peak years. Despite limited World Cup success for Pakistan, he maintained exceptional standards and often kept Pakistan competitive in otherwise one-sided matches.'
  },
  {
    id: 4,
    name: 'Mohammad Yousuf',
    role: 'Batsman',
    matches: 288,
    achivements: 'Most Test runs in a calendar year (2006)',
    avgPerformance: 8.4,
    imageUrl: '/mohammad-yousuf.jpg',
    stats: {
      batting: {
        innings: 273,
        runs: 9720,
        average: 41.71,
        strikeRate: 75.10,
        hundreds: 15,
        fifties: 64
      }
    },
    biography: "A technically perfect batsman with exquisite timing, Mohammad Yousuf's elegant batting stood out even in Pakistan's defeats. His conversion of starts into big scores and ability to play pace and spin equally well made him a consistent performer across conditions."
  },
  {
    id: 5,
    name: 'Babar Azam',
    role: 'Batsman',
    matches: 108,
    achivements: 'ICC ODI Player of the Year (2021, 2022)',
    avgPerformance: 8.9,
    imageUrl: '/babar-azam.jpg',
    stats: {
      batting: {
        innings: 108,
        runs: 5407,
        average: 56.92,
        strikeRate: 89.13,
        hundreds: 19,
        fifties: 28
      }
    },
    biography: 'The modern face of Pakistan batting, Babar Azam has maintained stellar averages despite the team\'s inconsistent results. His graceful stroke-play and composure under pressure have established him as a world-class performer regardless of the team\'s fortunes.'
  }
];

// Helper function to get player performances by match ID
export const getPlayerPerformancesByMatch = (matchId: number): PlayerPerformance[] => {
  return playerPerformances.filter(performance => performance.matchId === matchId);
};

// Helper function to get key underperformers across all matches
export const getKeyUnderperformers = (): PlayerPerformance[] => {
  return playerPerformances.filter(performance => performance.wasKeyfactor && performance.impactRating < 5);
};

// Helper function to get standout players in defeats
export const getStandoutPlayersInDefeats = (): PlayerPerformance[] => {
  return playerPerformances.filter(performance => !performance.wasKeyfactor && performance.impactRating > 7);
};
