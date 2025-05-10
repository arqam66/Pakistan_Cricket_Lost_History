
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TopPlayer } from '@/data/playerStats';

interface LegendsTabProps {
  greatPlayers: TopPlayer[];
}

const LegendsTab: React.FC<LegendsTabProps> = ({ greatPlayers }) => {
  return (
    <TabsContent value="legends" className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-pakistan-light mb-2">Pakistan's Cricket Legends</h3>
        <p className="text-gray-400 max-w-3xl mx-auto">
          These players consistently performed at the highest level despite the team's struggles in key matches.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {greatPlayers.map(player => (
          <Card key={player.id} className="bg-gray-800/50 border-gray-700 hover:shadow-lg hover:shadow-pakistan-green/5 transition-all duration-300 overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white text-xl mb-1">{player.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {player.role} • {player.matches} matches
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-pakistan-green/20 text-pakistan-light border-pakistan-green/30">
                  {player.avgPerformance.toFixed(1)}/10
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-t border-gray-700 pt-4">
                <h4 className="text-sm font-medium text-pakistan-light mb-2">Career Highlights</h4>
                <p className="text-sm text-gray-300">{player.achivements}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-pakistan-light mb-2">Key Statistics</h4>
                {player.stats.batting && (
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="bg-gray-700/50 p-2 rounded text-center">
                      <div className="text-xs text-gray-400">Runs</div>
                      <div className="text-white font-medium">{player.stats.batting.runs}</div>
                    </div>
                    <div className="bg-gray-700/50 p-2 rounded text-center">
                      <div className="text-xs text-gray-400">Average</div>
                      <div className="text-white font-medium">{player.stats.batting.average}</div>
                    </div>
                    <div className="bg-gray-700/50 p-2 rounded text-center">
                      <div className="text-xs text-gray-400">S/R</div>
                      <div className="text-white font-medium">{player.stats.batting.strikeRate}</div>
                    </div>
                  </div>
                )}
                
                {player.stats.bowling && (
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-700/50 p-2 rounded text-center">
                      <div className="text-xs text-gray-400">Wickets</div>
                      <div className="text-white font-medium">{player.stats.bowling.wickets}</div>
                    </div>
                    <div className="bg-gray-700/50 p-2 rounded text-center">
                      <div className="text-xs text-gray-400">Average</div>
                      <div className="text-white font-medium">{player.stats.bowling.average}</div>
                    </div>
                    <div className="bg-gray-700/50 p-2 rounded text-center">
                      <div className="text-xs text-gray-400">Economy</div>
                      <div className="text-white font-medium">{player.stats.bowling.economy}</div>
                    </div>
                  </div>
                )}
              </div>
              
              <p className="text-sm text-gray-300 line-clamp-3">{player.biography}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>
  );
};

export default LegendsTab;
