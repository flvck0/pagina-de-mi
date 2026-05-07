import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Desarrollo web",
    label: "01",
    description:
      "Landing pages y sitios profesionales con una dirección visual clara, rápidos de navegar y pensados para convertir visitas en contactos.",
  },
  {
    title: "Apps y productos digitales",
    label: "02",
    description:
      "Interfaces simples para productos móviles o web, con flujos ordenados y una base preparada para iterar sin romper todo.",
  },
  {
    title: "IA y automatización",
    label: "03",
    description:
      "Chatbots, asistentes y automatizaciones útiles para responder mejor, ordenar procesos y ahorrar tiempo operativo.",
  },
  {
    title: "Backend y microservicios",
    label: "04",
    description:
      "APIs, autenticación, bases de datos y servicios robustos para que la experiencia bonita también tenga una base sólida.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#d7c6c8] px-4 py-10 md:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#a41420]/35 bg-[#fffdfb] px-6 py-12 shadow-2xl shadow-[#4e2b2e]/10 md:px-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-6 md:grid-cols-[0.65fr_1fr] md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-black uppercase text-[#a41420]">Servicios</p>
            <h2 className="text-4xl font-black leading-none text-[#4e2b2e] md:text-6xl">
              Qué puedo construir
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-[#7d6868] md:ml-auto">
            Diseño visual, lógica de producto y desarrollo real en una sola entrega: simple por
            fuera, bien pensado por dentro.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-px origin-left bg-[#a41420]"
        />

        <div className="divide-y divide-[#a41420]/18">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ x: 8 }}
              className="group grid gap-4 py-7 md:grid-cols-[0.22fr_0.58fr_1fr_auto] md:items-center"
            >
              <span className="text-sm font-black text-[#cdb8b6]">{service.label}</span>
              <h3 className="text-2xl font-black text-[#4e2b2e] md:text-3xl">{service.title}</h3>
              <p className="max-w-2xl text-sm leading-relaxed text-[#7d6868] md:text-base">
                {service.description}
              </p>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#a41420]/25 text-[#a41420] opacity-0 transition-all group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
