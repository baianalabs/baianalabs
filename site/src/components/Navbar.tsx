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
      
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
        <a className="text-white/60 font-body text-sm hover:text-primary transition-colors duration-300" href="#home">Home</a>
        <a className="text-white/60 font-body text-sm hover:text-secondary transition-colors duration-300" href="#about">Quem Somos</a>
        <a className="text-white/60 font-body text-sm hover:text-secondary transition-colors duration-300" href="#services">Serviços</a>
      </div>
      
      <a href="#contact" className="primary-glow-button text-white px-8 py-2 rounded-full font-bold text-sm cursor-pointer no-underline">
        Contato
      </a>
    </motion.nav>
  );
}
