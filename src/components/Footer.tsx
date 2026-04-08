import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full py-24 px-8 border-t border-white/5 bg-surface">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <Logo className="scale-125" />
          
          <div className="flex flex-wrap justify-center gap-12">
            <a className="text-white/40 font-body text-sm tracking-[0.2em] uppercase font-bold hover:text-primary transition-colors" href="#">Política de Privacidade</a>
            <a className="text-white/40 font-body text-sm tracking-[0.2em] uppercase font-bold hover:text-secondary transition-colors" href="#">Termos de Serviço</a>
            <a className="text-white/40 font-body text-sm tracking-[0.2em] uppercase font-bold hover:text-tertiary transition-colors" href="#">Logs Operacionais</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-t border-white/5 pt-12">
          <div className="text-white/30 font-body text-sm">
            © 2024 baiana LABS. Construído para a era da alta eficiência.
          </div>
          <div className="text-right">
            <span className="text-primary/60 font-label tracking-[0.3em] text-[10px] uppercase font-bold">
              Potencializado pelo Ancestral Digital • Antigravity 2.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
