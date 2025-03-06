import React from 'react';
import Image from 'next/image';

export const ProblemSolutionSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* The Problem */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complex cloud configuration</h3>
                  <p className="text-gray-400">Navigating infrastructure setup requires specialized skills most AI teams don't have</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Unpredictable costs</h3>
                  <p className="text-gray-400">Unexpected cloud bills that can spiral out of control, especially during traffic spikes</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Performance optimization headaches</h3>
                  <p className="text-gray-400">Tuning infrastructure for AI inference requires deep knowledge of both ML and DevOps</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* The Solution */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <p className="text-gray-300 text-lg mb-6">
              AetherMind manages the infrastructure so you can focus on building AI
            </p>
            
            <div className="bg-gray-800/70 rounded-lg p-4 font-mono text-sm mb-6">
              <p className="text-gray-300"><span className="text-primary">$</span> aethermind deploy mymodel</p>
              <p className="text-gray-400 mt-2">Model URL: https://api.aethermind.com/models/mymodel</p>
              <p className="text-gray-400">API Key: ********-****-****-****-************</p>
              <p className="text-green-400 mt-2">Model deployed and ready to serve</p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">One-command deployment</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">Automated scaling</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">Predictable pricing</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                  <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">Performance optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
