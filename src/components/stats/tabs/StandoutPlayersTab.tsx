
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import PlayerPerformanceTable from '../tables/PlayerPerformanceTable';
import { PlayerPerformance } from '@/data/playerStats';

interface StandoutPlayersTabProps {
  standoutPlayers: PlayerPerformance[];
}

const StandoutPlayersTab: React.FC<StandoutPlayersTabProps> = ({ standoutPlayers }) => {
  return (
    <TabsContent value="standouts" className="space-y-6">
      <PlayerPerformanceTable 
        players={standoutPlayers}
        title="Heroes in Defeat"
        description="These players delivered exceptional performances despite their team's loss, showing individual brilliance."
        ratingColorClass="bg-green-500/20 text-green-400"
      />
    </TabsContent>
  );
};

export default StandoutPlayersTab;
