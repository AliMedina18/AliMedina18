"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import s from "@/styles/components/Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  // Compact mode on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${s.header}${scrolled ? ` ${s.headerScrolled}` : ""}`}>
      <div className={s.inner}>
        <div className={s.bar}>

          <a href="#" className={s.logo}>
            MadeBy <span className="font-semibold">Ali</span>
          </a>

          <nav className={s.desktopNav}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={s.navLink}>{l.label}</a>
            ))}
          </nav>

          <div className={s.desktopCtas}>
            <a href="/cv-ali-medina.pdf" target="_blank" className={s.btnOutline}>Ver CV</a>
            <a href="#contacto" className={s.btnPrimary}>Trabajemos Juntos</a>
          </div>

          <button className={s.mobileToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú" aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={s.mobileMenu}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={s.mobileLink}
                onClick={() => setIsMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className={s.mobileCtas}>
              <a href="/cv-ali-medina.pdf" target="_blank" className={s.mobileBtnOutline}>Ver CV</a>
              <a href="#contacto" className={s.mobileBtnPrimary}>Trabajemos Juntos</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
