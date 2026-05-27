/**
 * MadeByAli — Shared TypeScript Types
 */

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface Metric {
  icon: React.ElementType;
  value: string;
  label: string;
  detail: string;
  color: string;
  bg: string;
}

export interface Service {
  number: string;
  title: string;
  desc: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface CaseStudy {
  client: string;
  role: string;
  result1: StatResult;
  result2: StatResult;
  result3: StatResult;
  description: string;
  color: string;
}

export interface StatResult {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export interface ContactOption {
  icon: React.ElementType;
  title: string;
  desc: string;
  cta: string;
  href: string;
  featured: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}
