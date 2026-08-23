import { useEffect, useRef, useState, type ReactNode } from "react";
import { Star } from "lucide-react";
import type { Difficulty } from "../data/trips";

/* ---------------- scroll reveal ---------------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          ob.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);
  const T = Tag as any;
  return (
    <T
      ref={ref}
      className={`reveal ${seen ? "in" : ""} ${className}`}
      style={{ ["--rv-delay" as any]: `${delay}ms` }}
    >
      {children}
    </T>
  );
}

/* ---------------- star rating ---------------- */
export function Stars({ value, size = 14, className = "" }: { value: number; size?: number; className?: string }) {
  return (
    <span className={`relative inline-flex ${className}`} aria-label={`${value} out of 5 stars`}>
      <span className="flex text-slate-300">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
      <span
        className="absolute inset-0 flex overflow-hidden text-amber-400"
        style={{ width: `${(Math.min(value, 5) / 5) * 100}%` }}
      >
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={size} fill="currentColor" strokeWidth={0} className="shrink-0" />
        ))}
      </span>
    </span>
  );
}

/* ---------------- section heading ---------------- */
export function SectionHead({
  kicker,
  title,
  sub,
  center = false,
  light = false,
}: {
  kicker?: string;
  title: string;
  sub?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {kicker && (
        <p className={`mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] ${center ? "justify-center" : ""} ${light ? "text-emerald-300" : "text-emerald-600"}`}>
          <span className={`h-px w-8 ${light ? "bg-emerald-300" : "bg-emerald-600"}`} />
          {kicker}
          {center && <span className={`h-px w-8 ${light ? "bg-emerald-300" : "bg-emerald-600"}`} />}
        </p>
      )}
      <h2 className={`font-display text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-white" : "text-emerald-950"}`}>
        {title}
      </h2>
      {sub && <p className={`mt-3 text-[15px] leading-relaxed ${light ? "text-emerald-100/80" : "text-slate-500"}`}>{sub}</p>}
    </Reveal>
  );
}

/* ---------------- difficulty badge ---------------- */
const DIFF_STYLES: Record<Difficulty, string> = {
  Easy: "bg-emerald-100 text-emerald-700 ring-emerald-600/20",
  Moderate: "bg-amber-100 text-amber-700 ring-amber-600/20",
  Challenging: "bg-orange-100 text-orange-700 ring-orange-600/20",
  Extreme: "bg-rose-100 text-rose-700 ring-rose-600/20",
};
export function DifficultyBadge({ level }: { level: Difficulty }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold ring-1 ${DIFF_STYLES[level]}`}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20l6-11 4 6 3-4 5 9z" /></svg>
      {level}
    </span>
  );
}

/* ---------------- WhatsApp glyph ---------------- */
export function WhatsAppIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ---------------- payment logos ---------------- */
export function PaymentLogos({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Mastercard */}
      <span className={`flex h-8 items-center rounded-md px-2.5 ring-1 ${dark ? "bg-white/10 ring-white/15" : "bg-white ring-slate-200"}`}>
        <svg width="34" height="20" viewBox="0 0 34 20"><circle cx="13" cy="10" r="8" fill="#EB001B" /><circle cx="21" cy="10" r="8" fill="#F79E1B" fillOpacity="0.9" /></svg>
      </span>
      {/* Visa */}
      <span className={`flex h-8 items-center rounded-md px-2.5 ring-1 ${dark ? "bg-white/10 ring-white/15" : "bg-white ring-slate-200"}`}>
        <svg width="36" height="14" viewBox="0 0 48 16"><text x="0" y="13" fontFamily="Arial, sans-serif" fontWeight="800" fontStyle="italic" fontSize="15" fill="#1A1F71">VISA</text></svg>
      </span>
      {/* Bank transfer */}
      <span className={`flex h-8 items-center gap-1.5 rounded-md px-2.5 text-[10px] font-extrabold leading-tight tracking-wide ring-1 ${dark ? "bg-white/10 text-white ring-white/15" : "bg-white text-slate-700 ring-slate-200"}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.4"><path d="M3 9l9-6 9 6M4 9v11M20 9v11M8 12v5M12 12v5M16 12v5M2 20h20" /></svg>
        BANK<br />TRANSFER
      </span>
      {/* G Pay */}
      <span className={`flex h-8 items-center rounded-md px-2.5 ring-1 ${dark ? "bg-white/10 ring-white/15" : "bg-white ring-slate-200"}`}>
        <svg width="40" height="16" viewBox="0 0 48 18">
          <text x="0" y="14" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14">
            <tspan fill="#4285F4">G</tspan>
            <tspan fill={dark ? "#fff" : "#3c4043"}> Pay</tspan>
          </text>
        </svg>
      </span>
    </div>
  );
}

/* ---------------- verified shield ---------------- */
export function VerifiedShield({ label = "Verified Operator", dark = false }: { label?: string; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold ring-1 ${dark ? "bg-emerald-400/10 text-emerald-300 ring-emerald-400/30" : "bg-emerald-50 text-emerald-700 ring-emerald-600/20"}`}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l8 3v6c0 5.25-3.4 9.74-8 11-4.6-1.26-8-5.75-8-11V4l8-3zm-1.2 14.6l6-6-1.4-1.4-4.6 4.6-2.2-2.2-1.4 1.4 3.6 3.6z" /></svg>
      {label}
    </span>
  );
}
