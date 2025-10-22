import { motion } from 'framer-motion';

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'Tailwind CSS',
  'Framer Motion',
  'DSA',
  'DBMS',
  'OS',
  'Computer Networks',
];

export default function About() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-300 bg-clip-text text-transparent">About Me</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Final-year B.Tech CSE student with a strong foundation in computer science and a passion for building animated, user-centric web apps. I enjoy transforming complex problems into elegant solutions with clean code and purposeful motion.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i, duration: 0.4 }}
            className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4 backdrop-blur-sm hover:border-white/20"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/90">{skill}</span>
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300 opacity-70 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-1 w-3/4 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-300" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
