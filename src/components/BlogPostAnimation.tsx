"use client";

import { AnimatedBlogTrends } from "./AnimatedBlogTrends";
import { AnimatedBlogUX } from "./AnimatedBlogUX";
import { AnimatedBlogDevOps } from "./AnimatedBlogDevOps";
import { AnimatedBlogGeneric } from "./AnimatedBlogGeneric";
import { blogAnimationConfigs } from "./blogAnimationConfigs";

const animations: Record<string, React.ComponentType> = {
  "tendencias-digitales-2026": AnimatedBlogTrends,
  "ux-que-convierte": AnimatedBlogUX,
  "escalando-con-devops": AnimatedBlogDevOps,
  "digital-trends-2026": AnimatedBlogTrends,
  "ux-that-converts": AnimatedBlogUX,
  "scaling-with-devops": AnimatedBlogDevOps,
};

const genericConfigKey: Record<string, string> = {
  // Batch 1 (existing)
  "ia-generativa-empresas-2026": "ia-generativa-empresas-2026",
  "generative-ai-business-2026": "generative-ai-business-2026",
  "pwa-vs-app-nativa": "pwa-vs-app-nativa",
  "pwa-vs-native-apps": "pwa-vs-native-apps",
  "ciberseguridad-pymes-2026": "ciberseguridad-pymes-2026",
  "cybersecurity-smb-2026": "cybersecurity-smb-2026",
  "microservicios-vs-monolito": "microservicios-vs-monolito",
  "microservices-vs-monolith": "microservices-vs-monolith",
  "gamificacion-elearning": "gamificacion-elearning",
  "gamification-elearning": "gamification-elearning",
  "accesibilidad-web-wcag": "accesibilidad-web-wcag",
  "web-accessibility-wcag": "web-accessibility-wcag",
  "automatizacion-no-code": "automatizacion-no-code",
  "no-code-automation": "no-code-automation",
  "headless-cms-jamstack": "headless-cms-jamstack",
  "headless-cms-jamstack-en": "headless-cms-jamstack",
  "analytics-cro": "analytics-cro",
  "analytics-and-cro": "analytics-cro-en",

  // Web dev
  "costo-app-medida-2026": "theme-web-dev",
  "custom-app-cost-2026": "theme-web-dev",
  "nextjs-vs-wordpress": "theme-web-dev",
  "nextjs-vs-wordpress-en": "theme-web-dev",
  "migrar-shopify-a-medida": "theme-web-dev",
  "migrating-shopify-to-custom": "theme-web-dev",
  "checkout-optimizado": "theme-web-dev",
  "optimized-checkout": "theme-web-dev",
  "tiempos-de-carga-costo": "theme-web-dev",
  "page-speed-cost": "theme-web-dev",

  // UX/UI
  "rediseno-web-cuando": "theme-ux-ui",
  "website-redesign-when": "theme-ux-ui",
  "design-system-roi": "theme-ux-ui",
  "design-system-roi-en": "theme-ux-ui",
  "ux-writing-que-vende": "theme-ux-ui",
  "ux-writing-that-sells": "theme-ux-ui",
  "mobile-first-2026": "theme-ux-ui",
  "mobile-first-2026-en": "theme-ux-ui",
  "tests-usabilidad-sin-presupuesto": "theme-ux-ui",
  "usability-testing-low-budget": "theme-ux-ui",

  // E-learning
  "lms-medida-vs-moodle": "theme-elearning",
  "custom-lms-vs-moodle": "theme-elearning",
  "microlearning-comerciales": "theme-elearning",
  "microlearning-sales-teams": "theme-elearning",
  "certificaciones-digitales": "theme-elearning",
  "digital-certifications": "theme-elearning",
  "onboarding-digital-empleados": "theme-elearning",
  "digital-employee-onboarding": "theme-elearning",
  "roi-capacitacion": "theme-elearning",
  "training-roi": "theme-elearning",

  // DevOps
  "reducir-factura-aws": "theme-devops",
  "reduce-aws-bill": "theme-devops",
  "cicd-cero-a-deploy": "theme-devops",
  "cicd-zero-to-deploy": "theme-devops",
  "observabilidad-bugs": "theme-devops",
  "observability-bugs": "theme-devops",
  "kubernetes-cuando-si-no": "theme-devops",
  "kubernetes-when-yes-no": "theme-devops",
  "sre-equipos-pequenos": "theme-devops",
  "sre-small-teams": "theme-devops",

  // Consulting
  "erp-medida-vs-sap": "theme-consulting",
  "custom-erp-vs-sap": "theme-consulting",
  "modernizacion-legacy": "theme-consulting",
  "legacy-modernization": "theme-consulting",
  "auditoria-tecnologica": "theme-consulting",
  "tech-audit": "theme-consulting",
  "roadmap-digital-pymes": "theme-consulting",
  "digital-roadmap-smb": "theme-consulting",
  "elegir-partner-tecnologico": "theme-consulting",
  "choose-tech-partner": "theme-consulting",

  // AI
  "chatbot-ia-sitio-web": "theme-ai",
  "ai-chatbot-website": "theme-ai",
  "automatizar-soporte-ia": "theme-ai",
  "automate-support-ai": "theme-ai",
  "rag-datos-internos": "theme-ai",
  "rag-internal-data": "theme-ai",
  "prompt-engineering-no-tecnicos": "theme-ai",
  "prompt-engineering-non-tech": "theme-ai",
  "ia-en-rrhh": "theme-ai",
  "ai-in-hr": "theme-ai",

  // Automation
  "integrar-crm-erp": "theme-automation",
  "integrate-crm-erp": "theme-automation",
  "apis-internas-cuando": "theme-automation",
  "internal-apis-when": "theme-automation",
  "workflow-finanzas": "theme-automation",
  "finance-workflows": "theme-automation",
  "webhooks-vs-polling": "theme-automation",
  "webhooks-vs-polling-en": "theme-automation",
  "bots-slack-utiles": "theme-automation",
  "useful-slack-bots": "theme-automation",

  // SEO
  "seo-tecnico-20-80": "theme-seo",
  "technical-seo-20-80": "theme-seo",
  "core-web-vitals": "theme-seo",
  "core-web-vitals-en": "theme-seo",
  "schema-markup-b2b": "theme-seo",
  "schema-markup-b2b-en": "theme-seo",
  "i18n-bien-hecha": "theme-seo",
  "i18n-done-right": "theme-seo",
  "sitemap-robots-crawl": "theme-seo",
  "sitemap-robots-crawl-en": "theme-seo",
};

export function BlogPostAnimation({ slug }: { slug: string }) {
  const Animation = animations[slug];
  if (Animation) return <Animation />;

  const configKey = genericConfigKey[slug];
  if (configKey && blogAnimationConfigs[configKey]) {
    return <AnimatedBlogGeneric config={blogAnimationConfigs[configKey]} />;
  }

  return null;
}
