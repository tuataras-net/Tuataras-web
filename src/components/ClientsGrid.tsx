"use client";

import { useEffect, useRef, useState } from "react";

type Client = { src: string; alt: string; href?: string };

export function ClientsGrid({ clients }: { clients: Client[] }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ready = false;
    const timeout = setTimeout(() => {
      ready = true;
    }, 500);

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && ready) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); clearTimeout(timeout); };
  }, []);

  return (
    <div ref={ref} className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
      {clients.map((c, i) => {
        const style = {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: visible ? `${i * 60}ms` : "0ms",
        };
        const inner = (
          <>
            <img src={c.src} alt={c.alt} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition" />
            <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 rounded-md bg-corp px-2 py-1 text-xs text-white opacity-0 transition-all duration-200 group-hover:translate-y-2 group-hover:opacity-100 whitespace-nowrap">
              {c.alt}
            </span>
          </>
        );
        return c.href ? (
          <a key={c.alt} href={c.href} target="_blank" rel="noopener noreferrer"
            className="group relative flex h-36 items-center justify-center bg-white p-4 transition-all duration-500"
            style={style}
          >
            {inner}
          </a>
        ) : (
          <div key={c.alt}
            className="group relative flex h-36 items-center justify-center bg-white p-4 transition-all duration-500"
            style={style}
          >
            {inner}
          </div>
        );
      })}
    </div>
  );
}
