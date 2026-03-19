"use client";

import { useEffect, useState } from "react";

const steps = [
  { label: "Diagnóstico", icon: "🔍", desc: "Analizando objetivos..." },
  { label: "Planificación", icon: "📋", desc: "Definiendo alcance..." },
  { label: "Ejecución", icon: "⚙️", desc: "Sprints en curso..." },
  { label: "Validación", icon: "✅", desc: "Revisando entrega..." },
  { label: "Lanzamiento", icon: "🚀", desc: "Desplegando..." },
];

export function AnimatedProcesses() {
  const [activeStep, setActiveStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showDone, setShowDone] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setActiveStep(-1);
    setCompletedSteps([]);
    setShowDone(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    steps.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveStep(i), 500 + i * 1100));
      timers.push(setTimeout(() => setCompletedSteps((p) => [...p, i]), 500 + i * 1100 + 800));
    });

    timers.push(setTimeout(() => setShowDone(true), 500 + steps.length * 1100));
    timers.push(setTimeout(() => setCycle((c) => c + 1), 500 + steps.length * 1100 + 2500));

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  const progress = completedSteps.length / steps.length * 100;

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1a6b3a]">
      {/* Header */}
      <div className="flex items-center gap-2 bg-[#0d2b1f] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-[#c6e8d5] opacity-70">Project Board — tuataras</span>
      </div>

      {/* Barra de progreso general */}
      <div className="bg-[#0a1f15] px-4 py-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-mono text-[#c6e8d5] opacity-60">Progreso del proyecto</span>
          <span className="text-[10px] font-mono text-[#3ecf8e]">{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-[#1a6b3a]">
          <div
            className="h-1.5 rounded-full bg-[#3ecf8e] transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="bg-white divide-y divide-[#f0faf4]">
        {steps.map((step, i) => {
          const isCompleted = completedSteps.includes(i);
          const isActive = activeStep === i && !isCompleted;
          return (
            <div
              key={i}
              className={`flex items-center gap-3 px-4 py-2.5 transition-all duration-400 ${isActive ? "bg-[#f0faf4]" : ""}`}
            >
              {/* Icono estado */}
              <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs transition-all duration-500
                ${isCompleted ? "bg-[#3ecf8e] text-white" : isActive ? "border-2 border-[#3ecf8e] animate-pulse" : "border-2 border-[#c6e8d5]"}`}>
                {isCompleted ? "✓" : step.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-semibold transition-colors duration-300 ${isCompleted ? "text-[#1a6b3a]" : isActive ? "text-[#0d2b1f]" : "text-[#c6e8d5]"}`}>
                  {step.label}
                </p>
                {isActive && (
                  <p className="text-[10px] text-[#3ecf8e] animate-pulse">{step.desc}</p>
                )}
              </div>

              {/* Badge estado */}
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium transition-all duration-300
                ${isCompleted ? "bg-[#f0faf4] text-[#1a6b3a]" : isActive ? "bg-[#3ecf8e] text-[#0d2b1f]" : "bg-gray-50 text-gray-300"}`}>
                {isCompleted ? "Hecho" : isActive ? "En curso" : "Pendiente"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Badge final */}
      <div className={`bg-[#0d2b1f] px-4 py-3 flex items-center justify-center transition-all duration-500 ${showDone ? "opacity-100" : "opacity-0"}`}>
        <div className="flex items-center gap-2 rounded-full bg-[#3ecf8e] px-4 py-1.5">
          <span className="text-xs font-bold text-[#0d2b1f]">🎯 Proyecto entregado con éxito</span>
        </div>
      </div>
    </div>
  );
}
