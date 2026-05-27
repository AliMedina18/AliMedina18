import { SERVICES } from "@/data/services";
import s from "@/styles/components/Solutions.module.css";

export default function Solutions() {
  return (
    <section id="habilidades" className={s.section}>
      <div className={s.container}>

        <div className={s.header}>
          <div className={s.pill}>
            <span className={s.pillText}>Servicios</span>
          </div>
          <h2 className={s.heading}>
            Lo que <span className={s.headingAccent}>construyo</span>
          </h2>
          <p className={s.lead}>
            Experiencia real en proyectos de alto impacto — del código al deploy,
            del frontend al backend, del móvil a la nube.
          </p>
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
