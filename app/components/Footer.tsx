import { SOCIAL_LINKS } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className={`text-gray-500 ${social.hoverColor} transition-colors`}
            >
              <social.icon className="text-xl" />
            </a>
          ))}
        </div>
        <div className="flex flex-col md:items-end text-center md:text-right">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Jervis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
