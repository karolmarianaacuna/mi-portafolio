// Datos principales del portafolio.
// Mantenerlos aquí evita que la página principal se llene de texto repetido.

export type SocialLink = {
  label: "LinkedIn" | "GitHub" | "Instagram" | "Email";
  href: string;
  color: string;
};

export type StackItem = [name: string, copy: string, color: string, type: string, iconColor: string];
export type TextItem = [title: string, copy: string];
export type ProfileCard = [title: string, copy: string, color: string];
export type CurrentBuild = [name: string, copy: string, progress: number, color: string];
export type UniversityProject = [id: string, title: string, copy: string, href: string, color: string];

export const socials: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/karol-mariana-acu%C3%B1a-barrera-979ab9271/", color: "#0a66c2" },
  { label: "GitHub", href: "https://github.com/karolmarianaacuna", color: "#151515" },
  { label: "Instagram", href: "https://www.instagram.com", color: "#cf7d65" },
  { label: "Email", href: "mailto:karolmarianaacuna@gmail.com", color: "#99b4aa" },
];

export const stack: StackItem[] = [
  ["JavaScript", "Lógica web, interacción y consumo de APIs.", "#aba66f", "javascript", "#151515"],
  ["React", "Interfaces reutilizables y estados claros.", "#99b4aa", "react", "#1f5f69"],
  ["Next.js", "Rutas, rendimiento y despliegue moderno.", "#f2dec7", "next", "#151515"],
  ["TypeScript", "Código más legible y mantenible.", "#99b4aa", "typescript", "#2f6477"],
  ["Tailwind", "Diseño responsive con identidad visual.", "#e1b8a2", "tailwind", "#2f6f75"],
  ["Spring Boot", "Backend Java, servicios REST y arquitectura.", "#aba66f", "spring", "#4f5a2f"],
  ["Node.js", "APIs, integraciones y lógica backend.", "#6b6d43", "node", "#f2dec7"],
  ["Prisma", "Modelado de datos y acceso a base de datos.", "#e1b8a2", "prisma", "#2d3748"],
  ["MongoDB", "Documentos, colecciones y datos flexibles.", "#aba66f", "mongodb", "#3f4d2b"],
  ["SQL", "Consultas, relaciones y estructura de información.", "#99b4aa", "sql", "#3f6270"],
  ["Python", "Datos, automatización y Machine Learning.", "#cf7d65", "python", "#f2dec7"],
  ["GitHub", "Versionamiento y flujo de trabajo.", "#f2dec7", "github", "#151515"],
];

export const profileCards: ProfileCard[] = [
  ["UI/UX", "Diseño interfaces claras, intuitivas y pensadas para que el usuario entienda rápido.", "#99b4aa"],
  ["Datos", "Me interesa organizar, consultar y transformar información para tomar mejores decisiones.", "#cf7d65"],
  ["Machine Learning", "Exploro modelos, automatizaciones e IA aplicada para crear soluciones más inteligentes.", "#aba66f"],
];

export const featuredAreas: UniversityProject[] = [
  ["01", "Proyecto universitario", "Solución académica desarrollada para aplicar análisis, diseño y construcción de software.", "https://www.youtube.com/watch?v=_y-6HTMYmV4", "#99b4aa"],
  ["02", "Chatbot", "Asistente conversacional creado como práctica universitaria, con enfoque en interacción y respuesta al usuario.", "https://www.youtube.com/watch?v=dDtOVmUWOjw", "#6b6d43"],
  ["03", "Aplicación académica", "Proyecto de clase orientado a resolver un caso práctico mediante una experiencia digital funcional.", "https://youtu.be/QQGeBjoyp1I?si=vjtBS4oYCenXZ5an", "#aba66f"],
  ["04", "Demo funcional", "Implementación universitaria presentada en video para mostrar flujo, interfaz y comportamiento del sistema.", "https://youtu.be/CCZIylNJGVw?si=nP1TTguREc9Ozmm2", "#cf7d65"],
];

export const currentBuilds: CurrentBuild[] = [
  ["MoodSync", "Bienestar digital, emociones y seguimiento visual.", 72, "#cf7d65"],
  ["Syntra", "Organización de procesos, datos y flujos.", 58, "#99b4aa"],
  ["Bolsa de Empleo", "Búsqueda, postulaciones y gestión de oportunidades.", 46, "#aba66f"],
];

export const terminalCommands: Record<string, { label: string; target?: string; output: string[] }> = {
  about: {
    label: "about",
    target: "sobre-mi",
    output: ["Abriendo perfil...", "Mariana: estudiante de Ingeniería de Sistemas, full stack junior con profundización en UI/UX, datos y Machine Learning."],
  },
  skills: {
    label: "skills",
    target: "stack",
    output: ["Stack detectado:", "JavaScript, React, Next.js, TypeScript, Tailwind, Spring Boot, Node.js, Prisma, MongoDB, SQL, Python, Machine Learning y GitHub."],
  },
  projects: {
    label: "projects",
    target: "proyectos",
    output: ["Actualmente construyendo:", "MoodSync, Syntra y Bolsa de Empleo.", "Los casos finales se publican cuando estén listos."],
  },
  contact: {
    label: "contact",
    target: "contacto",
    output: ["Abriendo contacto...", "LinkedIn, GitHub y karolmarianaacuna@gmail.com disponibles."],
  },
  help: {
    label: "help",
    output: ["Comandos disponibles:", "about | skills | projects | contact"],
  },
};

export const experience: TextItem[] = [
  ["UI/UX frontend", "React, Next.js, Tailwind y componentes responsive con criterio de experiencia de usuario."],
  ["Datos backend", "Node.js, Express, Prisma ORM, APIs REST y bases de datos MySQL/MongoDB."],
  ["Machine Learning", "Python, análisis de datos, automatización e IA aplicada a problemas reales."],
];

export const education: TextItem[] = [
  ["Universidad Santo Tomás", "Ingeniería de Sistemas en curso, 2022-2027."],
  ["Instituto Técnico Industrial Francisco de Paula Santander", "Bachiller académico con base técnica y orientación a tecnología."],
];

export const certifications: TextItem[] = [
  ["Inglés Nivel B1 - MCER", "Certificación de dominio del idioma inglés según el Marco Común Europeo de Referencia."],
  ["Bootcamp de Inteligencia Artificial", "Formación práctica enfocada en conceptos, herramientas y aplicaciones de inteligencia artificial."],
  ["Poliandino y CENDI", "Certificación emitida por Poliandino y la Corporación Centro de Desarrollo Integrado CENDI."],
];

export const stats: TextItem[] = [
  ["12", "Tecnologías"],
  ["3", "Áreas foco"],
  ["2026", "Portafolio"],
  ["100%", "Ganas de aprender"],
];

export const professionalTimeline: TextItem[] = [
  ["2022", "Inicio de Ingeniería de Sistemas en la Universidad Santo Tomás."],
  ["2023", "Formación con Ministerio TIC, UTP e industrias creativas."],
  ["2024", "Desarrollo web con React, APIs, bases de datos y trabajo colaborativo."],
  ["2026", "Portafolio profesional y búsqueda de prácticas en equipos de software."],
];
