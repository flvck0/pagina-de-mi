import { motion } from "framer-motion";
import { GraduationCap, Cpu, Rocket } from "lucide-react";

const trustItems = [
  {
    icon: GraduationCap,
    title: "Ingeniería Informática",
    description: "Formación sólida en Ingeniería Informática con mención en Inteligencia Artificial, combinando fundamentos teóricos con aplicación práctica.",
  },
  {
    icon: Cpu,
    title: "Especialización en IA",
    description: "Conocimiento profundo en modelos de lenguaje, visión por computador y procesamiento de datos para crear soluciones inteligentes.",
  },
  {
    icon: Rocket,
    title: "Despliegue Real",
    description: "Experiencia llevando proyectos desde la idea hasta producción, con arquitecturas escalables y buenas prácticas de ingeniería.",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Sobre mí
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Preparado para el impacto
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-border/50 bg-card p-8 text-center transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}