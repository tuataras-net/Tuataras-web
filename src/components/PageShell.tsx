import { Header } from "./Header";
import { ChatWidget } from "./ChatWidget";

function Fern({ x, y, size = 1, swayClass }: { x: number; y: number; size?: number; swayClass: string }) {
  const s = size;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <g fill="#1a6b3a" className={swayClass}>
        <ellipse cx="0" cy="0" rx={5 * s} ry={90 * s} />
        <ellipse cx="0" cy={-22 * s} rx={45 * s} ry={9 * s} transform={`rotate(-38 0 ${-22 * s})`} />
        <ellipse cx="0" cy={-22 * s} rx={45 * s} ry={9 * s} transform={`rotate(38 0 ${-22 * s})`} />
        <ellipse cx="0" cy={-44 * s} rx={38 * s} ry={8 * s} transform={`rotate(-43 0 ${-44 * s})`} />
        <ellipse cx="0" cy={-44 * s} rx={38 * s} ry={8 * s} transform={`rotate(43 0 ${-44 * s})`} />
        <ellipse cx="0" cy={-63 * s} rx={30 * s} ry={7 * s} transform={`rotate(-48 0 ${-63 * s})`} />
        <ellipse cx="0" cy={-63 * s} rx={30 * s} ry={7 * s} transform={`rotate(48 0 ${-63 * s})`} />
        <ellipse cx="0" cy={-78 * s} rx={20 * s} ry={5 * s} transform={`rotate(-54 0 ${-78 * s})`} />
        <ellipse cx="0" cy={-78 * s} rx={20 * s} ry={5 * s} transform={`rotate(54 0 ${-78 * s})`} />
        <ellipse cx="0" cy={-88 * s} rx={10 * s} ry={4 * s} transform={`rotate(-60 0 ${-88 * s})`} />
        <ellipse cx="0" cy={-88 * s} rx={10 * s} ry={4 * s} transform={`rotate(60 0 ${-88 * s})`} />
      </g>
    </g>
  );
}

function Leaf({ x, y, size = 1, rot, swayClass }: { x: number; y: number; size?: number; rot: number; swayClass: string }) {
  const s = size;
  return (
    <g transform={`translate(${x}, ${y}) rotate(${rot})`}>
      <g fill="#1a6b3a" className={swayClass}>
        <path d={`M0,0 C${20*s},${-70*s} ${90*s},${-110*s} ${70*s},${-180*s} C${45*s},${-110*s} ${-20*s},${-70*s} 0,0Z`} />
        <path d={`M0,0 C${-20*s},${-70*s} ${-90*s},${-110*s} ${-70*s},${-180*s} C${-45*s},${-110*s} ${20*s},${-70*s} 0,0Z`} opacity="0.6" />
        <line x1="0" y1="0" x2={`${5*s}`} y2={`${-90*s}`} stroke="#1a6b3a" strokeWidth={`${3*s}`} />
        <line x1={`${3*s}`} y1={`${-30*s}`} x2={`${30*s}`} y2={`${-15*s}`} stroke="#1a6b3a" strokeWidth={`${1.5*s}`} />
        <line x1={`${3*s}`} y1={`${-30*s}`} x2={`${-28*s}`} y2={`${-18*s}`} stroke="#1a6b3a" strokeWidth={`${1.5*s}`} />
        <line x1={`${4*s}`} y1={`${-55*s}`} x2={`${35*s}`} y2={`${-42*s}`} stroke="#1a6b3a" strokeWidth={`${1.5*s}`} />
        <line x1={`${4*s}`} y1={`${-55*s}`} x2={`${-33*s}`} y2={`${-45*s}`} stroke="#1a6b3a" strokeWidth={`${1.5*s}`} />
        <line x1={`${4*s}`} y1={`${-75*s}`} x2={`${28*s}`} y2={`${-65*s}`} stroke="#1a6b3a" strokeWidth={`${1.2*s}`} />
        <line x1={`${4*s}`} y1={`${-75*s}`} x2={`${-25*s}`} y2={`${-68*s}`} stroke="#1a6b3a" strokeWidth={`${1.2*s}`} />
      </g>
    </g>
  );
}

function BotanicalBackground() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full opacity-[0.09]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Esquina inferior izquierda */}
      <Fern x={-20} y={900} size={1.2} swayClass="sway-1" />
      <Fern x={70}  y={920} size={0.9} swayClass="sway-2" />
      <Fern x={150} y={910} size={1.0} swayClass="sway-6" />
      <Fern x={220} y={930} size={0.75} swayClass="sway-7" />
      <Leaf x={30}  y={900} size={0.7} rot={-150} swayClass="sway-1" />
      <Leaf x={120} y={920} size={0.55} rot={-160} swayClass="sway-2" />

      {/* Esquina superior izquierda */}
      <Fern x={20}  y={10}  size={0.9} swayClass="sway-3" />
      <Fern x={110} y={0}   size={0.7} swayClass="sway-7" />
      <Fern x={190} y={15}  size={0.8} swayClass="sway-6" />
      <Leaf x={60}  y={20}  size={0.6} rot={30} swayClass="sway-3" />
      <Leaf x={160} y={10}  size={0.5} rot={20} swayClass="sway-8" />

      {/* Esquina superior derecha */}
      <Leaf x={1440} y={30}  size={1.1} rot={155} swayClass="sway-4" />
      <Leaf x={1360} y={10}  size={0.85} rot={140} swayClass="sway-5" />
      <Leaf x={1280} y={20}  size={0.7} rot={150} swayClass="sway-4" />
      <Fern x={1420} y={10}  size={0.8} swayClass="sway-5" />
      <Fern x={1320} y={5}   size={0.65} swayClass="sway-8" />

      {/* Esquina inferior derecha */}
      <Leaf x={1450} y={900} size={1.0} rot={-25} swayClass="sway-4" />
      <Leaf x={1370} y={910} size={0.8} rot={-15} swayClass="sway-5" />
      <Leaf x={1290} y={920} size={0.65} rot={-35} swayClass="sway-8" />
      <Fern x={1460} y={900} size={0.9} swayClass="sway-5" />
      <Fern x={1360} y={920} size={0.7} swayClass="sway-4" />

      {/* Laterales intermedios */}
      <Leaf x={0}    y={450} size={0.7} rot={-120} swayClass="sway-2" />
      <Fern x={-10}  y={500} size={0.65} swayClass="sway-7" />
      <Leaf x={1450} y={450} size={0.7} rot={60}   swayClass="sway-5" />
      <Fern x={1455} y={480} size={0.6} swayClass="sway-8" />
    </svg>
  );
}

export function PageShell({
  lang,
  title,
  hideTitle,
  children,
}: {
  lang: "es" | "en";
  title: string;
  hideTitle?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-white text-corp">
      <BotanicalBackground />
      <Header lang={lang} />
      <main className="mx-auto max-w-6xl px-6 py-12 pt-28">
        {!hideTitle && <h1 className="text-3xl font-semibold text-corp">{title}</h1>}
        <div className="mt-6 text-muted">{children}</div>
      </main>
      <ChatWidget />
      <footer className="border-t border-corp mt-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div className="flex items-center gap-3">
            <img src="/Logo.png" alt="Tuataras" className="hidden md:block h-10 w-auto" />
            <span className="text-sm text-muted">© {new Date().getFullYear()} Tuataras</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <a href="/es/politica-privacidad" className="hover:text-corp">Privacidad</a>
            <a href="/es/aviso-legal" className="hover:text-corp">Aviso Legal</a>
            <a href="/es/contacto" className="hover:text-corp">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
