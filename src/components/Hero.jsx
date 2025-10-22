import { motion } from 'framer-motion';
import { Rocket, Download, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.65)_70%,rgba(0,0,0,0.85)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs text-white/80 backdrop-blur-md"
          >
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to SDE | Frontend | Full‑Stack Internships & Placements
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-300 bg-clip-text text-transparent">Hi, I'm a B.Tech CSE Candidate</span>
            <br />
            Building modern, animated web experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 max-w-2xl text-base text-white/80 md:text-lg"
          >
            I craft performant, accessible interfaces with React, TypeScript, and Node.js. Passionate about problem solving, system design, and delightful animations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              <Rocket size={16} className="transition-transform group-hover:-translate-y-0.5" />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <Download size={16} /> Contact for Resume
            </a>
            <div className="ml-2 flex gap-3">
              <a
                href="https://github.com/" target="_blank" rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black/40 text-white/80 backdrop-blur-md transition hover:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black/40 text-white/80 backdrop-blur-md transition hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:yourmail@example.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black/40 text-white/80 backdrop-blur-md transition hover:text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
