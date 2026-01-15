"use client";

import { FaJava, FaPython, FaReact, FaHtml5, FaCss3, FaJs, FaGithub, FaFacebook, FaDatabase } from "react-icons/fa";
import { SiFastapi, SiFlutter, SiNextdotjs, SiFirebase, SiDart, SiSqlite } from "react-icons/si";
import { motion } from "framer-motion";

export default function Hero() {
  const technologies = [
    { name: "Java", icon: FaJava, hex: "#ed8b00" },
    { name: "Python", icon: FaPython, hex: "#3776ab" },
    { name: "FastAPI", icon: SiFastapi, hex: "#009688" },
    { name: "Dart", icon: SiDart, hex: "#0175c2" },
    { name: "Flutter", icon: SiFlutter, hex: "#02569b" },
    { name: "React.js", icon: FaReact, hex: "#61dafb" },
    { name: "Next.js", icon: SiNextdotjs, hex: "currentColor" }, // Adapts to theme text color
    { name: "Firebase", icon: SiFirebase, hex: "#ffca28" },
    { name: "HTML", icon: FaHtml5, hex: "#e34f26" },
    { name: "CSS", icon: FaCss3, hex: "#2965f1" },
    { name: "SQL", icon: FaDatabase, hex: "#00758F" },
    { name: "SQLite", icon: SiSqlite, hex: "#003B57" },
  ];

  return (
    <section className="pt-32 pb-16 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Jervis</span> <br />
            I'm a <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">developer.</span>
          </h1>

          <div className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            Based in the Philippines 🇵🇭
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg">
            I'm a 3rd year Computer Science student at UMTC (University of Mindanao Tagum Campus), passionate about building full-stack web and mobile applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
            <a href="#projects" className="px-8 py-3.5 bg-blue-600 text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all dark:bg-blue-500 dark:hover:bg-blue-600 text-center">
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Connect
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/Jervis-UMTC"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.facebook.com/runningoutofsoulsauce"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg text-gray-600 hover:text-[#1877F2] dark:text-gray-400 dark:hover:text-[#1877F2] transition-colors cursor-pointer"
            >
              <FaFacebook className="text-xl" />
            </a>
          </div>

          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md border transition-colors"
                style={{
                  backgroundColor: tech.hex === "currentColor" ? undefined : `${tech.hex}0D`, // 5% opacity for cleaner look
                  borderColor: tech.hex === "currentColor" ? undefined : `${tech.hex}26` // 15% opacity
                }}
              >
                <tech.icon
                  className="text-lg"
                  style={{ color: tech.hex === "currentColor" ? undefined : tech.hex }}
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
