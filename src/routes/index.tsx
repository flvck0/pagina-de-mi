import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { TechStackSection } from "@/components/landing/TechStackSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "José Concha | Desarrollo, IA y soluciones digitales" },
      {
        name: "description",
        content:
          "Conoce los servicios y proyectos de José Concha: desarrollo web, apps, IA, automatización y backend.",
      },
      { property: "og:title", content: "José Concha | Desarrollo, IA y soluciones digitales" },
      {
        property: "og:description",
        content: "Servicios, proyectos y contacto directo por WhatsApp o Gmail.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TechStackSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
