"use client";

import { motion } from "framer-motion";
import {
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { stack, type StackItem } from "../data/portfolio";

// Busca el logo correcto según el nombre guardado en los datos del stack.
export function TechLogo({ type, color = "currentColor" }: { type: string; color?: string }) {
  const logos: Record<string, React.ElementType> = {
    javascript: SiJavascript,
    react: SiReact,
    next: SiNextdotjs,
    typescript: SiTypescript,
    tailwind: SiTailwindcss,
    spring: SiSpringboot,
    node: SiNodedotjs,
    prisma: SiPrisma,
    mongodb: SiMongodb,
    python: SiPython,
    sql: SiPostgresql,
    github: SiGithub,
  };
  const Icon = logos[type] ?? SiGithub;
  return <Icon className="h-9 w-9" aria-hidden="true" style={{ color }} />;
}

// Carrusel infinito de tecnologías para dar movimiento al inicio.
export function TechMarquee() {
  const items = [...stack, ...stack];

  return (
    <div className="relative z-30 -mx-4 mb-0 mt-0 overflow-hidden border-y border-[#1f2428]/10 bg-[#f2dec7]/92 px-7 py-2.5 text-[#1f2428] shadow-[0_-8px_24px_rgba(107,109,67,.08),0_10px_28px_rgba(107,109,67,.10)] backdrop-blur-md sm:-mx-8">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(153,180,170,.32),rgba(242,222,199,.72),rgba(207,125,101,.24))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/80" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,#99b4aa,#6b6d43,#aba66f,#cf7d65,#e1b8a2)] opacity-80" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#f2dec7] via-[#f2dec7]/92 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#f2dec7] via-[#f2dec7]/92 to-transparent" />
      <motion.div className="relative flex w-max gap-3 sm:gap-4" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
        {items.map(([name, , color, type, iconColor], index) => (
          <div key={`${name}-${index}`} className="group flex h-10 items-center gap-2.5 rounded-full border border-[#1f2428]/12 bg-[#f7eadb]/82 py-1 pl-1.5 pr-4 text-xs font-black tracking-[0.02em] text-[#1f2428]/86 shadow-[0_8px_22px_rgba(107,109,67,.13)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-[#f2dec7] sm:h-11 sm:gap-3 sm:pr-5 sm:text-sm">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[#1f2428] ring-1 ring-[#1f2428]/12 transition group-hover:scale-105 sm:h-8 sm:w-8" style={{ backgroundColor: color }}>
              <span className="scale-[0.68] sm:scale-[0.72]">
                <TechLogo type={type} color={iconColor} />
              </span>
            </span>
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Card individual del stack técnico.
export function SkillBadge({ item, index }: { item: StackItem; index: number }) {
  const [name, copy, color, type, iconColor] = item;

  return (
    <motion.article
      whileHover={{ y: -12, rotate: index % 2 ? 1.7 : -1.7, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group relative min-h-48 overflow-hidden rounded-xl border-2 border-[#151515] bg-white p-5 shadow-[6px_6px_0_#151515]"
    >
      <motion.div
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-80"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 1.18, 1], rotate: [0, 18, 0] }}
        transition={{ duration: 5 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="mb-8 flex items-center justify-between">
        <span className="relative grid h-16 w-16 place-items-center rounded-xl border-2 border-[#151515] bg-white shadow-[4px_4px_0_#151515] transition group-hover:-rotate-6">
          <TechLogo type={type} color={iconColor} />
        </span>
        <span className="relative text-sm font-black text-black/35">0{index + 1}</span>
      </div>
      <h3 className="relative text-2xl font-black tracking-[-0.04em]">{name}</h3>
      <p className="relative mt-3 text-sm leading-6 text-black/62">{copy}</p>
    </motion.article>
  );
}
