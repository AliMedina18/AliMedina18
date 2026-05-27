# MadeByAli — Portfolio Digital

Portfolio personal construido con Next.js 15, Tailwind CSS y TypeScript.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Estilos:** Tailwind CSS v3
- **Lenguaje:** TypeScript
- **Fuentes:** Archivo + Space Grotesk (Google Fonts)
- **Iconos:** Lucide React
- **Deploy:** Vercel

## Estructura

```
madebyali/
├── app/
│   ├── globals.css       # Design system, variables CSS, utilidades
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Página principal
├── components/
│   ├── Navbar.tsx        # Navegación fixed + mobile menu
│   ├── Hero.tsx          # Hero section con CTAs
│   ├── Projects.tsx      # Grid de proyectos
│   ├── Metrics.tsx       # Métricas de impacto + capacidades
│   ├── DarkStats.tsx     # Barra de estadísticas oscura
│   ├── Skills.tsx        # Servicios + stack tecnológico
│   ├── CaseStudies.tsx   # Casos de éxito + testimonial
│   ├── About.tsx         # Sección sobre mí
│   ├── Contact.tsx       # Opciones de contacto + CTA final
│   ├── Footer.tsx        # Footer con links y redes
│   └── SectionWrapper.tsx # HOC para animaciones scroll
├── .env.local            # Variables de entorno
└── MAGIC_MCP_SETUP.md    # Instrucciones Magic MCP
```

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Design System

### Colores (Dark Purple Theme)

| Variable | Valor | Uso |
|----------|-------|-----|
| `--bg-deep` | `#07070f` | Fondo principal |
| `--bg-base` | `#0d0d1a` | Secciones alternadas |
| `--bg-elevated` | `#13132a` | Cards y paneles |
| `--accent` | `#7c3aed` | CTAs y acentos |
| `--foreground` | `#f4f4f5` | Texto principal |

### Fuentes

- **Headings:** `font-heading` → Archivo (700-900)
- **Body:** `font-sans` → Space Grotesk (400-600)

### Clases utilitarias clave

- `.text-gradient` — Texto con gradiente violeta
- `.glass` — Efecto glassmorphism
- `.glow-border` — Borde con glow violeta
- `.card-hover` — Hover con elevación y sombra
- `.section-fade` — Fade-in al hacer scroll

## Magic MCP

Ver `MAGIC_MCP_SETUP.md` para configurar el MCP de 21st.dev.
