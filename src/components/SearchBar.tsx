import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, CalendarDays, Search } from "lucide-react";
import { DESTINATIONS } from "../data/trips";

export default function SearchBar({ floating = false, target }: { floating?: boolean; target?: "tours" | "treks" }) {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [loc, setLoc] = useState("");
  const [inD, setInD] = useState("");
  const [outD, setOutD] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const base = target ?? (pathname.startsWith("/treks") ? "/treks" : "/tours");
    const q = new URLSearchParams();
    if (loc) q.set("q", loc);
    if (inD) q.set("in", inD);
    if (outD) q.set("out", outD);
    nav(`${base}?${q.toString()}`);
  };

  return (
    <form
      onSubmit={submit}
      className={`flex w-full flex-col gap-2 rounded-3xl bg-white p-2.5 shadow-xl shadow-emerald-950/10 ring-1 ring-emerald-950/5 md:flex-row md:items-center md:rounded-full md:gap-0 ${floating ? "" : ""}`}
    >
      <label className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-2.5 transition hover:bg-emerald-50/70 md:rounded-full">
        <MapPin size={18} className="shrink-0 text-emerald-600" />
        <span className="w-full">
          <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Location</span>
          <input
            list="saa-dests"
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
            placeholder="Where are you going?"
            className="w-full bg-transparent text-sm font-semibold text-slate-800 outline-none placeholder:font-normal placeholder:text-slate-400"
          />
        </span>
        <datalist id="saa-dests">
          {DESTINATIONS.map((d) => <option key={d.name} value={d.name} />)}
          <option value="K2 Base Camp" />
        </datalist>
      </label>

      <span className="hidden h-8 w-px bg-slate-200 md:block" />

      <label className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-2.5 transition hover:bg-emerald-50/70 md:rounded-full">
        <CalendarDays size={18} className="shrink-0 text-emerald-600" />
        <span className="w-full">
          <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Check-in</span>
          <input type="date" value={inD} min={new Date().toISOString().slice(0, 10)} onChange={(e) => setInD(e.target.value)} className="w-full bg-transparent text-sm font-semibold text-slate-700 outline-none" />
        </span>
      </label>

      <span className="hidden h-8 w-px bg-slate-200 md:block" />

      <label className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-2.5 transition hover:bg-emerald-50/70 md:rounded-full">
        <CalendarDays size={18} className="shrink-0 text-emerald-600" />
        <span className="w-full">
          <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Check-out</span>
          <input type="date" value={outD} min={inD || undefined} onChange={(e) => setOutD(e.target.value)} className="w-full bg-transparent text-sm font-semibold text-slate-700 outline-none" />
        </span>
      </label>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-[0.98] md:rounded-full"
      >
        <Search size={16} strokeWidth={3} /> Search
      </button>
    </form>
  );
}
