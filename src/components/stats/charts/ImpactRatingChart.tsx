
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { significantLosses } from '@/data/matches';
import { PlayerPerformance } from '@/data/playerStats';
import { useIsMobile } from '@/hooks/use-mobile';

const ROLE_COLORS = {
  'Batsman': '#f43f5e',
  'Bowler': '#06b6d4',
  'All-rounder': '#8b5cf6'
};

interface ImpactRatingChartProps {
  impactData: Array<{
    name: string;
    impactRating: number;
    matchId: number;
    role: string;
  }>;
}

const ImpactRatingChart: React.FC<ImpactRatingChartProps> = ({ impactData }) => {
  const isMobile = useIsMobile();

  return (
    <ChartContainer 
      className="h-full w-full" 
      config={{
        primary: {
          theme: { light: '#00cc6e', dark: '#00cc6e' }
        },
        secondary: {
          theme: { light: '#f43f5e', dark: '#f43f5e' }
        },
        tertiary: {
          theme: { light: '#8b5cf6', dark: '#8b5cf6' }
        }
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={impactData}
          margin={{ top: 20, right: 30, left: 20, bottom: isMobile ? 100 : 70 }}
        >
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end" 
            height={70} 
            tick={{ fill: '#d1d5db', fontSize: isMobile ? 10 : 12 }}
            interval={isMobile ? 1 : 0}
          />
          <YAxis 
            domain={[0, 10]} 
            tick={{ fill: '#d1d5db' }}
            label={{ 
              value: 'Impact Rating (1-10)', 
              angle: -90, 
              position: 'insideLeft',
              fill: '#d1d5db'
            }}
          />
          <Bar 
            dataKey="impactRating" 
            radius={[4, 4, 0, 0]}
            fill="var(--color-primary)"
          >
            {impactData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`}
                fill={ROLE_COLORS[entry.role as keyof typeof ROLE_COLORS]}
              />
            ))}
          </Bar>
          <ChartTooltip
            content={
              <ChartTooltipContent
                labelFormatter={(value) => {
                  const player = impactData.find(p => p.name === value);
                  const match = player ? significantLosses.find(m => m.id === player.matchId) : null;
                  return match ? `${value} vs ${match.opponent} (${match.year})` : value;
                }}
              />
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ImpactRatingChart;
