import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-3xl opacity-50 mix-blend-screen" />
      </div>

      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block py-1.5 px-4 rounded-full border border-border bg-border/30 backdrop-blur-sm text-sm font-medium tracking-wide text-muted">
            Problem Solver • Entrepreneur • Builder
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-heading font-semibold tracking-tight text-foreground leading-[1.1] mb-8"
        >
          I don’t just learn technology — <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
            I build solutions
          </span> with it.
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Electronics and communication student, 4+ event winner, and founder mindset — creating AI and IoT systems that solve real-world problems.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6">
          <a 
            href="#projects" 
            className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform magnetic shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-full border border-border text-foreground font-medium hover:bg-border/50 transition-colors magnetic"
          >
            Let's Connect
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-accent"
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
