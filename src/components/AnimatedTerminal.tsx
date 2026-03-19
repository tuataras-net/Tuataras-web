"use client";

import { useEffect, useState } from "react";

const lines = [
  { text: "$ tuataras init my-project", color: "#3ecf8e", delay: 0 },
  { text: "✓ Scaffolding project...", color: "#c6e8d5", delay: 800 },
  { text: "✓ Installing dependencies", color: "#c6e8d5", delay: 1600 },
  { text: "✓ Configuring TypeScript", color: "#c6e8d5", delay: 2400 },
  { text: "✓ Setting up CI/CD pipeline", color: "#c6e8d5", delay: 3200 },
  { text: "✓ Deploying to cloud...", color: "#c6e8d5", delay: 4000 },
  { text: "🚀 Project live at tuataras.dev", color: "#3ecf8e", delay: 4800 },
];

export function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    lines.forEach((line, i) => {
      const t = setTimeout(() => {
        if (i === 0) {
          // Typing effect for first line
          let charIndex = 0;
          const typing = setInterval(() => {
            charIndex++;
            setTypedText(line.text.slice(0, charIndex));
            if (charIndex >= line.text.length) {
              clearInterval(typing);
              setTypingIndex(1);
              setVisibleLines((prev) => [...prev, i]);
            }
          }, 40);
        } else {
          setVisibleLines((prev) => [...prev, i]);
        }
      }, line.delay);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1a6b3a]">
      {/* Barra superior */}
      <div className="flex items-center gap-2 bg-[#1a6b3a] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-[#c6e8d5] opacity-70">terminal — tuataras</span>
      </div>
      {/* Contenido */}
      <div className="bg-[#0d2b1f] px-5 py-5 font-mono text-sm min-h-[220px]">
        {lines.map((line, i) => (
          <div
            key={i}
            className="mb-1.5 transition-all duration-300"
            style={{
              color: line.color,
              opacity: i === 0 ? (typingIndex === 0 ? 1 : 1) : visibleLines.includes(i) ? 1 : 0,
              transform: visibleLines.includes(i) ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {i === 0 ? (typingIndex === 0 ? typedText : line.text) : line.text}
            {i === lines.length - 1 && visibleLines.includes(i) && (
              <span className="ml-1 inline-block w-2 h-4 bg-[#3ecf8e] animate-pulse align-middle" />
            )}
          </div>
        ))}
        {/* Cursor parpadeante mientras escribe */}
        {typingIndex === 0 && typedText.length > 0 && (
          <span className="inline-block w-2 h-4 bg-[#3ecf8e] animate-pulse align-middle" />
        )}
      </div>
    </div>
  );
}
