import { PageShell } from "@/components/PageShell";

export default function Page() {
  return (
    <PageShell lang="en" title="Web Applications Development">
      <p>
        We create custom, powerful and scalable web applications using agile
        development processes and taking advantage of the latest web
        technologies.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[{
          title: "Business applications",
          desc: "We help companies make more informed decisions through intelligent data-based systems, synchronized platforms, and internal process management tools.",
        }, {
          title: "SaaS Products",
          desc: "We integrate into your team to bring your product to market, offering expertise at every step — from strategy and UI/UX to implementation and operations.",
        }, {
          title: "Research applications",
          desc: "We design secure, intuitive platforms to collect and analyze data at global scale — enabling high-value research in medical and other industries.",
        }, {
          title: "E-commerce & web portals",
          desc: "We build marketplaces and portals with robust back-end panels, analytics, and personalized experiences designed to drive transactions.",
        }, {
          title: "Micro Websites",
          desc: "We build multiplatform microsites to launch products, capture leads, and reinforce brand identity with custom design.",
        }, {
          title: "High quality code",
          desc: "We deliver responsive, fast, scalable, and secure applications following industry best practices and staying current with the latest technology frameworks.",
        }].map((item) => (
          <div key={item.title} className="rounded-2xl border border-corp p-6">
            <h3 className="text-lg font-semibold text-corp">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-corp bg-corp-soft p-8">
        <h3 className="text-2xl font-semibold text-corp">Have a project in mind?</h3>
        <p className="mt-2 text-muted">
          Let's talk about how to build the right solution for your business.
        </p>
        <a className="btn-primary mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold" href="/en/contact">
          Talk to an expert
        </a>
      </section>
    </PageShell>
  );
}
