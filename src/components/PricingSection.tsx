import React from 'react';
import Link from 'next/link';

export const PricingSection = () => {
  return (
    <section className="py-20 relative" id="pricing">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Predictable Pricing Without Surprises</h2>
          <p className="mt-4 text-xl text-gray-400">
            Straightforward pricing with no hidden fees. Only pay for what you use, and never worry about surprise bills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Developer</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-gray-400 mb-6">Perfect for individual developers and small projects</p>
              <ul className="space-y-3 mb-6">
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Up to 5 model deployments</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">100,000 inference requests/month</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Automated scaling</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Basic API key management</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Community support</span>
                </li>
              </ul>
              <Link href="#"
                className="block w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-center text-white rounded-md transition-colors">
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-primary/30 overflow-hidden shadow-lg shadow-primary/10 relative transform scale-105">
            <div className="absolute top-0 left-0 right-0 text-center py-1 bg-primary text-gray-900 text-sm font-medium">
              Most Popular
            </div>
            <div className="p-6 pt-8">
              <h3 className="text-xl font-semibold mb-2">Startup</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$199</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-gray-400 mb-6">For growing startups with production workloads</p>
              <ul className="space-y-3 mb-6">
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Up to 20 model deployments</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">1,000,000 inference requests/month</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Advanced performance optimization</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Version management</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Team API key management</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Email support</span>
                </li>
              </ul>
              <Link href="#"
                className="block w-full py-2 px-4 bg-primary hover:bg-primary/90 text-center text-gray-900 font-medium rounded-md transition-colors">
                Start Free Trial
              </Link>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-gray-400 mb-6">For organizations with custom requirements</p>
              <ul className="space-y-3 mb-6">
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Unlimited model deployments</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Custom inference request volume</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Compliance templates</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Custom integrations</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Dedicated infrastructure</span>
                </li>
                <li className="flex">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">24/7 dedicated support</span>
                </li>
              </ul>
              <Link href="#"
                className="block w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-center text-white rounded-md transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">No Surprise Bills, Ever</h3>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <svg className="h-10 w-10 text-primary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h4 className="text-lg font-semibold mb-2">Fixed Monthly Fee</h4>
                <p className="text-gray-400 text-sm">Predictable base pricing with no hidden fees or unexpected charges</p>
              </div>
              <div>
                <svg className="h-10 w-10 text-primary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <h4 className="text-lg font-semibold mb-2">Performance Optimized</h4>
                <p className="text-gray-400 text-sm">Our systems automatically optimize for price-performance, saving you money</p>
              </div>
              <div>
                <svg className="h-10 w-10 text-primary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h4 className="text-lg font-semibold mb-2">Usage Limits & Alerts</h4>
                <p className="text-gray-400 text-sm">Set spending limits and receive alerts before exceeding your plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
