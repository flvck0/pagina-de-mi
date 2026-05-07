
## Landing Page Personal — Apple Style

### Diseño
- Paleta: fondos `#f5f5f7` / blanco, texto `#1d1d1f`, acento azul eléctrico
- Tipografía SF Pro / Inter, mucho whitespace, bordes redondeados
- Glassmorphism en tarjetas, animaciones de scroll con Framer Motion
- Responsive mobile-first

### Estructura (todo en `src/routes/index.tsx` + componentes)

**1. Header** — navbar fija minimalista con links internos (scroll suave)

**2. Hero Section** — "Ingeniería aplicada a la Inteligencia Artificial", subtítulo sobre soluciones digitales, foto personal (la imagen subida)

**3. Portfolio** — 3 tarjetas glassmorphism con hover elegante:
- PermutApp (Spring Boot, Supabase, Amazon Rekognition)
- Ruta Grano (Mapbox, Supabase, móvil)
- Chatbot-PYME IA (FastAPI, Ollama)

**4. Stack Tecnológico** — Grid de iconos minimalistas: React, Spring Boot, Python, Supabase, LLM

**5. Sección de Confianza** — Formación en Ingeniería Informática + mención IA

**6. Contacto + Footer** — Formulario minimalista (nombre, email, mensaje) + links GitHub/LinkedIn

### Implementación técnica
- Instalar `framer-motion` para animaciones de scroll
- Actualizar tokens de color en `src/styles.css` para la paleta Apple
- Copiar la foto del usuario a `src/assets/` para el hero
- Crear componentes: `Header`, `HeroSection`, `ProjectCard`, `TechStack`, `TrustSection`, `ContactSection`, `Footer`
- Todo single-page con scroll, ya que es una landing personal (caso válido para hash anchors)
- SEO: title, description y og tags apropiados en head()
