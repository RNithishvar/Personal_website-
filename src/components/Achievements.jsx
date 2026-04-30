import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Medal, X } from 'lucide-react';
import { useState } from 'react';
import kanam26Img from '../assets/certificates/kanam26.jpeg';
import joselexImg from '../assets/certificates/joselex.jpeg';
import ctechImg from '../assets/certificates/ctech.jpeg';

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);

  const achievements = [
    {
      title: "Mind Map Innovation",
      prize: "1st Prize",
      event: "Kanam26",
      description: "Awarded first place for creating a highly innovative mind mapping solution to conceptualize complex electronics systems efficiently.",
      icon: <Trophy className="w-6 h-6 text-accent" />,
      image: kanam26Img
    },
    {
      title: "Paper Presentation",
      prize: "1st Prize",
      event: "Joselex",
      description: "Secured first prize for presenting a comprehensive research paper outlining modern applications of AI in electronics.",
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      image: joselexImg
    },
    {
      title: "Paper Presentation",
      prize: "3rd Prize",
      event: "CTECH Hindustan",
      description: "Achieved third place honors for delivering a detailed technical paper focused on cutting-edge IoT integrations.",
      icon: <Medal className="w-6 h-6 text-orange-400" />,
      image: ctechImg
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
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-border/10 border border-border/50 hover:border-accent/50 transition-colors p-6"
            >
              <div className="flex justify-between items-start mb-6">
                <div 
                  className="w-28 h-20 overflow-hidden rounded-lg relative border border-border/30 flex-shrink-0 bg-background/50 cursor-pointer group/img"
                  onClick={() => setSelectedCert(item)}
                >
                  <img src={item.image} alt={`${item.event} certificate`} className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-[10px] font-medium text-white tracking-widest uppercase">Zoom</span>
                  </div>
                </div>
                <div className="p-3 bg-background/50 backdrop-blur-md w-fit rounded-xl border border-border/50">
                  {item.icon}
                </div>
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="mt-auto">
                  <span className="text-sm font-medium text-accent mb-2 block">{item.event}</span>
                  <h4 className="text-xl font-heading font-semibold text-foreground mb-3">{item.title}</h4>
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span className="text-foreground font-medium">{item.prize}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-black flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 text-foreground hover:bg-background border border-border/50 transition-colors"
              >
                <X size={20} />
              </button>
              <img src={selectedCert.image} alt={selectedCert.title} className="max-w-full max-h-[90vh] object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
