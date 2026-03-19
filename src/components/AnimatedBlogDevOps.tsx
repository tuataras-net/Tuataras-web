"use client";

import { useEffect, useState } from "react";

const stages = [
  { icon: "📝", label: "Commit", color: "#3ecf8e" },
  { icon: "🔨", label: "Build", color: "#3ecf8e" },
  { icon: "🧪", label: "Test", color: "#3ecf8e" },
  { icon: "🚀", label: "Deploy", color: "#3ecf8e" },
  { icon: "📡", label: "Monitor", color: "#3ecf8e" },
];

const logs = [
  { text: "$ git push origin main", type: "cmd" },
  { text: "✓ Lint passed (0 errors)", type: "ok" },
  { text: "✓ Unit tests: 142/142", type: "ok" },
  { text: "✓ Docker image built", type: "ok" },
  { text: "⟳ Deploying to production...", type: "info" },
  { text: "✓ Live at tuataras.dev", type: "success" },
];

export function AnimatedBlogDevOps() {
  const [activeStage, setActiveStage] = useState(-1);
  const [visibleLogs, setVisibleLogs] = useState<number[]>([]);
  const [uptime, setUptime] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setActiveStage(-1);
    setVisibleLogs([]);
    setUptime(0);
    setShowBadge(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    stages.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveStage(i), 400 + i * 700));
    });

    logs.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLogs((p) => [...p, i]), 500 + i * 600));
    });

    const countStart = 500 + logs.length * 600 + 200;
    const steps = 25;
    for (let s = 1; s <= steps; s++) {
      timers.push(
        setTimeout(() => setUptime(Math.round((99.9 / steps) * s * 10) / 10), countStart + s * 50)
      );
    }
    timers.push(setTimeout(() => setShowBadge(true), countStart + steps * 50 + 300));
    timers.push(setTimeout(() => setCycle((c) => c + 1), countStart + steps * 50 + 2500));

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1a6b3a]">
      {/* Header */}
      <div className="flex items-center gap-2 bg-[#0d2b1f] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-[#c6e8d5] opacity-70">CI/CD Pipeline — tuataras</span>
        <span className="ml-auto h-2 w-2 rounded-full bg-[#3ecf8e] animate-pulse" />
      </div>

      {/* Pipeline stages */}
      <div className="bg-[#0a1f15] px-4 pt-4 pb-3">
        <div className="flex items-center justify-between">
          {stages.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1 flex-1">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-base transition-all duration-500 ${
                  activeStage >= i
                    ? "bg-[#1a6b3a] border-2 border-[#3ecf8e] scale-110"
                    : "bg-[#0d2b1f] border border-[#1a6b3a] opacity-30"
                }`}
              >
                {s.icon}
              </div>
              <span className={`text-[8px] font-mono transition-all duration-500 ${activeStage >= i ? "text-[#3ecf8e]" : "text-[#c6e8d5]/20"}`}>
                {s.label}
              </span>
              {i < stages.length - 1 && (
                <div className="absolute" style={{ display: "none" }} />
              )}
            </div>
          ))}
        </div>
        {/* Progress bar */}
        <div className="mt-3 h-1 bg-[#1a6b3a] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#3ecf8e] transition-all duration-700"
            style={{ width: activeStage >= 0 ? `${((activeStage + 1) / stages.length) * 100}%` : "0%" }}
          />
        </div>
      </div>

      {/* Terminal logs */}
      <div className="bg-[#060f0a] px-4 py-3 font-mono min-h-[110px]">
        {logs.map((log, i) => (
          <div
            key={i}
            className={`text-[10px] leading-5 transition-all duration-300 ${
              visibleLogs.includes(i) ? "opacity-100" : "opacity-0"
            } ${
              log.type === "ok" ? "text-[#3ecf8e]"
              : log.type === "success" ? "text-[#6ee7b7] font-bold"
              : log.type === "info" ? "text-[#c6e8d5]/60"
              : "text-[#c6e8d5]/80"
            }`}
          >
            {log.text}
          </div>
        ))}
      </div>

      {/* Footer metrics */}
      <div className="bg-[#0d2b1f] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[9px] font-mono text-[#c6e8d5]/50">Uptime</span>
          <span className="text-sm font-bold text-[#3ecf8e]">{uptime}%</span>
        </div>
        <div className={`transition-all duration-500 ${showBadge ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
          <span className="rounded-full bg-[#3ecf8e] px-2.5 py-0.5 text-[10px] font-bold text-[#0d2b1f]">
            ✓ En producción
          </span>
        </div>
      </div>
    </div>
  );
}
