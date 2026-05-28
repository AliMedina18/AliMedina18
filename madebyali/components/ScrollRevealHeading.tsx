"use client";

import { useRef, useState, useEffect } from "react";

interface Props {
  normal: string;
  accent?: string;
  tag?: "h2" | "h3";
  className: string;
  accentClassName?: string;
  charSpeed?: number;
  rootMargin?: string;
}

export default function ScrollRevealHeading({
  normal,
  accent = "",
  tag: Tag = "h2",
  className,
  accentClassName = "",
  charSpeed = 38,
  rootMargin = "-80px",
}: Props) {
  const ref = useRef<any>(null);
  const [count, setCount]   = useState(0);
  const [active, setActive] = useState(false);
  const [done, setDone]     = useState(false);
  const [cursorOn, setCursorOn] = useState(true);

  const fullText = normal + accent;
  const total    = fullText.length;

  /* ── Reduced-motion: muestra texto completo de inmediato ── */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setCount(total);
      setDone(true);
    }
  }, [total]);

  /* ── IntersectionObserver: arranca al entrar en viewport ── */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    
    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  /* ── Typewriter tick ── */
  useEffect(() => {
    if (!active || done) return;
    const id = setTimeout(() => {
      setCount((c) => {
        const next = c + 1;
        if (next >= total) setDone(true);
        return next;
      });
    }, charSpeed);
    return () => clearTimeout(id);
  }, [active, count, done, charSpeed, total]);

  /* ── Cursor blink via JS (sin necesitar @keyframes global) ── */
  useEffect(() => {
    if (done) return;
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, [done]);

  const visibleNormal = fullText.slice(0, Math.min(count, normal.length));
  const visibleAccent =
    count > normal.length ? fullText.slice(normal.length, count) : "";

  return (
    <Tag ref={ref} className={className}>
      {visibleNormal}
      {visibleAccent && accentClassName && (
        <span className={accentClassName}>{visibleAccent}</span>
      )}
      {!done && (
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            color: "#ff5ccf",
            fontWeight: 300,
            marginLeft: 1,
            opacity: cursorOn ? 1 : 0,
            WebkitUserSelect: "none",
            userSelect: "none",
          }}
        >
          |
        </span>
      )}
    </Tag>
  );
}
