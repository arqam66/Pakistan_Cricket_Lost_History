
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Statistics from '@/components/Statistics';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Stats = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 bg-gradient-to-b from-pakistan-green/80 to-gray-950">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/20 px-3 py-1 text-xs tracking-wider">
            STATISTICAL ANALYSIS
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-6 text-white">
            Behind the Numbers
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto">
            Exploring the key performances and player statistics behind Pakistan cricket's notable defeats
          </p>
          <div className="mt-8">
            <Link to="/">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Statistics />
      
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 text-pakistan-light px-3 py-1 text-xs tracking-wider">INSIGHTS</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold mb-6 text-pakistan-light">
            What The Numbers Reveal
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Statistics tell a complex story about Pakistan cricket's performances in crucial matches. While certain players 
              have consistently underperformed in high-pressure scenarios, others have shown remarkable resilience even in defeat.
            </p>
            <p className="text-gray-300 mb-6">
              The data reveals several patterns: a tendency for top-order batting collapses in crucial matches, 
              bowling that occasionally lacks penetration against quality opposition, and the team's struggle with 
              consistency across different players and matches.
            </p>
            <p className="text-gray-300">
              However, the statistics also highlight Pakistan cricket's remarkable ability to produce world-class talents 
              who deliver exceptional performances, even when the team as a whole falters. These individual bright spots 
              demonstrate the deep cricketing talent that continues to emerge from Pakistan despite challenging circumstances.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Stats;
