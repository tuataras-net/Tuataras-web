import type { GenericAnimationConfig } from "./AnimatedBlogGeneric";

const G1 = "#3ecf8e";
const G2 = "#6ee7b7";

export const blogAnimationConfigs: Record<string, GenericAnimationConfig> = {
  // ─── IA Generativa ─────────────────────────────────────────────
  "ia-generativa-empresas-2026": {
    headerLabel: "IA generativa · panel ejecutivo",
    items: [
      { icon: "🧠", label: "Modelos LLM", metric: "GPT-5", color: G1 },
      { icon: "⚡", label: "Tiempo ahorrado", metric: "-62%", color: G2 },
      { icon: "📈", label: "Productividad", metric: "+3.2x", color: G1 },
      { icon: "💼", label: "Casos de uso", metric: "120+", color: G2 },
    ],
    timelineLabel: "Adopción de IA en empresas",
    timeline: [
      { label: "2023", value: 22 },
      { label: "2024", value: 48 },
      { label: "2025", value: 71 },
      { label: "2026", value: 92 },
    ],
    footerLabel: "Índice de adopción",
    badge: { emoji: "🚀", text: "AI-ready" },
  },
  "generative-ai-business-2026": {
    headerLabel: "Generative AI · executive dashboard",
    items: [
      { icon: "🧠", label: "LLM models", metric: "GPT-5", color: G1 },
      { icon: "⚡", label: "Time saved", metric: "-62%", color: G2 },
      { icon: "📈", label: "Productivity", metric: "+3.2x", color: G1 },
      { icon: "💼", label: "Use cases", metric: "120+", color: G2 },
    ],
    timelineLabel: "AI adoption in business",
    timeline: [
      { label: "2023", value: 22 },
      { label: "2024", value: 48 },
      { label: "2025", value: 71 },
      { label: "2026", value: 92 },
    ],
    footerLabel: "Adoption index",
    badge: { emoji: "🚀", text: "AI-ready" },
  },

  // ─── PWA vs Nativa ─────────────────────────────────────────────
  "pwa-vs-app-nativa": {
    headerLabel: "PWA vs nativa · benchmark",
    items: [
      { icon: "📱", label: "Cross-platform", metric: "iOS+Android", color: G1 },
      { icon: "💾", label: "Tamaño app", metric: "<5MB", color: G2 },
      { icon: "🔄", label: "Updates", metric: "instant", color: G1 },
      { icon: "💰", label: "Costo dev", metric: "-55%", color: G2 },
    ],
    timelineLabel: "Performance Lighthouse",
    timeline: [
      { label: "Perf", value: 92 },
      { label: "PWA", value: 100 },
      { label: "SEO", value: 96 },
      { label: "A11y", value: 90 },
    ],
    footerLabel: "Score promedio",
    badge: { emoji: "⚡", text: "Lighthouse 95+" },
  },
  "pwa-vs-native-apps": {
    headerLabel: "PWA vs native · benchmark",
    items: [
      { icon: "📱", label: "Cross-platform", metric: "iOS+Android", color: G1 },
      { icon: "💾", label: "App size", metric: "<5MB", color: G2 },
      { icon: "🔄", label: "Updates", metric: "instant", color: G1 },
      { icon: "💰", label: "Dev cost", metric: "-55%", color: G2 },
    ],
    timelineLabel: "Lighthouse performance",
    timeline: [
      { label: "Perf", value: 92 },
      { label: "PWA", value: 100 },
      { label: "SEO", value: 96 },
      { label: "A11y", value: 90 },
    ],
    footerLabel: "Average score",
    badge: { emoji: "⚡", text: "Lighthouse 95+" },
  },

  // ─── Ciberseguridad PyMEs ─────────────────────────────────────
  "ciberseguridad-pymes-2026": {
    headerLabel: "Ciberseguridad · panel SOC",
    items: [
      { icon: "🛡️", label: "Phishing bloqueado", metric: "98.7%", color: G1 },
      { icon: "🔐", label: "MFA activado", metric: "100%", color: G2 },
      { icon: "🚨", label: "Alertas/día", metric: "12", color: G1 },
      { icon: "⏱️", label: "MTTR", metric: "8min", color: G2 },
    ],
    timelineLabel: "Ataques mitigados",
    timeline: [
      { label: "L", value: 60 },
      { label: "M", value: 78 },
      { label: "M", value: 85 },
      { label: "J", value: 95 },
    ],
    footerLabel: "Estado del perímetro",
    badge: { emoji: "🛡️", text: "Protegido" },
  },
  "cybersecurity-smb-2026": {
    headerLabel: "Cybersecurity · SOC dashboard",
    items: [
      { icon: "🛡️", label: "Phishing blocked", metric: "98.7%", color: G1 },
      { icon: "🔐", label: "MFA enabled", metric: "100%", color: G2 },
      { icon: "🚨", label: "Alerts/day", metric: "12", color: G1 },
      { icon: "⏱️", label: "MTTR", metric: "8min", color: G2 },
    ],
    timelineLabel: "Threats mitigated",
    timeline: [
      { label: "M", value: 60 },
      { label: "T", value: 78 },
      { label: "W", value: 85 },
      { label: "T", value: 95 },
    ],
    footerLabel: "Perimeter status",
    badge: { emoji: "🛡️", text: "Protected" },
  },

  // ─── Microservicios vs monolito ──────────────────────────────
  "microservicios-vs-monolito": {
    headerLabel: "Arquitectura · benchmark",
    items: [
      { icon: "🧩", label: "Servicios", metric: "24", color: G1 },
      { icon: "🚀", label: "Deploys/sem", metric: "180", color: G2 },
      { icon: "⏲️", label: "Lead time", metric: "32min", color: G1 },
      { icon: "📊", label: "Disponibilidad", metric: "99.95%", color: G2 },
    ],
    timelineLabel: "Throughput de deploys",
    timeline: [
      { label: "Mono", value: 28 },
      { label: "Modular", value: 52 },
      { label: "Micro", value: 88 },
      { label: "Serverless", value: 95 },
    ],
    footerLabel: "DORA metrics",
    badge: { emoji: "🏆", text: "Elite performer" },
  },
  "microservices-vs-monolith": {
    headerLabel: "Architecture · benchmark",
    items: [
      { icon: "🧩", label: "Services", metric: "24", color: G1 },
      { icon: "🚀", label: "Deploys/wk", metric: "180", color: G2 },
      { icon: "⏲️", label: "Lead time", metric: "32min", color: G1 },
      { icon: "📊", label: "Uptime", metric: "99.95%", color: G2 },
    ],
    timelineLabel: "Deploy throughput",
    timeline: [
      { label: "Mono", value: 28 },
      { label: "Modular", value: 52 },
      { label: "Micro", value: 88 },
      { label: "Serverless", value: 95 },
    ],
    footerLabel: "DORA metrics",
    badge: { emoji: "🏆", text: "Elite performer" },
  },

  // ─── Gamificación e-learning ─────────────────────────────────
  "gamificacion-elearning": {
    headerLabel: "E-learning · gamificación",
    items: [
      { icon: "🏅", label: "Badges otorgados", metric: "4.2k", color: G1 },
      { icon: "📚", label: "Completitud", metric: "+78%", color: G2 },
      { icon: "🎯", label: "Engagement", metric: "+3.5x", color: G1 },
      { icon: "🧠", label: "Retención", metric: "+62%", color: G2 },
    ],
    timelineLabel: "Progreso de cohortes",
    timeline: [
      { label: "S1", value: 25 },
      { label: "S2", value: 50 },
      { label: "S3", value: 75 },
      { label: "S4", value: 92 },
    ],
    footerLabel: "Tasa de finalización",
    badge: { emoji: "🎮", text: "Engaged" },
  },
  "gamification-elearning": {
    headerLabel: "E-learning · gamification",
    items: [
      { icon: "🏅", label: "Badges issued", metric: "4.2k", color: G1 },
      { icon: "📚", label: "Completion", metric: "+78%", color: G2 },
      { icon: "🎯", label: "Engagement", metric: "+3.5x", color: G1 },
      { icon: "🧠", label: "Retention", metric: "+62%", color: G2 },
    ],
    timelineLabel: "Cohort progress",
    timeline: [
      { label: "W1", value: 25 },
      { label: "W2", value: 50 },
      { label: "W3", value: 75 },
      { label: "W4", value: 92 },
    ],
    footerLabel: "Completion rate",
    badge: { emoji: "🎮", text: "Engaged" },
  },

  // ─── Accesibilidad WCAG ──────────────────────────────────────
  "accesibilidad-web-wcag": {
    headerLabel: "Auditoría WCAG 2.2",
    items: [
      { icon: "👁️", label: "Contraste AA", metric: "100%", color: G1 },
      { icon: "⌨️", label: "Teclado", metric: "✓", color: G2 },
      { icon: "🔊", label: "Lector pantalla", metric: "✓", color: G1 },
      { icon: "🧩", label: "ARIA roles", metric: "98%", color: G2 },
    ],
    timelineLabel: "Score de accesibilidad",
    timeline: [
      { label: "Inicio", value: 38 },
      { label: "Fix1", value: 62 },
      { label: "Fix2", value: 84 },
      { label: "Final", value: 98 },
    ],
    footerLabel: "Cumplimiento legal",
    badge: { emoji: "♿", text: "WCAG 2.2 AA" },
  },
  "web-accessibility-wcag": {
    headerLabel: "WCAG 2.2 audit",
    items: [
      { icon: "👁️", label: "AA contrast", metric: "100%", color: G1 },
      { icon: "⌨️", label: "Keyboard", metric: "✓", color: G2 },
      { icon: "🔊", label: "Screen reader", metric: "✓", color: G1 },
      { icon: "🧩", label: "ARIA roles", metric: "98%", color: G2 },
    ],
    timelineLabel: "Accessibility score",
    timeline: [
      { label: "Start", value: 38 },
      { label: "Fix1", value: 62 },
      { label: "Fix2", value: 84 },
      { label: "Final", value: 98 },
    ],
    footerLabel: "Legal compliance",
    badge: { emoji: "♿", text: "WCAG 2.2 AA" },
  },

  // ─── Automatización no-code ──────────────────────────────────
  "automatizacion-no-code": {
    headerLabel: "Automatización · workflows",
    items: [
      { icon: "🔌", label: "Integraciones", metric: "350+", color: G1 },
      { icon: "⏱️", label: "Tiempo ahorrado", metric: "22h/sem", color: G2 },
      { icon: "🤖", label: "Workflows", metric: "47", color: G1 },
      { icon: "💸", label: "ROI", metric: "8.4x", color: G2 },
    ],
    timelineLabel: "Tareas automatizadas",
    timeline: [
      { label: "Q1", value: 30 },
      { label: "Q2", value: 55 },
      { label: "Q3", value: 78 },
      { label: "Q4", value: 96 },
    ],
    footerLabel: "Impacto operativo",
    badge: { emoji: "⚙️", text: "Auto-flow" },
  },
  "no-code-automation": {
    headerLabel: "Automation · workflows",
    items: [
      { icon: "🔌", label: "Integrations", metric: "350+", color: G1 },
      { icon: "⏱️", label: "Time saved", metric: "22h/wk", color: G2 },
      { icon: "🤖", label: "Workflows", metric: "47", color: G1 },
      { icon: "💸", label: "ROI", metric: "8.4x", color: G2 },
    ],
    timelineLabel: "Automated tasks",
    timeline: [
      { label: "Q1", value: 30 },
      { label: "Q2", value: 55 },
      { label: "Q3", value: 78 },
      { label: "Q4", value: 96 },
    ],
    footerLabel: "Operational impact",
    badge: { emoji: "⚙️", text: "Auto-flow" },
  },

  // ─── Headless CMS / Jamstack ─────────────────────────────────
  "headless-cms-jamstack": {
    headerLabel: "Jamstack · core web vitals",
    items: [
      { icon: "🚀", label: "TTFB", metric: "85ms", color: G1 },
      { icon: "🌍", label: "CDN edges", metric: "120", color: G2 },
      { icon: "📝", label: "Modelos CMS", metric: "12", color: G1 },
      { icon: "🔁", label: "ISR", metric: "60s", color: G2 },
    ],
    timelineLabel: "Lighthouse vitals",
    timeline: [
      { label: "LCP", value: 92 },
      { label: "FID", value: 98 },
      { label: "CLS", value: 95 },
      { label: "INP", value: 90 },
    ],
    footerLabel: "Núcleo web vitals",
    badge: { emoji: "⚡", text: "Edge-ready" },
  },

  // ─── Analytics & CRO ─────────────────────────────────────────
  "analytics-cro": {
    headerLabel: "Analytics & CRO · panel",
    items: [
      { icon: "👥", label: "Sesiones", metric: "84k", color: G1 },
      { icon: "🎯", label: "Conversión", metric: "+34%", color: G2 },
      { icon: "🧪", label: "Tests A/B", metric: "18", color: G1 },
      { icon: "💰", label: "AOV", metric: "+19%", color: G2 },
    ],
    timelineLabel: "Conversión por iteración",
    timeline: [
      { label: "v0", value: 28 },
      { label: "v1", value: 47 },
      { label: "v2", value: 68 },
      { label: "v3", value: 88 },
    ],
    footerLabel: "Optimización continua",
    badge: { emoji: "📈", text: "Growing" },
  },
  "analytics-cro-en": {
    headerLabel: "Analytics & CRO · dashboard",
    items: [
      { icon: "👥", label: "Sessions", metric: "84k", color: G1 },
      { icon: "🎯", label: "Conversion", metric: "+34%", color: G2 },
      { icon: "🧪", label: "A/B tests", metric: "18", color: G1 },
      { icon: "💰", label: "AOV", metric: "+19%", color: G2 },
    ],
    timelineLabel: "Conversion per iteration",
    timeline: [
      { label: "v0", value: 28 },
      { label: "v1", value: 47 },
      { label: "v2", value: 68 },
      { label: "v3", value: 88 },
    ],
    footerLabel: "Continuous optimization",
    badge: { emoji: "📈", text: "Growing" },
  },

  // ─── Themed reusable configs ─────────────────────────────────
  "theme-web-dev": {
    headerLabel: "Web dev · benchmark",
    items: [
      { icon: "⚡", label: "Lighthouse", metric: "98", color: G1 },
      { icon: "📦", label: "Bundle", metric: "<120kb", color: G2 },
      { icon: "🚀", label: "TTFB", metric: "85ms", color: G1 },
      { icon: "💰", label: "Conversión", metric: "+24%", color: G2 },
    ],
    timelineLabel: "Performance vs ingresos",
    timeline: [
      { label: "Q1", value: 32 },
      { label: "Q2", value: 56 },
      { label: "Q3", value: 78 },
      { label: "Q4", value: 95 },
    ],
    footerLabel: "Web vitals",
    badge: { emoji: "🚀", text: "Top score" },
  },
  "theme-ux-ui": {
    headerLabel: "UX/UI · panel diseño",
    items: [
      { icon: "🎯", label: "Tareas exitosas", metric: "94%", color: G1 },
      { icon: "🧠", label: "SUS score", metric: "82", color: G2 },
      { icon: "💬", label: "NPS", metric: "+58", color: G1 },
      { icon: "⏱️", label: "Time-on-task", metric: "-44%", color: G2 },
    ],
    timelineLabel: "Iteraciones de diseño",
    timeline: [
      { label: "v1", value: 35 },
      { label: "v2", value: 58 },
      { label: "v3", value: 78 },
      { label: "v4", value: 96 },
    ],
    footerLabel: "Investigación + diseño",
    badge: { emoji: "🎨", text: "User-loved" },
  },
  "theme-elearning": {
    headerLabel: "E-learning · cohorte",
    items: [
      { icon: "🎓", label: "Cursos", metric: "42", color: G1 },
      { icon: "👥", label: "Estudiantes", metric: "3.4k", color: G2 },
      { icon: "✅", label: "Completitud", metric: "+71%", color: G1 },
      { icon: "🏆", label: "Certificados", metric: "1.8k", color: G2 },
    ],
    timelineLabel: "Adopción mensual",
    timeline: [
      { label: "M1", value: 28 },
      { label: "M2", value: 52 },
      { label: "M3", value: 76 },
      { label: "M4", value: 94 },
    ],
    footerLabel: "Programa de formación",
    badge: { emoji: "🎓", text: "Certified" },
  },
  "theme-devops": {
    headerLabel: "DevOps · pipeline",
    items: [
      { icon: "🚀", label: "Deploys/sem", metric: "120", color: G1 },
      { icon: "⏱️", label: "Lead time", metric: "42min", color: G2 },
      { icon: "📊", label: "Uptime", metric: "99.99%", color: G1 },
      { icon: "🛡️", label: "MTTR", metric: "9min", color: G2 },
    ],
    timelineLabel: "DORA elite",
    timeline: [
      { label: "Mon", value: 45 },
      { label: "Tue", value: 68 },
      { label: "Wed", value: 82 },
      { label: "Thu", value: 96 },
    ],
    footerLabel: "Reliability",
    badge: { emoji: "🏆", text: "Elite tier" },
  },
  "theme-consulting": {
    headerLabel: "Consultoría · roadmap",
    items: [
      { icon: "🧭", label: "Diagnóstico", metric: "✓", color: G1 },
      { icon: "📋", label: "Roadmap", metric: "12 meses", color: G2 },
      { icon: "👥", label: "Stakeholders", metric: "8", color: G1 },
      { icon: "🎯", label: "KPIs", metric: "12", color: G2 },
    ],
    timelineLabel: "Madurez digital",
    timeline: [
      { label: "Inicio", value: 28 },
      { label: "M3", value: 52 },
      { label: "M6", value: 78 },
      { label: "M12", value: 95 },
    ],
    footerLabel: "Transformación",
    badge: { emoji: "🚀", text: "On track" },
  },
  "theme-ai": {
    headerLabel: "IA aplicada · panel",
    items: [
      { icon: "🤖", label: "Modelo", metric: "GPT-5", color: G1 },
      { icon: "📚", label: "Docs RAG", metric: "12k", color: G2 },
      { icon: "💬", label: "Consultas", metric: "8.2k", color: G1 },
      { icon: "🎯", label: "Precisión", metric: "94%", color: G2 },
    ],
    timelineLabel: "Casos de uso productivos",
    timeline: [
      { label: "S1", value: 18 },
      { label: "S2", value: 42 },
      { label: "S3", value: 68 },
      { label: "S4", value: 92 },
    ],
    footerLabel: "AI ops",
    badge: { emoji: "🧠", text: "AI-powered" },
  },
  "theme-automation": {
    headerLabel: "Automatización · flujos",
    items: [
      { icon: "🔌", label: "Integraciones", metric: "45", color: G1 },
      { icon: "⚙️", label: "Workflows", metric: "28", color: G2 },
      { icon: "⏱️", label: "Horas/mes", metric: "320h", color: G1 },
      { icon: "💰", label: "ROI", metric: "9.4x", color: G2 },
    ],
    timelineLabel: "Tareas automatizadas",
    timeline: [
      { label: "M1", value: 22 },
      { label: "M2", value: 48 },
      { label: "M3", value: 72 },
      { label: "M4", value: 94 },
    ],
    footerLabel: "Operaciones eficientes",
    badge: { emoji: "⚡", text: "Auto-ops" },
  },
  "theme-seo": {
    headerLabel: "SEO técnico · panel",
    items: [
      { icon: "🔍", label: "Keywords top10", metric: "+78%", color: G1 },
      { icon: "📈", label: "Tráfico org.", metric: "+142%", color: G2 },
      { icon: "⚡", label: "CWV", metric: "verde", color: G1 },
      { icon: "🌍", label: "Indexadas", metric: "12k", color: G2 },
    ],
    timelineLabel: "Posicionamiento mensual",
    timeline: [
      { label: "M1", value: 22 },
      { label: "M3", value: 48 },
      { label: "M6", value: 76 },
      { label: "M12", value: 96 },
    ],
    footerLabel: "Crecimiento orgánico",
    badge: { emoji: "🎯", text: "Top ranked" },
  },
};
