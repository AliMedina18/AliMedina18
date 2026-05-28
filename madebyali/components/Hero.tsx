import { ArrowRight, Sparkles } from "lucide-react";
import TypewriterHeading from "@/components/TypewriterHeading";
import s from "@/styles/components/Hero.module.css";

export default function Hero() {
  return (
    <section className={s.section}>
      <div className={s.grid} aria-hidden="true" />

      <div className={s.container}>
        <div className={s.content}>

          <div className={s.badge}>
            <Sparkles className={`w-4 h-4 text-[#ff5ccf] ${s.pillIcon}`} />
            <span className={s.badgeText}>Full Stack Software Developer</span>
          </div>

          <TypewriterHeading />

          <p className={s.bio}>
            Soy Alicia Medina — Programadora que convierte la logica en
            experiencias digitales humanas.
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
