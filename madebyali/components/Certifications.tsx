import { Award, ExternalLink, BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/data/experience";
import ScrollRevealHeading from "@/components/ScrollRevealHeading";
import ScrollRevealText from "@/components/ScrollRevealText";
import s from "@/styles/components/Certifications.module.css";

const ISSUER_COLORS: Record<string, string> = {
  Microsoft: s.issuerMicrosoft,
  Google:    s.issuerGoogle,
};

export default function Certifications() {
  return (
    <section id="certificaciones" className={s.section}>
      <div className={s.container}>

        <div className={s.header}>
          <div className={s.pill}>
            <Award className={`w-3.5 h-3.5 ${s.pillIcon}`} />
            <span className={s.pillText}>Credenciales verificables</span>
          </div>
          <ScrollRevealHeading
            normal="Certificaciones "
            accent="oficiales"
            className={s.heading}
            accentClassName={s.headingAccent}
          />
          <ScrollRevealText className={s.lead} delay={150}>
            Certificaciones emitidas por Microsoft y Google que validan
            mis conocimientos en cloud, IA y prompting.
          </ScrollRevealText>
        </div>

        <div className={s.grid}>
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.credentialId} className={s.card}>

              <div className={s.cardTop}>
                <div className={s.iconBox}>
                  <BadgeCheck className="w-6 h-6 text-white" />
                </div>
                <span className={`${s.issuerBadge} ${ISSUER_COLORS[cert.issuer] ?? ""}`}>
                  {cert.issuer}
                </span>
              </div>

              <h3 className={s.certName}>{cert.name}</h3>

              <div className={s.meta}>
                <span className={s.metaItem}>Expedición: {cert.issued}</span>
                <span className={s.metaItem}>ID: {cert.credentialId}</span>
              </div>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={s.verifyLink}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Verificar credencial
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
