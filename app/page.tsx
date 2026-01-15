
import Header from "./components/Header";
import Hero from "./components/Hero";

import Projects from "./components/Projects";

import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Projects />


      </main>
      <Footer />
    </div>
  );
}
