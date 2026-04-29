import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Focus AI",
      category: "AI & Productivity",
      description: "AI-powered focus monitoring system that tracks attention and improves productivity through real-time behavioral analysis.",
      imagePlaceholder: "bg-gradient-to-br from-blue-900/40 to-slate-900/80",
      link: "#"
    },
    {
      title: "Hills Accident Prevention System",
      category: "IoT & Embedded Systems",
      description: "IoT-based safety solution designed to reduce accidents on hill roads using smart alerts and sensor networks.",
      imagePlaceholder: "bg-gradient-to-br from-emerald-900/40 to-slate-900/80",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted mb-4 font-semibold">Selected Works</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-semibold text-foreground">Featured Projects</h3>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
              
              {/* Project Image/Visual */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-3/5"
              >
                <div className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden ${project.imagePlaceholder} border border-border/50 group`}>
                  {/* Subtle parallax background placeholder */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 ease-out"></div>
                  
                  {/* Hover reveal text for placeholders */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/20 backdrop-blur-sm">
                    <span className="px-6 py-3 rounded-full bg-background/80 text-foreground font-medium flex items-center gap-2">
                      View Case Study <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 !== 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-2/5 flex flex-col items-start"
              >
                <span className="text-accent font-medium tracking-wider text-sm mb-4">{project.category}</span>
                <h4 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">{project.title}</h4>
                <p className="text-lg text-muted mb-10 leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.link}
                  className="group flex items-center gap-3 text-lg font-medium text-foreground relative overflow-hidden pb-2"
                >
                  <span className="relative z-10">Case Study</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-border"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
