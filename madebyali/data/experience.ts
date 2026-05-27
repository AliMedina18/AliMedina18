export interface Job {
  company:     string;
  role:        string;
  period:      string;
  duration:    string;
  type:        string;
  location:    string;
  description: string;
  tags:        string[];
  current:     boolean;
}

export interface Education {
  institution: string;
  degree:      string;
  period:      string;
  note?:       string;
  current:     boolean;
}

export const JOBS: Job[] = [
  {
    company:     "Instituto Distrital de Patrimonio Cultural",
    role:        "Desarrolladora de Software",
    period:      "feb. 2026 – actualidad",
    duration:    "4 meses",
    type:        "Contrato temporal · Remoto",
    location:    "Bogotá, Colombia",
    description:
      "Desarrollo de nuevas funcionalidades y mejora continua del sistema de información de la Subdirección. Corrección de fallas, optimización de rendimiento, integración de capas del sistema, pruebas técnicas y gestión de versiones.",
    tags:    ["C#", ".NET Framework", "ASP.NET", "SQL Server", "Scrum"],
    current: true,
  },
  {
    company:     "Instituto Distrital de Patrimonio Cultural",
    role:        "Desarrolladora de Software — Documentación Técnica",
    period:      "nov. 2025 – ene. 2026",
    duration:    "3 meses",
    type:        "Contrato temporal · Remoto",
    location:    "Bogotá, Colombia",
    description:
      "Elaboración y gestión de documentación técnica: manuales, guías, especificaciones funcionales, modelos, casos de uso y arquitectura de sistemas. Mantenimiento de repositorio de documentación estructurado.",
    tags:    ["C#", ".NET Framework", "MongoDB", "PostgreSQL", "Scrum"],
    current: false,
  },
  {
    company:     "K11 Technologies",
    role:        "Desarrolladora de Software — Mobile",
    period:      "sept. 2025 – nov. 2025",
    duration:    "3 meses",
    type:        "Contrato temporal · Remoto",
    location:    "Bogotá, Colombia",
    description:
      "Migración de la app móvil U-CHRONO de Java a Kotlin Multiplatform (KMM), estructurando una arquitectura multiplataforma con capa shared compartida entre Android e iOS. Integración con Xcode para el entorno nativo de Apple.",
    tags:    ["Kotlin", "KMM", "Swift", "SwiftUI", "Android", "iOS", "Git"],
    current: false,
  },
  {
    company:     "Microsoft",
    role:        "Desarrolladora Full Stack — Pasantía",
    period:      "ene. 2025 – sept. 2025",
    duration:    "9 meses",
    type:        "Contrato de prácticas · Híbrido",
    location:    "Bogotá, Colombia",
    description:
      "Desarrollo de JUNA, app de detección temprana de violencia en conversaciones digitales mediante IA. Entrenamiento de modelos NLP (BERTin), clasificación multicategoría, visualizaciones con Streamlit/Plotly y despliegue del modelo como API en la nube.",
    tags:    ["Python", "NLP", "Machine Learning", "FastAPI", "Azure", "React", "Django", "CI/CD"],
    current: false,
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "Corporación Unificada Nacional — CUN",
    degree:      "Ingeniería de Sistemas",
    period:      "ene. 2026 – actualidad",
    current:     true,
  },
  {
    institution: "SENA",
    degree:      "Tecnólogo en Análisis y Desarrollo de Software",
    period:      "dic. 2023 – dic. 2025",
    note:        "Participante SENAsoft 2024",
    current:     false,
  },
  {
    institution: "SENA",
    degree:      "Técnico en Programación de Software",
    period:      "feb. 2022 – dic. 2023",
    current:     false,
  },
];

export const HIGHLIGHTED_PROJECTS = [
  { name: "AtalaIA",         detail: "Agente de seguridad para LLMs (Hackathon, 2025)"                },
  { name: "Vanessa",         detail: "Sistema de gestión de semilleros de investigación (SENA)"       },
  { name: "FLUVIUS",         detail: "Sistema de recursos hídricos (SENA)"                            },
  { name: "2do lugar — SENAsoft 2024", detail: "competencia nacional de tecnología"                  },
];
