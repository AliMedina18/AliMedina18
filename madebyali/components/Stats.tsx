"use client";

import { useRef, useState, useEffect } from "react";
import { BarChart2 } from "lucide-react";
import { STATS } from "@/data/metrics";
import ScrollRevealHeading from "@/components/ScrollRevealHeading";
import ScrollRevealText from "@/components/ScrollRevealText";
import StarField from "@/components/StarField";
import s from "@/styles/components/Stats.module.css";

function formatAnimated(current: number, original: string): string {
  if (original.includes("a")) {
    const years  = Math.floor(current / 12);
    const months = current % 12;
    return `${years}a ${months}m`;
  }
  return String(current);
}

function AnimatedValue({ numericEnd, value }: { numericEnd: number; value: string }) {
  const ref         = useRef<any>(null);
  const [n, setN]   = useState(0);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { setN(numericEnd); return; }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setGo(true); observer.disconnect(); } },
      { rootMargin: "-60px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [numericEnd]);

  useEffect(() => {
    if (!go) return;
    const duration  = 2800; /* más lento para disfrutarlo */
    const startTime = performance.now();
    let frameId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      setN(Math.round(eased * numericEnd));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [go, numericEnd]);

  return (
    <div ref={ref} className={s.value}>
      {formatAnimated(n, value)}
    </div>
  );
}

export default function Stats() {
  return (
    <section className={s.section}>
      <StarField />

      <div className={s.container}>
        <div className={s.header}>

          <div className={s.pill}>
            <BarChart2 className={`w-3.5 h-3.5 ${s.pillIcon}`} />
            <span className={s.pillText}>Impacto en números</span>
          </div>

          <ScrollRevealHeading
            normal="Resultados que "
            accent="hablan solos"
            className={s.heading}
            accentClassName={s.headingAccent}
            charSpeed={42}
          />

          <ScrollRevealText className={s.lead} delay={200}>
            Cada número representa proyectos reales, equipos reales y tecnología
            construida para impactar.
          </ScrollRevealText>

        </div>

        <div className={s.cols}>
          {STATS.map((stat, i) => (
            <div key={i} className={s.card}>
              <AnimatedValue numericEnd={stat.numericEnd} value={stat.value} />
              <div className={s.label}>{stat.label}</div>
              <div className={s.sublabel}>{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
