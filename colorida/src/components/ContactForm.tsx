import { motion } from "motion/react";

export default function ContactForm() {
  return (
    <section className="py-40 px-8 max-w-4xl mx-auto relative">
      <div className="absolute -inset-20 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 text-center space-y-8 mb-16">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl md:text-6xl font-headline font-bold text-white"
        >
          Pronto para a <span className="text-tertiary">Automação Real?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-xl text-on-surface-variant font-body max-w-2xl mx-auto leading-relaxed"
        >
          Deixe a Inteligência Artificial qualificar seus leads e agendar suas reuniões. 
          Preencha o formulário abaixo e veja a mágica acontecer.
        </motion.p>
      </div>

      <motion.form 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="glass-card p-8 md:p-12 rounded-3xl space-y-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-xs font-label uppercase tracking-widest text-white/40 ml-4">Seu Nome</label>
            <input 
              type="text" 
              id="name"
              placeholder="Ex: João Silva"
              className="w-full bg-surface-container-low border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs font-label uppercase tracking-widest text-white/40 ml-4">Seu E-mail Profissional</label>
            <input 
              type="email" 
              id="email"
              placeholder="joao@empresa.com"
              className="w-full bg-surface-container-low border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-xs font-label uppercase tracking-widest text-white/40 ml-4">Como a nossa IA pode escalar a sua operação?</label>
          <textarea 
            id="message"
            rows={4}
            placeholder="Conte-nos um pouco sobre seus desafios atuais..."
            className="w-full bg-surface-container-low border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
          />
        </div>

        <div className="pt-4">
          <button 
            type="submit"
            className="primary-glow-button w-full text-white py-5 rounded-2xl font-bold text-xl cursor-pointer"
          >
            Enviar e Iniciar Automação
          </button>
        </div>
      </motion.form>
    </section>
  );
}
