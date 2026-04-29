import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "Mind Map Innovation",
      prize: "1st Prize",
      event: "Kanam26",
      icon: <Trophy className="w-8 h-8 text-accent" />
    },
    {
      title: "Paper Presentation",
      prize: "1st Prize",
      event: "Joselex",
      icon: <Award className="w-8 h-8 text-yellow-400" />
    },
    {
      title: "Paper Presentation",
      prize: "3rd Prize",
      event: "CTECH Hindustan",
      icon: <Medal className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <section id="achievements" className="py-32 px-6 md:px-12 bg-background border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-muted mb-4 font-semibold">Recognition</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-semibold text-foreground">
              3+ Technical Event Wins
            </h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted max-w-sm text-lg"
          >
            Proof of my builder mindset — consistently pushing ideas from concept to award-winning executions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-border/10 border border-border/50 hover:border-accent/50 transition-colors p-8"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full min-h-[240px]">
                <div className="mb-auto p-4 bg-background/50 backdrop-blur-md w-fit rounded-xl border border-border/50">
                  {item.icon}
                </div>
                
                <div className="mt-8">
                  <span className="text-sm font-medium text-accent mb-2 block">{item.event}</span>
                  <h4 className="text-2xl font-heading font-medium text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {item.prize}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
