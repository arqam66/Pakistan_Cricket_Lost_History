
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-cream dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-pakistan-green/80 to-gray-950">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/20 px-3 py-1 text-xs tracking-wider">
            ABOUT THIS PROJECT
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
            The Story Behind the Archive
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            A digital journey documenting the significant defeats in Pakistan cricket history
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
      
      <section className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              The "Pakistan Cricket Legacy" is a comprehensive digital archive documenting significant defeats in Pakistan cricket history. 
              This project aims to provide historical context, preserve cricket heritage, and highlight the resilience of Pakistan cricket 
              through its most challenging moments.
            </p>
            
            <h2 className="text-2xl font-semibold text-pakistan-green dark:text-pakistan-light mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              Every defeat is a lesson, every loss a stepping stone to growth. From World Cup heartbreaks to Test match 
              collapses, this collection offers a window into the team's evolution and the emotional journey of cricket fans
              who have remained loyal through the highs and lows.
            </p>
            
            <h2 className="text-2xl font-semibold text-pakistan-green dark:text-pakistan-light mb-4">Why Document Defeats?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              While victories are celebrated, it's often the defeats that shape a team's character and resilience. 
              By analyzing these significant losses, we gain insights into patterns, turning points, and the psychological 
              aspects of Pakistan cricket. These moments have contributed as much to Pakistan cricket's identity as its triumphs.
            </p>
            
            <h2 className="text-2xl font-semibold text-pakistan-green dark:text-pakistan-light mb-4">About the Creator</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              This project was created by Arqam Hussain, a passionate cricket historian and data analyst with a deep 
              appreciation for Pakistan cricket's rich legacy. Through meticulous research and data compilation, this archive 
              aims to provide both nostalgic value for long-time followers and educational insights for newer fans.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
