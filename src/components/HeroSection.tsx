
import React, { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const opacity = Math.max(1 - scrollPosition / 700, 0);
      const translateY = scrollPosition * 0.3;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
      "hero-gradient relative min-h-screen flex items-center justify-center px-6 overflow-hidden",
      theme === 'dark' ? 'dark' : ''
    )}>
      <div 
        ref={heroRef}
        className="max-w-4xl mx-auto text-center z-10 transition-all duration-300 ease-out"
      >
        <div className="mb-4 inline-block">
          <Badge variant="outline" className="text-xs font-medium tracking-wider uppercase text-pakistan-green dark:text-pakistan-light bg-pakistan-fade dark:bg-pakistan-green/20 rounded-full px-3 py-1 animate-fade-in">
            Historical Archive
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight animate-fade-up" style={{animationDelay: '200ms'}}>
          The Lost Legacy of <br />
          <span className="text-pakistan-green dark:text-pakistan-light bg-gradient-to-r from-pakistan-green to-pakistan-green/70 dark:from-pakistan-light dark:to-pakistan-light/70 bg-clip-text">Pakistan Cricket</span>
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8 animate-fade-up" style={{animationDelay: '400ms'}}>
          A meticulous chronicle of defining moments when Pakistan's cricket team faced defeat, shaping their journey through decades of international cricket.
        </p>
        
        <div className="animate-fade-up" style={{animationDelay: '600ms'}}>
          <a 
            href="#timeline" 
            className="inline-flex items-center justify-center rounded-full bg-pakistan-green text-white dark:bg-pakistan-light dark:text-gray-900 px-6 py-3 font-medium transition-all hover:scale-105 shadow-lg"
          >
            Explore Timeline
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-pakistan-green/70 dark:text-pakistan-light/70"
        >
          <path d="M12 19V5M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
