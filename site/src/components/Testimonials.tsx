import { motion } from "motion/react";
import { Star } from "lucide-react";
import mitchelAvatar from "../../doc/mitchel foto.PNG";
import marcusAvatar from "../../doc/imagem para perfil linkedin.png";
import turingAvatar from "../../doc/transferir.jpeg";

const testimonials = [
  {
    name: "Mitchel Mendes",
    role: "CTO Techflow",
    content: "O código do futuro não será apenas escrito, será orquestrado por inteligências que amplificam a capacidade humana em escala exponencial.",
    rating: 5,
    avatar: mitchelAvatar
  },
  {
    name: "Marcus Cseko",
    role: "CEO TechFlow",
    content: "Estamos na fronteira de uma revolução onde a automação deixará de ser uma ferramenta para se tornar o motor de toda inovação empresarial.",
    rating: 5,
    avatar: marcusAvatar
  },
  {
    name: "Alan Turing",
    role: "Pai da Computação",
    content:"Às vezes, as pessoas que ninguém imagina que farão grandes coisas são as que fazem coisas que ninguém pode imaginar.",
    rating: 5,
    avatar: turingAvatar
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-40 px-8 max-w-7xl mx-auto relative">
      <div className="bg-blob-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      
      <div className="text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-headline font-bold text-white"
        >
          Visão dos nossos <span className="text-gradient-logo">Desenvolvedores</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="glass-card p-10 rounded-3xl border-white/10 hover:border-primary/30 transition-all group"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-tertiary text-tertiary" />
              ))}
            </div>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed mb-10 italic">
              "{testimonial.content}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary p-[1px] shrink-0">
                <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-white font-bold">{testimonial.name[0]}</span>
                  )}
                </div>
              </div>
              <div>
                <div className="text-white font-bold">{testimonial.name}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
