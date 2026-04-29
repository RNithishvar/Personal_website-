import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    "Embedded Systems",
    "Arduino & IoT",
    "AI Concepts",
    "Frontend (React basics)",
    "Problem Solving",
    "Creative Thinking",
    "Canva Design"
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-background border-t border-border/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-muted mb-4 font-semibold">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-semibold text-foreground max-w-2xl">
              A diverse toolkit for building comprehensive solutions.
            </h3>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.3)"
              }}
              className="px-6 py-4 md:px-8 md:py-5 rounded-full border border-border/50 bg-border/5 backdrop-blur-sm cursor-none magnetic"
            >
              <span className="text-lg md:text-xl font-medium text-foreground">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
