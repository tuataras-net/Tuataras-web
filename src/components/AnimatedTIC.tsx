"use client";

import { useEffect, useState } from "react";

const nodes = [
  { id: "ERP", x: 50, y: 50, color: "#3ecf8e" },
  { id: "CRM", x: 170, y: 30, color: "#3ecf8e" },
  { id: "Cloud", x: 290, y: 50, color: "#3ecf8e" },
  { id: "RRHH", x: 50, y: 150, color: "#3ecf8e" },
  { id: "BI", x: 170, y: 170, color: "#3ecf8e" },
  { id: "Security", x: 290, y: 150, color: "#3ecf8e" },
];

const connections = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [1, 5],
];

const metrics = [
  { label: "Productividad", from: 42, to: 87 },
  { label: "Seguridad", from: 55, to: 94 },
  { label: "Eficiencia", from: 38, to: 91 },
];

export function AnimatedTIC() {
  const [visibleNodes, setVisibleNodes] = useState<number[]>([]);
  const [visibleConnections, setVisibleConnections] = useState<number[]>([]);
  const [metricValues, setMetricValues] = useState(metrics.map((m) => m.from));
  const [showFinal, setShowFinal] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setVisibleNodes([]);
    setVisibleConnections([]);
    setMetricValues(metrics.map((m) => m.from));
    setShowFinal(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Aparecen nodos
    nodes.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleNodes((p) => [...p, i]), 300 + i * 250));
    });

    // Aparecen conexiones
    connections.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleConnections((p) => [...p, i]), 1800 + i * 150));
    });

    // Suben métricas
    timers.push(setTimeout(() => {
      metrics.forEach((m, i) => {
        let val = m.from;
        const interval = setInterval(() => {
          val = Math.min(val + 2, m.to);
          setMetricValues((prev) => {
            const next = [...prev];
            next[i] = val;
            return next;
          });
          if (val >= m.to) clearInterval(interval);
        }, 30);
      });
    }, 3200));

    timers.push(setTimeout(() => setShowFinal(true), 4800));
    timers.push(setTimeout(() => setCycle((c) => c + 1), 7000));

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1a6b3a]">
      {/* Header */}
      <div className="flex items-center gap-2 bg-[#0d2b1f] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-[#c6e8d5] opacity-70">Infraestructura TIC — tuataras</span>
      </div>

      {/* Mapa de nodos */}
      <div className="bg-[#0a1f15] px-4 pt-3 pb-2">
        <p className="text-[10px] font-mono text-[#3ecf8e] opacity-60 mb-2">▸ Mapeando ecosistema tecnológico...</p>
        <svg viewBox="0 0 340 210" className="w-full" style={{ height: "130px" }}>
          {/* Conexiones */}
          {connections.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a].x + 22} y1={nodes[a].y + 22}
              x2={nodes[b].x + 22} y2={nodes[b].y + 22}
              stroke="#1a6b3a"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              style={{
                opacity: visibleConnections.includes(i) ? 0.7 : 0,
                transition: "opacity 0.4s ease",
              }}
            />
          ))}
          {/* Nodos */}
          {nodes.map((node, i) => (
            <g key={i} transform={`translate(${node.x}, ${node.y})`}
              style={{
                opacity: visibleNodes.includes(i) ? 1 : 0,
                transform: `translate(${node.x}px, ${node.y}px) scale(${visibleNodes.includes(i) ? 1 : 0.5})`,
                transition: "opacity 0.3s ease, transform 0.3s ease",
                transformOrigin: `${node.x + 22}px ${node.y + 22}px`,
              }}
            >
              <rect x="0" y="0" width="44" height="44" rx="10"
                fill="#0d2b1f" stroke={node.color} strokeWidth="1.5" opacity="0.9"/>
              <text x="22" y="26" textAnchor="middle" fontSize="9"
                fill={node.color} fontFamily="monospace" fontWeight="bold">
                {node.id}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Métricas */}
      <div className="bg-[#0d2b1f] px-4 py-3 space-y-2">
        {metrics.map((m, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[10px] text-[#c6e8d5] w-24 shrink-0">{m.label}</span>
            <div className="flex-1 h-1.5 rounded-full bg-[#1a6b3a]">
              <div
                className="h-1.5 rounded-full bg-[#3ecf8e] transition-all duration-100"
                style={{ width: `${metricValues[i]}%` }}
              />
            </div>
            <span className="text-[10px] font-mono text-[#3ecf8e] w-8 text-right">{metricValues[i]}%</span>
          </div>
        ))}
      </div>

      {/* Badge */}
      <div className={`bg-[#0a1f15] px-4 py-2.5 flex items-center justify-center transition-all duration-500 ${showFinal ? "opacity-100" : "opacity-0"}`}>
        <div className="flex items-center gap-2 rounded-full bg-[#3ecf8e] px-4 py-1.5">
          <span className="text-xs font-bold text-[#0d2b1f]">✓ Transformación completada</span>
        </div>
      </div>
    </div>
  );
}
