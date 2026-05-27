import { ArrowRight, Sparkles } from "lucide-react";
import s from "@/styles/components/Hero.module.css";

export default function Hero() {
  return (
    <section className={s.section}>
      <div className={s.grid} aria-hidden="true" />

      <div className={s.container}>
        <div className={s.content}>

          <div className={s.badge}>
            <Sparkles className="w-4 h-4 text-[#7c3aed]" />
            <span className={s.badgeText}>Full Stack Software Developer</span>
          </div>

          <h1 className={s.heading}>
            Construyo tecnología que{" "}
            <span className={s.headingAccent}>se siente humana</span>
          </h1>

          <p className={s.bio}>
            Soy Ali Medina — desarrolladora Full Stack apasionada por transformar
            lógica en experiencias digitales que las personas puedan entender,
            disfrutar y usar con confianza.
          </p>

          <div className={s.ctas}>
            <a href="#proyectos" className={s.ctaPrimary}>
              Ver mis proyectos
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contacto" className={s.ctaSecondary}>Hablemos</a>
          </div>

        </div>
      </div>
    </section>
  );
}
