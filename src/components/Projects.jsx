import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'DSA Visualizer',
    description: 'Interactive visualizations for algorithms (sorting, graph traversals) with step-by-step animations and adjustable speed.',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Campus Connect',
    description: 'A platform for students to share notes, events, and collaborate with clubs. Real-time chat and notifications included.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Portfolio Engine',
    description: 'A themable, animated portfolio starter with sections, dark mode, and dynamic content powered by JSON.',
    tags: ['Vite', 'Tailwind', 'Framer Motion'],
    demo: '#',
    code: '#',
  },
];

export default function Projects() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="flex items-end justify-between gap-4"
      >
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-300 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">A selection of my recent work showcasing animations, performance, and modern web engineering practices.</p>
        </div>
        <a href="#contact" className="hidden rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md hover:bg-white/20 md:inline-block">Get in touch</a>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 backdrop-blur-sm"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: 'radial-gradient(600px 200px at 0% 0%, rgba(255,255,255,0.06), rgba(255,255,255,0))' }} />
            <div className="relative">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/75">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.demo} className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-white/90">
                  Live Demo <ArrowUpRight size={14} />
                </a>
                <a href={p.code} className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                  <Github size={14} /> Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
