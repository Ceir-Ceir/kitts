'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-1' 
          : 'bg-white dark:bg-gray-900 py-2'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center -my-2">
            <Image
              src="/assets/logo.png"
              alt="Kitts Marketing Logo"
              width={400}
              height={100}
              className="h-24 w-auto object-contain drop-shadow-lg brightness-110 contrast-125"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 dark:text-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block w-full h-0.5 bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block w-full h-0.5 bg-current transition duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-current transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white dark:bg-gray-900 rounded-lg mt-2 shadow-lg`}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
