import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { TechStackSection } from "@/components/landing/TechStackSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ingeniería aplicada a la Inteligencia Artificial" },
      { name: "description", content: "Portfolio personal — soluciones digitales robustas y escalables con IA, microservicios y desarrollo full-stack." },
      { property: "og:title", content: "Ingeniería aplicada a la Inteligencia Artificial" },
      { property: "og:description", content: "Portfolio personal — soluciones digitales robustas y escalables con IA." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="scroll-smooth">
      <Header />
      <HeroSection />
      <PortfolioSection />
      <TechStackSection />
      <TrustSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
