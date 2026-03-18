import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="es" title="Tuataras" hideTitle>
      <section className="mt-8 overflow-hidden rounded-3xl border border-corp bg-gradient-to-br from-cyan-50 via-white to-indigo-50 p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Consultoría y desarrollo
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl">
              Construimos experiencias digitales de alto impacto
            </h2>
            <p className="mt-4 text-lg text-muted">
              Soluciones tecnológicas, diseño UX/UI y plataformas e-learning para
              organizaciones que buscan escalar con velocidad y confianza.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-5 py-2 text-sm font-semibold" href="/es/servicios">
                Ver servicios
              </a>
              <a className="btn-secondary rounded-full px-5 py-2 text-sm font-semibold" href="/es/contacto">
                Contactar
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-corp">+10</p>
                <p className="text-sm text-muted">Años de experiencia</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-corp">120+</p>
                <p className="text-sm text-muted">Proyectos entregados</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-corp">24/7</p>
                <p className="text-sm text-muted">Soporte continuo</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <div className="rounded-2xl border border-corp bg-white p-6">
              <img
                src="/hero-illustration.svg"
                alt="Ilustración de innovación digital"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <p className="mt-4 text-sm font-semibold text-muted">Resumen</p>
              <ul className="mt-3 grid gap-3 text-muted">
                <li>Equipos multidisciplinares con foco en negocio</li>
                <li>Procesos ágiles con entregas iterativas</li>
                <li>Gobernanza y métricas para escalar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Confían en nosotros
        </p>
        <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {[
            { src: "/clients/seguros-universitas.jpg", alt: "Seguros Universitas" },
            { src: "/clients/wave-house.jpg", alt: "Wave House Cleaning" },
            { src: "/clients/flick-food.jpg", alt: "Flick Food" },
            { src: "/clients/fondo-global.jpg", alt: "Fondo Global de Construcción" },
            { src: "/clients/grupo-3ag.jpg", alt: "Grupo 3AG" },
            { src: "/clients/gudari-caribe.jpg", alt: "Gudari Caribe" },
            { src: "/clients/humanitas.jpg", alt: "Humanitas" },
            { src: "/clients/lamprey-solutions.jpg", alt: "Lamprey Solutions" },
            { src: "/clients/nashoot.jpg", alt: "Nashoot" },
            { src: "/clients/palt.jpg", alt: "Palt" },
            { src: "/clients/panama-container.jpg", alt: "Panama Container Solutions" },
            { src: "/clients/grupo-seei.jpg", alt: "Grupo SEEI" },
          ].map((client) => (
            <div key={client.alt} className="flex h-44 items-center justify-center bg-white p-2">
              <img src={client.src} alt={client.alt} className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition" />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h3 className="text-2xl font-semibold text-corp">Servicios clave</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Desarrollo web",
              desc: "Plataformas modernas, escalables y centradas en la conversión.",
              href: "/es/desarrollo-web",
            },
            {
              title: "UX / UI",
              desc: "Diseño basado en investigación para productos intuitivos.",
              href: "/es/diseno-ux-ui",
            },
            {
              title: "DevOps & Cloud",
              desc: "Infraestructura resiliente con pipelines automatizados.",
              href: "/es/devops-y-servicios-en-la-nube",
            },
          ].map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="rounded-2xl border border-corp p-6 transition hover:border-slate-300"
            >
              <h4 className="text-lg font-semibold text-corp">{card.title}</h4>
              <p className="mt-2 text-sm text-muted">{card.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h3 className="text-2xl font-semibold text-corp">Cómo trabajamos</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Diagnóstico",
              desc: "Alineamos objetivos, métricas y roadmap de negocio.",
            },
            {
              title: "Implementación",
              desc: "Construimos con sprints cortos y validación continua.",
            },
            {
              title: "Escalado",
              desc: "Optimización, soporte y evolución del producto.",
            },
          ].map((step) => (
            <div key={step.title} className="rounded-2xl border border-corp bg-white p-6">
              <h4 className="text-lg font-semibold text-corp">{step.title}</h4>
              <p className="mt-2 text-sm text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h3 className="text-2xl font-semibold text-corp">Casos destacados</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Plataforma e‑learning global",
              desc: "Migración completa con +40% retención de usuarios.",
            },
            {
              title: "Portal B2B de servicios",
              desc: "Reducción de tiempos de gestión en 60%.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-corp bg-corp-soft p-6">
              <h4 className="text-lg font-semibold text-corp">{item.title}</h4>
              <p className="mt-2 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h3 className="text-2xl font-semibold text-corp">Testimonios</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            {
              quote: "El equipo de Tuataras aceleró nuestro go‑to‑market en semanas.",
              name: "Directora de Innovación",
            },
            {
              quote: "Pasamos de legacy a una plataforma moderna con resultados medibles.",
              name: "CTO, Servicios Financieros",
            },
          ].map((item) => (
            <div key={item.name} className="rounded-2xl border border-corp bg-white p-6">
              <p className="text-sm text-muted">“{item.quote}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-corp">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8 text-center">
        <h3 className="text-2xl font-semibold text-corp">¿Listos para acelerar?</h3>
        <p className="mt-2 text-muted">Conversemos sobre tu próximo proyecto.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/es/contacto">
          Agendar una llamada
        </a>
      </section>
    </PageShell>
  );
}
