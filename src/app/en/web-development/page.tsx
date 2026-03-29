import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnimatedTerminal } from "@/components/AnimatedTerminal";

export const metadata: Metadata = {
  title: "Web Development" ,
  description: "Scalable web applications, SaaS, e-commerce and more. We build with modern technologies and agile methodology.",
};

const items = [
  {
    title: "Business applications",
    desc: "We help companies make more informed decisions through intelligent data-based systems, synchronized platforms, and internal process management tools.",
    img: "/illustrations/business-apps.svg",
  },
  {
    title: "SaaS Products",
    desc: "We integrate into your team to bring your product to market, offering expertise at every step — from strategy and UI/UX to implementation and operations.",
    img: "/illustrations/saas.svg",
  },
  {
    title: "Research applications",
    desc: "We design secure, intuitive platforms to collect and analyze data at global scale — enabling high-value research in medical and other industries.",
    img: "/illustrations/research.svg",
  },
  {
    title: "E-commerce & web portals",
    desc: "We build marketplaces and portals with robust back-end panels, analytics, and personalized experiences designed to drive transactions.",
    img: "/illustrations/ecommerce.svg",
  },
  {
    title: "Micro Websites",
    desc: "We build multiplatform microsites to launch products, capture leads, and reinforce brand identity with custom design.",
    img: "/illustrations/microsite.svg",
  },
  {
    title: "High quality code",
    desc: "We deliver responsive, fast, scalable, and secure applications following industry best practices and staying current with the latest technology frameworks.",
    img: "/illustrations/quality-code.svg",
  },
];

export default function Page() {
  return (
    <PageShell lang="en" title="" hideTitle>
      {/* Hero */}
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Software development
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">
              Web Applications Development
            </h1>
            <p className="mt-4 text-lg text-muted max-w-lg">
              We create custom, powerful and scalable web applications using agile development processes and the latest technologies.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">
                Start a project
              </a>
              <a className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold" href="/en/processes">
                Our process
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedTerminal />
          </div>
        </div>
      </section>

      {/* Items */}
      <section aria-label="Development services" className="mt-12">
        <h2 className="text-2xl font-semibold text-corp">What we build</h2>
        <p className="mt-2 text-muted">Custom solutions for every stage of your digital business.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((s) => (
            <div
              key={s.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-corp bg-corp-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-52 w-full overflow-hidden bg-white">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-corp">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section aria-label="CTA" className="mt-16 rounded-3xl border border-corp bg-corp-soft p-10 text-center">
        <h2 className="text-2xl font-semibold text-corp">Have a project in mind?</h2>
        <p className="mt-2 text-muted">Let's talk about how to build the right solution for your business.</p>
        <a className="btn-primary mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold" href="/en/contact">
          Talk to an expert
        </a>
      </section>
    </PageShell>
  );
}
