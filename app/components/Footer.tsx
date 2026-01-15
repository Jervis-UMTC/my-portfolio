import { FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-6">
          <a href="https://github.com/Jervis-UMTC" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://www.facebook.com/runningoutofsoulsauce" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1877F2] transition-colors">
            <FaFacebook className="text-xl" />
          </a>
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
