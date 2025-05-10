
import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';
import { useIsMobile } from '@/hooks/use-mobile';

const COLORS = ['#006633', '#008042', '#009951', '#00b35f', '#00cc6e', '#00e67d', '#00ff8c'];

interface RoleDistributionChartProps {
  roleDistribution: Array<{
    name: string;
    value: number;
  }>;
}

const RoleDistributionChart: React.FC<RoleDistributionChartProps> = ({ roleDistribution }) => {
  const isMobile = useIsMobile();

  return (
    <ChartContainer className="h-full w-full" config={{}}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={roleDistribution}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={isMobile ? 60 : 80}
            fill="#8884d8"
            dataKey="value"
            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {roleDistribution.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default RoleDistributionChart;
