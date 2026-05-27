import { Brain, Shield, Users, Droplets } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProjectResult {
  metric: string;
  label:  string;
}

export interface Project {
  company:  string;
  context:  string;
  industry: string;
  size:     string;
  role:     string;
  challenge: string;
  solution:  string;
  results:   ProjectResult[];
  icon:      LucideIcon;
  github:    string;
}

export const PROJECTS: Project[] = [
  {
    company:  "AtalaIA",
    context:  "Proyecto personal · Hackathon 2025",
    industry: "Seguridad · Agentes de IA",
    size:     "dic. 2025",
    role:     "Full Stack Developer · AI Security",
    challenge:
      "Los sistemas IA basados en LLMs carecen de una capa de seguridad que filtre tráfico malicioso y audite cada acción antes de ejecutarse.",
    solution:
      "Agente autónomo en tiempo real que analiza acciones de sistemas IA, bloquea ataques antes de su ejecución, reduce costos operativos y registra toda la actividad para auditoría.",
    results: [
      { metric: "Real-time", label: "Análisis en tiempo real" },
      { metric: "Seguro",    label: "Bloqueo de ataques"     },
      { metric: "Auditable", label: "Log de acciones"        },
    ],
    icon:   Shield,
    github: "",
  },
  {
    company:  "JUNA",
    context:  "Microsoft · Pasantía",
    industry: "Inteligencia Artificial · NLP",
    size:     "ene. 2025 – sept. 2025 · 9 meses",
    role:     "Full Stack Developer · IA & Machine Learning",
    challenge:
      "Detectar señales de violencia en conversaciones digitales para apoyar la toma de decisiones de equipos especializados.",
    solution:
      "Entrené modelos NLP con BERTin para clasificación multicategoría de violencia, construí visualizaciones interactivas con Streamlit/Plotly y desplegué el modelo como API en Microsoft Azure.",
    results: [
      { metric: "BERTin",  label: "Modelo NLP entrenado" },
      { metric: "Azure",   label: "Deploy en nube"       },
      { metric: "FastAPI", label: "API en producción"    },
    ],
    icon:   Brain,
    github: "",
  },
  {
    company:  "Vanessa",
    context:  "SENA · Proyecto productivo",
    industry: "Plataformas Educativas · Gestión de Investigación",
    size:     "mar. 2022 – mar. 2025",
    role:     "Full Stack Developer",
    challenge:
      "Las instituciones educativas de Colombia carecen de una plataforma centralizada para gestionar y visibilizar proyectos de investigación de semilleros.",
    solution:
      "Plataforma integral para la divulgación y gestión de proyectos de investigación en instituciones de nivel medio, técnico, tecnológico y profesional en Colombia.",
    results: [
      { metric: "3 años",   label: "Desarrollo continuo" },
      { metric: "Colombia", label: "Alcance nacional"    },
      { metric: "SENA",     label: "Proyecto productivo" },
    ],
    icon:   Users,
    github: "",
  },
  {
    company:  "FLUVIUS",
    context:  "SENA · Proyecto productivo",
    industry: "Tecnología Ambiental · Open Source",
    size:     "2022 – 2023",
    role:     "Full Stack Developer",
    challenge:
      "Falta de herramientas accesibles para que las personas gestionen y reduzcan su consumo de agua frente a la crisis ambiental actual.",
    solution:
      "Sistema de divulgación y gestión de recursos hídricos naturales que educa sobre el uso responsable del agua e invita al usuario a ser parte activa de la solución.",
    results: [
      { metric: "Open Source", label: "Código en GitHub"  },
      { metric: "Ambiental",   label: "Impacto social"    },
      { metric: "SENA",        label: "Proyecto productivo" },
    ],
    icon:   Droplets,
    github: "https://github.com/AliMedina18/FLUVIUS",
  },
];

/** Proyectos visibles por defecto (los 3 más recientes) */
export const DEFAULT_VISIBLE = 3;
