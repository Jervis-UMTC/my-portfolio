"use client";

import Modal from "./Modal";
import { PERSONAL_INFO } from "../lib/constants";

interface AboutProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function About({ isOpen, onClose }: AboutProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About Me">
      <div className="text-base md:text-lg text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed">
        <p>
          Hello! I&apos;m a {PERSONAL_INFO.year} Computer Science student at{" "}
          {PERSONAL_INFO.university}. My journey in tech is driven by a
          curiosity to understand how things work and a desire to build
          solutions that solve real-world problems.
        </p>
        <p>
          I have a diverse skill set ranging from mobile development with
          Flutter to full-stack web development using Next.js and FastAPI. I
          also explore machine learning with Python and scikit-learn. I enjoy
          working across the full stack, constantly learning and adapting to
          new tools.
        </p>
        <p>
          When I&apos;m not coding, I&apos;m likely exploring new tech stacks,
          working on side projects, or studying for my upcoming exams.
        </p>
      </div>
    </Modal>
  );
}
