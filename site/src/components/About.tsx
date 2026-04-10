import { motion } from "motion/react";
import { Users, Fingerprint, Zap, Quote } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Users,
      title: "Conexão",
      desc: "Entre pessoas, negócios e tecnologia."
    },
    {
      icon: Fingerprint,
      title: "Identidade",
      desc: "Baianidade como força, não como limite."
    },
    {
      icon: Zap,
      title: "Transformação",
      desc: "Soluções que mudam realidades de verdade."
    }
  ];

  return (
    <section id="about" className="py-40 px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Lado Esquerdo: História */}
        <div className="space-y-10">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="px-4 py-1 bg-white/5 rounded-full text-primary text-xs font-bold w-fit border border-primary/20 tracking-widest uppercase"
            >
              Nossa Essência
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-headline font-bold text-white leading-[0.9]"
            >
              Tecnologia com alma. <br/>
              <span className="text-gradient-logo">Inovação com raízes.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-on-surface-variant text-lg font-body leading-relaxed max-w-xl"
          >
            <p>
              A <span className="text-white font-bold">Baiana Labs</span> não foi planejada numa sala de reunião. Foi um reencontro. 
              Marcus Cseko e Mitchel Mendes  amigos, e agora sócios, perceberam que compartilhavam algo além da amizade: a mesma inquietação de transformar o ambiente ao redor por meio da tecnologia.
            </p>
            <p>
              De um lado, anos respirando tecnologia e enxergando possibilidades com criatividade, onde outros veem limites. 
              Do outro, mais de uma década construindo, errando, aprendendo e dominando o mercado. 
              Juntos, decidiram criar algo que fosse além de uma empresa,um projeto com alma.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 glass-card border-primary/20 bg-primary/5 rounded-3xl relative group"
          >
            <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20 group-hover:text-primary/40 transition-colors" />
            <p className="text-2xl italic font-headline text-white/90 relative z-10">
              "Não criamos apenas sistemas — criamos caminhos."
            </p>
          </motion.div>
        </div>

        {/* Lado Direito: Manifesto e Pilares */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-on-surface-variant text-lg italic">
              Nascemos com raízes profundas na cultura baiana: a força do seu povo, a criatividade que pulsa nas ruas, a resiliência de quem nunca para. E com os olhos voltados para o futuro, conectando tradição com inovação.
            </p>
            <p className="text-on-surface-variant text-lg">
              Desenvolvemos soluções para qualquer negócio que queira crescer e simplificar processos. Mais do que projetos, impulsionamos histórias.
            </p>
          </motion.div>

          {/* Pilares Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="glass-card p-6 rounded-3xl border-white/5 hover:border-primary/30 transition-all hover:-translate-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-tighter text-sm">{pillar.title}</h4>
                <p className="text-xs text-white/50 leading-tight">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-10 border-t border-white/5"
          >
            <span className="text-gradient-logo font-headline font-bold text-2xl">
              Seja bem-vindo ao futuro — com raízes.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
