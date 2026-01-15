"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from './About';
import Contact from './Contact';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity cursor-pointer">
                Jervis<span className="text-blue-600 dark:text-blue-400">.</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#projects" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </Link>
              <button
                onClick={() => setShowAbout(true)}
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none cursor-pointer"
                aria-label="Open About Modal"
              >
                About
              </button>
              <button
                onClick={() => setShowContact(true)}
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none cursor-pointer"
                aria-label="Open Contact Modal"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none cursor-pointer"
                aria-label="Toggle Mobile Menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-zinc-800"
            >
              <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowAbout(true);
                  }}
                  className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowContact(true);
                  }}
                  className="text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <About isOpen={showAbout} onClose={() => setShowAbout(false)} />
      <Contact isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}
