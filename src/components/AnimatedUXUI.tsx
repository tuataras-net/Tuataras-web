"use client";

import { useEffect, useState } from "react";

export function AnimatedUXUI() {
  const [phase, setPhase] = useState(0);
  // phase 0: wireframe gris
  // phase 1: aparece color en hero
  // phase 2: aparece navbar
  // phase 3: aparece contenido
  // phase 4: cursor click + badge "Aprobado"
  // phase 5: loop back

  useEffect(() => {
    const timings = [1000, 1800, 2600, 3400, 4400, 6000];
    const timers = timings.map((t, i) =>
      setTimeout(() => setPhase(i + 1), t)
    );
    const loop = setTimeout(() => setPhase(0), 7200);
    return () => { timers.forEach(clearTimeout); clearTimeout(loop); };
  }, [phase === 0 ? 0 : -1]);

  // Reinicia el loop cuando vuelve a 0
  useEffect(() => {
    if (phase !== 0) return;
    const timings = [1000, 1800, 2600, 3400, 4400, 6000];
    const timers = timings.map((t, i) =>
      setTimeout(() => setPhase(i + 1), t)
    );
    const loop = setTimeout(() => setPhase(0), 7200);
    return () => { timers.forEach(clearTimeout); clearTimeout(loop); };
  }, [phase]);

  const styled = phase >= 1;
  const hasNav = phase >= 2;
  const hasContent = phase >= 3;
  const hasCursor = phase >= 4;
  const hasApproved = phase >= 5;

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#c6e8d5] bg-white">
      {/* Barra superior del browser */}
      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2.5 border-b border-gray-200">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 h-5 rounded-full bg-gray-200 flex items-center px-3">
          <span className="text-[10px] text-gray-400">tuataras.dev</span>
        </div>
      </div>

      {/* Contenido del diseño */}
      <div className="relative bg-white min-h-[220px] overflow-hidden">

        {/* Navbar */}
        <div className={`flex items-center justify-between px-4 py-2 transition-all duration-500 ${hasNav ? (styled ? "bg-[#0d2b1f]" : "bg-gray-200") : "opacity-0"}`}>
          <div className={`h-4 w-16 rounded transition-all duration-500 ${styled ? "bg-[#3ecf8e]" : "bg-gray-300"}`} />
          <div className="flex gap-2">
            {[1,2,3].map(i => (
              <div key={i} className={`h-3 w-10 rounded transition-all duration-500 ${styled ? "bg-white opacity-60" : "bg-gray-300"}`} />
            ))}
          </div>
        </div>

        {/* Hero block */}
        <div className={`mx-3 mt-3 rounded-xl p-4 transition-all duration-700 ${styled ? "bg-gradient-to-br from-emerald-50 to-green-100 border border-[#c6e8d5]" : "bg-gray-100 border border-gray-200"}`}>
          <div className={`h-3 w-24 rounded mb-2 transition-all duration-500 ${styled ? "bg-[#1a6b3a]" : "bg-gray-300"}`} />
          <div className={`h-5 w-40 rounded mb-2 transition-all duration-500 ${styled ? "bg-[#0d2b1f]" : "bg-gray-300"}`} />
          <div className={`h-2.5 w-32 rounded mb-3 transition-all duration-500 ${styled ? "bg-[#2d4a3a] opacity-60" : "bg-gray-200"}`} />
          <div className={`h-7 w-24 rounded-full transition-all duration-500 ${styled ? "bg-[#0d2b1f]" : "bg-gray-300"}`} />
        </div>

        {/* Cards row */}
        <div className={`mx-3 mt-3 grid grid-cols-3 gap-2 transition-all duration-500 ${hasContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
          {[1,2,3].map(i => (
            <div key={i} className={`rounded-lg p-2 transition-all duration-500 ${styled ? "bg-[#f0faf4] border border-[#c6e8d5]" : "bg-gray-100 border border-gray-200"}`}>
              <div className={`h-10 rounded mb-1.5 transition-all duration-500 ${styled ? "bg-[#c6e8d5]" : "bg-gray-200"}`} />
              <div className={`h-2 w-3/4 rounded transition-all duration-500 ${styled ? "bg-[#1a6b3a] opacity-40" : "bg-gray-200"}`} />
            </div>
          ))}
        </div>

        {/* Cursor */}
        <div
          className={`absolute transition-all duration-700 pointer-events-none ${hasCursor ? "opacity-100" : "opacity-0"}`}
          style={{ bottom: "28px", right: "60px" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 2 L2 14 L6 10 L9 16 L11 15 L8 9 L13 9 Z" fill="#0d2b1f" stroke="white" strokeWidth="1"/>
          </svg>
        </div>

        {/* Badge aprobado */}
        <div className={`absolute bottom-3 right-3 transition-all duration-500 ${hasApproved ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
          <div className="flex items-center gap-1 rounded-full bg-[#3ecf8e] px-3 py-1 text-[11px] font-semibold text-[#0d2b1f] shadow-md">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6 L5 9 L10 3" stroke="#0d2b1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Aprobado
          </div>
        </div>

        {/* Label fase */}
        <div className="absolute top-2 right-2 text-[9px] font-mono text-gray-300">
          {phase === 0 && "wireframe"}
          {phase === 1 && "styling..."}
          {phase >= 2 && phase < 5 && "building..."}
          {phase >= 5 && "✓ done"}
        </div>
      </div>
    </div>
  );
}
