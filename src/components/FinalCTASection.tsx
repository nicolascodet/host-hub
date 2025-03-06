import React from 'react';
import Link from 'next/link';

export const FinalCTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900/70 backdrop-blur-xl rounded-2xl p-12 border border-gray-800 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to simplify your AI deployment?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join hundreds of startups who are shipping AI faster with AIHostHub.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="#"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-gray-900 font-medium px-8 py-4 rounded-lg text-center transition-colors text-lg">
              Start Free Trial
            </Link>
            <Link href="#"
              className="w-full sm:w-auto bg-transparent text-white border border-gray-700 hover:border-primary hover:bg-gray-800/50 font-medium px-8 py-4 rounded-lg text-center transition-all text-lg">
              Schedule Demo
            </Link>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Free to start</h3>
                <p className="text-sm text-gray-400">No credit card required</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Easy setup</h3>
                <p className="text-sm text-gray-400">Deploy in minutes, not days</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Secure & reliable</h3>
                <p className="text-sm text-gray-400">Enterprise-grade infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
