import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AnimatedContact } from "@/components/AnimatedContact";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contáctanos | Tuataras",
  description: "Cuéntanos sobre tu proyecto. Respondemos en menos de 24 horas. Email, WhatsApp o agenda una llamada directamente.",
  openGraph: {
    title: "Contáctanos | Tuataras",
    description: "Cuéntanos sobre tu proyecto. Respondemos en menos de 24 horas.",
    url: "https://tuataras.io/es/contacto",
  },
};

const contactInfo = [
  { icon: "✉️", label: "Email", value: "hola@tuataras.io", href: "mailto:hola@tuataras.io" },
  { icon: "💬", label: "WhatsApp", value: "+507 6000 0000", href: "https://wa.me/50760000000" },
  { icon: "📍", label: "Ubicación", value: "Ciudad de Panamá, Panamá", href: null },
];

export default function Page() {
  return (
    <PageShell lang="es" title="" hideTitle>
      {/* Hero */}
      <section aria-label="Hero" className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-50 border border-corp p-8 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Hablemos</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-corp lg:text-5xl leading-tight">
              Cuéntanos tu proyecto
            </h1>
            <p className="mt-4 text-lg text-muted max-w-lg">
              Respondemos en menos de 24 horas. Sin compromiso, solo una conversación para entender cómo podemos ayudarte.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span className="text-xl">{c.icon}</span>
                  <div>
                    <p className="text-xs text-muted">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-semibold text-corp hover:underline" target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-corp">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200 opacity-40 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-cyan-200 opacity-40 blur-3xl" />
            <AnimatedContact />
          </div>
        </div>
      </section>

      {/* Formulario + Mapa */}
      <section aria-label="Formulario y mapa" className="mt-12 grid gap-8 lg:grid-cols-2">
        <ContactForm lang="es" />

        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-2xl border border-corp flex-1 min-h-[380px]">
            <iframe
              title="Tuataras — Ciudad de Panamá"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125359.54297760485!2d-79.59897!3d8.99360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f41ae0dc7d%3A0x34fdf3d38c1c1ac2!2sPanama%20City%2C%20Panama!5e0!3m2!1ses!2spa!4v1700000000000"
              width="100%" height="100%"
              className="w-full h-full min-h-[380px] grayscale hover:grayscale-0 transition-all duration-500"
              style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://wa.me/50760000000" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-corp bg-corp-soft p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
              <span className="text-2xl">💬</span>
              <div>
                <p className="text-xs font-semibold text-corp">WhatsApp</p>
                <p className="text-xs text-muted">Respuesta inmediata</p>
              </div>
            </a>
            <a href="https://calendly.com/tuataras" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-corp bg-corp-soft p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
              <span className="text-2xl">📅</span>
              <div>
                <p className="text-xs font-semibold text-corp">Agendar llamada</p>
                <p className="text-xs text-muted">Calendly</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
