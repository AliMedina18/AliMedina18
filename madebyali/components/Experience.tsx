import { Briefcase, GraduationCap } from "lucide-react";
import { JOBS, EDUCATION, HIGHLIGHTED_PROJECTS } from "@/data/experience";
import s from "@/styles/components/Experience.module.css";

export default function Experience() {
  return (
    <section id="experiencia" className={s.section}>
      <div className={s.container}>

        <div className={s.header}>
          <div className={s.pill}>
            <span className={s.pillText}>Trayectoria</span>
          </div>
          <h2 className={s.heading}>
            Experiencia &amp; <span className={s.headingAccent}>Formación</span>
          </h2>
          <p className={s.lead}>
            Proyectos reales en empresas como Microsoft, K11 Technologies
            y el sector público colombiano.
          </p>
        </div>

        <div className={s.layout}>

          {/* Experience */}
          <div className={s.expCol}>
            <div className={s.colHeader}>
              <div className={s.colIconBox}>
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className={s.colTitle}>Experiencia Laboral</h3>
            </div>

            <div className={s.jobsList}>
              {JOBS.map((job, i) => (
                <div key={i} className={s.jobCard}>
                  <div className={s.jobTop}>
                    <div>
                      <h4 className={s.jobRole}>{job.role}</h4>
                      <div className={s.jobCompany}>{job.company}</div>
                    </div>
                    {job.current && (
                      <span className={s.badgeCurrent}>Actual</span>
                    )}
                  </div>
                  <div className={s.jobMeta}>
                    <span>{job.period} · {job.duration}</span>
                    <span>{job.type}</span>
                    <span>{job.location}</span>
                  </div>
                  <p className={s.jobDesc}>{job.description}</p>
                  <div className={s.jobTags}>
                    {job.tags.map((tag) => (
                      <span key={tag} className={s.jobTag}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={s.eduCol}>
            <div className={s.colHeader}>
              <div className={s.colIconBox}>
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className={s.colTitle}>Formación</h3>
            </div>

            <div className={s.eduList}>
              {EDUCATION.map((edu, i) => (
                <div key={i} className={s.eduCard}>
                  <div className={s.eduTop}>
                    <div className={s.eduInstitution}>{edu.institution}</div>
                    {edu.current && (
                      <span className={s.badgeCurrent}>Actual</span>
                    )}
                  </div>
                  <div className={s.eduDegree}>{edu.degree}</div>
                  <div className={s.eduPeriod}>{edu.period}</div>
                  {edu.note && <div className={s.eduNote}>{edu.note}</div>}
                </div>
              ))}

              <div className={s.highlightsCard}>
                <div className={s.highlightsTitle}>Proyectos Destacados</div>
                <ul className={s.highlightsList}>
                  {HIGHLIGHTED_PROJECTS.map((p) => (
                    <li key={p.name} className={s.highlightItem}>
                      <span className={s.highlightDot} />
                      <span><strong>{p.name}</strong> — {p.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
