import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-primary">Aether</span>Mind
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-300 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">
              Use Cases
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Log in
            </Link>
            <Link href="#" 
              className="bg-primary hover:bg-primary/90 text-gray-900 font-medium px-4 py-2 rounded-md transition-colors">
              Start Free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
