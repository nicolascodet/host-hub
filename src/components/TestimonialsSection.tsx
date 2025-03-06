"use client"

import React from 'react';
import Image from 'next/image';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "AetherMind cut our AI deployment time from weeks to minutes. The automated scaling has saved us thousands in infrastructure costs.",
      author: "Sarah Chen",
      title: "CTO, NeuralVision",
      avatar: "/avatars/avatar-1.jpg"
    },
    {
      quote: "As a small startup with no DevOps team, AetherMind was a game-changer. We can now focus on our models instead of infrastructure.",
      author: "Michael Rodriguez",
      title: "Lead AI Engineer, Sentient AI",
      avatar: "/avatars/avatar-2.jpg"
    },
    {
      quote: "The compliance templates saved us months of security work. Getting SOC 2 compliance was seamless with AetherMind.",
      author: "Jessica Williams",
      title: "Head of AI, HealthTech Solutions",
      avatar: "/avatars/avatar-3.jpg"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Trusted by AI Teams
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            See what our customers are saying about their experience with AetherMind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-gray-700 flex flex-col h-full"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 italic">{testimonial.quote}</p>
              </div>
              <div className="mt-auto flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 border border-gray-600">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 items-center">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src="/logos/logo-1.svg" alt="Company logo" width={120} height={40} />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src="/logos/logo-2.svg" alt="Company logo" width={120} height={40} />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src="/logos/logo-3.svg" alt="Company logo" width={120} height={40} />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src="/logos/logo-4.svg" alt="Company logo" width={120} height={40} />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image src="/logos/logo-5.svg" alt="Company logo" width={120} height={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
