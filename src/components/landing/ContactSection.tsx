import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, MessageCircle, Send } from "lucide-react";

const email = "jossecconcha@gmail.com";
const whatsappPhone = "56979946591";
const defaultMessage = "Hola José, vi tu landing y me gustaría hablar sobre un proyecto.";
const buildWhatsappUrl = (message: string = defaultMessage) =>
  `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
const contactOptions = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    description: "Respuesta directa para coordinar rápido.",
    icon: MessageCircle,
  },
  {
    id: "gmail",
    label: "Gmail",
    description: "Ideal si quieres explicar el proyecto con más detalle.",
    icon: Mail,
  },
] as const;

type ContactMethod = (typeof contactOptions)[number]["id"];

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [contactMethod, setContactMethod] = useState<ContactMethod>("whatsapp");

  const composedMessage = [
    `Hola José, soy ${formState.name}.`,
    "",
    formState.message,
    ...(contactMethod === "gmail" ? ["", `Mi correo para responder es: ${formState.email}`] : []),
  ].join("\n");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (contactMethod === "whatsapp") {
      window.open(buildWhatsappUrl(composedMessage), "_blank", "noopener,noreferrer");
      return;
    }

    const subject = encodeURIComponent(`Nuevo proyecto de ${formState.name}`);
    const body = encodeURIComponent(composedMessage);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-[#d7c6c8] px-4 py-10 md:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#a41420]/45 bg-[#fffdfb] px-6 py-12 shadow-2xl shadow-[#4e2b2e]/10 md:px-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-black uppercase text-[#a41420]">Contacto</p>
            <h2 className="text-4xl font-black leading-none text-[#4e2b2e] md:text-6xl">
              Hablemos
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-[#7d6868] md:ml-auto">
            Cuéntame qué necesitas y se abrirá el canal elegido con tu mensaje listo para enviar.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 h-px origin-left bg-[#a41420]"
        />

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          whileHover={{ y: -4 }}
          className="rounded-[2rem] border border-[#a41420]/35 bg-[#f8f0ef] p-5 md:p-7"
        >
          <fieldset className="mb-6">
            <legend className="mb-3 text-sm font-black text-[#4e2b2e]">
              Elige cómo prefieres conversar
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {contactOptions.map((option) => {
                const Icon = option.icon;
                const selected = contactMethod === option.id;

                return (
                  <label
                    key={option.id}
                    style={{ transitionDuration: "220ms" }}
                    className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                      selected
                        ? "border-[#a41420] bg-[#a41420] text-white shadow-xl shadow-[#a41420]/15"
                        : "border-[#eadbd8] bg-[#fffdfb] text-[#4e2b2e] hover:-translate-y-0.5 hover:border-[#a41420]/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="contact-method"
                      value={option.id}
                      checked={selected}
                      onChange={() => setContactMethod(option.id)}
                      className="sr-only"
                    />
                    <span className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                          selected ? "bg-white/12" : "bg-[#f6eeee]"
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${selected ? "text-white" : "text-[#a41420]"}`} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{option.label}</span>
                        <span
                          className={`mt-1 block text-xs leading-relaxed ${
                            selected ? "text-white/75" : "text-[#7d6868]"
                          }`}
                        >
                          {option.description}
                        </span>
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className={`grid gap-5 ${contactMethod === "gmail" ? "sm:grid-cols-2" : ""}`}>
            <label className="space-y-2">
              <span className="text-sm font-bold text-[#4e2b2e]">Nombre</span>
              <input
                type="text"
                autoComplete="name"
                placeholder="Ej: Bastián"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full rounded-2xl border border-[#eadbd8] bg-[#fffdfb] px-4 py-3.5 text-sm text-[#4e2b2e] placeholder:text-[#b49d9b] outline-none transition-colors focus:border-[#a41420] focus:ring-1 focus:ring-[#a41420]"
              />
            </label>
            {contactMethod === "gmail" && (
              <label className="space-y-2">
                <span className="text-sm font-bold text-[#4e2b2e]">Correo de respuesta</span>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="tu@correo.com"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-2xl border border-[#eadbd8] bg-[#fffdfb] px-4 py-3.5 text-sm text-[#4e2b2e] placeholder:text-[#b49d9b] outline-none transition-colors focus:border-[#a41420] focus:ring-1 focus:ring-[#a41420]"
                />
              </label>
            )}
          </div>

          <label className="mt-5 block space-y-2">
            <span className="text-sm font-bold text-[#4e2b2e]">Mensaje</span>
            <textarea
              placeholder="Ej: Necesito una landing para ofrecer mis servicios y recibir contactos por WhatsApp."
              rows={5}
              required
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full resize-none rounded-2xl border border-[#eadbd8] bg-[#fffdfb] px-4 py-3.5 text-sm text-[#4e2b2e] placeholder:text-[#b49d9b] outline-none transition-colors focus:border-[#a41420] focus:ring-1 focus:ring-[#a41420]"
            />
          </label>

          <p className="mt-4 text-xs leading-relaxed text-[#7d6868]">
            No se guarda información en esta página. Al enviar, se abre{" "}
            {contactMethod === "whatsapp" ? "WhatsApp" : "Gmail"} con el mensaje preparado.
          </p>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#a41420] px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-[#a41420]/15 transition-all hover:-translate-y-0.5 hover:bg-[#8f111b]"
          >
            <Send className="h-4 w-4" />
            Enviar por {contactMethod === "whatsapp" ? "WhatsApp" : "Gmail"}
          </button>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href="https://github.com/flvck0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-[#7d6868] transition-colors hover:text-[#a41420]"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a
            href={buildWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-[#7d6868] transition-colors hover:text-[#a41420]"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-sm font-bold text-[#7d6868] transition-colors hover:text-[#a41420]"
          >
            <Mail className="h-5 w-5" />
            Gmail
          </a>
        </motion.div>
      </div>
    </section>
  );
}
