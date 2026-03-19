"use client";

import { useEffect, useState } from "react";

const lessons = [
  { title: "Introducción al curso", duration: "5 min" },
  { title: "Módulo 1: Fundamentos", duration: "12 min" },
  { title: "Módulo 2: Práctica", duration: "18 min" },
  { title: "Evaluación final", duration: "10 min" },
];

export function AnimatedElearning() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [activeLesson, setActiveLesson] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setCompletedLessons([]);
    setActiveLesson(0);
    setProgress(0);
    setShowBadge(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    lessons.forEach((_, i) => {
      timers.push(setTimeout(() => {
        setActiveLesson(i);
        setProgress(Math.round(((i) / lessons.length) * 100));
      }, i * 1400));

      timers.push(setTimeout(() => {
        setCompletedLessons((prev) => [...prev, i]);
        setProgress(Math.round(((i + 1) / lessons.length) * 100));
      }, i * 1400 + 1000));
    });

    timers.push(setTimeout(() => setShowBadge(true), lessons.length * 1400 + 200));
    timers.push(setTimeout(() => setCycle((c) => c + 1), lessons.length * 1400 + 3000));

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1a6b3a]">
      {/* Header LMS */}
      <div className="flex items-center justify-between bg-[#0d2b1f] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-[#3ecf8e] text-sm font-semibold">📚 Campus Tuataras</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-[#3ecf8e] opacity-60 flex items-center justify-center text-[10px] text-[#0d2b1f] font-bold">U</div>
        </div>
      </div>

      {/* Curso activo */}
      <div className="bg-[#f0faf4] px-4 pt-3 pb-2">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#2d4a3a] opacity-60">Curso activo</p>
        <p className="text-sm font-semibold text-[#0d2b1f]">Transformación Digital para Empresas</p>
        {/* Barra de progreso */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex-1 h-2 rounded-full bg-[#c6e8d5]">
            <div
              className="h-2 rounded-full bg-[#3ecf8e] transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[11px] font-mono text-[#1a6b3a]">{progress}%</span>
        </div>
      </div>

      {/* Lista de lecciones */}
      <div className="bg-white px-4 py-2 divide-y divide-[#f0faf4]">
        {lessons.map((lesson, i) => {
          const isCompleted = completedLessons.includes(i);
          const isActive = activeLesson === i && !isCompleted;
          return (
            <div key={i} className={`flex items-center gap-3 py-2 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-70"}`}>
              <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs transition-all duration-500
                ${isCompleted ? "bg-[#3ecf8e] text-white" : isActive ? "border-2 border-[#3ecf8e] text-[#3ecf8e]" : "border-2 border-[#c6e8d5] text-[#c6e8d5]"}`}>
                {isCompleted ? "✓" : i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-medium truncate transition-colors duration-300 ${isCompleted ? "text-[#1a6b3a]" : isActive ? "text-[#0d2b1f]" : "text-[#c6e8d5]"}`}>
                  {lesson.title}
                </p>
              </div>
              <span className="text-[10px] text-[#c6e8d5]">{lesson.duration}</span>
              {isActive && (
                <span className="text-[10px] font-semibold text-[#3ecf8e] animate-pulse">▶ Viendo</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Badge completado */}
      <div className={`bg-[#0d2b1f] px-4 py-3 flex items-center justify-center transition-all duration-500 ${showBadge ? "opacity-100" : "opacity-0"}`}>
        <div className="flex items-center gap-2 rounded-full bg-[#3ecf8e] px-4 py-1.5">
          <span className="text-sm">🏅</span>
          <span className="text-xs font-bold text-[#0d2b1f]">¡Curso completado!</span>
        </div>
      </div>
    </div>
  );
}
