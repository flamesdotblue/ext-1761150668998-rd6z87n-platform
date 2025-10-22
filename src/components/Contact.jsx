import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-300 bg-clip-text text-transparent">Contact</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Interested in collaborating or hiring? Reach out via email or connect on LinkedIn. I typically respond within 24 hours.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const name = data.get('name');
            const email = data.get('email');
            const message = data.get('message');
            const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
            const body = encodeURIComponent(`${message}\n\nContact: ${email}`);
            window.location.href = `mailto:yourmail@example.com?subject=${subject}&body=${body}`;
          }}
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-xs text-white/70">Name</label>
              <input id="name" name="name" required className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-white/20" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-xs text-white/70">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-white/20" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-xs text-white/70">Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/20" placeholder="Tell me about the role or project..." />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90">Send Message <Mail size={16} /></button>
            <div className="flex gap-3">
              <a href="tel:+910000000000" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-md hover:bg-white/20"><Phone size={14} /> Call</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-md hover:bg-white/20"><Linkedin size={14} /> LinkedIn</a>
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
