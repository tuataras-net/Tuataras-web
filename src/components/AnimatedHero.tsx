"use client";

import { useEffect, useState } from "react";

const cards = [
  { icon: "⚡", label: "Web App", color: "#3ecf8e", metric: "99ms", metricLabel: "load time" },
  { icon: "🎨", label: "UX / UI", color: "#6ee7b7", metric: "4.9★", metricLabel: "usability" },
  { icon: "☁️", label: "DevOps", color: "#3ecf8e", metric: "99.9%", metricLabel: "uptime" },
  { icon: "🎓", label: "E-learning", color: "#6ee7b7", metric: "2.4k", metricLabel: "learners" },
];

const metrics = [
  { value: 120, label: "Projects" },
  { value: 10, label: "Years" },
  { value: 12, label: "Clients" },
];

export function AnimatedHero() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeCard, setActiveCard] = useState(0);
  const [counts, setCounts] = useState(metrics.map(() => 0));
  const [showBar, setShowBar] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setVisibleCards([]);
    setActiveCard(0);
    setCounts(metrics.map(() => 0));
    setShowBar(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Show cards one by one
    cards.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleCards((p) => [...p, i]), 300 + i * 400));
    });

    // Animate active card highlight
    cards.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveCard(i), 300 + i * 400));
    });

    // Show bar chart
    timers.push(setTimeout(() => setShowBar(true), 300 + cards.length * 400 + 200));

    // Count up metrics
    metrics.forEach((m, mi) => {
      const duration = 1200;
      const steps = 30;
      const stepVal = m.value / steps;
      const stepDuration = duration / steps;
      const startDelay = 300 + cards.length * 400 + 400;
      for (let s = 1; s <= steps; s++) {
        timers.push(
          setTimeout(
            () => setCounts((prev) => { const n = [...prev]; n[mi] = Math.round(stepVal * s); return n; }),
            startDelay + s * stepDuration
          )
        );
      }
    });

    // Loop
    timers.push(setTimeout(() => setCycle((c) => c + 1), 300 + cards.length * 400 + 3000));

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  const barHeights = [65, 80, 50, 90, 70, 85];

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1a6b3a]">
      {/* Header bar */}
      <div className="flex items-center gap-2 bg-[#0d2b1f] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-[#c6e8d5] opacity-70">Dashboard — tuataras.io</span>
        <span className="ml-auto h-2 w-2 rounded-full bg-[#3ecf8e] animate-pulse" />
      </div>

      {/* Service cards */}
      <div className="bg-[#0a1f15] px-4 pt-4 pb-2 grid grid-cols-2 gap-2">
        {cards.map((c, i) => (
          <div
            key={i}
            className={`rounded-xl border px-3 py-2.5 transition-all duration-500 ${
              visibleCards.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            } ${activeCard === i ? "border-[#3ecf8e] bg-[#0d2b1f]" : "border-[#1a6b3a] bg-[#0d2b1f]/60"}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-base">{c.icon}</span>
              <span className="text-[10px] font-mono font-bold" style={{ color: c.color }}>{c.metric}</span>
            </div>
            <p className="mt-1 text-[10px] font-semibold text-[#c6e8d5]">{c.label}</p>
            <p className="text-[9px] text-[#c6e8d5]/50">{c.metricLabel}</p>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="bg-[#0a1f15] px-4 pb-3">
        <p className="text-[9px] font-mono text-[#c6e8d5]/50 mb-2">Performance overview</p>
        <div className="flex items-end gap-1 h-14">
          {barHeights.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-[#1a6b3a] overflow-hidden">
              <div
                className="rounded-sm bg-[#3ecf8e] transition-all duration-700"
                style={{
                  height: showBar ? `${h}%` : "0%",
                  transitionDelay: `${i * 80}ms`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Metrics row */}
      <div className="bg-[#0d2b1f] px-4 py-3 grid grid-cols-3 divide-x divide-[#1a6b3a]">
        {metrics.map((m, i) => (
          <div key={i} className="text-center px-2">
            <p className="text-sm font-bold text-[#3ecf8e]">{counts[i]}+</p>
            <p className="text-[9px] text-[#c6e8d5]/60">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
