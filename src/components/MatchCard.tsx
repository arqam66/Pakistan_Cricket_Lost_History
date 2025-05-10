
import React, { useEffect, useRef } from 'react';
import { MatchData } from '@/data/matches';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MatchCardProps {
  match: MatchData;
  index: number;
}

const MatchCard = ({ match, index }: MatchCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const tiltX = (y - 0.5) * 10;
      const tiltY = (x - 0.5) * -10;
      
      cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1, 1, 1)`;
    };
    
    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };
    
    const card = cardRef.current;
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="match-card scroll-reveal"
      style={{ 
        animationDelay: `${index * 100}ms`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge className="px-2.5 py-0.5 text-xs font-medium bg-pakistan-fade text-pakistan-green dark:bg-pakistan-green/20 dark:text-pakistan-light">
              {match.year}
            </Badge>
            <Badge variant="secondary" className="px-2.5 py-0.5 text-xs font-medium">
              {match.tournament}
            </Badge>
          </div>
          
          <h3 className="text-xl font-display font-semibold mb-2 text-gray-900 dark:text-white">
            Pakistan vs {match.opponent}
          </h3>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{match.venue} • {match.date}</p>
          
          <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{match.scorecard}</p>
            <p className="text-xs text-pakistan-green dark:text-pakistan-light font-medium mt-1">{match.margin}</p>
          </div>
        </div>
        
        <div className="flex-1">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{match.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
