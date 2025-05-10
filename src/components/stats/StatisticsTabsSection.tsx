
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UnderperformersTab from './tabs/UnderperformersTab';
import StandoutPlayersTab from './tabs/StandoutPlayersTab';
import LegendsTab from './tabs/LegendsTab';
import { PlayerPerformance, TopPlayer } from '@/data/playerStats';

interface StatisticsTabsSectionProps {
  underperformers: PlayerPerformance[];
  standoutPlayers: PlayerPerformance[];
  greatPlayers: TopPlayer[];
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

const StatisticsTabsSection: React.FC<StatisticsTabsSectionProps> = ({
  underperformers,
  standoutPlayers,
  greatPlayers,
  selectedTab,
  setSelectedTab
}) => {
  return (
    <Tabs 
      value={selectedTab} 
      onValueChange={setSelectedTab}
      className="mb-12"
    >
      <div className="flex justify-center mb-6 overflow-x-auto">
        <TabsList className="bg-gray-800">
          <TabsTrigger 
            value="underperformers"
            className="data-[state=active]:bg-gray-700"
          >
            Key Underperformers
          </TabsTrigger>
          <TabsTrigger 
            value="standouts"
            className="data-[state=active]:bg-gray-700"
          >
            Standout Players
          </TabsTrigger>
          <TabsTrigger 
            value="legends"
            className="data-[state=active]:bg-gray-700"
          >
            Pakistan's Greats
          </TabsTrigger>
        </TabsList>
      </div>
      
      <UnderperformersTab underperformers={underperformers} />
      <StandoutPlayersTab standoutPlayers={standoutPlayers} />
      <LegendsTab greatPlayers={greatPlayers} />
    </Tabs>
  );
};

export default StatisticsTabsSection;
