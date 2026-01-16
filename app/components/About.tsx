"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface AboutProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function About({ isOpen, onClose }: AboutProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden pointer-events-auto border border-gray-100 dark:border-zinc-800">
              <div className="p-6 md:p-8 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
                >
                  <FaTimes className="text-xl" />
                </button>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>

                <div className="text-base md:text-lg text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed">
                  <p>
                    Hello! I&apos;m a 3rd year Computer Science student at UMTC (University of Mindanao Tagum Campus). My journey in tech is driven by a curiosity to understand how things work and a desire to build solutions that solve real-world problems.
                  </p>
                  <p>
                    I have a diverse skill set ranging from mobile development with Flutter to full-stack web development using Next.js and FastAPI. I enjoy working with both frontend and backend technologies, constantly learning and adapting to new tools.
                  </p>
                  <p>
                    When I&apos;m not coding, I&apos;m likely exploring new tech stacks, working on side projects, or studying for my upcoming exams.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
