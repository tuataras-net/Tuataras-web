import type { Metadata } from "next";
import { StepsSection } from "@/components/StepsSection";
import { PageShell } from "@/components/PageShell";
import { ClientsGrid } from "@/components/ClientsGrid";
import { AnimatedHero } from "@/components/AnimatedHero";

export const metadata: Metadata = {
  title: "Web Development, UX/UI & Digital Consulting",
  description:
    "We build scalable web apps, UX/UI design, and e-learning platforms. Technology solutions for companies ready to grow.",
  keywords: "web development, UX/UI, DevOps, e-learning, ICT consulting",
};

const services = [
  { title: "Web Development", desc: "Fast, secure, and scalable platforms.", href: "/en/web-development", img: "/illustrations/web-dev.svg" },
  { title: "UX / UI", desc: "User-centered design that converts.", href: "/en/ux-ui-design", img: "/illustrations/ux-ui.svg" },
  { title: "DevOps & Cloud", desc: "Automated, resilient infrastructure.", href: "/en/devops-services", img: "/illustrations/devops.svg" },
  { title: "E-learning", desc: "Virtual campuses and LMS platforms.", href: "/en/development-platforms-e-learning-lms", img: "/illustrations/elearning.svg" },
  { title: "ICT Consulting", desc: "Technology strategy for your business.", href: "/en/tchnological-solutions-ict", img: "/illustrations/ict.svg" },
  { title: "Processes", desc: "Agile methodology with measurable results.", href: "/en/processes", img: "/illustrations/processes.svg" },
];

const clients = [
  { src: "/clients/seguros-universitas.jpg", alt: "Seguros Universitas", href: "https://www.segurosuniversitas.com" },
  { src: "/clients/wave-house.jpg", alt: "Wave House Cleaning", href: "https://wavehousecleaning.com" },
  { src: "/clients/flick-food.jpg", alt: "Flick Food", href: "" },
  { src: "/clients/fondo-global.jpg", alt: "Fondo Global de Construcción", href: "https://www.fondoglobaldeconstruccion.com" },
  { src: "/clients/grupo-3ag.jpg", alt: "Grupo 3AG", href: "" },
  { src: "/clients/gudari-caribe.jpg", alt: "Gudari Caribe", href: "https://gudaricaribe.com" },
  { src: "/clients/humanitas.jpg", alt: "Humanitas", href: "https://www.humanitas.com.ve" },
  { src: "/clients/lamprey-solutions.jpg", alt: "Lamprey Solutions", href: "https://www.lampreyusa.com" },
  { src: "/clients/nashoot.jpg", alt: "Nashoot", href: "" },
  { src: "/clients/palt.jpg", alt: "Palt", href: "https://www.palt.es" },
  { src: "/clients/panama-container.jpg", alt: "Panama Container Solutions", href: "https://pcslogistic.com" },
  { src: "/clients/grupo-seei.jpg", alt: "Grupo SEEI", href: "" },
];

const steps = [
  { title: "Discovery", desc: "We understand your business and define scope.", img: "/illustrations/discovery.svg" },
  { title: "Design", desc: "We prototype and validate before building.", img: "/illustrations/design.svg" },
  { title: "Build", desc: "We develop with sprints and iterative releases.", img: "/illustrations/build.svg" },
  { title: "Launch", desc: "We deploy, measure, and optimize.", img: "/illustrations/launch.svg" },
];

export default function Page() {
  return (
    <PageShell lang="en" title="" hideTitle>
      {/* Hero */}
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Digital consulting & development
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">
              Digital solutions that accelerate your business
            </h1>
            <p className="mt-4 text-lg text-muted max-w-lg">
              We build web applications, UX/UI design, and e-learning platforms
              for organizations ready to scale with speed and confidence.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-6 py-3 text-sm font-semibold" href="/en/services">
                Our services
              </a>
              <a className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">
                Contact us
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedHero />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section aria-label="Clients" className="mt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted text-center">
          Companies that trust Tuataras
        </p>
        <ClientsGrid clients={clients} />
      </section>

      {/* Services */}
      <section aria-label="Services" className="mt-16">
        <h2 className="text-2xl font-semibold text-corp">Our services</h2>
        <p className="mt-2 text-muted">Everything you need for your digital transformation in one team.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <a key={s.title} href={s.href} className="flex flex-col overflow-hidden rounded-2xl border border-corp bg-corp-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-36 w-full overflow-hidden bg-white">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-corp">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Process */}
      <section aria-label="Process" className="mt-16">
        <h2 className="text-2xl font-semibold text-corp">How we work</h2>
        <p className="mt-2 text-muted">A clear, agile process focused on results.</p>
        <StepsSection steps={steps} label="process" />
      </section>

      {/* CTA */}
      <section aria-label="CTA" className="mt-16 rounded-3xl border border-corp bg-corp-soft p-10 text-center">
        <h2 className="text-2xl font-semibold text-corp">Ready to take the next step?</h2>
        <p className="mt-2 text-muted">Let's talk about your project. No commitment.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/en/contact">
          Book a call
        </a>
      </section>
    </PageShell>
  );
}
