"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const WELCOME: Message = {
  role: "assistant",
  content: "¡Hola! 👋 Soy el asistente de Tuataras. ¿En qué puedo ayudarte hoy?",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const history = [...messages, userMessage];
    setMessages(history);
    setInput("");
    setLoading(true);

    // Add empty assistant message to stream into
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok || !res.body) throw new Error("Error en la respuesta");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        const snapshot = accumulated;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: snapshot };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "Ocurrió un error. Por favor intenta nuevamente.",
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a6b3a] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#0d5230] focus:outline-none focus:ring-4 focus:ring-[#3ecf8e]/50"
      >
        <span className="text-2xl transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
          {open ? "✕" : "💬"}
        </span>
        {!open && (
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#3ecf8e] animate-pulse border-2 border-white" />
        )}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-50 flex w-[340px] flex-col overflow-hidden rounded-2xl border border-[#1a6b3a] bg-white shadow-2xl transition-all duration-300 ${
          open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
        style={{ maxHeight: "520px" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 bg-[#0d2b1f] px-4 py-3">
          <div className="relative">
            <div className="h-8 w-8 rounded-full bg-[#1a6b3a] flex items-center justify-center text-sm font-bold text-[#3ecf8e]">T</div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#3ecf8e] border-2 border-[#0d2b1f]" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Asistente Tuataras</p>
            <p className="text-[10px] text-[#c6e8d5]/60">En línea · Responde al instante</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="ml-auto text-[#c6e8d5]/60 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#f8fdfb]" style={{ minHeight: "300px", maxHeight: "360px" }}>
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              {m.role === "assistant" && (
                <div className="mr-2 mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-[#1a6b3a] flex items-center justify-center text-[10px] font-bold text-[#3ecf8e]">T</div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-[#1a6b3a] text-white"
                    : "bg-white border border-[#c6e8d5] text-[#0d2b1f] shadow-sm"
                } ${m.role === "assistant" && m.content === "" && loading ? "min-w-[60px]" : ""}`}
              >
                {m.content === "" && loading && m.role === "assistant" ? (
                  <span className="flex gap-1 items-center py-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1a6b3a] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1a6b3a] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1a6b3a] animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                ) : (
                  m.content
                )}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-[#c6e8d5] bg-white px-3 py-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
            disabled={loading}
            className="flex-1 rounded-xl border border-[#c6e8d5] bg-[#f8fdfb] px-3 py-2 text-sm text-[#0d2b1f] placeholder:text-[#1a6b3a]/40 focus:outline-none focus:ring-2 focus:ring-[#3ecf8e] disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#1a6b3a] text-white transition-all hover:bg-[#0d5230] disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Enviar"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        {/* Footer */}
        <div className="bg-white px-4 pb-2 text-center">
          <p className="text-[9px] text-[#1a6b3a]/40">Powered by Claude AI · Tuataras © {new Date().getFullYear()}</p>
        </div>
      </div>
    </>
  );
}
