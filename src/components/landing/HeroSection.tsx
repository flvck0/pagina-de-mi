import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-apple-bg via-apple-bg to-transparent" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-card shadow-2xl shadow-primary/10 md:h-44 md:w-44">
            <img src={profilePhoto} alt="Foto de perfil" className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl">
            Ingeniería aplicada{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              a la Inteligencia Artificial
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Creo soluciones digitales robustas y escalables, combinando ingeniería de software moderna
            con modelos de IA para resolver problemas reales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-4"
        >
          <a
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/85"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-accent"
          >
            Contacto
          </a>
        </motion.div>
      </div>
    </section>
  );
}