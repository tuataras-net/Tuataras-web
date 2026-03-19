"use client";

import { useEffect, useState } from "react";

const messages = [
  { from: "client", text: "Hola, necesito una plataforma e-learning" },
  { from: "tuataras", text: "¡Claro! ¿Cuántos usuarios esperan?" },
  { from: "client", text: "Unos 500, con certificados" },
  { from: "tuataras", text: "Perfecto, podemos tenerla lista en 6 semanas" },
  { from: "client", text: "¿Tienen experiencia con LMS?" },
  { from: "tuataras", text: "Sí, más de 10 proyectos similares ✓" },
];

const statusSteps = [
  { label: "Mensaje recibido", icon: "📨" },
  { label: "Asignando equipo", icon: "👥" },
  { label: "Preparando propuesta", icon: "📋" },
  { label: "Respuesta enviada", icon: "✅" },
];

export function AnimatedContact() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [activeStatus, setActiveStatus] = useState(-1);
  const [showPulse, setShowPulse] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setVisibleMessages([]);
    setActiveStatus(-1);
    setShowPulse(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Show messages one by one
    messages.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleMessages((p) => [...p, i]), 400 + i * 800));
    });

    // Animate status steps after messages
    const statusStart = 400 + messages.length * 800 + 200;
    statusSteps.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveStatus(i), statusStart + i * 600));
    });

    // Show pulse at end
    timers.push(setTimeout(() => setShowPulse(true), statusStart + statusSteps.length * 600 + 200));

    // Loop
    timers.push(setTimeout(() => setCycle((c) => c + 1), statusStart + statusSteps.length * 600 + 2500));

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1a6b3a]">
      {/* Header */}
      <div className="flex items-center gap-2 bg-[#0d2b1f] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-[#c6e8d5] opacity-70">Tuataras — Chat de proyecto</span>
        {showPulse && (
          <span className="ml-auto flex items-center gap-1 text-[10px] text-[#3ecf8e]">
            <span className="h-2 w-2 rounded-full bg-[#3ecf8e] animate-pulse" />
            En línea
          </span>
        )}
      </div>

      {/* Chat */}
      <div className="bg-[#0a1f15] px-4 pt-4 pb-3 flex flex-col gap-2 min-h-[180px]">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex transition-all duration-500 ${
              visibleMessages.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            } ${m.from === "tuataras" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[78%] rounded-2xl px-3 py-2 text-[11px] leading-snug ${
                m.from === "tuataras"
                  ? "bg-[#1a6b3a] text-[#c6e8d5]"
                  : "bg-[#0d2b1f] border border-[#1a6b3a] text-[#c6e8d5]/80"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Status tracker */}
      <div className="bg-[#0d2b1f] px-4 py-3 border-t border-[#1a6b3a]">
        <p className="text-[9px] font-mono text-[#c6e8d5]/50 mb-2 uppercase tracking-widest">Estado del proceso</p>
        <div className="flex items-center justify-between gap-1">
          {statusSteps.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1 flex-1">
              <div
                className={`h-7 w-7 rounded-full flex items-center justify-center text-sm transition-all duration-500 ${
                  activeStatus >= i
                    ? "bg-[#1a6b3a] border-2 border-[#3ecf8e] scale-110"
                    : "bg-[#0a1f15] border border-[#1a6b3a] opacity-40"
                }`}
              >
                {s.icon}
              </div>
              <p className={`text-[8px] text-center leading-tight transition-all duration-500 ${
                activeStatus >= i ? "text-[#3ecf8e]" : "text-[#c6e8d5]/30"
              }`}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Response time badge */}
      <div className="bg-[#0a1f15] px-4 py-2.5 flex items-center justify-between">
        <span className="text-[9px] font-mono text-[#c6e8d5]/40">Tiempo de respuesta promedio</span>
        <span className="text-[11px] font-bold text-[#3ecf8e]">&lt; 24h</span>
      </div>
    </div>
  );
}
