import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaFacebook,
  FaDatabase,
} from "react-icons/fa";
import {
  SiFastapi,
  SiFlutter,
  SiNextdotjs,
  SiFirebase,
  SiDart,
  SiSqlite,
  SiTailwindcss,
  SiPwa,
  SiScikitlearn,
} from "react-icons/si";

// ─── Personal Info ───────────────────────────────────────────
export const PERSONAL_INFO = {
  name: "Jervis",
  email: "crowww001@gmail.com",
  university: "UMTC (University of Mindanao Tagum Campus)",
  year: "3rd year",
  country: "Philippines",
  countryFlag: "🇵🇭",
} as const;

// ─── Social Links ────────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Jervis-UMTC",
    icon: FaGithub,
    hoverColor: "hover:text-black dark:hover:text-white",
    ariaLabel: "Visit Jervis's GitHub profile",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/runningoutofsoulsauce",
    icon: FaFacebook,
    hoverColor: "hover:text-[#1877F2] dark:hover:text-[#1877F2]",
    ariaLabel: "Visit Jervis's Facebook profile",
  },
] as const;

// ─── Technologies ────────────────────────────────────────────
export const TECHNOLOGIES = [
  { name: "Java", icon: FaJava, hex: "#ed8b00" },
  { name: "Python", icon: FaPython, hex: "#3776ab" },
  { name: "FastAPI", icon: SiFastapi, hex: "#009688" },
  { name: "Dart", icon: SiDart, hex: "#0175c2" },
  { name: "Flutter", icon: SiFlutter, hex: "#02569b" },
  { name: "React.js", icon: FaReact, hex: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, hex: "currentColor" },
  { name: "Firebase", icon: SiFirebase, hex: "#ffca28" },
  { name: "HTML", icon: FaHtml5, hex: "#e34f26" },
  { name: "CSS", icon: FaCss3, hex: "#2965f1" },
  { name: "Tailwind CSS", icon: SiTailwindcss, hex: "#06b6d4" },
  { name: "PWA", icon: SiPwa, hex: "#5A0FC8" },
  { name: "SQL", icon: FaDatabase, hex: "#00758F" },
  { name: "SQLite", icon: SiSqlite, hex: "#003B57" },
  { name: "Scikit-Learn", icon: SiScikitlearn, hex: "#F7931E" },
] as const;

// ─── Tech Hex Colors (for project badges) ────────────────────
export const TECH_HEX: Record<string, string> = {
  "Next.js": "currentColor",
  React: "#61dafb",
  "Tailwind CSS": "#06b6d4",
  Flutter: "#02569b",
  Dart: "#0175c2",
  Firebase: "#ffca28",
  TypeScript: "#3178C6",
  PWA: "#5A0FC8",
  Vite: "#646CFF",
  "Styled Components": "#DB7093",
  "Framer Motion": "#FF0055",
};

// ─── Projects ────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Chooz",
    description:
      "A random selection web app with Wheel of Names, Coin Flip, and Dice Roll.",
    tech: ["React", "Vite", "Styled Components", "Framer Motion"],
    link: "https://chooz-app.vercel.app",
    image: "/assets/chooz-text-logo.svg",
  },
  {
    title: "PinoyPay",
    description:
      "An offline-first PWA for Philippine payroll calculations, featuring smart overtime/holiday computations, calendar visualization, and privacy-focused local storage.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"],
    link: "https://github.com/Jervis-UMTC/pinoy-pay",
    image: "/assets/pinoypay.svg",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "https://github.com/Jervis-UMTC/my-portfolio",
  },
  {
    title: "BayaniFund App",
    description:
      "A crowdfunding mobile application designed to empower community initiatives.",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/Jervis-UMTC/bayanifund-app",
    image: "/assets/logo.svg",
  },
];
