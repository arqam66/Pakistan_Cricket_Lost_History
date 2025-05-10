
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pakistan-green py-12 px-6 text-white dark:bg-gray-900 dark:border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-2 h-2 bg-white rounded-full dark:bg-pakistan-light"></span>
              <h3 className="text-xl font-display font-semibold">Pakistan Cricket Legacy</h3>
            </div>
            <p className="text-sm text-white/80 max-w-xs dark:text-white/70">
              A historical archive documenting the losses of Pakistan cricket team throughout the decades.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-white/80 hover:text-white transition-colors dark:text-white/70 dark:hover:text-white">Home</Link></li>
              <li><Link to="/stats" className="text-sm text-white/80 hover:text-white transition-colors dark:text-white/70 dark:hover:text-white">Statistics</Link></li>
              <li><Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors dark:text-white/70 dark:hover:text-white">About</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center dark:border-white/10">
          <p className="text-sm text-white/60 dark:text-white/50">
            &copy; {currentYear} Pakistan Cricket Legacy. All rights reserved - Arqam Hussain.
          </p>
          
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-white/60 dark:text-white/50">
              A historical cricket archive project
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
