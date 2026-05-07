import { motion } from "framer-motion";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "Python", icon: "🐍" },
  { name: "Supabase", icon: "⚡" },
  { name: "LLM / IA", icon: "🧠" },
  { name: "FastAPI", icon: "🚀" },
];

export function TechStackSection() {
  return (
    <section id="stack" className="bg-card px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Tecnologías
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Stack tecnológico
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 md:gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-apple-bg/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="text-3xl transition-transform duration-300 group-hover:scale-110 md:text-4xl">
                {tech.icon}
              </span>
              <span className="text-xs font-medium text-muted-foreground md:text-sm">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}