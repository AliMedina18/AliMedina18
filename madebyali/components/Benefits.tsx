import { MapPin, Heart } from "lucide-react";
import { FOCUS_AREAS, CONTACT } from "@/data/profile";
import ScrollRevealHeading from "@/components/ScrollRevealHeading";
import ScrollRevealText from "@/components/ScrollRevealText";
import s from "@/styles/components/Benefits.module.css";

const TECHS = ["Python", "C#", ".NET", "React", "Kotlin", "Swift", "Django", "FastAPI", "Azure", "PostgreSQL", "MongoDB", "Git"];

export default function Benefits() {
  return (
    <section id="sobre-mi" className={s.section}>
      <div className={s.container}>

        <div className={s.header}>
          <div className={s.pill}>
            <Heart className={`w-3.5 h-3.5 ${s.pillIcon}`} />
            <span className={s.pillText}>Sobre mí</span>
          </div>
          <ScrollRevealHeading
            normal="Quién soy y "
            accent="cómo pienso"
            className={s.heading}
            accentClassName={s.headingAccent}
          />
          <ScrollRevealText className={s.lead} delay={150}>
            Desarrolladora Full Stack con enfoque en experiencias digitales que combinan tecnología, diseño e inteligencia.
          </ScrollRevealText>
        </div>

        <div className={s.layout}>

          {/* Profile card */}
          <div className={s.profileCol}>
            <div className={s.profileCard}>

              <div className={s.avatarRow}>
                <div className={s.avatar}>
                  <span className={s.avatarInitial}>A</span>
                </div>
                <div>
                  <div className={s.profileName}>Alicia Medina</div>
                  <div className={s.profileRole}>Full Stack Developer</div>
                  <div className={s.profileLocation}>
                    <MapPin className="w-3 h-3" />
                    <span>{CONTACT.location}</span>
                  </div>
                </div>
              </div>

              <div className={s.statRows}>
                <div className={s.statRow}>
                  <span className={s.statKey}>Experiencia</span>
                  <span className={s.statVal}>1 año y 7 meses</span>
                </div>
                <div className={s.divider} />
                <div className={s.statRow}>
                  <span className={s.statKey}>Empresas</span>
                  <span className={s.statVal}>Microsoft · K11 · IDPC</span>
                </div>
                <div className={s.divider} />
                <div className={s.statRow}>
                  <span className={s.statKey}>Proyectos</span>
                  <span className={s.statVal}>3 empresariales</span>
                </div>
              </div>

              <div className={s.techsLabel}>Tecnologías dominadas</div>
              <div className={s.techsGrid}>
                {TECHS.map((tech) => (
                  <span key={tech} className={s.techChip}>{tech}</span>
                ))}
              </div>

              <div className={s.focusLabel}>Áreas de enfoque</div>
              <div className={s.focusGrid}>
                {FOCUS_AREAS.map(({ icon: Icon, label }) => (
                  <span key={label} className={s.focusChip}>
                    <Icon className="w-3 h-3 text-[#ff5ccf]" />
                    {label}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* Bio */}
          <div className={s.bioCol}>
            <div className={s.bioBody}>
              <p>
                Para mí, el desarrollo no se trata solo de escribir código. Se trata de
                transformar lógica en experiencias digitales que las personas puedan entender,
                disfrutar y usar con confianza. Me motiva crear interfaces donde los usuarios se
                sientan cómodos interactuando con la tecnología, sin percibirla como algo complejo
                o distante.
              </p>
              <p>
                Mi enfoque combina creatividad y pensamiento técnico. En el desarrollo{" "}
                <strong className={s.bioStrong}>Frontend</strong> encuentro un espacio
                para diseñar experiencias visualmente atractivas, intuitivas y fluidas. Me interesa
                que cada interacción sea clara, agradable y significativa para el usuario.
              </p>
              <p>
                Al mismo tiempo, mi base en{" "}
                <strong className={s.bioStrong}>Backend</strong> me permite construir
                sistemas robustos y seguros, donde la funcionalidad, la estabilidad y la protección
                de los datos son igual de importantes que la experiencia visual.
              </p>
              <p>
                Actualmente me apasiona explorar el{" "}
                <strong className={s.bioStrong}>desarrollo impulsado por inteligencia artificial</strong>,
                creando soluciones que no solo funcionan bien, sino que también aportan valor real y
                experiencias inteligentes a quienes las utilizan.
              </p>
              <p>
                Mi objetivo es simple: desarrollar productos digitales que combinen tecnología, diseño
                y seguridad para ofrecer experiencias que las personas disfruten usar.
              </p>
              <p className={s.bioQuote}>
                Porque cuando la tecnología está bien construida, deja de sentirse como
                tecnología… y se convierte en una experiencia.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
