
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  playerPerformances, 
  getKeyUnderperformers,
  getStandoutPlayersInDefeats,
  greatPlayers
} from '@/data/playerStats';
import StatisticsCharts from './stats/StatisticsCharts';
import StatisticsTabsSection from './stats/StatisticsTabsSection';

const Statistics = () => {
  const [selectedTab, setSelectedTab] = useState('underperformers');
  
  const underperformers = getKeyUnderperformers();
  const standoutPlayers = getStandoutPlayersInDefeats();
  
  // Data for the role distribution pie chart
  const roleDistribution = [
    { name: 'Batsmen', value: playerPerformances.filter(p => p.role === 'Batsman').length },
    { name: 'Bowlers', value: playerPerformances.filter(p => p.role === 'Bowler').length },
    { name: 'All-rounders', value: playerPerformances.filter(p => p.role === 'All-rounder').length },
  ];
  
  // Data for impact rating chart
  const impactData = playerPerformances.map(player => ({
    name: player.playerName,
    impactRating: player.impactRating,
    matchId: player.matchId,
    role: player.role
  }));

  return (
    <section id="statistics" className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <Badge variant="outline" className="mb-4 text-pakistan-light px-3 py-1 text-xs tracking-wider">PERFORMANCE ANALYSIS</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-semibold mb-4 text-pakistan-light">
            The Numbers Behind The Losses
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A statistical examination of player performances in Pakistan's notable defeats, highlighting 
            both underperformances and standout individual efforts in losing causes.
          </p>
        </div>
        
        <StatisticsCharts 
          impactData={impactData} 
          roleDistribution={roleDistribution} 
        />
        
        <StatisticsTabsSection 
          underperformers={underperformers}
          standoutPlayers={standoutPlayers}
          greatPlayers={greatPlayers}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
    </section>
  );
};

export default Statistics;
