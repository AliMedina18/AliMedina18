import { Wrench } from "lucide-react";
import { SERVICES } from "@/data/services";
import ScrollRevealHeading from "@/components/ScrollRevealHeading";
import ScrollRevealText from "@/components/ScrollRevealText";
import s from "@/styles/components/Solutions.module.css";

export default function Solutions() {
  return (
    <section id="habilidades" className={s.section}>
      <div className={s.container}>

        <div className={s.header}>
          <div className={s.pill}>
            <Wrench className={`w-3.5 h-3.5 ${s.pillIcon}`} />
            <span className={s.pillText}>Servicios</span>
          </div>
          <ScrollRevealHeading
            normal="Mis "
            accent="servicios"
            className={s.heading}
            accentClassName={s.headingAccent}
          />
          <ScrollRevealText className={s.lead} delay={150}>
            Experiencia real en proyectos de alto impacto — del código al deploy,
            del frontend al backend, del móvil a la nube.
          </ScrollRevealText>
        </div>

        <div className={s.cols}>
          {SERVICES.map((service) => (
            <div key={service.title} className={s.card}>
              <div className={s.iconBox}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className={s.cardTitle}>{service.title}</h3>
              <p className={s.cardDesc}>{service.description}</p>
              <div className={s.tags}>
                {service.tags.map((tag) => (
                  <span key={tag} className={s.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
