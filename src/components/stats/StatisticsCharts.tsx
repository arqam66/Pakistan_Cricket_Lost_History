
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ImpactRatingChart from './charts/ImpactRatingChart';
import RoleDistributionChart from './charts/RoleDistributionChart';

interface StatisticsChartsProps {
  impactData: Array<{
    name: string;
    impactRating: number;
    matchId: number;
    role: string;
  }>;
  roleDistribution: Array<{
    name: string;
    value: number;
  }>;
}

const StatisticsCharts: React.FC<StatisticsChartsProps> = ({ impactData, roleDistribution }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
      <Card className="bg-gray-800/50 border-gray-700 col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-pakistan-light">Impact Ratings By Player</CardTitle>
          <CardDescription className="text-gray-400">
            Rating of player performances on a scale of 1-10 across notable matches
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <ImpactRatingChart impactData={impactData} />
        </CardContent>
      </Card>
      
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-pakistan-light">Role Distribution in Key Losses</CardTitle>
          <CardDescription className="text-gray-400">
            Player roles that contributed to significant defeats
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <RoleDistributionChart roleDistribution={roleDistribution} />
        </CardContent>
      </Card>
    </div>
  );
};

export default StatisticsCharts;
