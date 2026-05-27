import { Github, Linkedin, Mail, Code2, Layers, Cpu, Smartphone, Cloud } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "https://github.com/AliMedina18",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/alicia-medina-oquendo-139629321/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:alicia2006medina@gmail.com",
    label: "Email",
  },
] as const;

export const FOCUS_AREAS = [
  { icon: Layers,     label: "Frontend" },
  { icon: Code2,      label: "Backend"  },
  { icon: Cpu,        label: "IA"       },
  { icon: Smartphone, label: "Mobile"   },
  { icon: Cloud,      label: "Cloud"    },
] as const;

export const TECH_STACK = [
  "React", "Next.js", "Python", "Django", "FastAPI",
  "C#", ".NET", "Kotlin", "Swift", "Azure", "PostgreSQL", "MongoDB",
] as const;

export const CONTACT = {
  email:    "alicia2006medina@gmail.com",
  phone:    "+57 301 606 9693",
  phoneHref: "tel:+573016069693",
  location: "Bogotá, Colombia",
  remote:   "Trabajo remoto global",
  linkedin: "https://www.linkedin.com/in/alicia-medina-oquendo-139629321/",
} as const;
