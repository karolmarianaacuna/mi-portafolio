"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { currentBuilds, terminalCommands } from "../data/portfolio";
import { Reveal } from "./common";

// Sección tipo GitHub Live para mostrar actividad reciente sin publicar proyectos incompletos.
export function CurrentBuilds() {
  return (
    <section id="live" className="relative overflow-hidden bg-[#f2dec7] px-5 py-16 text-[#1f2428] sm:px-8">
      <div className="absolute inset-x-0 top-0 h-4 bg-[linear-gradient(90deg,#99b4aa,#6b6d43,#aba66f,#cf7d65)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,rgba(31,36,40,.08)_1px,transparent_1px),linear-gradient(rgba(31,36,40,.07)_1px,transparent_1px)] [background-size:52px_52px]" />
      <img
        src="/section-character.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-2rem] z-0 hidden w-[150px] select-none rotate-[-3deg] drop-shadow-[0_24px_42px_rgba(31,36,40,.16)] lg:block xl:w-[180px]"
      />
      <div className="relative mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="h-full rounded-2xl border-2 border-[#1f2428] bg-[#f2dec7] p-6 shadow-[10px_10px_0_#aba66f]">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-4 border-b border-[#1f2428]/15 pb-5">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#6b6d43]">
                  <span className="h-3 w-3 rounded-full bg-[#6b6d43] shadow-[0_0_12px_rgba(107,109,67,.55)]" />
                  GitHub live
                </div>
                <h2 className="text-4xl font-black leading-[0.94] tracking-[-0.05em] text-[#1f2428] sm:text-5xl">
                  En desarrollo activo.
                </h2>
              </div>
              <span className="rounded-full border border-[#1f2428]/20 bg-[#e1b8a2] px-3 py-1 text-xs font-black uppercase text-[#1f2428]/70">actualizado</span>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#1f2428]/68">
              Proyectos en construcción real, con avance visible y foco en producto. Esta sección muestra actividad reciente sin presentar entregables incompletos como casos finales.
            </p>
            <div className="mt-6 grid gap-4">
              {currentBuilds.map(([name, copy, progress, color], index) => (
                <motion.article key={name} whileHover={{ x: 8 }} className="rounded-xl border-2 border-[#1f2428]/15 bg-[#f7eadb] p-4 text-[#1f2428] shadow-[5px_5px_0_rgba(31,36,40,.12)]">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xl font-black tracking-[-0.04em]">{name}</p>
                      <p className="mt-1 text-sm leading-6 text-black/60">{copy}</p>
                    </div>
                    <span className="rounded-md border-2 border-[#1f2428] px-2 py-1 text-sm font-black text-white" style={{ backgroundColor: color as string }}>
                      {progress}%
                    </span>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full border-2 border-[#1f2428] bg-[#e1b8a2]/45">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: color as string }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <InteractiveTerminal />
        </Reveal>
      </div>
    </section>
  );
}

export function ActiveBuildPanel() {
  return (
    <div className="h-full max-w-full rounded-2xl border-2 border-[#1f2428] bg-[#f2dec7] p-4 shadow-[8px_8px_0_#aba66f,0_24px_44px_rgba(31,36,40,.14)] sm:p-5 sm:shadow-[10px_10px_0_#aba66f,0_28px_48px_rgba(31,36,40,.14)]">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-4 border-b border-[#1f2428]/15 pb-4">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#6b6d43]">
            <span className="h-3 w-3 rounded-full bg-[#6b6d43] shadow-[0_0_12px_rgba(107,109,67,.55)]" />
            GitHub live
          </div>
          <h2 className="text-3xl font-black leading-[0.94] tracking-[-0.05em] text-[#1f2428] sm:text-4xl">
            En desarrollo activo.
          </h2>
        </div>
        <span className="rounded-full border border-[#1f2428]/20 bg-[#e1b8a2] px-3 py-1 text-xs font-black uppercase text-[#1f2428]/70">actualizado</span>
      </div>
      <p className="max-w-3xl text-sm leading-6 text-[#1f2428]/68">
        Proyectos en construcción real, con avance visible y foco en producto. Esta sección muestra actividad reciente sin presentar entregables incompletos como casos finales.
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {currentBuilds.map(([name, copy, progress, color], index) => (
          <motion.article key={name} whileHover={{ x: 8 }} className="min-w-0 rounded-xl border-2 border-[#1f2428]/15 bg-[#f7eadb] p-3 text-[#1f2428] shadow-[5px_5px_0_rgba(31,36,40,.12)]">
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <p className="break-words text-lg font-black tracking-[-0.04em]">{name}</p>
                <p className="mt-1 text-sm leading-6 text-black/60">{copy}</p>
              </div>
              <span className="rounded-md border-2 border-[#1f2428] px-2 py-1 text-sm font-black text-white" style={{ backgroundColor: color as string }}>
                {progress}%
              </span>
            </div>
            <div className="h-4 overflow-hidden rounded-full border-2 border-[#1f2428] bg-[#e1b8a2]/45">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: color as string }}
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

// Terminal interactiva: escribe comandos y navega a secciones del portafolio.
export function InteractiveTerminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([
    "portfolio@mariana:~$ help",
    "Comandos disponibles: about | skills | projects | contact",
  ]);

  function runCommand(rawCommand: string) {
    const normalized = rawCommand.trim().toLowerCase();
    if (!normalized) return;

    const entry = terminalCommands[normalized] ?? {
      label: normalized,
      output: [`Comando no encontrado: ${normalized}`, "Prueba con: help, about, skills, projects o contact."],
    };

    setHistory((current) => [...current.slice(-8), `portfolio@mariana:~$ ${normalized}`, ...entry.output]);
    setCommand("");

    const target = entry.target;
    if (target) {
      window.setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 280);
    }
  }

  return (
    <motion.div whileHover={{ y: -8, rotate: 0.25 }} className="h-full w-full max-w-full overflow-hidden rounded-2xl border-2 border-[#1f2428] bg-[#1f2428] shadow-[8px_8px_0_#99b4aa] sm:shadow-[10px_10px_0_#99b4aa]">
      <div className="flex items-center justify-between border-b-2 border-white/10 bg-[#1f2428] px-5 py-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#cf7d65]" />
          <span className="h-3 w-3 rounded-full bg-[#e1b8a2]" />
          <span className="h-3 w-3 rounded-full bg-[#aba66f]" />
        </div>
        <p className="text-xs font-black uppercase tracking-[0.16em] text-white/70">portfolio console</p>
      </div>
      <div className="grid min-h-0 md:min-h-[430px] md:grid-cols-[180px_minmax(0,1fr)]">
        <div className="border-b border-white/10 bg-white/[0.04] p-4 md:border-b-0 md:border-r">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-white/45">commands</p>
          <div className="grid gap-2">
            {Object.values(terminalCommands).slice(0, 4).map(({ label }) => (
              <button key={label} type="button" onClick={() => runCommand(label)} className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-left font-mono text-xs font-bold text-white/70 transition hover:border-[#cf7d65] hover:bg-[#cf7d65] hover:text-[#1f2428]">
                <span>&gt; {label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-white/10 bg-[#0b0f11] p-3">
            <p className="text-xs font-bold uppercase text-[#aba66f]">status</p>
            <p className="mt-2 text-xs leading-5 text-white/55">Navega escribiendo comandos o usando los accesos rápidos.</p>
          </div>
        </div>
        <div className="flex min-h-[360px] min-w-0 flex-col p-3 sm:p-4 md:min-h-[430px]">
          <div className="flex items-center justify-between rounded-t-xl border border-white/10 bg-[#0b0f11] px-4 py-3">
            <p className="font-mono text-xs font-bold text-[#cf7d65]">mariana.portfolio</p>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-white/35">live shell</p>
          </div>
          <div className="min-h-64 flex-1 overflow-x-auto border-x border-white/10 bg-[#f8faf8] p-3 font-mono text-xs leading-6 text-[#1f2428] sm:p-4 sm:text-sm sm:leading-7">
            <div className="space-y-1">
              {history.map((line, index) => (
                <div key={`${line}-${index}`} className="grid min-w-0 grid-cols-[1.5rem_minmax(0,1fr)] gap-2 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-3">
                  <span className="select-none text-right text-[#1f2428]/25">{String(index + 1).padStart(2, "0")}</span>
                  <p className={`break-words ${line.includes("$") ? "font-bold text-[#6b6d43]" : "text-[#1f2428]/72"}`}>{line}</p>
                </div>
              ))}
            </div>
          </div>
          <form className="flex flex-col gap-3 rounded-b-xl border border-white/10 bg-[#0b0f11] p-3 sm:flex-row" onSubmit={(event) => { event.preventDefault(); runCommand(command); }}>
            <label className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-3 font-mono">
              <span className="text-[#aba66f]">&gt;</span>
              <input value={command} onChange={(event) => setCommand(event.target.value)} placeholder="projects" className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-white/35" aria-label="Escribe un comando de terminal" />
            </label>
            <button className="rounded-lg border-2 border-[#cf7d65] bg-[#cf7d65] px-5 py-3 text-sm font-black uppercase text-[#1f2428] shadow-[4px_4px_0_#f2dec7] transition hover:-translate-y-1">
              Run
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
