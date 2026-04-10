import { motion } from "motion/react";
import logoImage from "../../doc/Logo digital BaIAna Labs em 3D.png";
const tickerItems = [
  "DESIGN DE SITES", "PAINÉIS DE DADOS", "DESENVOLVIMENTO", "ARTE DIGITAL", "ESTRATÉGIA", "ANIMAÇÃO",
  "AUTOMAÇÃO COM IA", "SDR DIGITAL", "INTEGRAÇÃO DE CRM", "ESCALA DE VENDAS"
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="bg-blob-primary top-[10%] -left-[10%] animate-pulse" />
        <div className="bg-blob-secondary bottom-[10%] -right-[10%] animate-pulse" style={{ animationDelay: "-2s" }} />
        <div className="bg-blob-tertiary top-[40%] left-[30%] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 flex flex-col items-center">
        <div className="flex flex-col items-center text-center space-y-10 max-w-4xl">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="w-80 h-80 md:w-[600px] md:h-[600px] mx-auto flex items-center justify-center relative p-8"
          >
            {/* Neural Connections Layer */}
            <svg className="absolute inset-[-100px] w-[calc(100%+200px)] h-[calc(100%+200px)] pointer-events-none opacity-40" viewBox="0 0 1000 1000">
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * (Math.PI / 180);
                const x2 = 500 + Math.cos(angle) * 450;
                const y2 = 500 + Math.sin(angle) * 450;
                return (
                  <g key={i}>
                    <line 
                      x1="500" y1="500" x2={x2} y2={y2} 
                      stroke="rgba(82, 0, 255, 0.2)" 
                      strokeWidth="1" 
                    />
                    <motion.circle
                      r="1.5"
                      fill="#00F0FF"
                      animate={{
                        cx: [500, x2],
                        cy: [500, y2],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "linear"
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 border border-secondary/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            
            <div className="relative w-full h-full flex items-center justify-center landing-logo-container">
              <img 
                alt="baiana LABS Neural Logo" 
                className="logo-baiana relative w-full h-full object-contain mix-blend-screen brightness-125 contrast-110 scale-[1.8] translate-y-24" 
                src={logoImage}
                referrerPolicy="no-referrer"
              />
              {/* Shield Living Effect (Adjusted for translate-y-24) */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[15%] h-[15%] bg-secondary/40 blur-xl rounded-full mix-blend-screen pointer-events-none"
              />
              <div className="absolute bottom-[11%] left-1/2 -translate-x-1/2 w-[5%] h-[5%] bg-white/40 blur-sm rounded-full mix-blend-overlay animate-pulse pointer-events-none" />
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

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8"
        >
          <a href="#contact" className="primary-glow-button text-white px-12 py-5 rounded-full font-bold text-lg cursor-pointer no-underline">
            Conectar com a Máquina
          </a>
          <a href="#services" className="glass-button text-white px-12 py-5 rounded-full font-bold text-lg cursor-pointer no-underline">
            Ver Serviços
          </a>
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
