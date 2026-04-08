import { motion } from "motion/react";
import { MessageSquare, Filter, RefreshCw, ArrowRight, Layout, Code, Smartphone } from "lucide-react";

const services = [
  {
    title: "SDR Digital 24/7",
    description: "Qualificação ultra-rápida via WhatsApp utilizando RAG para respostas precisas baseadas na sua base de conhecimento.",
    icon: MessageSquare,
    color: "secondary",
    features: ["Design de Interface", "Experiência do Usuário", "Aplicativos Mobile"]
  },
  {
    title: "Triagem Inteligente",
    description: "Integração nativa com n8n para filtragem rigorosa de MQL e ICP. Direcione apenas leads \"quentes\".",
    icon: Filter,
    color: "tertiary",
    features: ["Qualificação de Leads", "Validação de ICP", "Sincronização com CRM"]
  },
  {
    title: "Automação de Follow-up",
    description: "Recuperação de leads ociosos com cadências inteligentes. A IA identifica o melhor momento e tom de voz para reativar.",
    icon: RefreshCw,
    color: "primary",
    features: ["Cadência Inteligente", "Reativação de Voz", "Análise de Sentimentos"]
  }
];

export default function Features() {
  return (
    <section className="py-40 px-8 max-w-7xl mx-auto relative">
      <div className="bg-blob-primary top-0 right-0 opacity-20" />
      
      <div className="text-center mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-headline font-bold text-white"
        >
          Nossos <span className="text-gradient-logo">Serviços</span>
        </motion.h2>
      </div>

      <div className="space-y-32">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}
          >
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-headline font-bold text-white">{service.title}</h3>
                <p className="text-on-surface-variant text-xl font-body leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-4">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/60 font-body">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="glass-button text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 group">
                Saiba Mais
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="flex-1 relative w-full aspect-video lg:aspect-square">
              <div className={`absolute inset-0 bg-${service.color}/10 blur-[80px] rounded-full`} />
              <div className="relative glass-card p-8 rounded-3xl border-white/10 h-full flex items-center justify-center overflow-hidden">
                {/* Mock UI/UX Visual */}
                <div className="w-full max-w-md space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="w-24 h-4 bg-white/5 rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-linear-to-br from-primary/20 to-transparent rounded-2xl border border-white/5 flex items-center justify-center">
                      <service.icon className={`w-12 h-12 text-${service.color}`} />
                    </div>
                    <div className="h-32 bg-linear-to-br from-secondary/20 to-transparent rounded-2xl border border-white/5" />
                  </div>
                  <div className="h-24 bg-white/5 rounded-2xl border border-white/5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
