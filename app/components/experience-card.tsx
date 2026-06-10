"use client";

import { motion } from "framer-motion";
import type { TextItem } from "../data/portfolio";

const experienceVisuals = [
  { color: "#99b4aa", blob: "#99b4aa" },
  { color: "#6b6d43", blob: "#6b6d43" },
  { color: "#aba66f", blob: "#aba66f" },
];

type ExperienceCardProps = {
  item: TextItem;
  index: number;
};

export function ExperienceCard({ item, index }: ExperienceCardProps) {
  const [title, copy] = item;
  const visual = experienceVisuals[index % experienceVisuals.length];

  return (
    <motion.article
      whileHover={{ y: -8, rotate: index % 2 ? 0.8 : -0.8 }}
      className="group relative min-h-[270px] overflow-hidden rounded-lg border-2 border-[#1f2428] bg-[#fffaf2] p-5 shadow-[6px_6px_0_#1f2428]"
    >
      <span
        className="relative z-10 inline-flex rounded-md border border-[#1f2428] px-2 py-1 text-xs font-black"
        style={{ backgroundColor: visual.color }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="relative z-10 mt-9 text-xl font-black tracking-[-0.04em]">{title}</h3>
      <p className="relative z-10 mt-3 max-w-[18rem] text-sm leading-6 text-black/68">{copy}</p>
      <span className="absolute -bottom-12 -right-8 h-32 w-32 rounded-tl-[5rem] opacity-70" style={{ backgroundColor: visual.blob }} />
      <span className="absolute right-8 top-12 h-px w-10 rotate-[-20deg] bg-[#1f2428]/24" />
      <span className="absolute right-5 top-16 h-px w-8 rotate-[24deg] bg-[#1f2428]/24" />
    </motion.article>
  );
}
