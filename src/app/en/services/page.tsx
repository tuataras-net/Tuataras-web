import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Services" ,
  description: "Web development, UX/UI, DevOps, e-learning and ICT consulting. Custom digital solutions for your business.",
};

const services = [
  {
    title: "Web Development",
    desc: "Modern architectures, performance, and scalability. We build robust platforms that grow with you.",
    href: "/en/web-development",
    img: "/illustrations/web-dev.svg",
  },
  {
    title: "UX / UI",
    desc: "Research, prototyping, and user-centered design that turns visitors into customers.",
    href: "/en/ux-ui-design",
    img: "/illustrations/ux-ui.svg",
  },
  {
    title: "DevOps & Cloud",
    desc: "Automation, observability, and continuous operations. Resilient and efficient infrastructure.",
    href: "/en/devops-services",
    img: "/illustrations/devops.svg",
  },
  {
    title: "E-learning Platforms",
    desc: "Scalable learning experiences with built-in analytics. Custom virtual campuses and LMS.",
    href: "/en/development-platforms-e-learning-lms",
    img: "/illustrations/elearning.svg",
  },
  {
    title: "ICT Consulting",
    desc: "Technology strategy and digital transformation for companies ready to lead their industry.",
    href: "/en/tchnological-solutions-ict",
    img: "/illustrations/ict.svg",
  },
  {
    title: "Processes",
    desc: "Agile methodology with measurable results. Iterative delivery and transparent communication.",
    href: "/en/processes",
    img: "/illustrations/processes.svg",
  },
];

export default function Page() {
  return (
    <PageShell lang="en" title="" hideTitle>
      {/* Hero */}
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          What we do
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">
          Our services
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">
          We design and build digital solutions focused on measurable business outcomes. These are our core capabilities.
        </p>
      </section>

      {/* Services */}
      <section aria-label="Services" className="mt-12">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="flex flex-col overflow-hidden rounded-2xl border border-corp bg-corp-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-40 w-full overflow-hidden bg-white">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h2 className="font-semibold text-corp">{s.title}</h2>
                <p className="mt-1 text-sm text-muted">{s.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section aria-label="CTA" className="mt-16 rounded-3xl border border-corp bg-corp-soft p-10 text-center">
        <h2 className="text-2xl font-semibold text-corp">Ready to move forward?</h2>
        <p className="mt-2 text-muted">Tell us your challenge and we'll design the right solution.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/en/contact">
          Talk to an expert
        </a>
      </section>
    </PageShell>
  );
}
