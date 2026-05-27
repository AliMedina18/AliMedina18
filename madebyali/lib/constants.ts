/**
 * MadeByAli — Site Constants
 * Edita este archivo para personalizar todo el contenido del sitio
 */

export const SITE_CONFIG = {
  name: "MadeByAli",
  fullName: "Ali Medina",
  role: "Diseñadora & Desarrolladora Web",
  tagline: "Diseño Digital para Marcas que Destacan.",
  description:
    "Creo experiencias web que combinan estética premium con rendimiento real. Desde el concepto hasta el código, cada píxel tiene un propósito.",
  email: "aliciamedina@k11technologies.com",
  url: "https://madebyali.dev",
  available: true,
  availableText: "Disponible para proyectos — 2026",
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: `mailto:${SITE_CONFIG.email}`,
} as const;

export const NAV_LINKS = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Casos de éxito", href: "#casos" },
] as const;

export const HERO_STATS = [
  { value: "3+", label: "Años de experiencia" },
  { value: "20+", label: "Proyectos entregados" },
  { value: "100%", label: "Satisfacción" },
] as const;

export const DARK_STATS = [
  { value: "20+", label: "Proyectos Entregados" },
  { value: "99.9%", label: "Uptime Garantizado" },
  { value: "3", label: "Países de Operación" },
  { value: "$2M+", label: "ROI Generado" },
] as const;
