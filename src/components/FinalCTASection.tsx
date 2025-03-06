"use client"

import React from 'react';
import Link from 'next/link';

export const FinalCTASection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden shadow-xl">
          <div className="p-6 sm:p-10">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Ready to simplify your AI deployment?
              </h2>
              <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                Join hundreds of startups who are deploying AI models without DevOps expertise. 
                Get started with AetherMind today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="#" 
                className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors text-center"
              >
                Start Free Trial
              </Link>
              <Link 
                href="#" 
                className="w-full sm:w-auto px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md transition-colors text-center"
              >
                Schedule Demo
              </Link>
            </div>
            
            <div className="mt-8 sm:mt-10 text-center">
              <p className="text-gray-400 text-sm">
                No credit card required. 14-day free trial. Cancel anytime.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-800/80 border-t border-gray-700 p-4 sm:p-6 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-sm">One-command deployment</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-sm">Automated scaling</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-sm">24/7 monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
