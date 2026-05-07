import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Mail, MessageCircle, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const whatsappUrl =
  "https://wa.me/56979946591?text=Hola%20Jos%C3%A9%2C%20vi%20tu%20landing%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.";

const focusAreas = ["Landing pages", "Apps móviles", "Automatización IA", "Backend escalable"];
const trustStrip = [
  { icon: Code2, label: "React" },
  { icon: Database, label: "Spring Boot" },
  { icon: Sparkles, label: "IA aplicada" },
  { icon: MessageCircle, label: "WhatsApp ready" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#d7c6c8] px-4 py-24 md:px-6 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(0,122,255,0.18),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(0,188,125,0.18),transparent_28%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-12rem)] max-w-6xl flex-col overflow-hidden rounded-[2.5rem] bg-[#fffdfb] px-6 py-8 shadow-2xl shadow-foreground/15 md:px-10 md:py-9">
        <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-[#a41420]" />
        <div className="pointer-events-none absolute inset-x-0 top-16 text-center text-[4.6rem] font-black uppercase leading-[0.85] text-[#f3e8e6] sm:text-[7rem] md:top-20 md:text-[10rem] lg:text-[12.5rem]">
          José
          <br />
          Concha
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_78%,#fffdfb_94%)]" />

        <div className="relative z-10 flex items-center justify-end">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-[#4e2b2e] ring-1 ring-emerald-200 md:text-sm"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.9)]" />
            Disponible
          </a>
        </div>

        <div className="relative z-10 grid flex-1 items-center gap-8 pt-10 md:grid-cols-[0.75fr_1.1fr_0.75fr] md:pt-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 space-y-8 text-center md:order-1 md:text-left"
          >
            <p className="text-lg font-black leading-tight text-[#4e2b2e] md:text-xl">
              Desarrollador enfocado en crear páginas, apps y soluciones con IA que se ven bien y
              funcionan de verdad.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a41420] px-5 py-3 text-sm font-black text-white shadow-xl shadow-[#a41420]/20 transition-all hover:-translate-y-0.5 hover:bg-[#8f111b]"
              >
                Hablar por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:jossecconcha@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#eadbd8] bg-white px-5 py-3 text-sm font-bold text-[#4e2b2e] transition-all hover:-translate-y-0.5 hover:border-[#a41420]/30"
              >
                <Mail className="h-4 w-4" />
                Enviar Gmail
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 text-center md:order-2"
          >
            <div className="relative mx-auto h-[34rem] max-w-sm md:h-[30rem] md:max-w-lg lg:h-[34rem]">
              <div className="absolute inset-x-8 bottom-4 top-18 rounded-full bg-[radial-gradient(circle,rgba(164,20,32,0.22),transparent_68%)] blur-2xl md:top-20" />
              <div className="absolute inset-x-6 bottom-0 z-20 h-28 bg-gradient-to-t from-[#fffdfb] to-transparent" />
              <img
                src={profilePhoto}
                alt="Foto de José Concha"
                className="absolute inset-x-6 bottom-0 z-10 h-[28rem] w-[calc(100%-3rem)] rounded-b-[9rem] rounded-t-[2.25rem] object-cover object-center shadow-2xl shadow-[#4e2b2e]/15 md:h-[28rem] lg:h-[32rem]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-3 mx-auto w-full max-w-xs space-y-4 text-center md:text-left"
          >
            {focusAreas.map((area, index) => (
              <p
                key={area}
                className={`text-lg font-semibold ${
                  index === 1 ? "text-[#4e2b2e]" : "text-[#d4c2bf]"
                }`}
              >
                {area}
              </p>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative z-20 mt-6 grid gap-3 border-t border-[#f0e4e2] pt-5 text-[#4e2b2e] sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustStrip.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-3 md:justify-start"
            >
              <item.icon className="h-5 w-5 text-[#a41420]" />
              <span className="text-sm font-black">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
