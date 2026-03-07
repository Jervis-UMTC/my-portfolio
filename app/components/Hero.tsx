"use client";

import { motion } from "framer-motion";
import { TECHNOLOGIES, SOCIAL_LINKS, PERSONAL_INFO } from "../lib/constants";

const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
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
            Hi, I&apos;m{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {PERSONAL_INFO.name}
            </span>{" "}
            <br />
            I&apos;m a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient-text">
              developer.
            </span>
          </h1>

          <div className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 pulse-dot"></span>
            Based in the {PERSONAL_INFO.country} {PERSONAL_INFO.countryFlag}
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg">
            I&apos;m a {PERSONAL_INFO.year} Computer Science student at{" "}
            {PERSONAL_INFO.university}, passionate about building full-stack web
            and mobile applications, with a growing focus on machine learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-blue-600 text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 dark:bg-blue-500 dark:hover:bg-blue-600 text-center"
            >
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
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className={`p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.hoverColor} hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-pointer`}
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </div>

          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Technologies
          </p>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={badgeContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {TECHNOLOGIES.map((tech) => (
              <motion.div
                key={tech.name}
                variants={badgeVariants}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md border transition-colors"
                style={{
                  backgroundColor:
                    tech.hex === "currentColor"
                      ? undefined
                      : `${tech.hex}0D`,
                  borderColor:
                    tech.hex === "currentColor"
                      ? undefined
                      : `${tech.hex}26`,
                }}
              >
                <tech.icon
                  className="text-lg"
                  style={{
                    color:
                      tech.hex === "currentColor" ? undefined : tech.hex,
                  }}
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
