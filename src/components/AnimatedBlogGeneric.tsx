"use client";

import { useEffect, useState } from "react";

export type GenericAnimationConfig = {
  headerLabel: string;
  items: { icon: string; label: string; metric: string; color: string }[];
  timelineLabel: string;
  timeline: { label: string; value: number }[];
  footerLabel: string;
  badge: { emoji: string; text: string };
};

export function AnimatedBlogGeneric({ config }: { config: GenericAnimationConfig }) {
  const [step, setStep] = useState(0);
  const [showBars, setShowBars] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setStep(0);
    setShowBars(false);
    setShowBadge(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    config.items.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), 400 + i * 600));
    });
    timers.push(setTimeout(() => setShowBars(true), 400 + config.items.length * 600 + 300));
    timers.push(setTimeout(() => setShowBadge(true), 400 + config.items.length * 600 + 1200));
    timers.push(setTimeout(() => setCycle((c) => c + 1), 400 + config.items.length * 600 + 3000));

    return () => timers.forEach(clearTimeout);
  }, [cycle, config.items.length]);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1a6b3a]">
      <div className="flex items-center gap-2 bg-[#0d2b1f] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-[#c6e8d5] opacity-70">{config.headerLabel}</span>
        <span className="ml-auto h-2 w-2 rounded-full bg-[#3ecf8e] animate-pulse" />
      </div>

      <div className="bg-[#0a1f15] px-4 pt-4 pb-2 grid grid-cols-2 gap-2">
        {config.items.map((t, i) => (
          <div
            key={i}
            className={`rounded-xl border px-3 py-2.5 transition-all duration-500 ${
              step > i
                ? "opacity-100 translate-y-0 border-[#3ecf8e] bg-[#0d2b1f]"
                : "opacity-0 translate-y-3 border-[#1a6b3a] bg-[#0d2b1f]/40"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-base">{t.icon}</span>
              <span className="text-[10px] font-mono font-bold" style={{ color: t.color }}>
                {t.metric}
              </span>
            </div>
            <p className="mt-1 text-[10px] font-semibold text-[#c6e8d5]">{t.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#0a1f15] px-4 pb-3">
        <p className="text-[9px] font-mono text-[#c6e8d5]/50 mb-2 uppercase tracking-widest">
          {config.timelineLabel}
        </p>
        <div className="flex items-end gap-2 h-14">
          {config.timeline.map((t, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-sm bg-[#1a6b3a] overflow-hidden h-12">
                <div
                  className="rounded-sm bg-[#3ecf8e] transition-all duration-700 w-full"
                  style={{
                    height: showBars ? `${t.value}%` : "0%",
                    transitionDelay: `${i * 100}ms`,
                  }}
                />
              </div>
              <span className="text-[8px] text-[#c6e8d5]/40 font-mono">{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0d2b1f] px-4 py-2.5 flex items-center justify-between">
        <span className="text-[9px] font-mono text-[#c6e8d5]/40">{config.footerLabel}</span>
        <div className={`transition-all duration-500 ${showBadge ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
          <span className="rounded-full bg-[#3ecf8e] px-2.5 py-0.5 text-[10px] font-bold text-[#0d2b1f]">
            {config.badge.emoji} {config.badge.text}
          </span>
        </div>
      </div>
    </div>
  );
}
