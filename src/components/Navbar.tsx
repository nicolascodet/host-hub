"use client"

import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md py-4 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            <span className="text-primary">Aether</span>Mind
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
            <Link 
              href="#" 
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link 
                href="#features" 
                className="text-gray-300 hover:text-white transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-gray-300 hover:text-white transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="#pricing" 
                className="text-gray-300 hover:text-white transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </Link>
              <Link 
                href="#" 
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
