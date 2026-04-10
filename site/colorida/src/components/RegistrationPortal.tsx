import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Building2, User, Mail, Phone, Rocket, Loader2, CheckCircle2 } from "lucide-react";

interface RegistrationPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationPortal({ isOpen, onClose }: RegistrationPortalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    niche: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setStatus("idle");
          setFormData({ name: "", email: "", company: "", phone: "", niche: "" });
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro ao registrar:", error);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-0"
        >
          {/* Backdrop with extreme blur and dark tint */}
          <motion.div 
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(20px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            className="absolute inset-0 bg-surface/80"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-2xl glass-card p-8 md:p-12 rounded-[40px] border-primary/30 bg-surface/40 overflow-hidden"
          >
            {/* Ambient Background Glows inside modal */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full" />

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10 space-y-10">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-primary animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-headline font-bold text-white uppercase tracking-tighter">Protocolo Ativado!</h3>
                  <p className="text-on-surface-variant max-w-xs mx-auto">
                    Nossa inteligência já está processando seus dados. Prepare-se para a escala.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Rocket className="w-5 h-5 animate-pulse" />
                      </div>
                      <span className="text-xs font-label uppercase tracking-[0.3em] text-primary font-bold">Protocolo de Ativação</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-headline font-bold text-white tracking-tighter">
                      Inicie sua <span className="text-gradient-logo">Escala Digital</span>
                    </h2>
                    <p className="text-on-surface-variant font-body text-lg">
                      Preencha os dados abaixo para que nosso sistema analise sua operação e ative o protocolo de prospecção.
                    </p>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 group">
                        <label className="flex items-center gap-2 text-[10px] font-label uppercase tracking-widest text-white/30 ml-4 group-focus-within:text-primary transition-colors">
                          <User className="w-3 h-3" /> Seu Nome
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Ex: Marcus Cseko"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                      <div className="space-y-2 group">
                        <label className="flex items-center gap-2 text-[10px] font-label uppercase tracking-widest text-white/30 ml-4 group-focus-within:text-primary transition-colors">
                          <Mail className="w-3 h-3" /> E-mail Corporativo
                        </label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="voce@empresa.com"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 group">
                        <label className="flex items-center gap-2 text-[10px] font-label uppercase tracking-widest text-white/30 ml-4 group-focus-within:text-primary transition-colors">
                          <Building2 className="w-3 h-3" /> Nome da Empresa
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Baiana Labs"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                      <div className="space-y-2 group">
                        <label className="flex items-center gap-2 text-[10px] font-label uppercase tracking-widest text-white/30 ml-4 group-focus-within:text-primary transition-colors">
                          <Phone className="w-3 h-3" /> WhatsApp
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="(00) 0 0000-0000"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 group">
                      <label className="block text-[10px] font-label uppercase tracking-widest text-white/30 ml-4 group-focus-within:text-primary transition-colors">Niche ou Ramo de Atuação</label>
                      <select 
                        required
                        value={formData.niche}
                        onChange={(e) => setFormData({...formData, niche: e.target.value})}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white/60 focus:outline-hidden focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:bg-black/40 transition-all appearance-none"
                      >
                        <option value="">Selecione o segmento...</option>
                        <option value="ecommerce">E-commerce / Lojas Online</option>
                        <option value="hospitality">Restaurantes / Gastronomia</option>
                        <option value="health">Clínicas / Saúde</option>
                        <option value="services">Serviços Profissionais</option>
                        <option value="other">Outros Segmentos</option>
                      </select>
                    </div>

                    <div className="pt-6">
                      <button 
                        type="submit"
                        disabled={status === "loading"}
                        className="primary-glow-button w-full text-white py-6 rounded-2xl font-bold text-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? (
                          <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                          <>
                            <span>Ativar Agora</span>
                            <Send className="w-6 h-6" />
                          </>
                        )}
                      </button>
                      {status === "error" && (
                        <p className="text-center text-xs text-red-400 mt-4 uppercase tracking-widest">
                          Erro na ativação. Verifique sua conexão.
                        </p>
                      )}
                    </div>

                    <p className="text-center text-[10px] text-white/20 uppercase tracking-widest">
                      Ao ativar, você concorda com nossos protocolos de segurança e dados.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
