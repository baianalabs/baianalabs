import { motion } from "motion/react";
import logoImage from "../../doc/Logo holográfico de balAna LABS_transparent.png";
const tickerItems = [
  "DESIGN DE SITES", "PAINÉIS DE DADOS", "DESENVOLVIMENTO", "ARTE DIGITAL", "ESTRATÉGIA", "ANIMAÇÃO",
  "AUTOMAÇÃO COM IA", "SDR DIGITAL", "INTEGRAÇÃO DE CRM", "ESCALA DE VENDAS"
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="bg-blob-primary top-[10%] -left-[10%] animate-pulse" />
        <div className="bg-blob-secondary bottom-[10%] -right-[10%] animate-pulse" style={{ animationDelay: "-2s" }} />
        <div className="bg-blob-tertiary top-[40%] left-[30%] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Stats */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-6">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="glass-card p-6 rounded-2xl border-white/10"
            >
              <div className="text-3xl font-headline font-bold text-white">240+</div>
              <div className="text-xs font-label text-white/40 uppercase tracking-widest mt-1">Parceiros</div>
            </motion.div>
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="glass-card p-6 rounded-2xl border-white/10"
            >
              <div className="text-3xl font-headline font-bold text-white">92%</div>
              <div className="text-xs font-label text-white/40 uppercase tracking-widest mt-1">Mais Rápido</div>
            </motion.div>
          </div>

          {/* Center Logo/Hero */}
          <div className="lg:col-span-6 flex flex-col items-center text-center space-y-10">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="w-96 h-96 md:w-[650px] md:h-[650px] mx-auto flex items-center justify-center p-4 floating-animation relative"
            >
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full animate-pulse" />
              
              <div className="relative w-full h-full">
                <img 
                  alt="baiana LABS Neural Logo" 
                  className="logo-baiana relative w-full h-full object-contain mix-blend-screen brightness-125 contrast-110" 
                  src={logoImage}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.h1 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter leading-[0.9] text-white"
            >
              A Máquina de Vendas <br/>
              <span className="text-gradient-logo">Potencializada por IA</span>
            </motion.h1>
          </div>

          {/* Right Text */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-center">
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-card p-6 rounded-2xl border-white/10"
            >
              <p className="text-sm text-white/60 font-body leading-relaxed">
                Melhores dados geram modelos de maior performance. IA eficiente acelera suas vendas de forma inteligente.
              </p>
              <button className="mt-4 glass-button text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest cursor-pointer">
                Começar Agora
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center pt-16"
        >
          <button className="primary-glow-button text-white px-12 py-5 rounded-full font-bold text-lg cursor-pointer">
            Conectar com a Máquina
          </button>
          <button className="glass-button text-white px-12 py-5 rounded-full font-bold text-lg cursor-pointer">
            Ver Operational Logs
          </button>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="w-full mt-32 py-6 bg-white/5 border-y border-white/10 overflow-hidden relative z-20">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="text-white/40 text-sm font-label font-bold uppercase tracking-[0.3em]">{item}</span>
              <span className="mx-8 text-primary">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
