import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Deploy AI Models <span className="text-gradient">Without DevOps Expertise</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300">
                The simplest way for startups to host custom AI models in production
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#"
                className="bg-primary hover:bg-primary/90 text-gray-900 font-medium px-6 py-3 rounded-md text-center transition-colors">
                Start Free
              </Link>
              <Link href="#"
                className="bg-transparent text-white border border-gray-700 hover:border-primary/50 font-medium px-6 py-3 rounded-md text-center transition-all">
                See Demo
              </Link>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-3">Works with your favorite frameworks</p>
              <div className="flex space-x-6">
                <div className="text-gray-300 flex items-center">
                  <span className="text-sm">PyTorch</span>
                </div>
                <div className="text-gray-300 flex items-center">
                  <span className="text-sm">TensorFlow</span>
                </div>
                <div className="text-gray-300 flex items-center">
                  <span className="text-sm">Hugging Face</span>
                </div>
                <div className="text-gray-300 flex items-center">
                  <span className="text-sm">ONNX</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-800 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-gray-400 text-sm">terminal</div>
              </div>
              <div className="font-mono text-sm">
                <p className="text-gray-400">$ aethermind login</p>
                <p className="text-green-400 mt-2">✓ Logged in successfully as user@startup.ai</p>
                <p className="text-gray-400 mt-2">$ aethermind deploy mymodel</p>
                <p className="text-gray-300 mt-1">Uploading model artifacts...</p>
                <p className="text-gray-300 mt-1">Setting up inference endpoint...</p>
                <p className="text-green-400 mt-1">✓ Model deployed successfully!</p>
                <p className="text-primary mt-2">Endpoint: https://api.aethermind.com/models/mymodel</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-secondary/10 backdrop-blur-sm rounded-lg p-3 border border-secondary/30 shadow-lg">
              <p className="text-xs text-gray-300">Deployment time: <span className="text-secondary font-semibold">37 seconds</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
