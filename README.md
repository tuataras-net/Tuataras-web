# Tuataras — Sitio Web Corporativo

Sitio web oficial de Tuataras, migrado desde WordPress a Next.js con rediseño corporativo completo.

---

## Stack

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 16 | Framework (App Router) |
| React | 19 | UI |
| TypeScript | 5 | Tipado |
| Tailwind CSS | 4 | Estilos |
| next-mdx-remote | — | Blog en MDX |
| gray-matter | — | Frontmatter de posts |
| @emailjs/browser | — | Formulario de contacto |
| @anthropic-ai/sdk | — | Chat IA (Claude Haiku) |
| @tailwindcss/typography | — | Estilos de contenido MDX |

---

## Ejecutar en local

```bash
npm install
npm run dev -- --port 3002
```

Abrir en: [http://localhost:3002/es/inicio](http://localhost:3002/es/inicio)

---

## Variables de entorno

Crear un archivo `.env.local` en la raíz con:

```env
# Anthropic — Chat IA
# Obtener en https://console.anthropic.com
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxx

# EmailJS — Formulario de contacto
# Obtener en https://www.emailjs.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

---

## Arquitectura de rutas

### Español (ES)
| Ruta | Descripción |
|---|---|
| `/es/inicio` | Home |
| `/es/servicios` | Listado de servicios |
| `/es/desarrollo-web` | Servicio: Desarrollo Web |
| `/es/diseno-ux-ui` | Servicio: UX / UI |
| `/es/devops-y-servicios-en-la-nube` | Servicio: DevOps & Cloud |
| `/es/plataformas-e-learning` | Servicio: E-learning / LMS |
| `/es/soluciones-tecnologicas-tic` | Servicio: Consultoría TIC |
| `/es/procesos` | Servicio: Procesos |
| `/es/somos-una-empresa-de-desarollo-web` | Sobre nosotros |
| `/es/blog` | Listado del blog |
| `/es/blog/[slug]` | Post individual |
| `/es/contacto` | Contacto |
| `/es/politica-privacidad` | Política de privacidad |
| `/es/aviso-legal` | Aviso legal |

### English (EN)
| Ruta | Descripción |
|---|---|
| `/en/home` | Home |
| `/en/services` | Services listing |
| `/en/web-development` | Service: Web Development |
| `/en/ux-ui-design` | Service: UX / UI |
| `/en/devops-services` | Service: DevOps & Cloud |
| `/en/development-platforms-e-learning-lms` | Service: E-learning / LMS |
| `/en/tchnological-solutions-ict` | Service: ICT Consulting |
| `/en/processes` | Service: Processes |
| `/en/about-us-development-company` | About us |
| `/en/blog` | Blog listing |
| `/en/blog/[slug]` | Individual post |
| `/en/contact` | Contact |

### API
| Ruta | Descripción |
|---|---|
| `/api/chat` | Chat IA con streaming (POST) |
| `/sitemap.xml` | Sitemap generado automáticamente |
| `/robots.txt` | Robots generado automáticamente |

---

## Estructura del proyecto

```
tuataras-next/
├── content/
│   └── blog/
│       ├── es/          # Posts en español (.mdx)
│       └── en/          # Posts en inglés (.mdx)
├── public/
│   ├── clients/         # Logos de clientes
│   └── illustrations/   # SVGs ilustrativos por servicio
├── src/
│   ├── app/
│   │   ├── api/chat/    # API route del chat IA
│   │   ├── es/          # Páginas en español
│   │   ├── en/          # Páginas en inglés
│   │   ├── layout.tsx   # Layout raíz con metadata global
│   │   ├── sitemap.ts   # Sitemap automático
│   │   └── robots.ts    # Robots.txt automático
│   ├── components/
│   │   ├── PageShell.tsx          # Layout de página con fondo botánico
│   │   ├── Header.tsx             # Navegación responsive con dropdowns
│   │   ├── StepsSection.tsx       # Timeline animado de proceso
│   │   ├── ClientsGrid.tsx        # Grid de logos de clientes
│   │   ├── ContactForm.tsx        # Formulario de contacto (EmailJS)
│   │   ├── ChatWidget.tsx         # Chat flotante con IA
│   │   ├── BlogPostAnimation.tsx  # Mapeador slug → animación
│   │   ├── AnimatedHero.tsx       # Dashboard animado (Home)
│   │   ├── AnimatedDevOps.tsx     # Pipeline CI/CD (DevOps)
│   │   ├── AnimatedElearning.tsx  # Progreso de curso (E-learning)
│   │   ├── AnimatedProcesses.tsx  # Workflow de proyecto (Procesos)
│   │   ├── AnimatedTIC.tsx        # Red de infraestructura (TIC)
│   │   ├── AnimatedUXUI.tsx       # Diseño en capas (UX/UI)
│   │   ├── AnimatedTerminal.tsx   # Terminal de deploy
│   │   ├── AnimatedContact.tsx    # Chat de proyecto (Contacto)
│   │   ├── AnimatedBlogTrends.tsx # Radar de tendencias (Blog)
│   │   ├── AnimatedBlogUX.tsx     # Embudo de conversión (Blog)
│   │   └── AnimatedBlogDevOps.tsx # Pipeline con logs (Blog)
│   └── lib/
│       └── blog.ts      # Utilidades para leer posts MDX
```

---

## Blog (MDX)

Los posts se guardan en `content/blog/es/` o `content/blog/en/` como archivos `.mdx`.

### Frontmatter requerido

```mdx
---
title: "Título del artículo"
excerpt: "Descripción corta para listados y SEO"
date: "2026-03-19"
author: "Equipo Tuataras"
category: "DevOps"
coverImage: "/illustrations/cicd.svg"
readTime: 5
---

Contenido en Markdown...
```

### Categorías disponibles

| ES | EN | Color |
|---|---|---|
| Estrategia | Strategy | Verde |
| UX / UI | UX / UI | Azul |
| DevOps | DevOps | Naranja |
| E-learning | E-learning | Morado |

### Agregar una animación a un post nuevo

Crear el componente en `src/components/AnimatedBlog[Nombre].tsx` y registrarlo en `src/components/BlogPostAnimation.tsx`:

```ts
const animations: Record<string, React.ComponentType> = {
  "mi-nuevo-slug-es": AnimatedBlogNombre,
  "my-new-slug-en": AnimatedBlogNombre,
};
```

---

## Chat IA

El chat flotante usa **Claude Haiku** (`claude-haiku-4-5`) via Anthropic API con streaming.

- System prompt en `src/app/api/chat/route.ts` — contiene info de servicios, proceso y contacto de Tuataras.
- Responde en el idioma del usuario (ES/EN) automáticamente.
- Para cambiar el modelo, editar el campo `model` en `route.ts`.

---

## Diseño

### Paleta de colores

| Variable | Valor | Uso |
|---|---|---|
| `text-corp` | `#1a6b3a` | Texto y bordes principal |
| `bg-corp-soft` | `#f0faf4` | Fondos suaves |
| `#0d2b1f` | — | Fondos oscuros (terminal) |
| `#3ecf8e` | — | Acento verde claro |
| `#c6e8d5` | — | Acento verde muy suave |

### Tipografía
- **Inter** — fuente principal
- **Geist Mono** — fuente monoespaciada (terminales, métricas)

### Componentes base
- `PageShell` — wrapper de página con fondo botánico animado, header y footer
- `Header` — navegación fija con dropdown de servicios y menú hamburguesa mobile
- `StepsSection` — timeline horizontal (desktop) / vertical (mobile) con animación scroll

---

## SEO

- Metadata global en `src/app/layout.tsx` con OpenGraph y Twitter Cards
- Cada página tiene su propio `export const metadata`
- Blog: `generateMetadata()` dinámico por post
- `sitemap.xml` generado en build (`src/app/sitemap.ts`)
- `robots.txt` generado en build (`src/app/robots.ts`)
- Páginas legales marcadas con `robots: noindex`

> **Pendiente:** Crear `/public/og-image.jpg` (1200×630px) para compartir en redes sociales.

---

## Clientes

Los logos se encuentran en `/public/clients/`. Están configurados en los archivos `page.tsx` de Home (ES/EN) dentro del array `clients`.

---

## Deploy

> Pendiente configurar. El hosting objetivo es **Vercel** (o Netlify).

Requisitos para deploy:
1. Configurar variables de entorno en el panel del hosting
2. Crear imagen OG `/public/og-image.jpg`
3. Actualizar `BASE_URL` en `src/app/layout.tsx` y `src/app/sitemap.ts` con el dominio real
4. Actualizar URLs de contacto (WhatsApp, Calendly, email) con datos reales

---

## Referencias de diseño

- https://www.accenture.com
- https://www.deloitte.com
- https://www.pwc.com
