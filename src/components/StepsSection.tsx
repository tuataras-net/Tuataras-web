"use client";
import { useEffect, useRef, useState } from "react";

type Step = { title: string; desc: string; img: string };

export function StepsSection({ steps, label }: { steps: Step[]; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mt-6">
      {/* Línea horizontal animada — desktop */}
      <div
        className="absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 md:block"
        style={{ height: "2px", background: "#c6e8d5", overflow: "hidden" }}
      >
        <div className="animate-progress h-full" style={{ background: "linear-gradient(to right, #3ecf8e, #1a6b3a)" }} />
      </div>

      {/* Línea vertical animada — mobile */}
      <div
        className="absolute bottom-0 left-1/2 top-0 -translate-x-1/2 md:hidden"
        style={{ width: "2px", background: "#c6e8d5", overflow: "hidden" }}
      >
        <div
          className="w-full"
          style={{
            background: "linear-gradient(to bottom, #3ecf8e, #1a6b3a)",
            animation: "progress-line-v 2s ease-in-out infinite alternate",
            animationDelay: "5.5s",
            animationFillMode: "backwards",
          }}
        />
      </div>

      <div className="relative grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative flex flex-col overflow-hidden rounded-2xl border border-corp bg-corp-soft transition hover:shadow-md"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.5s ease ${i * 0.2}s, transform 0.5s ease ${i * 0.2}s`,
            }}
          >
            <span
              className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0)",
                transition: `opacity 0.4s cubic-bezier(0.34,1.56,0.64,1) ${2 + i}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${2 + i}s`,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="p-5 pr-12">
              <h3 className="font-semibold text-corp">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.desc}</p>
            </div>
            <div className="h-32 w-full overflow-hidden bg-white">
              <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
