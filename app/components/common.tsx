"use client";

import { motion } from "framer-motion";
import type { ReactNode, ElementType } from "react";
import type { TextItem } from "../data/portfolio";

// Animación reutilizable para que cada bloque aparezca suavemente al hacer scroll.
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Encabezado común para las secciones principales del portafolio.
export function SectionTitle({
  kicker,
  title,
  copy,
  icon: Icon,
  dark = false,
}: {
  kicker: string;
  title: string;
  copy?: string;
  icon: ElementType;
  dark?: boolean;
}) {
  return (
    <Reveal className="mb-10">
      <p className={`mb-5 inline-flex rotate-[-2deg] items-center gap-2 px-4 py-2 text-sm font-black uppercase shadow-[5px_5px_0_#151515] ${dark ? "bg-[#cf7d65] text-white" : "bg-[#f2dec7] text-[#151515]"}`}>
        <Icon className="h-4 w-4" /> {kicker}
      </p>
      <h2 className={`max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl ${dark ? "text-white" : "text-[#151515]"}`}>{title}</h2>
      {copy ? <p className={`mt-6 max-w-3xl text-xl leading-8 ${dark ? "text-white/70" : "text-black/64"}`}>{copy}</p> : null}
    </Reveal>
  );
}

// Card simple para listas de educación, experiencia, servicios y similares.
export function InfoCard({ item, index, dark = false }: { item: TextItem; index: number; dark?: boolean }) {
  const [title, copy] = item;
  const colors = ["#99b4aa", "#6b6d43", "#aba66f", "#cf7d65", "#e1b8a2", "#f2dec7"];

  return (
    <motion.article
      whileHover={{ y: -10, rotate: index % 2 ? 1.5 : -1.5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative h-full overflow-hidden rounded-xl border-2 p-6 shadow-[7px_7px_0_#151515] ${dark ? "border-white bg-white text-[#151515]" : "border-[#151515] bg-white"}`}
    >
      <motion.div
        className="absolute -bottom-12 -right-10 h-32 w-32 rounded-full opacity-75"
        style={{ backgroundColor: colors[index % colors.length] }}
        animate={{ scale: [1, 1.2, 1], x: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <p className="relative mb-8 inline-block rounded-md border-2 border-[#151515] px-3 py-2 text-xl font-black" style={{ backgroundColor: colors[index % colors.length] }}>
        0{index + 1}
      </p>
      <h3 className="relative text-2xl font-black tracking-[-0.04em] transition group-hover:translate-x-1">{title}</h3>
      <p className="relative mt-3 leading-7 text-black/62">{copy}</p>
    </motion.article>
  );
}
