"use client"

import React from 'react';
import { LuCode, LuUpload, LuSettings, LuZap } from 'react-icons/lu';

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: <LuCode className="h-6 w-6 text-primary" />,
      title: 'Prepare Your Model',
      description: 'Package your trained AI model with our simple SDK or use standard formats like ONNX, PyTorch, or TensorFlow SavedModel.'
    },
    {
      icon: <LuUpload className="h-6 w-6 text-primary" />,
      title: 'Deploy with One Command',
      description: 'Use our CLI or web dashboard to deploy your model with a single command. We handle all the infrastructure setup.'
    },
    {
      icon: <LuSettings className="h-6 w-6 text-primary" />,
      title: 'Configure & Customize',
      description: 'Adjust scaling parameters, set up monitoring alerts, and configure security settings through our intuitive dashboard.'
    },
    {
      icon: <LuZap className="h-6 w-6 text-primary" />,
      title: 'Integrate & Scale',
      description: 'Use the generated API endpoints to integrate with your applications. Your model automatically scales based on demand.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            How AetherMind Works
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Deploy your AI models in minutes, not weeks. Our platform handles all the complexity so you don't have to.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-6 border-4 border-gray-900">
                  {step.icon}
                </div>
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 h-full w-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code example */}
        <div className="mt-16 sm:mt-20 max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
            Deploy in Seconds
          </h3>
          
          <div className="bg-gray-800/80 rounded-lg overflow-hidden border border-gray-700">
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
                <span className="text-gray-500"># Install the AetherMind CLI</span>
                <br />
                <span className="text-gray-500">$</span> pip install aethermind-cli
                <br /><br />
                <span className="text-gray-500"># Login to your account</span>
                <br />
                <span className="text-gray-500">$</span> aethermind login
                <br /><br />
                <span className="text-gray-500"># Deploy your model</span>
                <br />
                <span className="text-gray-500">$</span> aethermind deploy --model ./my-model --name sentiment-analyzer
                <br /><br />
                <span className="text-green-400">✓ Model deployed successfully!</span>
                <br />
                <span className="text-gray-500"># Your API endpoint:</span>
                <br />
                <span className="text-yellow-300">https://api.aethermind.ai/models/sentiment-analyzer</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
