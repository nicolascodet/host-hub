"use client"

import React from 'react';
import { LuBrain, LuZap, LuShield, LuChartBar, LuServer, LuCode } from 'react-icons/lu';

export const ProblemSolutionSection = () => {
  const features = [
    {
      icon: <LuZap className="h-6 w-6 text-primary" />,
      title: 'One-Command Deployment',
      description: 'Deploy your AI models with a single command without complex configurations or DevOps expertise.'
    },
    {
      icon: <LuServer className="h-6 w-6 text-primary" />,
      title: 'Automated Scaling',
      description: 'Infrastructure automatically scales up or down based on your usage patterns to optimize costs.'
    },
    {
      icon: <LuBrain className="h-6 w-6 text-primary" />,
      title: 'Pre-configured AI Environments',
      description: 'Ready-to-use environments for PyTorch, TensorFlow, and Hugging Face with optimized dependencies.'
    },
    {
      icon: <LuChartBar className="h-6 w-6 text-primary" />,
      title: 'Simple Dashboard Monitoring',
      description: 'User-friendly interface to monitor model performance, usage metrics, and costs in real-time.'
    },
    {
      icon: <LuShield className="h-6 w-6 text-primary" />,
      title: 'Compliance Templates',
      description: 'Pre-configured security settings to help meet HIPAA, GDPR, and other compliance requirements.'
    },
    {
      icon: <LuCode className="h-6 w-6 text-primary" />,
      title: 'API Key Management',
      description: 'Simple interface for creating, monitoring, and revoking access to your AI models.'
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            AI Deployment Simplified
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            AetherMind eliminates the complexity of deploying AI models so you can focus on building great AI products.
          </p>
        </div>

        {/* Problem/Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Problem Card */}
          <div className="bg-gray-800/50 rounded-lg p-6 sm:p-8 border border-gray-700 h-full">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">The Problem</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Deploying AI models requires DevOps expertise most startups don't have</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Cloud costs can spiral out of control with inefficient infrastructure</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Setting up monitoring, scaling, and security takes weeks of engineering time</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Managing dependencies and environment configurations is error-prone</span>
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-gray-800/50 rounded-lg p-6 sm:p-8 border border-gray-700 h-full">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Our Solution</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Deploy any AI model with a single command - no DevOps knowledge required</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Automatic scaling optimizes costs by matching resources to actual usage</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Built-in monitoring, security, and compliance features work out of the box</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Pre-configured environments ensure consistent performance across deployments</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 rounded-lg p-6 transition-all duration-300"
            >
              <div className="bg-gray-800/80 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
