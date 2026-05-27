import { Globe, Smartphone, Cloud, Palette, Database, Wrench, FlaskConical, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon:        LucideIcon;
  title:       string;
  description: string;
  tags:        readonly string[];
}

export const SERVICES: Service[] = [
  {
    icon:        Code2,
    title:       "Desarrollo Web",
    description: "Aplicaciones web completas con React, Next.js, Django y FastAPI. Desde interfaces intuitivas hasta APIs robustas.",
    tags:        ["React", "Next.js", "Django", "FastAPI"],
  },
  {
    icon:        Smartphone,
    title:       "Apps Móviles",
    description: "Desarrollo nativo y multiplataforma con Kotlin, Swift y Kotlin Multiplatform (KMM) para Android e iOS.",
    tags:        ["Kotlin", "Swift", "KMM", "React Native"],
  },
  {
    icon:        Cloud,
    title:       "Aplicaciones en la Nube",
    description: "Despliegue y arquitectura en Microsoft Azure. CI/CD, APIs en la nube y servicios escalables para producción.",
    tags:        ["Microsoft Azure", "CI/CD", "APIs", "Vercel"],
  },
  {
    icon:        Palette,
    title:       "Diseño Web & UI/UX",
    description: "Interfaces visualmente atractivas, accesibles (WCAG) y centradas en el usuario. Design systems con Tailwind y Figma.",
    tags:        ["Tailwind CSS", "Figma", "WCAG", "Design Systems"],
  },
  {
    icon:        Database,
    title:       "Bases de Datos",
    description: "Modelado y gestión de datos relacionales y NoSQL. Diseño de esquemas eficientes para aplicaciones de alto rendimiento.",
    tags:        ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"],
  },
  {
    icon:        Code2,
    title:       "Software Personalizado",
    description: "Soluciones a medida con C#, .NET y Python. Sistemas adaptados a procesos específicos de negocio.",
    tags:        ["C#", ".NET", "Python", "ASP.NET"],
  },
  {
    icon:        FlaskConical,
    title:       "Pruebas de Software",
    description: "Testing funcional, integración y validación de sistemas. Gestión de versiones y control de calidad antes del deploy.",
    tags:        ["Testing", "QA", "Git", "Code Review"],
  },
  {
    icon:        Wrench,
    title:       "Investigación & IA",
    description: "Desarrollo con inteligencia artificial: NLP, machine learning, modelos de lenguaje y agentes autónomos aplicados a problemas reales.",
    tags:        ["NLP", "Machine Learning", "LLMs", "Python"],
  },
];

// Silencia advertencia de import no usado (Globe se exporta por si se necesita)
export { Globe };
