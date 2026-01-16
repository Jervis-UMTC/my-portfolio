"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "PinoyPay",
    description: "An offline-first PWA for Philippine payroll calculations, featuring smart overtime/holiday computations, calendar visualization, and privacy-focused local storage.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"],
    link: "https://github.com/Jervis-UMTC/pinoy-pay",
    image: "/assets/pinoypay.svg",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "BayaniFund App",
    description: "A crowdfunding mobile application designed to empower community initiatives.",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/Jervis-UMTC/bayanifund-app",
    image: "/assets/logo.svg",
  },

];

export default function Projects() {
  const techHex: { [key: string]: string } = {
    "Next.js": "currentColor",
    "React": "#61dafb",
    "Tailwind CSS": "#06b6d4",
    "Flutter": "#02569b",
    "Dart": "#0175c2",
    "Firebase": "#ffca28",
    "TypeScript": "#3178C6",
    "PWA": "#5A0FC8",
  };





  const getProjectTechStyle = (tech: string) => {
    const hex = techHex[tech];
    if (!hex || hex === "currentColor") {
      return {
        className: "bg-gray-100 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300",
        style: {}
      };
    }

    return {
      className: "text-gray-700 dark:text-gray-300 border",
      style: {
        backgroundColor: `${hex}15`,
        borderColor: `${hex}40`
      }
    };
  };

  return (
    <section id="projects" className="pt-4 pb-12 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm font-bold uppercase tracking-widest mb-8 text-blue-600 dark:text-blue-400"
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col group items-start p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 border border-transparent hover:border-blue-100 dark:hover:border-blue-900/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
          >
            <div className="w-full flex justify-between items-start mb-4">
              {project.image && (
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <a href={project.link} className="flex items-center gap-2">
                {project.title} &rarr;
              </a>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, i) => {
                const { style, className } = getProjectTechStyle(tech);
                return (
                  <span
                    key={i}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-md ${className || ''}`}
                    style={style}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
