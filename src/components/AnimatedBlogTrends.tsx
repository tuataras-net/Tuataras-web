"use client";

import { useEffect, useState } from "react";

const trends = [
  { icon: "🤖", label: "IA integrada", metric: "+340%", color: "#3ecf8e" },
  { icon: "☁️", label: "Cloud-first", metric: "99.9%", color: "#6ee7b7" },
  { icon: "🎓", label: "E-learning", metric: "2.4k", color: "#3ecf8e" },
  { icon: "🎨", label: "UX first", metric: "4.9★", color: "#6ee7b7" },
];

const timeline = [
  { year: "2023", bar: 35 },
  { year: "2024", bar: 55 },
  { year: "2025", bar: 72 },
  { year: "2026", bar: 94 },
];

export function AnimatedBlogTrends() {
  const [step, setStep] = useState(0);
  const [showBars, setShowBars] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setStep(0);
    setShowBars(false);
    setShowBadge(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    trends.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), 400 + i * 600));
    });
    timers.push(setTimeout(() => setShowBars(true), 400 + trends.length * 600 + 300));
    timers.push(setTimeout(() => setShowBadge(true), 400 + trends.length * 600 + 1200));
    timers.push(setTimeout(() => setCycle((c) => c + 1), 400 + trends.length * 600 + 3000));

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1a6b3a]">
      {/* Header */}
      <div className="flex items-center gap-2 bg-[#0d2b1f] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-[#c6e8d5] opacity-70">Radar de tendencias 2026</span>
        <span className="ml-auto h-2 w-2 rounded-full bg-[#3ecf8e] animate-pulse" />
      </div>

      {/* Trend cards */}
      <div className="bg-[#0a1f15] px-4 pt-4 pb-2 grid grid-cols-2 gap-2">
        {trends.map((t, i) => (
          <div
            key={i}
            className={`rounded-xl border px-3 py-2.5 transition-all duration-500 ${
              step > i ? "opacity-100 translate-y-0 border-[#3ecf8e] bg-[#0d2b1f]" : "opacity-0 translate-y-3 border-[#1a6b3a] bg-[#0d2b1f]/40"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-base">{t.icon}</span>
              <span className="text-[10px] font-mono font-bold" style={{ color: t.color }}>{t.metric}</span>
            </div>
            <p className="mt-1 text-[10px] font-semibold text-[#c6e8d5]">{t.label}</p>
          </div>
        ))}
      </div>

      {/* Adoption timeline */}
      <div className="bg-[#0a1f15] px-4 pb-3">
        <p className="text-[9px] font-mono text-[#c6e8d5]/50 mb-2 uppercase tracking-widest">Adopción tecnológica</p>
        <div className="flex items-end gap-2 h-14">
          {timeline.map((t, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-sm bg-[#1a6b3a] overflow-hidden h-12">
                <div
                  className="rounded-sm bg-[#3ecf8e] transition-all duration-700 w-full"
                  style={{
                    height: showBars ? `${t.bar}%` : "0%",
                    transitionDelay: `${i * 100}ms`,
                  }}
                />
              </div>
              <span className="text-[8px] text-[#c6e8d5]/40 font-mono">{t.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Badge */}
      <div className="bg-[#0d2b1f] px-4 py-2.5 flex items-center justify-between">
        <span className="text-[9px] font-mono text-[#c6e8d5]/40">Índice de transformación</span>
        <div className={`transition-all duration-500 ${showBadge ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
          <span className="rounded-full bg-[#3ecf8e] px-2.5 py-0.5 text-[10px] font-bold text-[#0d2b1f]">
            🚀 Alto impacto
          </span>
        </div>
      </div>
    </div>
  );
}
