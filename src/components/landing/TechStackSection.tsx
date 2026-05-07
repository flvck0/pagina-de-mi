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
    <section id="stack" className="bg-[#d7c6c8] px-4 py-10 md:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#a41420]/45 bg-[#4e2b2e] px-6 py-12 text-[#fffdfb] shadow-2xl shadow-[#4e2b2e]/15 md:px-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-black uppercase text-[#ffccd0]">Stack</p>
            <h2 className="text-4xl font-black leading-none md:text-6xl">Herramientas claras</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-[#e9d7d5] md:ml-auto">
            Uso tecnología moderna cuando ayuda al producto, no para decorar el problema.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 h-px origin-left bg-[#ffccd0]"
        />

        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="inline-flex items-center gap-3 rounded-full border border-[#ffccd0]/30 bg-white/8 px-4 py-3 backdrop-blur-sm"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className="text-sm font-bold">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
