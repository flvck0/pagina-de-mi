import { motion } from "framer-motion";
import { Cpu, GraduationCap, Rocket } from "lucide-react";

const trustItems = [
  {
    icon: GraduationCap,
    title: "Ingeniería Informática",
    description:
      "Formación en Ingeniería Informática con foco en Inteligencia Artificial, combinando fundamentos técnicos con aplicación práctica.",
  },
  {
    icon: Cpu,
    title: "Especialización en IA",
    description:
      "Trabajo con modelos de lenguaje, automatización y procesamiento de datos para crear soluciones útiles en contextos reales.",
  },
  {
    icon: Rocket,
    title: "Despliegue Real",
    description:
      "Me enfoco en llevar ideas a productos funcionales, con buenas prácticas, claridad técnica y una base lista para crecer.",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="bg-[#d7c6c8] px-4 py-10 md:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#a41420]/35 bg-[#fffdfb] px-6 py-12 shadow-2xl shadow-[#4e2b2e]/10 md:px-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-black uppercase text-[#a41420]">Sobre mí</p>
            <h2 className="text-4xl font-black leading-none text-[#4e2b2e] md:text-6xl">
              Simple, técnico, directo
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-[#7d6868] md:ml-auto">
            Combino criterio técnico, diseño claro y ejecución práctica para que cada proyecto se
            vea bien y funcione bien.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 h-px origin-left bg-[#a41420]"
        />

        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#a41420]/25 bg-[#a41420]/15 md:grid-cols-3">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-[#fffdfb] p-7"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#f6eeee]">
                <item.icon className="h-5 w-5 text-[#a41420]" />
              </div>
              <h3 className="mb-3 text-xl font-black text-[#4e2b2e]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#7d6868]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
