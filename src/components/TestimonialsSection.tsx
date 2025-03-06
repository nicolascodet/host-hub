import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "AIHostHub cut our model deployment time from days to minutes. We're now iterating faster than ever before.",
    author: "Sarah Chen",
    title: "CTO, NeuroVision AI",
    image: "/avatar1.png"
  },
  {
    quote: "Our small team was spending 40% of our time on infrastructure. AIHostHub gave us that time back to focus on our core product.",
    author: "Marcus Johnson",
    title: "Lead ML Engineer, Textify",
    image: "/avatar2.png"
  },
  {
    quote: "The cost predictability alone was worth the switch. No more surprise cloud bills - just reliable AI hosting that works.",
    author: "Priya Sharma",
    title: "Founder, HealthPredict",
    image: "/avatar3.png"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-900/30" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">From Our Users</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            See how startups are accelerating their AI development with AIHostHub
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{testimonial.author.charAt(0)}</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the growing community of startups using AIHostHub to simplify their AI infrastructure
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-8">
            <div className="text-lg font-medium text-gray-400">TechStartupX</div>
            <div className="text-lg font-medium text-gray-400">AIVentures</div>
            <div className="text-lg font-medium text-gray-400">DataSmart</div>
            <div className="text-lg font-medium text-gray-400">NeuralWorks</div>
            <div className="text-lg font-medium text-gray-400">+ 100 more</div>
          </div>
        </div>
      </div>
    </section>
  );
};
