
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Timeline from '@/components/Timeline';
import MatchCard from '@/components/MatchCard';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { significantLosses } from '@/data/matches';
import { useTheme } from 'next-themes';

const Index = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Initialize scroll reveal animation
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
    <div className="min-h-screen bg-cream dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <Timeline />
      
      <section id="notable-matches" className="py-24 px-6 bg-pakistan-fade/30 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <Badge variant="outline" className="mb-4 text-pakistan-green dark:text-pakistan-light px-3 py-1 text-xs tracking-wider">NOTABLE DEFEATS</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-4 text-pakistan-green dark:text-pakistan-light">
              Unforgettable Losses
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A closer look at matches that left a lasting impact on Pakistan cricket's journey.
              These defeats shaped the team's resilience and character through the years.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {significantLosses.map((match, index) => (
              <MatchCard key={match.id} match={match} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6 bg-pakistan-green text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="scroll-reveal">
            <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/20 px-3 py-1 text-xs tracking-wider">
              PLAYER PERFORMANCE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-white">
              The Players Behind the Results
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Discover which players underperformed in critical moments and which Pakistan legends 
              maintained excellence despite challenging circumstances.
            </p>
            <Link to="/stats">
              <Button className="rounded-full bg-white text-pakistan-green hover:bg-white/90 px-8 py-6 text-lg font-semibold group">
                Explore Player Statistics
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section id="about" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-center">
          <div className="scroll-reveal">
            <Badge variant="outline" className="mb-4 text-pakistan-green dark:text-pakistan-light px-3 py-1 text-xs tracking-wider">ABOUT THIS PROJECT</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6 text-pakistan-green dark:text-pakistan-light">
              The Story Behind the Archive
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              The "Lost Legacy of Pakistan Cricket" is a digital archive documenting significant defeats in Pakistan cricket history. 
              This project aims to provide historical context, preserve cricket heritage, and highlight the resilience of Pakistan cricket 
              through its most challenging moments.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              Every defeat is a lesson, every loss a stepping stone to growth. From World Cup heartbreaks to Test match 
              collapses, this collection offers a window into the team's evolution and the emotional journey of cricket fans
              who have remained loyal through the highs and lows.
            </p>
            <Link to="/about">
              <Button variant="pakistan" className="mt-4">
                Learn More About This Project <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
