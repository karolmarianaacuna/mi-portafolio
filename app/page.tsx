"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  Code2,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  MapPin,
  Play,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { ActiveBuildPanel, InteractiveTerminal } from "./components/current-builds";
import { ExperienceCard } from "./components/experience-card";
import { InfoCard, Reveal, SectionTitle } from "./components/common";
import { SkillBadge, TechMarquee } from "./components/tech";
import {
  certifications,
  education,
  experience,
  featuredAreas,
  professionalTimeline,
  profileCards,
  socials,
  stack,
  stats,
  type SocialLink,
} from "./data/portfolio";

const socialIcons: Record<SocialLink["label"], LucideIcon> = {
  LinkedIn: LinkedinIcon,
  GitHub: GithubIcon,
  Instagram: InstagramIcon,
  Email: Mail,
};

function AnimatedStatCard({ value, label, index }: Readonly<{ value: string; label: string; index: number }>) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const numericValue = Number.parseInt(value, 10);
  const suffix = value.replace(String(numericValue), "");
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView || Number.isNaN(numericValue)) return;

    const controls = animate(0, numericValue, {
      duration: 1.5,
      delay: index * 0.12,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [index, isInView, numericValue]);

  return (
    <motion.article
      ref={ref}
      whileHover={{ y: -10, rotate: index % 2 ? 1 : -1, scale: 1.03 }}
      className="group relative overflow-hidden rounded-xl border-2 border-[#151515] bg-white/95 p-4 text-center shadow-[7px_7px_0_#151515,0_22px_42px_rgba(31,36,40,.16)]"
    >
      <span className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#f2dec7]" />
      <span className="absolute -bottom-12 left-1/2 h-24 w-36 -translate-x-1/2 rounded-full bg-[#99b4aa]/35 transition group-hover:scale-110" />
      <p className="relative text-5xl font-black tracking-[-0.06em] text-[#cf7d65] [-webkit-text-stroke:1px_#151515]">
        {Number.isNaN(numericValue) ? value : `${displayValue}${suffix}`}
      </p>
      <p className="relative mt-2 text-sm font-black uppercase text-black/65">{label}</p>
    </motion.article>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 25 });
  const pageBg = useTransform(scrollYProgress, [0, 0.28, 0.56, 0.82, 1], ["#fffaf2", "#99b4aa", "#e1b8a2", "#aba66f", "#6b6d43"]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const blobRotate = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroTitleY = useTransform(scrollYProgress, [0, 0.18], [0, -32]);
  const heroPhotoY = useTransform(scrollYProgress, [0, 0.18], [0, 12]);
  const heroCodeY = useTransform(scrollYProgress, [0, 0.18], [0, -18]);

  return (
    <motion.main className="min-h-screen overflow-hidden text-[#1f2428]" style={{ backgroundColor: pageBg }}>
      <motion.div
        className="fixed left-0 top-0 z-50 h-2 origin-left bg-[linear-gradient(90deg,#99b4aa,#6b6d43,#aba66f,#cf7d65,#e1b8a2,#f2dec7)]"
        style={{ scaleX }}
      />

      <section id="inicio" className="relative overflow-hidden bg-[#fffaf2] px-4 sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(153,180,170,.14),transparent_24rem),radial-gradient(circle_at_74%_12%,rgba(225,184,162,.16),transparent_26rem),linear-gradient(180deg,#ffffff_0%,#fffaf2_62%,#f8efe3_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:linear-gradient(90deg,rgba(31,36,40,.08)_1px,transparent_1px),linear-gradient(rgba(31,36,40,.07)_1px,transparent_1px)] [background-size:72px_72px]" />
        <motion.div
          className="pointer-events-none absolute left-6 top-20 z-0 h-28 w-28 rounded-full bg-[#99b4aa]/55 blur-[1px] sm:left-20 sm:h-40 sm:w-40"
          animate={{ y: [0, 18, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute right-[18%] top-24 z-0 h-32 w-52 rounded-[2rem] bg-[#e1b8a2]/42 sm:h-44 sm:w-72"
          animate={{ x: [0, -14, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-28 left-[38%] z-0 h-36 w-36 rounded-full bg-[#aba66f]/40"
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none fixed right-[-7rem] top-28 z-10 h-72 w-72 rounded-full bg-[#99b4aa]/35 blur-3xl"
          style={{ y: blobY, rotate: blobRotate }}
        />
        <nav className="relative z-50 mx-auto flex max-w-[1180px] items-center justify-between pt-3 sm:pt-4">
          <a href="#inicio" className="text-2xl font-black tracking-[-0.06em] sm:text-3xl">
            Mariana<span className="text-[#cf7d65]">.</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-black uppercase text-black/65 md:flex">
            <a href="#proyectos">Proyectos</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="flex gap-1.5 sm:gap-2">
            {socials.map(({ label, href, color }) => {
              const Icon = socialIcons[label];
              return (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, backgroundColor: color, color: "#fff" }}
                  className="grid h-9 w-9 place-items-center rounded-md border-2 border-[#1f2428] bg-white text-black shadow-[3px_3px_0_#1f2428] sm:h-11 sm:w-11"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              );
            })}
          </div>
        </nav>

        <div className="relative z-20 mx-auto grid min-h-[calc(100svh-300px)] max-w-[1180px] items-start gap-3 pt-5 sm:gap-4 sm:pt-6 lg:min-h-[calc(100vh-315px)] lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:pt-0">
          <div className="relative z-30 pb-2 sm:pb-6 lg:pb-8">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-3 flex max-w-md items-start gap-3 text-left text-sm font-bold leading-6 text-[#111518] sm:mb-4 sm:gap-5 sm:text-base sm:leading-7"
            >
              <Code2 className="mt-1 h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
              <span>
                Mi nombre es Mariana
                <br />
                y construyo{" "}
                <span className="border-b-4 border-[#99b4aa] pb-0.5">productos digitales</span>
              </span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ y: heroTitleY }}
              transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-30 text-[12vw] font-black uppercase leading-[0.86] tracking-[-0.05em] text-[#111518] drop-shadow-[0_5px_0_rgba(153,180,170,.58)] sm:text-[3.25rem] sm:tracking-[-0.06em] md:text-[3.85rem] lg:text-[4.35rem] xl:text-[4.7rem]"
            >
              Fullstack
              <span className="relative z-10 block text-transparent opacity-95 [-webkit-text-stroke:1.6px_rgba(17,21,24,.72)] drop-shadow-[0_5px_0_rgba(207,125,101,.55)]">Developer</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18 }}
              className="mt-3 flex max-w-xl gap-4 border-l-2 border-[#cf7d65] pl-4 text-left sm:mt-4 sm:gap-5 sm:pl-5"
            >
              <p className="text-sm font-bold leading-6 text-black/78 sm:text-[0.95rem] sm:leading-7">
                Desarrollo aplicaciones escalables, experiencias intuitivas y soluciones con impacto, profundizando en UI/UX, manejo de datos y Machine Learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.26 }}
              className="mt-4 flex flex-wrap gap-3 sm:mt-5 sm:gap-4"
            >
              <a href="#proyectos" className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-md bg-[#111518] px-4 py-3 text-xs font-black uppercase text-white transition hover:-translate-y-1 min-[420px]:flex-none sm:min-w-60 sm:gap-3 sm:px-6 sm:py-4 sm:text-sm">
                Explorar proyectos <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="/cv-mariana.pdf" download="CV-Karol-Mariana-Acuna.pdf" className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-md border-2 border-[#111518] bg-transparent px-4 py-3 text-xs font-black uppercase text-[#111518] transition hover:-translate-y-1 min-[420px]:flex-none sm:min-w-52 sm:gap-3 sm:px-6 sm:py-4 sm:text-sm">
                Descargar CV <ArrowDown className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <div className="relative mx-auto grid min-h-[clamp(300px,42svh,390px)] w-full max-w-[450px] items-end justify-items-center overflow-hidden sm:min-h-[420px] sm:max-w-[520px] lg:min-h-[470px] lg:max-w-none lg:overflow-visible xl:min-h-[490px]">
            <motion.div
              className="absolute bottom-[-4rem] left-[calc(50%-160px)] z-10 h-[320px] w-[320px] rounded-full bg-[#99b4aa]/70 shadow-[0_34px_90px_rgba(107,109,67,.18)] sm:bottom-[-2.5rem] sm:left-[calc(50%-205px)] sm:h-[410px] sm:w-[410px] lg:bottom-0 lg:left-auto lg:right-8 lg:h-[430px] lg:w-[430px] xl:right-6 xl:h-[455px] xl:w-[455px]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="pointer-events-none absolute right-[1rem] top-0 z-20 hidden origin-top-right scale-x-[0.82] scale-y-[1.18] text-[7.2rem] font-black uppercase leading-none tracking-[-0.08em] text-transparent opacity-34 [-webkit-text-stroke:1px_rgba(17,21,24,.34)] lg:block xl:text-[8.7rem]">
              Mariana
            </div>
            <motion.div
              className="relative z-30 w-[min(84vw,340px)] sm:w-[min(70vw,390px)] lg:absolute lg:bottom-[-0.75rem] lg:left-auto lg:right-[26%] lg:w-[min(31vw,330px)] xl:bottom-[-1rem] xl:right-[28%] xl:w-[min(28vw,350px)]"
              initial={{ opacity: 0, y: 70, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              style={{ y: heroPhotoY }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="/mariana-hero.webp"
                alt="Retrato de Karol Mariana Acuña"
                fetchPriority="high"
                decoding="async"
                className="relative mx-auto block h-auto max-h-[370px] w-full max-w-full object-contain object-bottom saturate-125 contrast-105 sm:max-h-[430px] lg:h-[455px] lg:max-h-none xl:h-[475px]"
              />
            </motion.div>
            <motion.div
              className="absolute right-[-0.5rem] top-[34%] z-40 hidden w-[220px] rotate-[5deg] rounded-2xl border border-white/80 bg-white/92 px-5 pb-5 pt-7 text-left font-mono text-[11px] leading-6 text-[#111518] shadow-[0_26px_80px_rgba(31,36,40,.16)] backdrop-blur-sm md:block xl:right-0 xl:w-[245px]"
              style={{ y: heroCodeY }}
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.22 }}
            >
              <span className="absolute -top-4 left-7 rotate-[-4deg] rounded-full border border-[#111518]/10 bg-white px-3 py-1 text-[9px] font-black uppercase tracking-[0.04em] text-[#111518]/55 shadow-sm">
                {"// human first, code second"}
              </span>
              <p><span className="text-[#cf7d65]">const</span> mariana = {"{"}</p>
              <p className="pl-5">role: <span className="text-[#6b6d43]">{"'software engineer'"}</span>,</p>
              <p className="pl-5">passion: <span className="text-[#6b6d43]">{"'building products'"}</span>,</p>
              <p className="pl-5">focus: <span className="text-[#6b6d43]">{"'real problems'"}</span>,</p>
              <p className="pl-5">mindset: <span className="text-[#6b6d43]">{"'always learning'"}</span>,</p>
              <p className="pl-5">goal: <span className="text-[#6b6d43]">{"'create impact'"}</span></p>
              <p>{"}"}</p>
            </motion.div>
          </div>
        </div>

        <a href="#sobre-mi" className="relative z-40 mx-auto -mt-7 mb-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1f2428] bg-white shadow-[4px_4px_0_#1f2428] sm:h-11 sm:w-11">
          <ArrowDown className="h-5 w-5" />
        </a>
        <TechMarquee />
      </section>

      <section id="sobre-mi" className="relative overflow-hidden bg-[#fffaf2] px-5 py-16 text-[#1f2428] sm:px-8">
        <div className="absolute inset-x-0 top-0 h-4 bg-[linear-gradient(90deg,#99b4aa,#6b6d43,#aba66f,#cf7d65,#e1b8a2)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(153,180,170,.24),transparent_18rem),radial-gradient(circle_at_82%_18%,rgba(207,125,101,.14),transparent_24rem),linear-gradient(180deg,#fffaf2_0%,#f8efe3_58%,#fffaf2_100%)]" />
        <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(90deg,rgba(31,36,40,.075)_1px,transparent_1px),linear-gradient(rgba(31,36,40,.065)_1px,transparent_1px)] [background-size:64px_64px]" />
        <motion.div className="absolute -left-24 top-20 h-56 w-56 rounded-full bg-[#99b4aa]/55" animate={{ y: [0, 24, 0], scale: [1, 1.06, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute right-[-4rem] bottom-14 h-48 w-48 rounded-full bg-[#cf7d65]/25" animate={{ y: [0, -24, 0], rotate: [0, 18, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        <div className="pointer-events-none absolute right-8 top-8 z-0 hidden h-64 w-80 opacity-80 lg:block">
          <span className="absolute right-36 top-16 text-5xl font-black leading-none text-[#99b4aa]">✦</span>
          <span className="absolute right-24 top-24 text-2xl font-black leading-none text-[#cf7d65]">✦</span>
          <span className="absolute right-8 top-6 h-24 w-24 rounded-full border border-[#6b6d43]/22" />
          <span className="absolute right-2 top-32 h-14 w-14 rounded-full border border-[#cf7d65]/24" />
          <span className="absolute right-48 top-3 h-px w-24 rotate-[-18deg] bg-[#6b6d43]/24" />
          <span className="absolute right-2 top-24 h-px w-28 rotate-[18deg] bg-[#6b6d43]/24" />
          <span className="absolute right-52 top-[9.5rem] h-2 w-2 rounded-full bg-[#aba66f]/55" />
          <span className="absolute right-[16.5rem] top-[7.5rem] h-3 w-3 rounded-full bg-[#cf7d65]/45" />
          <span className="absolute right-16 top-52 h-2 w-20 rotate-[-8deg] rounded-full bg-[#99b4aa]/28" />
        </div>
        <div className="pointer-events-none absolute right-[18rem] top-28 z-0 hidden text-4xl font-black text-[#99b4aa] lg:block">✦</div>
        <div className="pointer-events-none absolute right-[16rem] top-36 z-0 hidden text-xl font-black text-[#cf7d65] lg:block">✦</div>
        <div className="pointer-events-none absolute right-[25rem] bottom-20 z-0 hidden text-2xl font-black text-[#cf7d65]/75 lg:block">✧</div>
        <Image
          src="/mariana-sitting-illustration.webp"
          alt=""
          aria-hidden="true"
          width={1092}
          height={1092}
          sizes="(min-width: 1280px) 270px, (min-width: 1024px) 240px, 160px"
          loading="lazy"
          className="pointer-events-none absolute bottom-0 right-[-1rem] z-20 h-auto w-40 select-none opacity-95 drop-shadow-[0_18px_30px_rgba(31,36,40,.2)] sm:w-48 lg:right-[-1.25rem] lg:block lg:w-[clamp(250px,22vw,360px)] xl:right-0"
        />
        <div className="pointer-events-none absolute bottom-0 right-0 z-10 hidden h-40 w-[38rem] rounded-tl-full bg-[#99b4aa]/35 lg:block" />
        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto max-w-[420px]">
              <div className="absolute -left-4 -top-4 z-10 rounded-md bg-[#cf7d65] px-4 py-2 text-xl font-black uppercase text-white shadow-[5px_5px_0_#1f2428]">Hello.</div>
              <div className="rounded-xl border-2 border-[#1f2428] bg-[#f2dec7] p-3 shadow-[10px_10px_0_#1f2428]">
                <Image
                  src="/hero-mariana.webp"
                  alt="Ilustración de Mariana trabajando"
                  width={1536}
                  height={2048}
                  sizes="(min-width: 1024px) 420px, 100vw"
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-lg object-cover saturate-110"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-5 inline-block rounded-full border-2 border-[#1f2428] bg-[#f2dec7] px-4 py-2 text-sm font-black uppercase text-[#1f2428] shadow-[4px_4px_0_#1f2428]">
              Tunja / remoto
            </p>
            <h2 className="max-w-3xl text-3xl font-black leading-[0.96] tracking-[-0.045em] text-[#1f2428] sm:text-4xl lg:text-5xl">
              Desarrollo de software con una mirada limpia, práctica y visual.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#1f2428]/72">
              Me gusta crear interfaces claras, conectar servicios, ordenar información y convertir ideas en productos digitales útiles. Este portafolio evita publicar proyectos incompletos y se centra en mi perfil, mi stack y mi forma de trabajar.
            </p>
            <div className="relative z-30 mt-7 grid max-w-[690px] gap-4 pr-0 sm:grid-cols-3 lg:pr-[4.5rem] xl:pr-[5.5rem]">
              {profileCards.map(([title, copy, color], i) => (
                <motion.article
                  key={title}
                  whileHover={{ y: -8, rotate: i - 1 }}
                  className="min-h-[210px] rounded-lg border border-[#1f2428] bg-[#fffaf2] p-4 text-[#151515] shadow-[6px_6px_0_#1f2428]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-[#151515]/25 shadow-sm" style={{ backgroundColor: color }}>
                    <Sparkles className="h-5 w-5" />

                  </span>
                  <h3 className="mt-4 text-lg font-black leading-tight tracking-[-0.04em]">{title}</h3>
                  <p className="mt-3 max-w-[13rem] text-sm leading-6 text-black/68">{copy}</p>
                </motion.article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="stack" className="relative overflow-hidden bg-[#99b4aa] px-5 py-20 sm:px-8">
        <motion.div className="absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#f2dec7]/45" animate={{ y: [0, 28, 0], scale: [1, 1.08, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute right-[-3rem] bottom-10 h-48 w-48 rounded-full bg-[#cf7d65]/35" animate={{ y: [0, -28, 0], rotate: [0, 24, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        <div className="pointer-events-none absolute bottom-0 right-[-2rem] z-0 hidden h-40 w-[28rem] rounded-tl-full bg-[#aba66f]/35 lg:block" />
        <img
          src="/stack-peek.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-2 z-20 h-auto w-40 select-none opacity-95 drop-shadow-[0_18px_30px_rgba(31,36,40,.18)] sm:w-48 lg:right-[-1.5rem] lg:w-[clamp(250px,22vw,360px)] lg:drop-shadow-[0_24px_42px_rgba(31,36,40,.18)] xl:right-0"
        />
        <div className="relative z-30 mx-auto max-w-[1180px] lg:pr-[13rem] xl:pr-[15rem]">
          <Reveal className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-5 inline-flex rotate-[-2deg] items-center gap-2 bg-[#f2dec7] px-4 py-2 text-sm font-black uppercase text-[#1f2428] shadow-[5px_5px_0_#1f2428]">
                <Code2 className="h-4 w-4" /> Tecnologías
              </p>
              <h2 className="text-4xl font-black leading-[0.94] tracking-[-0.05em] text-[#1f2428] sm:text-5xl lg:text-6xl">Stack & skills</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#1f2428]/70 sm:text-lg sm:leading-8">
              Herramientas que uso para construir productos web completos: interfaces, backend, bases de datos, ORM, control de versiones y flujos ágiles.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {stack.map((item, index) => (
              <SkillBadge key={item[0]} item={item} index={index} />
            ))}
          </Reveal>
        </div>
      </section>

      <section id="proyectos" className="relative overflow-hidden bg-[#f2dec7] px-5 py-24 sm:px-8">
        <div className="absolute left-0 top-0 h-full w-7 bg-[linear-gradient(#99b4aa,#6b6d43,#aba66f,#cf7d65,#e1b8a2)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_32%,rgba(153,180,170,.22),transparent_18rem),radial-gradient(circle_at_86%_8%,rgba(171,166,111,.2),transparent_24rem),radial-gradient(circle_at_78%_82%,rgba(207,125,101,.16),transparent_22rem),linear-gradient(180deg,rgba(255,250,242,.35),rgba(242,222,199,.12))]" />
        <div className="absolute inset-0 opacity-[0.2] [background-image:linear-gradient(90deg,rgba(31,36,40,.075)_1px,transparent_1px),linear-gradient(rgba(31,36,40,.065)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="pointer-events-none absolute left-0 top-0 hidden h-80 w-44 overflow-hidden bg-[#99b4aa]/70 shadow-[18px_0_55px_rgba(107,109,67,.18)] lg:block">
          <span className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#f2dec7]/70" />
        </div>
        <div className="pointer-events-none absolute right-0 top-0 hidden h-72 w-52 overflow-hidden bg-[#aba66f]/36 shadow-[-18px_0_55px_rgba(107,109,67,.14)] lg:block">
          <span className="absolute -right-24 top-[-3rem] h-72 w-72 rounded-full border-[36px] border-[#6b6d43]/22" />
        </div>
        <div className="pointer-events-none absolute left-[11rem] bottom-[-5rem] hidden h-56 w-56 rounded-full bg-[#cf7d65]/20 blur-2xl lg:block" />
        <div className="pointer-events-none absolute bottom-20 right-[18%] h-48 w-72 rotate-[-8deg] rounded-[60%_40%_50%_50%] bg-[#aba66f]/16 blur-2xl" />
        <div className="pointer-events-none absolute right-[14%] top-20 hidden text-5xl font-black text-[#99b4aa] drop-shadow-[0_10px_24px_rgba(153,180,170,.45)] lg:block">✦</div>
        <div className="pointer-events-none absolute right-[10%] top-32 hidden text-2xl font-black text-[#cf7d65] drop-shadow-[0_8px_18px_rgba(207,125,101,.45)] lg:block">✦</div>
        <div className="pointer-events-none absolute left-[30%] top-24 hidden text-3xl font-black text-[#6b6d43]/55 lg:block">✧</div>
        <div className="pointer-events-none absolute left-[48%] bottom-24 hidden text-2xl font-black text-[#cf7d65]/65 lg:block">✦</div>
        <div className="pointer-events-none absolute right-[35%] bottom-32 hidden text-xl font-black text-[#99b4aa]/80 lg:block">✧</div>
        <div className="pointer-events-none absolute left-[18%] top-40 hidden h-20 w-20 rounded-full border-[18px] border-[#aba66f]/18 lg:block" />
        <div className="pointer-events-none absolute right-[22%] top-48 hidden h-24 w-24 rounded-full bg-[#99b4aa]/18 shadow-[0_24px_60px_rgba(153,180,170,.25)] lg:block" />
        <div className="pointer-events-none absolute right-[24%] top-[13rem] hidden h-14 w-14 rounded-full bg-[#f2dec7]/70 lg:block" />
        <div className="pointer-events-none absolute left-[32%] bottom-16 hidden h-px w-28 rotate-[-12deg] bg-[#6b6d43]/28 lg:block" />
        <img
          src="/projects-left-decor.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-2 z-20 h-auto w-36 select-none opacity-95 drop-shadow-[0_18px_30px_rgba(31,36,40,.18)] sm:w-44 lg:left-[-1rem] lg:right-auto lg:w-[clamp(260px,22vw,380px)] lg:drop-shadow-[0_24px_42px_rgba(31,36,40,.18)] xl:left-2"
        />
        <div className="relative z-30 mx-auto max-w-[1180px] lg:pl-[13rem] xl:pl-[15rem]">
          <SectionTitle kicker="Proyectos destacados" title="Proyectos universitarios realizados." copy="Algunos trabajos académicos desarrollados durante mi formación, presentados en video para mostrar su funcionamiento, interfaz y proceso." icon={Sparkles} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredAreas.map(([id, title, copy, href, color], index) => (
              <Reveal key={id} delay={index * 0.06}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -10, rotate: index % 2 ? 1.5 : -1.5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative block min-h-[250px] overflow-hidden rounded-xl border-2 border-[#151515] bg-white/95 p-5 text-[#151515] shadow-[7px_7px_0_#151515,0_24px_42px_rgba(31,36,40,.16)] backdrop-blur-sm"
                >
                  <span className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(242,222,199,.55),transparent)]" />
                  <span className="absolute -bottom-12 -right-10 h-36 w-36 rounded-full opacity-75 blur-[1px] transition group-hover:scale-110" style={{ backgroundColor: color }} />
                  <span className="absolute -left-10 top-24 h-24 w-28 rounded-[50%_50%_45%_55%] opacity-0 blur-2xl transition group-hover:opacity-35" style={{ backgroundColor: color }} />
                  <span className="absolute bottom-8 right-10 text-2xl font-black text-[#151515]/10 transition group-hover:rotate-12 group-hover:text-[#151515]/20">✦</span>
                  <span className="relative mb-8 inline-flex h-12 w-12 items-center justify-center rounded-md border-2 border-[#151515] text-xl font-black" style={{ backgroundColor: color }}>
                    {id}
                  </span>
                  <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border-2 border-[#151515] bg-[#f2dec7] shadow-[3px_3px_0_#151515,0_10px_18px_rgba(207,125,101,.18)] transition group-hover:-translate-y-1 group-hover:translate-x-1">
                    <Play className="h-5 w-5 fill-[#151515]" />
                  </span>
                  <div className="relative mt-14 flex min-h-0 flex-col">
                    <h3 className="text-xl font-black leading-tight tracking-[-0.04em]">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/62">{copy}</p>
                    <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-md border-2 border-[#151515] bg-[#151515] px-3 py-2 text-xs font-black uppercase text-white transition group-hover:bg-[#cf7d65] group-hover:text-[#151515]">
                      Ver demo <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="relative overflow-hidden bg-[#e1b8a2] px-5 py-20 sm:px-8">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(31,36,40,.22)_1px,transparent_0)] [background-size:28px_28px]" />
        <img
          src="/experience-areas-decor.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-1 z-20 h-auto w-44 select-none opacity-95 drop-shadow-[0_18px_30px_rgba(31,36,40,.18)] sm:w-52 lg:right-[-1.5rem] lg:w-[clamp(280px,23vw,400px)] lg:drop-shadow-[0_28px_48px_rgba(31,36,40,.18)] xl:right-0"
        />
        <div className="relative z-30 mx-auto max-w-[1180px] lg:pr-[13rem] xl:pr-[15rem]">
          <SectionTitle kicker="Experiencia" title="Áreas donde ya puedo aportar." copy="Perfil junior full stack con práctica en interfaces, APIs, datos y colaboración ágil." icon={BriefcaseBusiness} />
          <div className="grid gap-5 md:grid-cols-3">
            {experience.map((item, index) => <Reveal key={item[0]} delay={index * 0.06}><ExperienceCard item={item} index={index} /></Reveal>)}
          </div>
        </div>
      </section>

      <section id="educacion" className="relative overflow-hidden bg-[#aba66f] px-5 py-20 text-[#1f2428] sm:px-8">
        <motion.div className="absolute right-[-4rem] top-16 h-64 w-64 rounded-full border-[28px] border-[#6b6d43]/35" animate={{ rotate: [0, 360] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} />
        <img
          src="/education-decor.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-2 z-20 h-auto w-36 select-none opacity-95 drop-shadow-[0_18px_30px_rgba(31,36,40,.18)] sm:w-44 lg:left-[-1rem] lg:right-auto lg:w-[clamp(260px,22vw,380px)] lg:drop-shadow-[0_24px_42px_rgba(31,36,40,.18)] xl:left-2"
        />
        <div className="relative z-30 mx-auto max-w-[1180px] lg:pl-[13rem] xl:pl-[15rem]">
          <SectionTitle kicker="Educación" title="Base académica y aprendizaje constante." copy="Formación universitaria en curso, fortalecida con rutas técnicas y proyectos web." icon={BookOpen} />
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item, index) => <Reveal key={item[0]} delay={index * 0.06}><InfoCard item={item} index={index} /></Reveal>)}
          </div>
        </div>
      </section>

      <section id="certificaciones" className="relative overflow-hidden bg-[#99b4aa] px-5 py-20 sm:px-8">
        <div className="absolute inset-x-0 top-0 h-6 bg-[linear-gradient(90deg,#1f2428_0_20%,#cf7d65_20%_40%,#e1b8a2_40%_60%,#aba66f_60%_80%,#99b4aa_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_24%,rgba(242,222,199,.44),transparent_20rem),radial-gradient(circle_at_86%_18%,rgba(207,125,101,.18),transparent_22rem),radial-gradient(circle_at_74%_84%,rgba(171,166,111,.26),transparent_24rem)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(90deg,rgba(31,36,40,.09)_1px,transparent_1px),linear-gradient(rgba(31,36,40,.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        <img
          src="/certifications-decor.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-2 z-20 h-auto w-36 select-none opacity-95 drop-shadow-[0_18px_30px_rgba(31,36,40,.18)] sm:w-44 lg:right-[-1rem] lg:w-[clamp(250px,21vw,340px)] lg:drop-shadow-[0_24px_42px_rgba(31,36,40,.2)] xl:right-2"
        />
        <div className="relative z-30 mx-auto max-w-[1180px] lg:pr-[12rem] xl:pr-[14rem]">
          <SectionTitle kicker="Certificaciones" title="Formación complementaria verificada desde tu hoja de vida." copy="Certificados y rutas técnicas alineadas con desarrollo web, bases de datos, APIs y producto digital." icon={Award} />
          <div className="grid gap-5 md:grid-cols-3">
            {certifications.map(([title, copy], index) => {
              const colors = ["#f2dec7", "#e1b8a2", "#aba66f"];
              const accents = ["#99b4aa", "#cf7d65", "#6b6d43"];

              return (
                <Reveal key={title} delay={index * 0.06}>
                  <motion.a
                    href="https://www.linkedin.com/in/karol-mariana-acuna/details/certifications/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -10, rotate: index - 1, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative block h-full overflow-hidden rounded-xl border-2 border-[#151515] bg-white p-4 text-[#151515] shadow-[8px_8px_0_#151515,0_26px_48px_rgba(31,36,40,.16)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border-2 border-[#151515] bg-[#fffaf2] p-4 shadow-inner">
                      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(90deg,rgba(31,36,40,.08)_1px,transparent_1px),linear-gradient(rgba(31,36,40,.07)_1px,transparent_1px)] [background-size:28px_28px]" />
                      <span className="absolute -right-12 -top-12 h-32 w-32 rounded-full" style={{ backgroundColor: colors[index] }} />
                      <span className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full opacity-80" style={{ backgroundColor: accents[index] }} />
                      <div className="relative flex h-full flex-col justify-between rounded-md border border-[#151515]/20 bg-white/78 p-4 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#151515]/50">Certificado</span>
                          <Award className="h-6 w-6" style={{ color: accents[index] }} />
                        </div>
                        <div>
                          <p className="max-w-[12rem] text-lg font-black leading-tight tracking-[-0.04em]">{title}</p>
                          <div className="mt-3 h-1.5 w-20 rounded-full" style={{ backgroundColor: accents[index] }} />
                        </div>
                        <div className="flex items-end justify-between">
                          <span className="text-[10px] font-bold uppercase text-[#151515]/45">LinkedIn</span>
                          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#151515]/20 bg-[#f2dec7] text-xs font-black">0{index + 1}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative p-3 pb-2 pt-5">
                      <h3 className="text-2xl font-black leading-tight tracking-[-0.04em]">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-black/62">{copy}</p>
                      <span className="mt-5 inline-flex items-center gap-2 rounded-md border-2 border-[#151515] bg-[#151515] px-3 py-2 text-xs font-black uppercase text-white transition group-hover:bg-[#cf7d65] group-hover:text-[#151515]">
                        Ver certificado <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </motion.a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="logros" className="relative overflow-hidden bg-[#cf7d65] px-5 py-16 sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(242,222,199,.34),transparent_22rem),radial-gradient(circle_at_84%_18%,rgba(153,180,170,.22),transparent_24rem),linear-gradient(180deg,rgba(207,125,101,.2),rgba(225,184,162,.28))]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(90deg,rgba(31,36,40,.08)_1px,transparent_1px),linear-gradient(rgba(31,36,40,.07)_1px,transparent_1px)] [background-size:58px_58px]" />
        <motion.div className="absolute left-1/2 top-6 h-24 w-[70vw] -translate-x-1/2 -rotate-2 bg-[#e1b8a2]/30" animate={{ x: [-20, 20, -20] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <div className="pointer-events-none absolute right-[-6rem] top-4 hidden h-56 w-56 rounded-full border-[34px] border-[#f2dec7]/18 lg:block" />
        <div className="pointer-events-none absolute right-[10%] bottom-4 hidden h-24 w-44 rotate-[-8deg] rounded-full bg-[#99b4aa]/24 blur-xl lg:block" />
        <div className="pointer-events-none absolute left-[20rem] top-12 hidden h-52 w-52 rounded-full border-[28px] border-[#dfe7e2]/80 opacity-85 lg:block xl:left-[28rem]" />
        <div className="pointer-events-none absolute left-[18rem] top-40 hidden text-3xl font-black text-[#99b4aa] drop-shadow-[0_8px_18px_rgba(153,180,170,.28)] lg:block xl:left-[25rem]">
          ✧
        </div>
        <div className="pointer-events-none absolute left-[5rem] top-20 hidden h-24 w-64 bg-[#e1b8a2]/22 lg:block" />
        <div className="pointer-events-none absolute right-[32%] top-20 hidden text-4xl font-black text-[#f2dec7]/65 drop-shadow-[0_8px_18px_rgba(31,36,40,.12)] lg:block">✦</div>
        <div className="pointer-events-none absolute right-[18%] top-36 hidden text-2xl font-black text-[#99b4aa]/80 lg:block">✧</div>
        <div className="relative z-20 mx-auto max-w-[980px] text-center">
          <SectionTitle kicker="Logros y estadísticas" title="Números simples para leer rápido tu perfil." copy="Indicadores visuales, fáciles de actualizar cuando tengas métricas más concretas." icon={ChartNoAxesColumnIncreasing} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label], index) => (
              <Reveal key={label} delay={index * 0.04}>
                <AnimatedStatCard value={value} label={label} index={index} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.18} className="mt-8">
            <ActiveBuildPanel />
          </Reveal>
        </div>
      </section>

      <section id="timeline" className="relative overflow-hidden bg-[#f2dec7] px-5 py-24 sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(153,180,170,.28),transparent_22rem),radial-gradient(circle_at_88%_16%,rgba(207,125,101,.18),transparent_20rem),radial-gradient(circle_at_70%_86%,rgba(171,166,111,.22),transparent_24rem)]" />
        <div className="absolute inset-0 opacity-[0.2] [background-image:linear-gradient(90deg,rgba(31,36,40,.075)_1px,transparent_1px),linear-gradient(rgba(31,36,40,.065)_1px,transparent_1px)] [background-size:62px_62px]" />
        <div className="absolute inset-x-0 bottom-0 h-4 bg-[linear-gradient(90deg,#99b4aa,#6b6d43,#aba66f,#cf7d65,#e1b8a2)]" />
        <div className="pointer-events-none absolute left-[10%] top-24 hidden text-4xl font-black text-[#99b4aa] lg:block">✦</div>
        <div className="pointer-events-none absolute right-[24%] top-36 hidden text-2xl font-black text-[#cf7d65] lg:block">✧</div>
        <div className="relative z-20 mx-auto max-w-[1180px]">
          <SectionTitle kicker="Timeline profesional" title="Una ruta de crecimiento clara." copy="Un recorrido breve para ubicar tu proceso sin llenar la página de texto." icon={Trophy} />
          <div className="relative mt-12">
            <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-[#151515] md:left-0 md:right-0 md:top-[4.75rem] md:mx-auto md:h-1 md:w-[calc(100%-7rem)]" />
            <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-[linear-gradient(#99b4aa,#aba66f,#cf7d65)] md:left-0 md:right-0 md:top-[4.75rem] md:mx-auto md:h-1 md:w-[calc(100%-7rem)] md:bg-[linear-gradient(90deg,#99b4aa,#aba66f,#cf7d65)]" />
            <div className="grid gap-6 md:grid-cols-4">
              {professionalTimeline.map(([year, copy], index) => {
                const colors = ["#99b4aa", "#aba66f", "#e1b8a2", "#cf7d65"];

                return (
                  <Reveal key={year} delay={index * 0.05}>
                    <motion.article
                      whileHover={{ y: -10, rotate: index % 2 ? 1 : -1, scale: 1.02 }}
                      className="group relative ml-14 h-full rounded-xl border-2 border-[#151515] bg-white/95 p-6 shadow-[7px_7px_0_#151515,0_22px_38px_rgba(31,36,40,.14)] backdrop-blur-sm md:ml-0 md:pt-16"
                    >
                      <span className="absolute -left-[3.25rem] top-7 grid h-11 w-11 place-items-center rounded-full border-2 border-[#151515] bg-[#f2dec7] shadow-[4px_4px_0_#151515] md:left-1/2 md:top-[-1.9rem] md:-translate-x-1/2">
                        <span className="h-5 w-5 rounded-full border-2 border-[#151515]" style={{ backgroundColor: colors[index] }} />
                      </span>
                      <span className="absolute -bottom-10 -right-8 h-28 w-28 rounded-full opacity-55 transition group-hover:scale-110" style={{ backgroundColor: colors[index] }} />
                      <span className="absolute right-6 top-6 text-2xl font-black text-[#151515]/10 transition group-hover:rotate-12 group-hover:text-[#151515]/20">✦</span>
                      <p className="relative text-4xl font-black tracking-[-0.05em] text-[#aba66f] [-webkit-text-stroke:1.2px_#151515]">{year}</p>
                      <p className="relative mt-5 leading-7 text-black/64">{copy}</p>
                      <span className="relative mt-6 inline-flex rounded-full border border-[#151515]/20 px-3 py-1 text-xs font-black uppercase text-[#151515]/55">
                        Paso 0{index + 1}
                      </span>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden bg-[#99b4aa] px-5 py-20 text-[#1f2428] sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(171,166,111,.4),transparent_23rem),radial-gradient(circle_at_88%_18%,rgba(207,125,101,.22),transparent_24rem)]" />
        <Reveal className="relative z-10 mx-auto max-w-[1180px]">
          <div className="relative overflow-hidden rounded-xl border-2 border-[#1f2428] bg-[#f2dec7] p-8 shadow-[10px_10px_0_#6b6d43] sm:p-12">
            <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-[#cf7d65]/70" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border-2 border-[#1f2428] bg-[#aba66f] px-4 py-2 font-black text-[#151515]">
                  <MapPin className="h-4 w-4" /> Prácticas profesionales
                </p>
                <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[0.94] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Conectemos por GitHub, LinkedIn o correo.
                </h2>
              </div>
              <div className="grid content-end gap-3">
                {socials.map(({ label, href, color }) => {
                  const Icon = socialIcons[label];
                  return (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: 8, backgroundColor: color }}
                      className="group flex items-center justify-between rounded-md border-2 border-[#1f2428] bg-white px-5 py-4 font-black text-[#1f2428] shadow-[4px_4px_0_rgba(31,36,40,.18)] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f2428]"
                    >
                      <span className="flex min-w-0 items-center gap-3"><Icon className="h-5 w-5 shrink-0" /> <span className="truncate">{label}</span></span>
                      <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="relative overflow-hidden bg-[#1f2428] px-5 py-12 text-sm font-bold text-white/68 sm:px-8">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="absolute -right-20 top-[-5rem] h-64 w-64 rounded-full bg-[#99b4aa]/20 blur-2xl" />
        <div className="absolute -left-16 bottom-[-5rem] h-56 w-56 rounded-full bg-[#cf7d65]/18 blur-2xl" />
        <div className="relative mx-auto max-w-[1180px]">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white">
                <Code2 className="h-4 w-4" /> Consola
              </p>
              <h2 className="max-w-xl text-3xl font-black leading-[0.94] tracking-[-0.04em] text-white sm:text-5xl">
                Navega el portafolio desde la terminal.
              </h2>
            </div>
            <InteractiveTerminal />
          </div>
          <div className="flex flex-col gap-4 border-t-2 border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p>2026 Karol Mariana Acuña - Ingeniería de Sistemas</p>
            <p>Full Stack - IA aplicada - Producto - Diseño visual</p>
          </div>
        </div>
      </footer>
    </motion.main>
  );
}
