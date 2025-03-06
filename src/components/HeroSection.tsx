"use client"

import React from 'react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent"></div>
      
      {/* Animated background circles */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
            Deploy AI Models Without DevOps Expertise
          </h1>
          
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
            AetherMind is the simplest way for startups to host custom AI models in production. 
            One command deployment, automated scaling, and no DevOps headaches.
          </p>
          
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link 
              href="#" 
              className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition-colors w-full sm:w-auto text-center"
            >
              Get Started Free
            </Link>
            <Link 
              href="#how-it-works" 
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-md transition-colors w-full sm:w-auto text-center"
            >
              How It Works
            </Link>
          </div>
          
          {/* Code example */}
          <div className="mt-10 sm:mt-12 w-full max-w-2xl bg-gray-800/80 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700">
            <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-sm text-gray-400">Terminal</div>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-xs sm:text-sm text-gray-300 font-mono">
                <span className="text-gray-500">$</span> <span className="text-green-400">aethermind</span> deploy --model my-custom-model
                <br />
                <span className="text-blue-400">✓</span> Uploading model files...
                <br />
                <span className="text-blue-400">✓</span> Building optimized container...
                <br />
                <span className="text-blue-400">✓</span> Configuring auto-scaling...
                <br />
                <span className="text-blue-400">✓</span> Setting up API endpoints...
                <br />
                <span className="text-purple-400">→</span> Model deployed successfully! Access at:
                <br />
                <span className="text-yellow-300">  https://api.aethermind.ai/my-custom-model</span>
              </pre>
            </div>
          </div>
          
          {/* Logos */}
          <div className="mt-12 sm:mt-16">
            <p className="text-sm text-gray-400 mb-6">TRUSTED BY INNOVATIVE AI TEAMS</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-70">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex justify-center">
                  <div className="h-6 w-24 bg-gray-700 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
