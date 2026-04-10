import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { MessageSquare, Filter, RefreshCw, ArrowRight, Layout, Code, Smartphone, Check, Clock, Target, TrendingUp, Search } from "lucide-react";

const services = [
  {
    title: "SDR Digital 24/7",
    description: "Sua equipe de vendas nunca dorme. Nossa IA qualifica cada lead que chega no WhatsApp em segundos, usando tecnologia RAG para respostas precisas baseadas nos seus próprios dados.",
    icon: MessageSquare,
    color: "secondary",
    features: [
      "Atendimento instantâneo via WhatsApp",
      "Respostas baseadas em seus docs (RAG)",
      "Qualificação inteligente de leads",
      "Agendamento automático de reuniões"
    ],
    examples: [
      {
        niche: "Clínica Médica",
        id: "LIVE_WHATSAPP_API",
        userMsg: "Oi! Tenho interesse no serviço de automação para minha clínica. Como funciona?",
        aiMsg: "Olá! Com certeza. Nossa automação qualifica seus leads 24h por dia. Posso te fazer 3 perguntas rápidas para entender seu volume atual de atendimentos?",
        footer: "Processando via RAG: manual_atendimento_clinica.pdf"
      },
      {
        niche: "Imobiliária",
        id: "REAL_ESTATE_SDR",
        userMsg: "Gostaria de saber mais sobre o apartamento no Barra Sul. Está disponível?",
        aiMsg: "Olá! O apartamento está disponível sim. Ele possui 3 quartos e vista para o mar. Gostaria de agendar uma visita para este sábado?",
        footer: "Verificando base: tabela_disponibilidade_imoveis.csv"
      },
      {
        niche: "E-commerce",
        id: "RETAIL_SDR",
        userMsg: "Meu pedido #4590 ainda não chegou. Podem verificar?",
        aiMsg: "Claro! Verifiquei aqui que seu pedido está em rota de entrega e deve chegar até as 18h. Posso te ajudar com algo mais?",
        footer: "Integração: Logística_PostgreSQL_Live"
      }
    ]
  },
  {
    title: "Triagem Inteligente",
    description: "Não perca tempo com curiosos. Identifique quem realmente tem potencial de compra filtrando leads com base no seu Perfil de Cliente Ideal (ICP).",
    icon: Filter,
    color: "tertiary",
    features: [
      "Lead Scoring personalizado",
      "Identificação de tomadores de decisão",
      "Integração com bases de dados",
      "Encaminhamento prioritário (Hot Lead)"
    ],
    examples: [
      {
        niche: "SaaS (B2B)",
        lead: "Carlos Eduardo",
        role: "CEO @ Innova Tech",
        score: "98%",
        status: "Elevado",
        tag: "Budget: Enterprise"
      },
      {
        niche: "Educação",
        lead: "Ana Paula",
        role: "Mãe de aluno • Ensino Médio",
        score: "92%",
        status: "Prioritário",
        tag: "Urgência: Alta"
      },
      {
        niche: "Escritório de Advocacia",
        lead: "Roberto Souza",
        role: "Diretor Jurídico • Global Logistics",
        score: "95%",
        status: "Hot Lead",
        tag: "Caso: Consultoria Mensal"
      }
    ]
  },
  {
    title: "Automação de Follow-up",
    description: "Recupere leads 'esquecidos' sem esforço manual. A IA identifica leads inativos e inicia cadências de reativação personalizadas.",
    icon: RefreshCw,
    color: "primary",
    features: [
      "Reativação inteligente de inativos",
      "Cadências com tom de voz dinâmico",
      "Análise de sentimento nas respostas",
      "Notificação imediata da retomada"
    ],
    examples: [
      {
        ctx: "Lead inativo há 12 dias",
        msg: "Oi Carlos, vi que não avançamos com a proposta. Gostaria de uma nova demo?",
        resTime: "5 minutos",
        action: "AGENDA: 15:00h"
      },
      {
        ctx: "Proposta enviada há 3 dias",
        msg: "Oi Ana, conseguiu revisar o orçamento? Tenho um horário livre amanhã.",
        resTime: "12 minutos",
        action: "LIGAR AGORA"
      },
      {
        ctx: "Informativo enviado há 7 dias",
        msg: "Olá Roberto, nosso novo dashboard foi lançado. Quer dar uma olhada?",
        resTime: "2 minutos",
        action: "DEMO MARCADA"
      }
    ]
  }
];

function ServiceMockup({ service, index }: { service: any, index: number }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIdx((prev) => (prev + 1) % service.examples.length);
    }, 3000); // 3 seconds per example
    return () => clearInterval(timer);
  }, [service.examples.length]);

  const activeExample = service.examples[activeIdx];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <div className="flex-1 relative w-full aspect-video lg:aspect-square group/mockup">
      <div className={`absolute inset-0 bg-${service.color}/10 blur-[80px] rounded-full`} />
      <div className="relative glass-card p-4 md:p-8 rounded-3xl border-white/10 h-full flex flex-col overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/5 overflow-hidden">
          <motion.div 
            key={activeIdx}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
            className={`h-full bg-${service.color}`}
          />
        </div>
        {/* Header do Mock */}
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-white/40 uppercase tracking-tighter">
            {activeExample?.id || "AUTOMATION_ACTIVE"}
          </div>
        </div>

        {/* Conteúdo Dinâmico */}
        <div className="flex-1 flex flex-col justify-center overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full"
            >
              {index === 0 && (
                <div className="space-y-4">
                  <div className="flex flex-col gap-2 max-w-[80%]">
                    <span className="text-[10px] text-white/30 ml-2">Lead Prospect • {activeExample.niche}</span>
                    <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5 text-xs text-white/70">
                      {activeExample.userMsg}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 max-w-[85%] self-end items-end">
                    <span className="text-[10px] text-secondary/50 mr-2">SDR Digital (IA)</span>
                    <div className="bg-secondary/10 p-3 rounded-2xl rounded-tr-none border border-secondary/20 text-xs text-white/90">
                      {activeExample.aiMsg}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-white/30 italic">{activeExample.footer}</span>
                  </div>
                </div>
              )}

              {index === 1 && (
                <div className="space-y-6">
                  <div className="glass-card p-4 border-white/5 bg-white/5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-tertiary/20 flex items-center justify-center border border-tertiary/30">
                      <Target className="w-6 h-6 text-tertiary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-white">{activeExample.lead}</h4>
                      <p className="text-[10px] text-white/40">{activeExample.role}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-tertiary text-lg font-bold">{activeExample.score}</div>
                      <div className="text-[9px] text-white/30 uppercase">Score Match</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                      <div className="text-[9px] text-white/30 uppercase">Identificado como</div>
                      <div className="text-xs text-green-400 font-medium flex items-center gap-1">
                        <Check className="w-3 h-3" /> {activeExample.status}
                      </div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                      <div className="text-[9px] text-white/30 uppercase">Segmento</div>
                      <div className="text-xs text-white/80 font-medium">{activeExample.niche}</div>
                    </div>
                  </div>
                  <div className="bg-tertiary/5 p-3 rounded-xl border border-tertiary/10 flex items-center justify-between">
                    <span className="text-[10px] text-tertiary">{activeExample.tag}</span>
                    <TrendingUp className="w-4 h-4 text-tertiary" />
                  </div>
                </div>
              )}

              {index === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/40">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px]">{activeExample.ctx}</span>
                  </div>
                  <div className="relative pl-6 border-l border-white/10 space-y-4">
                    <div className="space-y-1">
                      <div className="text-[10px] text-primary/60 font-medium">Reativação Automática</div>
                      <p className="text-[11px] text-white/60 bg-primary/5 p-2 rounded-lg border border-primary/10">
                        "{activeExample.msg}"
                      </p>
                    </div>
                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-green-400 font-bold uppercase">Lead Reativado!</span>
                        <span className="text-[9px] text-white/40">Respondeu em {activeExample.resTime}</span>
                      </div>
                      <div className="px-3 py-1 bg-green-500/20 rounded-full text-[9px] text-green-400 font-bold uppercase tracking-wider">
                        {activeExample.action}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover/mockup:opacity-100 transition-opacity">
          {service.examples.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > activeIdx ? 1 : -1);
                setActiveIdx(i);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeIdx ? 'bg-white w-4' : 'bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="services" className="py-40 px-8 max-w-7xl mx-auto relative">
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
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-4xl md:text-5xl font-headline font-bold text-white">{service.title}</h3>
                <p className="text-on-surface-variant text-xl font-body leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 font-body text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="glass-button text-white px-8 py-3 rounded-xl font-bold flex items-center gap-3 group text-sm no-underline w-fit">
                Saiba Mais
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <ServiceMockup service={service} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
