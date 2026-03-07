"use client";

import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen font-sans"
    >
      <Header />
      <main id="main" className="flex flex-col">
        <Hero />
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
}
