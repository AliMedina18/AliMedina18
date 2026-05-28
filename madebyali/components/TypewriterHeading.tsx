"use client";

import { useState, useEffect } from "react";
import s from "@/styles/components/Hero.module.css";

const FULL_TEXT   = "Construyo la tecnología que te acompaña ";
const ACCENT_START = 27;  // "Construyo tecnología que ".length
const CHAR_SPEED  = 52;   // ms por carácter
const START_DELAY = 550;  // ms antes de empezar — le da tiempo al badge de entrar

export default function TypewriterHeading() {
  const [count,   setCount]   = useState(0);
  const [active,  setActive]  = useState(false);
  const [done,    setDone]    = useState(false);

  /* ── Arranque: detecta reduced-motion en el cliente ── */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mq.matches) {
      // Muestra el texto completo de inmediato sin animación
      setCount(FULL_TEXT.length);
      setDone(true);
      return;
    }

    const timer = setTimeout(() => setActive(true), START_DELAY);
    return () => clearTimeout(timer);
  }, []);

  /* ── Typewriter: avanza un carácter por tick ── */
  useEffect(() => {
    if (!active || done) return;

    const timer = setTimeout(() => {
      setCount(c => {
        const next = c + 1;
        if (next >= FULL_TEXT.length) setDone(true);
        return next;
      });
    }, CHAR_SPEED);

    return () => clearTimeout(timer);
  }, [active, count, done]);

  /* ── Render: parte normal + parte acentuada ── */
  const visible    = FULL_TEXT.slice(0, count);
  const normalPart = visible.slice(0, Math.min(count, ACCENT_START));
  const accentPart = count > ACCENT_START ? visible.slice(ACCENT_START) : "";

  return (
    <h1 className={s.heading}>
      {normalPart}
      {accentPart && (
        <span className={s.headingAccent}>{accentPart}</span>
      )}
      {/* Cursor parpadeante — desaparece al terminar */}
      {!done && (
        <span className={s.cursor} aria-hidden="true">|</span>
      )}
    </h1>
  );
}
