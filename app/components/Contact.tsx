"use client";

import Modal from "./Modal";
import { SOCIAL_LINKS, PERSONAL_INFO } from "../lib/constants";

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Contact({ isOpen, onClose }: ContactProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Get In Touch">
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I&apos;m based in the {PERSONAL_INFO.country} and accessible for
            new opportunities.{" "}
            <br className="hidden sm:block" />
            Have a question or want to collaborate?
          </p>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 underline decoration-2 underline-offset-4 hover:text-blue-700 dark:hover:text-blue-300 transition-colors break-all cursor-pointer"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-100 dark:border-zinc-800 pt-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className={`flex items-center gap-3 text-gray-600 dark:text-gray-400 ${social.hoverColor} transition-colors group cursor-pointer`}
            >
              <social.icon className="text-2xl group-hover:scale-110 transition-transform" />
              <span className="font-medium text-lg">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </Modal>
  );
}
