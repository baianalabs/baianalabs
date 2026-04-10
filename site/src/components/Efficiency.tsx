import { motion } from "motion/react";
import { Calendar, Database, FileText } from "lucide-react";

export default function Efficiency() {
  return (
    <section id="portfolio" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="relative px-8"
        >
          <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[120px] opacity-20" />
          <div className="relative glass-card-accent aspect-square rounded-2xl p-4 overflow-hidden shadow-2xl border-white/20">
            <img 
              alt="Neural Interface Visual" 
              className="rounded-xl w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 brightness-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYhHk8q2bkZ6woE5l-k0aPc3K_F26dIAmOPIjZO3OoLlKQoZuvqX7TZPxF2jsFkAAmH7XckNITNPaBECwUtGVjgnV3DPJroJC2ZP8vqjakV2dd7IijHeqevBB4S8C3_vY2n4r_a39XYVKsly6U0OI0FRRcFM9fZ1oO-XVMJPXKSVxg9fFFkiW1pQWn9gdywZgmBNCewlGgLGa1rJciFuyn3Wgt86UfU8bPVlWOvjSKcwsc9foDhrYW-BkEvXyNpWVQCabWhhozJvY"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
          </div>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-secondary font-label tracking-[0.4em] text-xs uppercase mb-6 block font-bold">Métricas do Sistema</span>
            <h2 className="text-5xl md:text-6xl font-headline font-bold leading-tight text-white">
              Eficiência <br/>Operacional Extrema
            </h2>
            <p className="text-on-surface-variant text-xl font-body mt-8 leading-relaxed">
              A Máquina não apenas vende, ela organiza seu ecossistema enquanto você dorme.
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="flex gap-8 items-start group"
            >
              <div className="glass-card p-5 rounded-2xl group-hover:border-primary/40 transition-colors shadow-lg">
                <Calendar className="text-primary w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-headline font-bold mb-3 text-white">Agendamento Automático</h4>
                <p className="text-on-surface-variant font-body text-lg leading-relaxed">
                  Sincronização direta com Google Calendar. Leads qualificados agendam reuniões sem intervenção humana.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="flex gap-8 items-start group"
            >
              <div className="glass-card p-5 rounded-2xl group-hover:border-tertiary/40 transition-colors shadow-lg">
                <Database className="text-tertiary w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-headline font-bold mb-3 text-white">CRM Invisível</h4>
                <p className="text-on-surface-variant font-body text-lg leading-relaxed">
                  Toda interação é transcrita e atualizada em tempo real. Nunca mais perca um detalhe crucial.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="pt-10"
          >
            <button className="flex items-center gap-6 glass-button px-10 py-5 rounded-2xl w-fit border-white/10 hover:border-secondary/40 transition-all cursor-pointer">
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center">
                <FileText className="text-secondary w-8 h-8" />
              </div>
              <div className="text-left">
                <span className="block font-bold text-white text-lg">Baixar Blueprint</span>
                <span className="block text-xs text-white/40 font-label uppercase tracking-widest mt-1">PDF • Arquitetura do Sistema</span>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
