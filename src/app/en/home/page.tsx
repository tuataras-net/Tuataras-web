import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="Tuataras" hideTitle>
      <section className="mt-8 overflow-hidden rounded-3xl border border-corp bg-gradient-to-br from-cyan-50 via-white to-indigo-50 p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Consulting & Development
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl">
              We build high‑impact digital experiences
            </h2>
            <p className="mt-4 text-lg text-muted">
              Technology solutions, UX/UI design and e‑learning platforms for
              organizations ready to scale with speed and confidence.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-5 py-2 text-sm font-semibold" href="/en/services">
                View services
              </a>
              <a className="btn-secondary rounded-full px-5 py-2 text-sm font-semibold" href="/en/contact">
                Contact us
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-corp">10+</p>
                <p className="text-sm text-muted">Years of experience</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-corp">120+</p>
                <p className="text-sm text-muted">Projects delivered</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-corp">24/7</p>
                <p className="text-sm text-muted">Ongoing support</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <div className="rounded-2xl border border-corp bg-white p-6">
              <img
                src="/hero-illustration.svg"
                alt="Digital innovation illustration"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <p className="mt-4 text-sm font-semibold text-muted">Snapshot</p>
              <ul className="mt-3 grid gap-3 text-muted">
                <li>Multidisciplinary teams focused on business outcomes</li>
                <li>Agile processes with iterative delivery</li>
                <li>Governance and metrics to scale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Trusted by
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
        <h3 className="text-2xl font-semibold text-corp">Key services</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Web development",
              desc: "Modern, scalable platforms built for conversion.",
              href: "/en/web-development",
            },
            {
              title: "UX / UI",
              desc: "Research‑led design for intuitive products.",
              href: "/en/ux-ui-design",
            },
            {
              title: "DevOps & Cloud",
              desc: "Resilient infrastructure with automated pipelines.",
              href: "/en/devops-services",
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
        <h3 className="text-2xl font-semibold text-corp">How we work</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Discovery",
              desc: "Align goals, metrics, and business roadmap.",
            },
            {
              title: "Build",
              desc: "Ship in short sprints with continuous validation.",
            },
            {
              title: "Scale",
              desc: "Optimization, support, and product evolution.",
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
        <h3 className="text-2xl font-semibold text-corp">Featured work</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Global e‑learning platform",
              desc: "Full migration with +40% user retention.",
            },
            {
              title: "B2B services portal",
              desc: "Cut operations time by 60%.",
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
        <h3 className="text-2xl font-semibold text-corp">Testimonials</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            {
              quote: "Tuataras accelerated our go‑to‑market in weeks.",
              name: "Head of Innovation",
            },
            {
              quote: "We moved from legacy to a modern platform with measurable results.",
              name: "CTO, Financial Services",
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
        <h3 className="text-2xl font-semibold text-corp">Ready to accelerate?</h3>
        <p className="mt-2 text-muted">Let’s talk about your next project.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">
          Book a call
        </a>
      </section>
    </PageShell>
  );
}
