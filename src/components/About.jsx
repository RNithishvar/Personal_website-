import { motion } from 'framer-motion';

export default function About() {
  const paragraphs = [
    "I’m R Nithishvar, an electronics and communication student driven by curiosity and a passion for building real-world solutions.",
    "I work with AI, embedded systems, and IoT — creating projects that solve practical problems, from productivity tools like Focus AI to safety systems for hill roads. I enjoy turning ideas into working systems, not just concepts.",
    "With multiple event wins and hands-on experience, I’ve developed a strong builder mindset — learning through execution, experimenting with new ideas, and continuously improving.",
    "Beyond tech, I also explore design and creativity, believing that great solutions should not only work well but also feel intuitive and impactful."
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-background relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted mb-4 font-semibold">About Me</h2>
          <div className="w-12 h-0.5 bg-accent"></div>
        </motion.div>

        <div className="space-y-10 text-2xl md:text-4xl font-heading font-medium leading-tight text-foreground/90">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
