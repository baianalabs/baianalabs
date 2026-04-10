import { motion } from "motion/react";

interface CTAProps {
  onActivate?: () => void;
}

export default function CTA({ onActivate }: CTAProps) {
  return (
    <section className="py-60 px-8 text-center max-w-5xl mx-auto relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 space-y-12">
        <motion.h2 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-6xl md:text-8xl font-headline font-bold tracking-tight text-white"
        >
          Pronto para ativar seu <br/>
          <span className="text-gradient-logo italic">Ancestral Digital?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-2xl text-on-surface-variant font-body max-w-2xl mx-auto leading-relaxed"
        >
          Junte-se às operações que já substituíram 80% do trabalho manual por inteligência pura.
        </motion.p>
        
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="pt-10"
        >
          <button 
            onClick={onActivate}
            className="primary-glow-button text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-500 hover:scale-110 cursor-pointer no-underline inline-block border-none"
          >
            Ativar Protocolo de Vendas
          </button>
        </motion.div>
      </div>
    </section>
  );
}
