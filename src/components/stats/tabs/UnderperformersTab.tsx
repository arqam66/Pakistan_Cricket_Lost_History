
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import PlayerPerformanceTable from '../tables/PlayerPerformanceTable';
import { PlayerPerformance } from '@/data/playerStats';

interface UnderperformersTabProps {
  underperformers: PlayerPerformance[];
}

const UnderperformersTab: React.FC<UnderperformersTabProps> = ({ underperformers }) => {
  return (
    <TabsContent value="underperformers" className="space-y-6">
      <PlayerPerformanceTable 
        players={underperformers}
        title="The Critical Underperformers"
        description="These players' subpar performances in key matches directly contributed to Pakistan's defeats."
        ratingColorClass="bg-red-500/20 text-red-400"
      />
    </TabsContent>
  );
};

export default UnderperformersTab;
