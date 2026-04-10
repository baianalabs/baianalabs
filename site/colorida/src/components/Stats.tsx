import { motion } from "motion/react";

const stats = [
  { label: "Parceiros", value: "240+" },
  { label: "Clientes", value: "5M+" },
  { label: "Cobertura", value: "450+" },
  { label: "Lucro", value: "22%" },
  { label: "Interesse", value: "8.03%" },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-surface-container-low/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-headline font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xs font-label text-white/40 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
