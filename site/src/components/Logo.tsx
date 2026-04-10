import { motion } from "motion/react";
import logoImage from "../../doc/Logo holográfico de balAna LABS_transparent.png";

interface LogoProps {
  className?: string;
  isWatermark?: boolean;
}

export default function Logo({ className = "", isWatermark = false }: LogoProps) {
  const logoUrl = logoImage;

  if (isWatermark) {
    return (
      <div className={`pointer-events-none select-none opacity-[0.02] fixed inset-0 -z-10 flex items-center justify-center overflow-hidden ${className}`}>
        <img 
          src={logoUrl} 
          alt="Watermark" 
          className="w-[150vw] max-w-none mix-blend-screen grayscale brightness-200 rotate-[-15deg]"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center group cursor-default ${className}`}>
      <div className="relative w-16 h-16 md:w-20 md:h-20">
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img 
          src={logoUrl} 
          alt="baiana LABS Neural Logo" 
          className="logo-baiana relative w-full h-full object-contain mix-blend-screen brightness-125 contrast-110"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col -ml-2">
        <span className="text-xl md:text-2xl font-headline font-bold tracking-tighter text-white leading-none">
          baiana <span className="text-primary group-hover:text-secondary transition-colors duration-500">LABS</span>
        </span>
        <span className="text-[8px] md:text-[10px] font-label uppercase tracking-[0.3em] text-white/40 mt-1">
          Automação Real com IA
        </span>
      </div>
    </div>
  );
}
