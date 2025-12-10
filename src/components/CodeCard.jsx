export default function CodeCard({ children, className = '' }) {
  return (
    <div className={`relative bg-slate-800 text-slate-200 rounded-xl p-6 shadow-2xl border-2 border-slate-700 overflow-x-auto ${className}`}>
      <div className="absolute top-3 left-4 text-slate-600 text-xs tracking-wider">● ● ●</div>
      <pre className="pt-4 font-mono text-sm md:text-base whitespace-pre">
        {children}
      </pre>
    </div>
  );
}

export function Tag({ children }) {
  return <span className="text-pink-400">{children}</span>;
}

export function Attr({ children }) {
  return <span className="text-indigo-300">{children}</span>;
}

export function Val({ children }) {
  return <span className="text-green-400">{children}</span>;
}

export function Comment({ children }) {
  return <span className="text-slate-500 italic">{children}</span>;
}
