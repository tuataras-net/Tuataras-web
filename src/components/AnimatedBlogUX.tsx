"use client";

import { useEffect, useState } from "react";

const funnel = [
  { label: "Visitas", value: 1000, width: 100, color: "#1a6b3a" },
  { label: "Interacción", value: 620, width: 72, color: "#1a6b3a" },
  { label: "Registros", value: 310, width: 50, color: "#1a6b3a" },
  { label: "Conversión", value: 148, width: 32, color: "#3ecf8e" },
];

const principles = [
  { icon: "👁", label: "Jerarquía visual", done: false },
  { icon: "⚡", label: "Velocidad percibida", done: false },
  { icon: "🔁", label: "Consistencia", done: false },
  { icon: "📊", label: "Medir y mejorar", done: false },
];

export function AnimatedBlogUX() {
  const [funnelStep, setFunnelStep] = useState(0);
  const [doneItems, setDoneItems] = useState<number[]>([]);
  const [conversion, setConversion] = useState(0);
  const [showRate, setShowRate] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setFunnelStep(0);
    setDoneItems([]);
    setConversion(0);
    setShowRate(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    funnel.forEach((_, i) => {
      timers.push(setTimeout(() => setFunnelStep(i + 1), 300 + i * 500));
    });

    principles.forEach((_, i) => {
      timers.push(setTimeout(() => setDoneItems((p) => [...p, i]), 300 + funnel.length * 500 + i * 400));
    });

    const countStart = 300 + funnel.length * 500 + principles.length * 400 + 200;
    const steps = 20;
    for (let s = 1; s <= steps; s++) {
      timers.push(
        setTimeout(() => setConversion(Math.round((14.8 / steps) * s * 10) / 10), countStart + s * 60)
      );
    }
    timers.push(setTimeout(() => setShowRate(true), countStart + steps * 60 + 200));
    timers.push(setTimeout(() => setCycle((c) => c + 1), countStart + steps * 60 + 2500));

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#c6e8d5] bg-white">
      {/* Browser bar */}
      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2.5 border-b border-gray-200">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 h-5 rounded-full bg-gray-200 flex items-center px-3">
          <span className="text-[10px] text-gray-400">analytics.tuataras.dev — UX Report</span>
        </div>
      </div>

      <div className="bg-white px-4 pt-4 pb-2">
        <p className="text-[9px] font-mono text-[#1a6b3a]/50 mb-3 uppercase tracking-widest">Embudo de conversión</p>

        {/* Funnel */}
        <div className="flex flex-col gap-1.5 mb-4">
          {funnel.map((f, i) => (
            <div key={i} className={`transition-all duration-500 ${funnelStep > i ? "opacity-100" : "opacity-0"}`}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[9px] text-[#1a6b3a]/60 font-mono">{f.label}</span>
                <span className="text-[9px] font-bold text-[#1a6b3a]">{f.value.toLocaleString()}</span>
              </div>
              <div className="h-4 bg-[#f0faf4] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: funnelStep > i ? `${f.width}%` : "0%",
                    backgroundColor: f.color,
                    transitionDelay: `${i * 80}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Principles checklist */}
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          {principles.map((p, i) => (
            <div
              key={i}
              className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 transition-all duration-400 ${
                doneItems.includes(i) ? "bg-[#f0faf4] border border-[#c6e8d5]" : "bg-gray-50 border border-gray-100 opacity-40"
              }`}
            >
              <span className="text-sm">{p.icon}</span>
              <span className="text-[9px] font-semibold text-[#1a6b3a]">{p.label}</span>
              {doneItems.includes(i) && (
                <span className="ml-auto text-[#3ecf8e] text-[10px]">✓</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Conversion rate */}
      <div className="bg-[#0d2b1f] px-4 py-2.5 flex items-center justify-between">
        <span className="text-[9px] font-mono text-[#c6e8d5]/50">Tasa de conversión</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-[#3ecf8e]">{conversion}%</span>
          {showRate && (
            <span className="rounded-full bg-[#3ecf8e] px-2 py-0.5 text-[9px] font-bold text-[#0d2b1f]">
              +47% vs antes
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
