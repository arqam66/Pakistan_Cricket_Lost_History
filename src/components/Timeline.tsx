
import React, { useEffect } from 'react';
import { getMatchesByDecade } from '@/data/matches';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const Timeline = () => {
  const matchesByDecade = getMatchesByDecade();
  const decades = Object.keys(matchesByDecade).sort();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <Badge variant="outline" className="mb-4 text-pakistan-green dark:text-pakistan-light px-3 py-1 text-xs tracking-wider">THROUGH THE DECADES</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-4 text-pakistan-green dark:text-pakistan-light">
            Historical Timeline
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore Pakistan cricket's journey through the decades, highlighting the key losses that shaped the team's evolution and resilience.
          </p>
        </div>
        
        <div className="relative">
          <div className="timeline-line"></div>
          
          {decades.map((decade, index) => (
            <div 
              key={decade} 
              className={`relative mb-24 scroll-reveal ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="timeline-dot" style={{ top: '24px' }}></div>
              
              <div className={cn(
                "mb-8",
                index % 2 === 0 
                  ? "ml-auto mr-auto md:mr-0 md:ml-[calc(50%+2rem)]" 
                  : "ml-auto mr-auto md:ml-0 md:mr-[calc(50%+2rem)]",
                "md:w-[calc(50%-2rem)]"
              )}>
                <h3 className="text-2xl font-display font-semibold mb-2 text-pakistan-green dark:text-pakistan-light">
                  {decade}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {decade === '1990s' && 'The decade of missed opportunities and heartbreaks against archrival India.'}
                  {decade === '2000s' && 'The transitional years with inconsistent performances in major tournaments.'}
                  {decade === '2010s' && 'A period of rebuilding with occasional flashes of brilliance amid disappointments.'}
                  {decade === '2020s' && 'The current era featuring promising talent but continuing struggles in crucial matches.'}
                </p>
                
                <div className="space-y-4">
                  {matchesByDecade[decade].map(match => (
                    <div 
                      key={match.id} 
                      className="glass-card rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{match.date}</span>
                        <Badge className="text-xs font-medium text-pakistan-green dark:text-pakistan-light bg-pakistan-fade dark:bg-pakistan-green/20 px-2 py-1 rounded-full mt-1 md:mt-0">
                          {match.tournament}
                        </Badge>
                      </div>
                      <h4 className="font-display font-medium text-gray-900 dark:text-white">vs {match.opponent}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{match.venue}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
