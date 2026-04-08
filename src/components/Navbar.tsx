import { motion } from "motion/react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-6 left-1/2 w-[90%] max-w-7xl z-50 glass-card px-8 py-4 flex justify-between items-center rounded-full"
    >
      <Logo />
      
      <div className="hidden md:flex items-center gap-10">
        <a className="text-primary font-body text-sm font-bold tracking-wide" href="#">A Máquina</a>
        <a className="text-white/60 font-body text-sm hover:text-secondary transition-colors duration-300" href="#">Eficiência</a>
        <a className="text-white/60 font-body text-sm hover:text-secondary transition-colors duration-300" href="#">Ecossistema</a>
        <a className="text-white/60 font-body text-sm hover:text-secondary transition-colors duration-300" href="#">Sobre</a>
      </div>
      
      <button className="primary-glow-button text-white px-8 py-2 rounded-full font-bold text-sm cursor-pointer">
        Conectar
      </button>
    </motion.nav>
  );
}
