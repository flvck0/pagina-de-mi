import { useState, useEffect } from "react";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#services" },
  { label: "Proyectos", href: "#portfolio" },
  { label: "Stack", href: "#stack" },
  { label: "Sobre mí", href: "#trust" },
  { label: "Contacto", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-all duration-300 ${
        scrolled ? "pointer-events-none" : "bg-transparent"
      }`}
    >
      <nav
        className={`pointer-events-auto mx-auto flex max-w-6xl items-center justify-between border px-4 py-3 transition-all duration-300 md:px-5 ${
          scrolled
            ? "rounded-2xl border-border/70 bg-card/85 shadow-lg shadow-foreground/5 backdrop-blur-2xl"
            : "rounded-2xl border-transparent bg-card/55 backdrop-blur-xl"
        }`}
      >
        <a
          href="#hero"
          onClick={closeMobileMenu}
          className="flex items-center gap-2 text-sm font-semibold text-foreground md:text-base"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-foreground text-xs font-bold text-background">
            JC
          </span>
          José Concha
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all hover:bg-foreground/85 md:inline-flex"
        >
          Cotizar
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-border bg-card md:hidden"
          aria-label="Menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`block h-0.5 w-5 bg-foreground transition-all ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-all ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-all ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="mt-3 rounded-2xl border border-border bg-card/95 shadow-xl shadow-foreground/10 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
