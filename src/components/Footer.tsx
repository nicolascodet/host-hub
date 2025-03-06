"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuGithub, LuTwitter, LuLinkedin } from 'react-icons/lu';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Documentation', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Status', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Community', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Logo and social links */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <Image src="/aethermind-icon.svg" alt="AetherMind Logo" width={40} height={40} className="mr-3" />
                <span className="text-xl font-bold text-white">AetherMind</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              The simplest way for startups to host custom AI models in production without DevOps expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LuTwitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LuGithub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LuLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} AetherMind. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
