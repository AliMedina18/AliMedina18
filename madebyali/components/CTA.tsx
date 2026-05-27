import { ArrowRight, MessageSquare, FileText } from "lucide-react";
import { CONTACT } from "@/data/profile";
import s from "@/styles/components/CTA.module.css";

export default function CTA() {
  return (
    <section id="contacto" className={s.section}>
      <div className={s.grid} aria-hidden="true" />

      <div className={s.container}>
        <div className={s.inner}>

          <div className={s.pill}>
            <span className={s.pillText}>Disponible para proyectos · 2026</span>
          </div>

          <h2 className={s.heading}>
            ¿Construimos algo{" "}
            <span className={s.headingAccent}>juntos?</span>
          </h2>

          <p className={s.lead}>
            Estoy abierta a proyectos freelance, colaboraciones y oportunidades
            full-time. Si tienes una idea o necesitas a alguien que la construya,
            me encantaría escucharte.
          </p>

          <div className={s.cards}>
            <div className={s.card}>
              <MessageSquare className={s.cardIcon} />
              <h3 className={s.cardTitle}>Escríbeme</h3>
              <p className={s.cardDesc}>
                Cuéntame sobre tu proyecto o idea — respondo en menos de 24h
              </p>
              <a href={`mailto:${CONTACT.email}?subject=Hola Ali — Quiero hablar de un proyecto`}
                className={s.cardBtnPrimary}>
                Contáctame por correo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className={s.card}>
              <FileText className={s.cardIcon} />
              <h3 className={s.cardTitle}>Mi LinkedIn</h3>
              <p className={s.cardDesc}>
                Experiencia completa, proyectos y certificaciones
              </p>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"
                className={s.cardBtnSecondary}>
                Ver perfil en LinkedIn
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
