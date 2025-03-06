"use client"

import React from 'react';
import Link from 'next/link';

export const PricingSection = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '$49',
      description: 'Perfect for individuals and small teams just getting started with AI deployment.',
      features: [
        'Deploy up to 3 models',
        '5 million inference requests/month',
        'Automated scaling',
        'Basic monitoring dashboard',
        'Community support',
        'Standard security features'
      ],
      cta: 'Start Free Trial',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$199',
      description: 'For growing teams with production AI workloads that need reliability and performance.',
      features: [
        'Deploy up to 10 models',
        '25 million inference requests/month',
        'Advanced auto-scaling',
        'Full monitoring & alerts',
        'Email support (24h response)',
        'API key management',
        'Compliance templates'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For organizations with complex AI infrastructure needs and compliance requirements.',
      features: [
        'Unlimited model deployments',
        'Custom request volume',
        'Priority scaling',
        'Advanced analytics',
        'Dedicated support',
        'Custom compliance solutions',
        'SLA guarantees',
        'On-premise options'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Simple, Predictable Pricing
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Choose the plan that works best for your needs. All plans include our core infrastructure and scaling features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden border ${
                tier.highlighted 
                  ? 'border-primary bg-gray-800/50 transform md:-translate-y-4 shadow-lg shadow-primary/20' 
                  : 'border-gray-700 bg-gray-800/30'
              }`}
            >
              <div className={`p-6 sm:p-8 ${tier.highlighted ? 'border-b border-primary/30' : 'border-b border-gray-700'}`}>
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="ml-1 text-xl text-gray-400">/month</span>}
                </div>
                <p className="mt-4 text-gray-400">{tier.description}</p>
              </div>
              
              <div className="p-6 sm:p-8 bg-gray-800/50">
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Link 
                    href="#" 
                    className={`block w-full text-center py-3 px-4 rounded-md font-medium transition-colors ${
                      tier.highlighted
                        ? 'bg-primary hover:bg-primary-dark text-white'
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-400 mb-6">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">One-command deployment</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Auto-scaling</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">Pre-configured environments</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">99.9% uptime guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
