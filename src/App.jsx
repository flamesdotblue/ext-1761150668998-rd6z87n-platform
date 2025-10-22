import { useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    // Ensure smooth scroll behavior across the app
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  // Simple responsive header with anchor links
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 backdrop-blur-md ring-1 ring-white/10">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white/90">
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-300 bg-clip-text text-transparent">CSE Portfolio</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
            <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
          </nav>
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer rounded-lg p-1 hover:bg-white/10">
                <Menu size={20} />
              </summary>
              <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-black/80 p-2 shadow-xl backdrop-blur-md">
                <a href="#about" className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10">About</a>
                <a href="#projects" className="mt-1 block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10">Projects</a>
                <a href="#contact" className="mt-1 block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10">Contact</a>
                <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20">
                  <X size={16} /> Close
                </button>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} B.Tech CSE Portfolio. Built with React, Tailwind, Framer Motion.
      </div>
    </footer>
  );
}
