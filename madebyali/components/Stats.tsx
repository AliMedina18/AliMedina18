import { STATS } from "@/data/metrics";
import s from "@/styles/components/Stats.module.css";

export default function Stats() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <h2 className={s.heading}>En números</h2>
          <p className={s.lead}>Experiencia real en proyectos de alto impacto</p>
        </div>
        <div className={s.cols}>
          {STATS.map((stat, i) => (
            <div key={i} className={s.card}>
              <div className={s.value}>{stat.value}</div>
              <div className={s.label}>{stat.label}</div>
              <div className={s.sublabel}>{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
