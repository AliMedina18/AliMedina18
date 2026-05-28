export const HERO_HIGHLIGHTS = [
  { value: "1a 7m", label: "Experiencia profesional"  },
  { value: "3",     label: "Proyectos empresariales"  },
  { value: "12",    label: "Tecnologías dominadas"    },
] as const;

/* numericEnd: valor numérico para el contador animado.
   Para "1a 7m" = 19 meses totales (se formatea como Xa Ym en el componente). */
export const STATS = [
  { value: "1a 7m", numericEnd: 19, label: "Experiencia profesional",     sublabel: "Microsoft · K11 · IDPC"               },
  { value: "3",     numericEnd: 3,  label: "Proyectos empresariales",     sublabel: "JUNA · K11 Mobile · IDPC Software"    },
  { value: "12",    numericEnd: 12, label: "Tecnologías dominadas",       sublabel: "Python · C# · Kotlin · React · Azure y más" },
  { value: "3",     numericEnd: 3,  label: "Empresas con las que trabajé", sublabel: "Microsoft · K11 · IDPC"              },
];
