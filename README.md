# Tuataras

Repositorio del sitio web Tuataras (Next.js + TypeScript + Tailwind).

# Brief

## Objetivo
Migrar el sitio Tuataras desde WordPress a Next.js con rediseño corporativo.

## Requisitos
- ES/EN
- Blog y buscador
- Formulario de contacto
- Hosting: Netlify

## Referencias
- https://www.accenture.com/pt-pt
- https://www.deloitte.com/pt/pt.html
- https://www.pwc.com/gx/en.html


---

# Arquitectura

## Rutas ES
- /es/inicio
- /es/servicios
- /es/desarrollo-web
- /es/diseno-ux-ui
- /es/devops-y-servicios-en-la-nube
- /es/plataformas-e-learning
- /es/soluciones-tecnologicas-tic
- /es/procesos
- /es/somos-una-empresa-de-desarollo-web
- /es/blog_es
- /es/contacto
- /es/politica-privacidad
- /es/aviso-legal
- /es/adios

## Rutas EN
- /en/home
- /en/services
- /en/web-development
- /en/ux-ui-design
- /en/devops-services
- /en/development-platforms-e-learning-lms
- /en/tchnological-solutions-ict
- /en/processes
- /en/about-us-development-company
- /en/blog_us
- /en/contact
- /en/home/privacy-policy
- /en/home/terms-conditions
- /en/bye


---

# Diseño

## Paleta
- Navy: #0b1f3b
- Blue: #1f5bff
- Slate: #334155
- Mist: #f3f6fb
- Border: #e2e8f0

## Tipografía
- Inter (principal)

## Componentes base
- PageShell
- Nav
- Cards / CTA / Hero


---

# Implementación

## Proyecto
- Ruta: /Users/navigator/.openclaw/workspace/Proyectos/tuataras-next
- Framework: Next.js (App Router) + TypeScript + Tailwind

## Ejecutar
```bash
cd /Users/navigator/.openclaw/workspace/Proyectos/tuataras-next
npm run dev -- --port 3002
```

## Notas
- Home ES: /es/inicio
- Home EN: /en/home


---

# Contenido

Secciones creadas:
- Home ES/EN (hero, clientes, servicios, proceso, casos, testimonios, CTA)
- Servicios ES/EN
- Desarrollo Web ES/EN
- UX/UI ES/EN
- DevOps 

---

# Pendientes

- Completar contenido real por página
- Conectar formulario a Netlify Forms o servicio elegido
- Implementar blog real (fuente de datos)
- SEO (metadata por página, sitemap)
- Preparar deploy en Netlify

