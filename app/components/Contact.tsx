"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaFacebook, FaTimes } from "react-icons/fa";

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Contact({ isOpen, onClose }: ContactProps) {
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
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden pointer-events-auto border border-gray-100 dark:border-zinc-800 relative">
              <div className="p-6 md:p-8">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer"
                >
                  <FaTimes className="text-xl" />
                </button>

                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h2>

                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      I'm based in the Philippines and accessible for new opportunities. <br className="hidden sm:block" />
                      Have a question or want to collaborate?
                    </p>
                    <a
                      href="mailto:crowww001@gmail.com"
                      className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 underline decoration-2 underline-offset-4 hover:text-blue-700 dark:hover:text-blue-300 transition-colors break-all cursor-pointer"
                    >
                      crowww001@gmail.com
                    </a>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-gray-100 dark:border-zinc-800 pt-6">
                    <a href="https://github.com/Jervis-UMTC" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors group cursor-pointer">
                      <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-lg">GitHub</span>
                    </a>
                    <a href="https://www.facebook.com/runningoutofsoulsauce" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-[#1877F2] dark:text-gray-400 dark:hover:text-[#1877F2] transition-colors group cursor-pointer">
                      <FaFacebook className="text-2xl group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-lg">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
