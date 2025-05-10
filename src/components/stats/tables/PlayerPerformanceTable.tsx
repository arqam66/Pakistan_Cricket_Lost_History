
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { PlayerPerformance } from '@/data/playerStats';
import { MatchData, significantLosses } from '@/data/matches';

interface PlayerPerformanceTableProps {
  players: PlayerPerformance[];
  title: string;
  description: string;
  ratingColorClass: string;
}

const PlayerPerformanceTable: React.FC<PlayerPerformanceTableProps> = ({ 
  players, 
  title, 
  description,
  ratingColorClass 
}) => {
  return (
    <>
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-red-500 mb-2">{title}</h3>
        <p className="text-gray-400 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
      
      <div className="rounded-lg overflow-hidden border border-gray-700 overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-800/80">
            <TableRow>
              <TableHead className="text-gray-300">Player</TableHead>
              <TableHead className="text-gray-300">Role</TableHead>
              <TableHead className="text-gray-300">Match</TableHead>
              <TableHead className="text-gray-300">Performance</TableHead>
              <TableHead className="text-gray-300">Rating</TableHead>
              <TableHead className="text-gray-300 hidden md:table-cell">Analysis</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map(player => {
              const match = significantLosses.find(m => m.id === player.matchId);
              return (
                <TableRow key={player.id} className="hover:bg-gray-800/40 border-gray-700">
                  <TableCell className="font-medium text-white">{player.playerName}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`
                      ${player.role === 'Batsman' ? 'bg-red-500/20 text-red-400 border-red-500/30' : 
                        player.role === 'Bowler' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' : 
                        'bg-purple-500/20 text-purple-400 border-purple-500/30'}
                    `}>
                      {player.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-300 whitespace-nowrap">
                    vs {match?.opponent} ({match?.year})
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {player.performance.batting && (
                      <span className="text-gray-300">
                        {player.performance.batting.runs} ({player.performance.batting.balls})
                      </span>
                    )}
                    {player.performance.bowling && (
                      <span className="text-gray-300">
                        {player.performance.bowling.wickets}/{player.performance.bowling.runs}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${ratingColorClass}`}>
                      {player.impactRating}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-300 max-w-md hidden md:table-cell">{player.analysis}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default PlayerPerformanceTable;
