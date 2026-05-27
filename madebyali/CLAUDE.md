# MadeByAli — Guía para Claude Code

Sitio web portfolio personal de Ali Medina. Next.js 15 + Tailwind CSS + TypeScript.
Estética: **dark purple premium**, similar a Grupo BGSC Digital Platform.

---

## Comandos esenciales

```bash
npm install        # Instalar dependencias (solo primera vez)
npm run dev        # Servidor de desarrollo → http://localhost:3000
npm run build      # Build de producción
npm run lint       # Verificar código con ESLint
```

---

## Estructura del proyecto

```
madebyali/
├── app/
│   ├── globals.css          # Design system completo (variables CSS, utilidades)
│   ├── layout.tsx           # Root layout + metadata SEO
│   └── page.tsx             # Página principal — ensambla todos los componentes
│
├── components/
│   ├── Navbar.tsx           # Navegación fija con blur al scroll + menú mobile
│   ├── Hero.tsx             # Hero section: headline, CTAs, blobs animados
│   ├── Projects.tsx         # Grid de proyectos con hover overlay
│   ├── Metrics.tsx          # KPIs de impacto + lista de capacidades
│   ├── DarkStats.tsx        # Barra oscura con 4 estadísticas grandes
│   ├── Skills.tsx           # Servicios (4 cards) + stack tecnológico
│   ├── CaseStudies.tsx      # Casos de éxito + testimonial
│   ├── About.tsx            # Sección sobre mí + avatar + badges
│   ├── Contact.tsx          # 3 opciones de contacto + CTA principal
│   ├── Footer.tsx           # Footer con links, redes sociales
│   └── SectionWrapper.tsx   # HOC: fade-in al scroll (IntersectionObserver)
│
├── lib/
│   ├── constants.ts         # ← EDITA AQUÍ: todo el contenido del sitio
│   └── utils.ts             # Funciones utilitarias (cn, staggerDelay, etc.)
│
├── types/
│   └── index.ts             # Tipos TypeScript compartidos
│
├── public/                  # Assets estáticos (imágenes, favicon, etc.)
├── .env.local               # Variables de entorno (no commitear)
├── MAGIC_MCP_SETUP.md       # Instrucciones para Magic MCP de 21st.dev
└── CLAUDE.md                # Este archivo
```

---

## Design System

### Paleta de colores (dark purple)

| Token CSS | Valor | Tailwind | Uso |
|-----------|-------|----------|-----|
| `--bg-deep` | `#07070f` | `bg-[#07070f]` | Fondo principal |
| `--bg-base` | `#0d0d1a` | `bg-[#0d0d1a]` | Secciones alternas |
| `--bg-elevated` | `#13132a` | `bg-[#13132a]` | Cards y paneles |
| `--accent` | `#7c3aed` | `bg-violet-600` | CTAs primarios |
| `--accent-light` | `#8b5cf6` | `bg-violet-500` | Hover de CTAs |
| `--foreground` | `#f4f4f5` | `text-zinc-100` | Texto principal |
| `--foreground-muted` | `#a1a1aa` | `text-zinc-400` | Texto secundario |
| `--border` | `rgba(255,255,255,0.08)` | `border-white/[0.08]` | Bordes de cards |

### Tipografía

- **Headings:** `font-heading` → Archivo (700–900)
- **Body:** `font-sans` → Space Grotesk (400–600)

### Clases utilitarias clave (`globals.css`)

```css
.text-gradient      /* Texto con gradiente violeta */
.text-gradient-white /* Texto blanco a violeta */
.glass              /* Glassmorphism: blur + border sutil */
.glow-border        /* Borde violeta con box-shadow */
.card-hover         /* Hover: translateY(-4px) + sombra violeta */
.shimmer-card       /* Efecto shimmer al hover (pseudo-element) */
.section-fade       /* Fade-in al scroll (añadir clase .visible) */
.blob               /* Círculo difuminado flotante animado */
```

---

## Cómo editar el contenido

### Textos y datos del sitio
Edita `lib/constants.ts` para cambiar:
- Nombre, rol, email, tagline
- Links de redes sociales
- Estadísticas del Hero y de DarkStats
- Links de navegación

### Proyectos
Edita el array `projects` en `components/Projects.tsx`

### Casos de éxito
Edita el array `cases` en `components/CaseStudies.tsx`

### Servicios y stack
Edita `techStack` y `services` en `components/Skills.tsx`

---

## Convenciones de código

- **Componentes:** PascalCase, un archivo por componente
- **"use client"** solo en componentes con estado o eventos del navegador
- **Sin emoji como iconos** — usar `lucide-react`
- **Cursor pointer** en todos los elementos clickeables
- **Transiciones:** `duration-200` para micro, `duration-300` para cards, `duration-500` para complejas
- **Accesibilidad:** `aria-label` en botones icon-only, `aria-expanded` en toggles

## Cómo agregar una nueva sección

1. Crea `components/NuevaSeccion.tsx`
2. Envuélvela en `<SectionWrapper id="nueva" className="py-24 ...">` para animación
3. Importa y añade en `app/page.tsx` en el orden deseado

## Cómo agregar nuevas páginas

```
app/
├── page.tsx          # / (home)
├── proyectos/
│   └── page.tsx      # /proyectos
└── [slug]/
    └── page.tsx      # /cualquier-ruta
```

---

## Magic MCP (21st.dev)

Para generar componentes UI con IA directamente en Claude Code:

```bash
# Instalar una sola vez
claude mcp add magic --scope user --env API_KEY="644f6fff0d638da6979c9f5034d7ad9823375964da0cfcff4da036da71246158" -- npx -y @21st-dev/magic@latest
```

Después dentro de Claude Code: `/ui Descripción del componente que quieres`

---

## Deploy en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

Variables de entorno a configurar en Vercel Dashboard:
- `NEXT_PUBLIC_SITE_URL` → tu dominio

---

## Checklist de lanzamiento

- [ ] Cambiar textos en `lib/constants.ts`
- [ ] Agregar proyectos reales en `components/Projects.tsx`
- [ ] Subir foto/avatar real en `public/avatar.jpg` y referenciar en `About.tsx`
- [ ] Configurar links de redes sociales en `lib/constants.ts`
- [ ] Agregar `favicon.ico` en `app/`
- [ ] Probar en mobile (375px) y desktop (1440px)
- [ ] Verificar Core Web Vitals con Lighthouse
- [ ] Deploy en Vercel y configurar dominio
