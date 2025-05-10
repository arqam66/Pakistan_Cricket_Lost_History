
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300",
        isScrolled 
          ? "bg-gray-900/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-pakistan-light rounded-full"></span>
            <h1 className="text-xl font-display font-bold text-pakistan-light">Pakistan Cricket Legacy</h1>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-bold text-gray-300 hover:text-pakistan-light transition-colors">Home</Link>
          <Link to="/stats" className="text-sm font-bold text-gray-300 hover:text-pakistan-light transition-colors">Stats</Link>
          <Link to="/about" className="text-sm font-bold text-gray-300 hover:text-pakistan-light transition-colors">About</Link>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            className="text-gray-300 p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg animate-slide-in">
          <div className="flex flex-col py-4 px-6">
            <Link 
              to="/" 
              className="py-3 text-sm font-bold text-gray-300 hover:text-pakistan-light transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/stats" 
              className="py-3 text-sm font-bold text-gray-300 hover:text-pakistan-light transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Stats
            </Link>
            <Link 
              to="/about" 
              className="py-3 text-sm font-bold text-gray-300 hover:text-pakistan-light transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
