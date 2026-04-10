import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full py-32 px-8 border-t border-white/5 bg-surface relative overflow-hidden">
      <div className="bg-blob-secondary -bottom-64 -left-64 opacity-10" />
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Logo className="scale-125" />
            <p className="text-white/30 text-xs font-label uppercase tracking-widest mt-4">Automando o Amanhã, Hoje.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            <a className="text-white/40 font-body text-xs tracking-[0.2em] uppercase font-bold hover:text-primary hover:tracking-[0.25em] transition-all duration-300" href="#">Privacidade</a>
            <a className="text-white/40 font-body text-xs tracking-[0.2em] uppercase font-bold hover:text-secondary hover:tracking-[0.25em] transition-all duration-300" href="#">Termos</a>
            <a className="text-white/40 font-body text-xs tracking-[0.2em] uppercase font-bold hover:text-tertiary hover:tracking-[0.25em] transition-all duration-300" href="#">Contatos</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 border-t border-white/5 pt-12">
          <div className="text-white/20 font-body text-[10px] uppercase tracking-widest text-center md:text-left">
            © 2024 baiana LABS • A Revolução da Eficiência Digital
          </div>
          <div className="text-center md:text-right">
            <span className="text-gradient-logo font-label tracking-[0.4em] text-[10px] uppercase font-bold">
              Potencializado pelo Ancestral Digital
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
