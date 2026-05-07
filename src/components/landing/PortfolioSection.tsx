import { motion } from "framer-motion";

const projects = [
  {
    title: "PermutApp",
    description:
      "Plataforma modular de intercambios con microservicios, autenticación y servicios independientes.",
    tags: ["Spring Boot", "Supabase", "Microservicios"],
    type: "Backend + producto",
  },
  {
    title: "Ruta Grano",
    description:
      "App móvil para descubrir cafeterías de especialidad con mapas, reseñas y rutas personalizadas.",
    tags: ["React Native", "Mapbox", "Supabase", "Mobile"],
    type: "App móvil",
  },
  {
    title: "Chatbot-PYME IA",
    description: "IA conversacional para automatizar atención al cliente en negocios locales.",
    tags: ["FastAPI", "Ollama", "LLM Local", "Python"],
    type: "Automatización IA",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 8 }}
    >
      <div className="group grid gap-5 border-t border-[#a41420]/18 py-8 md:grid-cols-[0.3fr_0.75fr_1fr] md:items-start">
        <span className="text-sm font-black text-[#cdb8b6]">0{index + 1}</span>
        <div>
          <p className="mb-3 text-xs font-black uppercase text-[#a41420]">{project.type}</p>
          <h3 className="text-3xl font-black leading-none text-[#4e2b2e] md:text-5xl">
            {project.title}
          </h3>
        </div>

        <div className="space-y-4">
          <p className="max-w-2xl text-base leading-relaxed text-[#7d6868]">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f6eeee] px-3 py-1 text-xs font-bold text-[#7d6868]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-[#d7c6c8] px-4 py-10 md:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#a41420]/35 bg-[#fffdfb] px-6 py-12 shadow-2xl shadow-[#4e2b2e]/10 md:px-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-black uppercase text-[#a41420]">Proyectos</p>
            <h2 className="text-4xl font-black leading-none text-[#4e2b2e] md:text-6xl">
              Trabajo reciente
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-[#7d6868] md:ml-auto">
            Muestras de criterio técnico aplicado: producto, diseño de flujo, backend e IA.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-px origin-left bg-[#a41420]"
        />

        <div className="border-b border-[#a41420]/18">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
