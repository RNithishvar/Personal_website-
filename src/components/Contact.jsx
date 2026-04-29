import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative pt-32 pb-10 px-6 md:px-12 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-24 h-24 rounded-full bg-border/20 border border-border flex items-center justify-center mb-8"
          >
            <span className="text-4xl">👋</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-heading font-semibold tracking-tight text-foreground mb-8"
          >
            Let’s Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              Something Great
            </span>
          </motion.h2>

          <motion.a 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            href="mailto:contact@rnithishvar.com" // Placeholder email, can be updated
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform magnetic text-lg"
          >
            Get in touch <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        {/* Footer */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/RNithishvar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors magnetic p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/r-nithishvar-038352335" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors magnetic p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:contact@rnithishvar.com" 
              className="text-muted hover:text-foreground transition-colors magnetic p-2"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>

          <div className="text-muted text-sm font-medium flex flex-col md:flex-row items-center gap-2 md:gap-8">
            <p>© {currentYear} R Nithishvar. All rights reserved.</p>
            <p>Designed by <span className="text-foreground">NV</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
