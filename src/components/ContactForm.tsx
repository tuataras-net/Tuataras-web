"use client";

import { useState } from "react";

const WA_NUMBER = "584241399078";

type Lang = "es" | "en";

const t = {
  es: {
    title: "Envíanos un mensaje",
    subtitle: "Completa el formulario y te contactamos a la brevedad.",
    name: "Nombre *", namePh: "Tu nombre",
    company: "Empresa", companyPh: "Tu empresa",
    email: "Email *", emailPh: "correo@empresa.com",
    service: "Servicio de interés",
    servicePh: "Selecciona un servicio",
    services: ["Desarrollo Web", "UX / UI", "DevOps & Cloud", "E-learning / LMS", "Consultoría TIC", "Procesos", "Otro"],
    message: "Mensaje *", messagePh: "Cuéntanos sobre tu proyecto...",
    send: "Enviar mensaje", sending: "Enviando...",
    successTitle: "¡Mensaje enviado!", successDesc: "Te responderemos en menos de 24 horas.",
    successReset: "Enviar otro mensaje",
    error: "Ocurrió un error. Por favor intenta nuevamente.",
  },
  en: {
    title: "Send us a message",
    subtitle: "Fill out the form and we'll get back to you shortly.",
    name: "Name *", namePh: "Your name",
    company: "Company", companyPh: "Your company",
    email: "Email *", emailPh: "you@company.com",
    service: "Service of interest",
    servicePh: "Select a service",
    services: ["Web Development", "UX / UI", "DevOps & Cloud", "E-learning / LMS", "ICT Consulting", "Processes", "Other"],
    message: "Message *", messagePh: "Tell us about your project...",
    send: "Send message", sending: "Sending...",
    successTitle: "Message sent!", successDesc: "We'll reply within 24 hours.",
    successReset: "Send another message",
    error: "Something went wrong. Please try again.",
  },
};

export function ContactForm({ lang }: { lang: Lang }) {
  const tx = t[lang];
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [form, setForm] = useState({ from_name: "", company: "", reply_to: "", service: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { from_name, company, reply_to, service, message } = form;
    const text = lang === "es"
      ? `Hola equipo de Tuataras,\n\nMi nombre es ${from_name}${company ? `, de la empresa ${company}` : ""}.\n\nEstoy interesado/a en el servicio de ${service || "su empresa"} y me gustaría ponerme en contacto con ustedes.\n\n${message}\n\nPueden contactarme al correo: ${reply_to}`
      : `Hello Tuataras team,\n\nMy name is ${from_name}${company ? `, from ${company}` : ""}.\n\nI am interested in ${service || "your services"} and would like to get in touch.\n\n${message}\n\nYou can reach me at: ${reply_to}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setStatus("success");
    setForm({ from_name: "", company: "", reply_to: "", service: "", message: "" });
  }

  return (
    <div className="rounded-2xl border border-corp bg-corp-soft p-8">
      <h2 className="text-xl font-semibold text-corp">{tx.title}</h2>
      <p className="mt-1 text-sm text-muted">{tx.subtitle}</p>

      {status === "success" ? (
        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-xl border border-[#1a6b3a] bg-white py-12 text-center">
          <span className="text-4xl">✅</span>
          <p className="font-semibold text-corp">{tx.successTitle}</p>
          <p className="text-sm text-muted">{tx.successDesc}</p>
          <button onClick={() => setStatus("idle")} className="mt-2 text-sm text-corp underline underline-offset-2 hover:opacity-70">
            {tx.successReset}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted">{tx.name}</label>
              <input required type="text" name="from_name" placeholder={tx.namePh} value={form.from_name} onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-corp bg-white px-4 py-3 text-sm text-corp placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e]" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-muted">{tx.company}</label>
              <input type="text" name="company" placeholder={tx.companyPh} value={form.company} onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-corp bg-white px-4 py-3 text-sm text-corp placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e]" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">{tx.email}</label>
            <input required type="email" name="reply_to" placeholder={tx.emailPh} value={form.reply_to} onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-corp bg-white px-4 py-3 text-sm text-corp placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e]" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">{tx.service}</label>
            <select name="service" value={form.service} onChange={handleChange} className="mt-2 w-full rounded-xl border border-corp bg-white px-4 py-3 text-sm text-corp focus:outline-none focus:ring-2 focus:ring-[#3ecf8e]">
              <option value="">{tx.servicePh}</option>
              {tx.services.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">{tx.message}</label>
            <textarea required name="message" rows={5} placeholder={tx.messagePh} value={form.message} onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-corp bg-white px-4 py-3 text-sm text-corp placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] resize-none" />
          </div>
          <button type="submit" className="btn-primary w-full rounded-full py-3 text-sm font-semibold">
            {tx.send}
          </button>
        </form>
      )}
    </div>
  );
}
