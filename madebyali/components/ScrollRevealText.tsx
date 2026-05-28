"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  tag?: "p" | "div";
  delay?: number;      /* ms de delay adicional tras entrar en vista */
  rootMargin?: string;
}

export default function ScrollRevealText({
  children,
  className,
  tag: Tag = "p",
  delay = 0,
  rootMargin = "-40px",
}: Props) {
  const ref     = useRef<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /* Reduced-motion: visible de inmediato */
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { setVisible(true); return; }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
