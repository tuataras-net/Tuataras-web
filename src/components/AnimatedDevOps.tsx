"use client";

import { useEffect, useState } from "react";

const stages = [
  { label: "Code", icon: "💻" },
  { label: "Build", icon: "⚙️" },
  { label: "Test", icon: "🧪" },
  { label: "Deploy", icon: "🚀" },
  { label: "Monitor", icon: "📊" },
];

const logs = [
  { text: "[build] Compiling TypeScript...", delay: 600 },
  { text: "[build] ✓ Build successful", delay: 1400 },
  { text: "[test]  Running 42 tests...", delay: 2200 },
  { text: "[test]  ✓ All tests passed", delay: 3000 },
  { text: "[deploy] Pushing to AWS ECS...", delay: 3800 },
  { text: "[deploy] ✓ Live at prod.tuataras.dev", delay: 4600 },
];

export function AnimatedDevOps() {
  const [activeStage, setActiveStage] = useState(-1);
  const [visibleLogs, setVisibleLogs] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setActiveStage(-1);
    setVisibleLogs([]);
    setDone(false);

    const stageTimers = stages.map((_, i) =>
      setTimeout(() => setActiveStage(i), 800 + i * 900)
    );

    const logTimers = logs.map((l, i) =>
      setTimeout(() => setVisibleLogs((prev) => [...prev, i]), l.delay)
    );

    const doneTimer = setTimeout(() => setDone(true), 5200);
    const resetTimer = setTimeout(() => setCycle((c) => c + 1), 7000);

    return () => {
      [...stageTimers, ...logTimers, doneTimer, resetTimer].forEach(clearTimeout);
    };
  }, [cycle]);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1a6b3a]">
      {/* Barra superior */}
      <div className="flex items-center gap-2 bg-[#1a6b3a] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-[#c6e8d5] opacity-70">CI/CD Pipeline — tuataras</span>
      </div>

      {/* Pipeline stages */}
      <div className="bg-[#0d2b1f] px-4 pt-4 pb-3">
        <div className="flex items-center justify-between">
          {stages.map((s, i) => {
            const isActive = activeStage === i;
            const isDone = activeStage > i;
            return (
              <div key={s.label} className="flex flex-col items-center gap-1 flex-1">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm transition-all duration-400
                  ${isDone ? "border-[#3ecf8e] bg-[#3ecf8e]" : isActive ? "border-[#3ecf8e] bg-[#0d2b1f] animate-pulse" : "border-[#1a6b3a] bg-[#0d2b1f]"}`}>
                  {isDone ? "✓" : s.icon}
                </div>
                <span className={`text-[10px] font-mono transition-all duration-300 ${isDone || isActive ? "text-[#3ecf8e]" : "text-[#1a6b3a]"}`}>
                  {s.label}
                </span>
                {/* Línea conectora */}
                {i < stages.length - 1 && (
                  <div className="absolute" style={{ display: "none" }} />
                )}
              </div>
            );
          })}
        </div>
        {/* Barra de progreso */}
        <div className="mt-3 h-1 w-full rounded-full bg-[#1a6b3a]">
          <div
            className="h-1 rounded-full bg-[#3ecf8e] transition-all duration-700"
            style={{ width: activeStage < 0 ? "0%" : `${((activeStage + 1) / stages.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Log terminal */}
      <div className="bg-[#0a1f15] px-4 py-3 font-mono text-xs min-h-[130px]">
        {logs.map((log, i) => (
          <div
            key={i}
            className="mb-1 transition-all duration-300"
            style={{
              opacity: visibleLogs.includes(i) ? 1 : 0,
              transform: visibleLogs.includes(i) ? "translateY(0)" : "translateY(4px)",
              color: log.text.includes("✓") ? "#3ecf8e" : "#c6e8d5",
            }}
          >
            {log.text}
          </div>
        ))}
        {done && (
          <div className="mt-2 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#3ecf8e] animate-pulse" />
            <span className="text-[#3ecf8e]">Pipeline completed successfully</span>
          </div>
        )}
      </div>
    </div>
  );
}
