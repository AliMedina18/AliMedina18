import { MapPin, Mail, Phone, Circle } from "lucide-react";
import { FOOTER_NAV_LINKS } from "@/data/navigation";
import { SOCIAL_LINKS, TECH_STACK, CONTACT } from "@/data/profile";
import s from "@/styles/components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>

      <div className={s.main}>
        <div className={s.cols}>

          {/* Brand */}
          <div className={s.brandCol}>
            <h3 className={s.logo}>MadeBy<span className="font-semibold">Ali</span></h3>
            <p className={s.name}>Alicia Medina Oquendo</p>
            <p className={s.role}>Full Stack Software Developer</p>

            <div className={s.availBadge}>
              <Circle className="w-2 h-2 fill-green-400 text-green-400" />
              <span className={s.availText}>Disponible · 2026</span>
            </div>

            <div className={s.socials}>
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className={s.socialBtn}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={s.colHeading}>Navegación</h4>
            <ul className={s.navList}>
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={s.navLink}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={s.colHeading}>Contacto</h4>
            <ul className={s.contactList}>
              <li className={s.contactItem}>
                <MapPin className={s.contactIcon} />
                <span className={s.contactText}>
                  {CONTACT.location}
                  <br />
                  <span className={s.contactSub}>{CONTACT.remote}</span>
                </span>
              </li>
              <li className={s.contactItem}>
                <Mail className={s.contactIcon} />
                <a href={`mailto:${CONTACT.email}`} className={s.contactLink}>
                  {CONTACT.email}
                </a>
              </li>
              <li className={s.contactItem}>
                <Phone className={s.contactIcon} />
                <a href={CONTACT.phoneHref} className={s.contactLink}>
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h4 className={s.colHeading}>Stack principal</h4>
            <div className={s.stackGrid}>
              {TECH_STACK.map((tech) => (
                <span key={tech} className={s.stackChip}>{tech}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className={s.bottom}>
        <div className={s.bottomInner}>
          <p className={s.copyright}>
            © {new Date().getFullYear()} Alicia Medina Oquendo. Hecho con código y propósito.
          </p>
          <p className={s.builtWith}>Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>

    </footer>
  );
}
