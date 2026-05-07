import { motion } from "framer-motion";

const projects = [
  {
    title: "PermutApp",
    description:
      "Plataforma modular de intercambios construida con una arquitectura de microservicios. Gestión inteligente de permutas con verificación de identidad en tiempo real.",
    tags: ["Spring Boot", "Supabase", "Amazon Rekognition", "Microservicios"],
    gradient: "from-blue-500/10 to-indigo-500/10",
    accent: "bg-blue-500",
  },
  {
    title: "Ruta Grano",
    description:
      "App móvil para el descubrimiento de cafeterías de especialidad. Mapas interactivos, reseñas y rutas personalizadas para amantes del café.",
    tags: ["React Native", "Mapbox", "Supabase", "Mobile"],
    gradient: "from-amber-500/10 to-orange-500/10",
    accent: "bg-amber-600",
  },
  {
    title: "Chatbot-PYME IA",
    description:
      "Solución full-stack de IA conversacional para automatizar la atención al cliente en negocios locales. Modelos LLM ejecutados localmente para máxima privacidad.",
    tags: ["FastAPI", "Ollama", "LLM Local", "Python"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    accent: "bg-emerald-500",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br ${project.gradient} p-8 backdrop-blur-sm transition-all duration-500 hover:border-border hover:shadow-xl hover:shadow-primary/5 md:p-10`}
      >
        {/* Glass overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-card/40 backdrop-blur-sm" />

        <div className="relative z-10 space-y-5">
          <div className="flex items-center gap-3">
            <div className={`h-2.5 w-2.5 rounded-full ${project.accent}`} />
            <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {project.title}
            </h3>
          </div>

          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
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
    <section id="portfolio" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Proyectos destacados
          </h2>
        </motion.div>

        <div className="grid gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}