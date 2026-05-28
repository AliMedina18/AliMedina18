"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { PROJECTS, DEFAULT_VISIBLE, type Project } from "@/data/projects";
import ScrollRevealHeading from "@/components/ScrollRevealHeading";
import ScrollRevealText from "@/components/ScrollRevealText";
import s from "@/styles/components/Testimonials.module.css";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={s.card}>

      <div className={s.cardHeader}>
        <div className={s.iconBox}>
          <project.icon className="w-6 h-6 text-white" />
        </div>
        <div className={s.cardInfo}>
          <h3 className={s.cardTitle}>{project.company}</h3>
          <div className={s.cardContext}>{project.context}</div>
          <div className={s.cardMeta}>
            <span className={s.cardMetaText}>{project.industry}</span>
            <span className={s.cardMetaDot}>·</span>
            <span className={s.cardMetaText}>{project.size}</span>
          </div>
        </div>
        <div className={s.cardRole}>
          <span className={s.cardRoleText}>{project.role}</span>
        </div>
      </div>

      <div className={s.cardBody}>
        <div>
          <div className={s.colLabel}>Desafío</div>
          <p className={s.colText}>{project.challenge}</p>
        </div>
        <div>
          <div className={s.colLabel}>Solución</div>
          <p className={s.colText}>{project.solution}</p>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={s.githubLink}>
              Ver en GitHub →
            </a>
          )}
        </div>
        <div>
          <div className={s.colLabel}>Resultados</div>
          <div className={s.resultsList}>
            {project.results.map((r, i) => (
              <div key={i} className={s.resultItem}>
                <div className={s.resultMetric}>{r.metric}</div>
                <div className={s.resultLabel}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? PROJECTS : PROJECTS.slice(0, DEFAULT_VISIBLE);
  const hidden  = PROJECTS.length - DEFAULT_VISIBLE;

  return (
    <section id="proyectos" className={s.section}>
      <div className={s.container}>

        <div className={s.header}>
          <div className={s.pill}>
            <Star className={`w-3.5 h-3.5 ${s.pillIcon}`} />
            <span className={s.pillText}>Proyectos destacados</span>
          </div>
          <ScrollRevealHeading
            normal="Mi "
            accent="trabajo"
            className={s.heading}
            accentClassName={s.headingAccent}
          />
          <ScrollRevealText className={s.lead} delay={150}>
            Proyectos donde apliqué tecnología real para resolver problemas reales,
            desde IA aplicada hasta plataformas de impacto social.
          </ScrollRevealText>
        </div>

        <div className={s.list}>
          {visible.map((project) => (
            <ProjectCard key={project.company} project={project} />
          ))}
        </div>

        <div className={s.toggleWrap}>
          <button onClick={() => setShowAll(!showAll)} className={s.toggleBtn}>
            {showAll ? (
              <><ChevronUp className="w-4 h-4" /> Mostrar menos</>
            ) : (
              <><ChevronDown className="w-4 h-4" /> Mostrar más proyectos ({hidden})</>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
