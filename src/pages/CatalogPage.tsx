import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, ChevronDown, LayoutGrid, Rows3, Star, X, SearchX } from "lucide-react";
import SearchBar from "../components/SearchBar";
import TripCard from "../components/TripCard";
import { Reveal } from "../components/ui";
import { TOURS, TREKS, formatPKR, type Trip } from "../data/trips";
import { useApp } from "../context/AppContext";

const MAX_PRICE = 140000;
const DURATIONS = [
  { label: "3 Days", days: 3 },
  { label: "5 Days", days: 5 },
  { label: "7 Days", days: 7 },
  { label: "10 Days", days: 10 },
  { label: "22 Days K2 Expedition", days: 22 },
];
const CATEGORIES = ["All", "Blossom", "Honeymoon", "Family", "Luxury", "Eid Special", "Private"];

/* ------------------------- dual price slider ------------------------ */
function PriceSlider({ min, max, setMin, setMax }: { min: number; max: number; setMin: (n: number) => void; setMax: (n: number) => void }) {
  const pct = (v: number) => (v / MAX_PRICE) * 100;
  return (
    <div>
      <div className="relative h-5">
        <div className="absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-slate-200" />
        <div className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-emerald-600" style={{ left: `${pct(min)}%`, right: `${100 - pct(max)}%` }} />
        <input type="range" min={0} max={MAX_PRICE} step={2000} value={min} aria-label="Minimum price"
          onChange={(e) => setMin(Math.min(Number(e.target.value), max - 4000))} className="range-dual" />
        <input type="range" min={0} max={MAX_PRICE} step={2000} value={max} aria-label="Maximum price"
          onChange={(e) => setMax(Math.max(Number(e.target.value), min + 4000))} className="range-dual" />
      </div>
      <div className="mt-3 flex items-center gap-2">
        <label className="flex-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5">
          <span className="block text-[10px] font-bold uppercase text-slate-400">Min price</span>
          <input type="number" min={0} max={MAX_PRICE} value={min} onChange={(e) => setMin(Math.min(Number(e.target.value) || 0, max - 4000))} className="w-full bg-transparent text-xs font-bold text-slate-700 outline-none" />
        </label>
        <span className="text-slate-300">—</span>
        <label className="flex-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5">
          <span className="block text-[10px] font-bold uppercase text-slate-400">Max price</span>
          <input type="number" min={0} max={MAX_PRICE} value={max} onChange={(e) => setMax(Math.max(Number(e.target.value) || 0, min + 4000))} className="w-full bg-transparent text-xs font-bold text-slate-700 outline-none" />
        </label>
      </div>
    </div>
  );
}

function CheckRow({ checked, onChange, children }: { checked: boolean; onChange: () => void; children: React.ReactNode }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1.5 text-sm text-slate-600 transition hover:text-emerald-700">
      <span className={`grid h-4.5 w-4.5 place-items-center rounded border-2 transition ${checked ? "border-emerald-600 bg-emerald-600" : "border-slate-300 bg-white"}`}>
        {checked && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4"><path d="M5 13l4 4L19 7" /></svg>}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      {children}
    </label>
  );
}

/* ---------------------------- filter panel -------------------------- */
function FilterControls({
  min, max, setMin, setMax, stars, toggleStar, durs, toggleDur, clear, applied,
}: any) {
  return (
    <>
      <div className="rounded-2xl bg-emerald-50/70 p-5 ring-1 ring-emerald-950/5">
        <h3 className="mb-4 flex items-center justify-between font-display text-sm font-bold text-emerald-950">Filter Price <ChevronDown size={15} /></h3>
        <PriceSlider min={min} max={max} setMin={setMin} setMax={setMax} />
        <div className="mt-4 flex items-center justify-between">
          <button onClick={clear} className="text-xs font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-800">Clear</button>
          <button onClick={applied} className="rounded-lg bg-emerald-600 px-5 py-2 text-xs font-extrabold text-white shadow transition hover:bg-emerald-700 active:scale-95">Apply</button>
        </div>
      </div>

      <div className="rounded-2xl bg-emerald-50/70 p-5 ring-1 ring-emerald-950/5">
        <h3 className="mb-3 flex items-center justify-between font-display text-sm font-bold text-emerald-950">Review Score <ChevronDown size={15} /></h3>
        {[5, 4, 3, 2, 1].map((s) => (
          <CheckRow key={s} checked={stars.includes(s)} onChange={() => toggleStar(s)}>
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={i < s ? "text-amber-400" : "text-slate-300"} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
          </CheckRow>
        ))}
      </div>

      <div className="rounded-2xl bg-emerald-50/70 p-5 ring-1 ring-emerald-950/5">
        <h3 className="mb-3 flex items-center justify-between font-display text-sm font-bold text-emerald-950">Duration <ChevronDown size={15} /></h3>
        {DURATIONS.map((d) => (
          <CheckRow key={d.label} checked={durs.includes(d.days)} onChange={() => toggleDur(d.days)}>{d.label}</CheckRow>
        ))}
      </div>
    </>
  );
}

/* ------------------------------ chip -------------------------------- */
function Chip({ label, active, children, wide }: { label: string; active: boolean; children: React.ReactNode; wide?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen((o) => !o)} className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold shadow-sm ring-1 transition ${active ? "bg-emerald-600 text-white ring-emerald-600" : "bg-white text-slate-600 ring-slate-200 hover:ring-emerald-400"}`}>
        {label} <ChevronDown size={14} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className={`absolute left-0 top-full z-20 mt-2 ${wide ? "w-72" : "w-60"} rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-slate-200 animate-fade-up`}>
            {children}
          </div>
        </>
      )}
    </div>
  );
}

/* =============================== PAGE =============================== */
export default function CatalogPage({ mode }: { mode: "tours" | "treks" }) {
  const { toast } = useApp();
  const [params] = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();

  const source = mode === "tours" ? TOURS : TREKS;

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(MAX_PRICE);
  const [stars, setStars] = useState<number[]>([]);
  const [durs, setDurs] = useState<number[]>([]);
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("popular");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);

  useEffect(() => setPage(1), [min, max, stars, durs, cat, q, mode]);

  const filtered = useMemo(() => {
    let list = source.filter((t) => {
      const price = t.discount ? Math.round(t.price * (1 - t.discount / 100)) : t.price;
      if (price < min || price > max) return false;
      if (stars.length && !stars.includes(Math.round(t.rating))) return false;
      if (durs.length && !durs.includes(t.days)) return false;
      if (mode === "tours" && cat !== "All" && !t.title.toLowerCase().includes(cat.toLowerCase().replace(" special", ""))) return false;
      if (q && !(t.title + " " + t.location).toLowerCase().includes(q)) return false;
      return true;
    });
    const price = (t: Trip) => (t.discount ? Math.round(t.price * (1 - t.discount / 100)) : t.price);
    switch (sort) {
      case "price-asc": list = [...list].sort((a, b) => price(a) - price(b)); break;
      case "price-desc": list = [...list].sort((a, b) => price(b) - price(a)); break;
      case "rating": list = [...list].sort((a, b) => b.rating - a.rating); break;
      case "duration": list = [...list].sort((a, b) => a.days - b.days); break;
    }
    return list;
  }, [source, min, max, stars, durs, cat, q, sort, mode]);

  const PER = mode === "tours" ? 8 : 9;
  const pages = Math.max(1, Math.ceil(filtered.length / PER));
  const paged = filtered.slice((page - 1) * PER, page * PER);

  const toggleStar = (s: number) => setStars((x) => (x.includes(s) ? x.filter((v) => v !== s) : [...x, s]));
  const toggleDur = (d: number) => setDurs((x) => (x.includes(d) ? x.filter((v) => v !== d) : [...x, d]));
  const clear = () => { setMin(0); setMax(MAX_PRICE); setStars([]); setDurs([]); setCat("All"); toast("Filters cleared"); };
  const hasFilters = min > 0 || max < MAX_PRICE || stars.length > 0 || durs.length > 0 || cat !== "All";

  return (
    <>
      {/* HERO HEADER SECTION WITH BACKGROUND IMAGE */}
      <section className="relative overflow-hidden bg-slate-900 pt-28 pb-16 md:pt-36 md:pb-20 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={mode === "treks"
              ? "https://images.pexels.com/photos/35302566/pexels-photo-35302566.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=2000"
              : "/images/sky.jpg"}
            alt="Header background"
            className="h-full w-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-950/40 via-slate-950/75 to-slate-950/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 ring-1 ring-white/30 backdrop-blur-md mb-3">
              {mode === "tours" ? "Explore Gilgit-Baltistan" : "High Altitude Expeditions"}
            </span>
            <h1 className="font-display text-3xl font-black text-white sm:text-5xl lg:text-6xl">
              {mode === "tours" ? "Skardu Tours & Packages" : "Treks & Mountain Expeditions"}
            </h1>
            <p className="mx-auto mt-4 max-w-4xl text-sm sm:text-base leading-relaxed text-slate-200">
              {mode === "tours"
                ? "Discover hand-crafted tour itineraries across Skardu, Shangrila, Hunza, Deosai Plains, and Khaplu."
                : "North Pakistan (Gilgit Baltistan) is heaven for trekkings and adventures. Specially, Skardu is hub of mountain tourism and one of the topmost searched and visited tourist destination across the world. Five giant Mountains above 8000 Meters are located in Gilgit Baltistan and Skardu is home for four of them which you can see on K-2 Base camp/Concordia Trek. But it needs enough time and budget, so we have solutions for you. There are various short treks (3-5 days actual trekking time) around Skardu from where you can see the 8000 meter peaks. Secondly various short hill treks for the starters and amateurs are also tempting for adventure lovers. While trekking and hiking are the most favorite sports for weight loss and fitness we have ample options to offer you. We offer wide range of trekking opportunities. Some of the famous trekking itineraries are as follows "}
            </p>
          </Reveal>

          {mode === "tours" && (
            <Reveal delay={150} className="mt-8">
              <SearchBar target="tours" />
            </Reveal>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pt-8 pb-20">
        {/* tours-mode top chips */}
        {mode === "tours" && (
          <div className="relative z-10 -mt-8 mb-8 flex flex-wrap items-center gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
            <span className="flex items-center gap-1.5 pr-1 text-sm font-bold text-slate-500"><SlidersHorizontal size={15} /> Filters</span>
            <Chip label="Filter Price" active={min > 0 || max < MAX_PRICE}>
              <PriceSlider min={min} max={max} setMin={setMin} setMax={setMax} />
              <button onClick={clear} className="mt-3 text-xs font-bold text-emerald-700 underline">Reset price</button>
            </Chip>
            <Chip label="Review Score" active={stars.length > 0}>
              {[5, 4, 3, 2, 1].map((s) => (
                <CheckRow key={s} checked={stars.includes(s)} onChange={() => toggleStar(s)}>
                  <span className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={14} className={i < s ? "text-amber-400" : "text-slate-300"} fill="currentColor" strokeWidth={0} />)}</span>
                </CheckRow>
              ))}
            </Chip>
            <Chip label={cat === "All" ? "Categories" : cat} active={cat !== "All"}>
              {CATEGORIES.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`block w-full rounded-lg px-3 py-1.5 text-left text-sm font-semibold transition ${cat === c ? "bg-emerald-600 text-white" : "text-slate-600 hover:bg-emerald-50"}`}>{c}</button>
              ))}
            </Chip>
            {hasFilters && (
              <button onClick={clear} className="ml-auto flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700"><X size={13} /> Clear all</button>
            )}
          </div>
        )}

        <div className={`gap-8 ${mode === "treks" ? "lg:grid lg:grid-cols-[280px_1fr]" : ""}`}>
          {/* treks-mode sticky sidebar */}
          {mode === "treks" && (
            <aside className="relative z-10 mb-8 space-y-5 lg:mb-0">
              <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:space-y-5 lg:overflow-y-auto lg:pr-1 no-scrollbar">
                <div className="flex items-center gap-2 rounded-2xl bg-emerald-700 px-5 py-4 text-white shadow-lg shadow-emerald-700/25">
                  <SlidersHorizontal size={17} /> <span className="font-display text-sm font-bold">Refine your trek</span>
                </div>
                <FilterControls min={min} max={max} setMin={setMin} setMax={setMax} stars={stars} toggleStar={toggleStar} durs={durs} toggleDur={toggleDur} clear={clear} applied={() => toast("Filters applied")} />
              </div>
            </aside>
          )}

          {/* results */}
          <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-500">
                <b className="font-display text-base font-extrabold text-emerald-950">{filtered.length}</b> {mode === "tours" ? "tours" : "activities"} found
                {q && <span className="ml-2 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">“{q}”</span>}
              </p>
              <div className="flex items-center gap-3">
                <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 outline-none focus:border-emerald-500">
                  <option value="popular">Sort: Popular</option>
                  <option value="price-asc">Price · Low to High</option>
                  <option value="price-desc">Price · High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="duration">Shortest First</option>
                </select>
                <div className="flex rounded-lg bg-slate-100 p-1">
                  <button onClick={() => setView("grid")} aria-label="Grid view" className={`grid h-8 w-8 place-items-center rounded-md transition ${view === "grid" ? "bg-white text-emerald-700 shadow" : "text-slate-400"}`}><LayoutGrid size={15} /></button>
                  <button onClick={() => setView("list")} aria-label="List view" className={`grid h-8 w-8 place-items-center rounded-md transition ${view === "list" ? "bg-white text-emerald-700 shadow" : "text-slate-400"}`}><Rows3 size={15} /></button>
                </div>
              </div>
            </div>

            {paged.length === 0 ? (
              <div className="flex flex-col items-center rounded-3xl bg-emerald-50/60 py-20 text-center ring-1 ring-emerald-950/5">
                <SearchX size={44} className="text-emerald-300" />
                <p className="mt-4 font-display text-lg font-bold text-emerald-950">No trips match those filters</p>
                <p className="mt-1 text-sm text-slate-500">Try widening the price range or clearing a checkbox.</p>
                <button onClick={clear} className="mt-5 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700">Reset filters</button>
              </div>
            ) : (
              <div className={view === "grid" ? `grid gap-5 ${mode === "tours" ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:grid-cols-2 xl:grid-cols-3"}` : "space-y-4"}>
                {paged.map((t, i) => (
                  <Reveal key={t.id} delay={(i % 4) * 70}>
                    <TripCard trip={t} view={view} />
                  </Reveal>
                ))}
              </div>
            )}

            {/* pagination */}
            {pages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button disabled={page === 1} onClick={() => setPage((p) => p - 1)} className="grid h-9 w-9 place-items-center rounded-lg bg-white text-slate-500 ring-1 ring-slate-200 transition enabled:hover:bg-emerald-50 disabled:opacity-40">‹</button>
                {[...Array(pages)].map((_, i) => (
                  <button key={i} onClick={() => setPage(i + 1)} className={`h-9 w-9 rounded-lg text-sm font-bold transition ${page === i + 1 ? "bg-emerald-600 text-white shadow" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-emerald-50"}`}>{i + 1}</button>
                ))}
                <button disabled={page === pages} onClick={() => setPage((p) => p + 1)} className="grid h-9 w-9 place-items-center rounded-lg bg-white text-slate-500 ring-1 ring-slate-200 transition enabled:hover:bg-emerald-50 disabled:opacity-40">›</button>
              </div>
            )}

            <p className="mt-6 text-center text-xs text-slate-400">Prices shown per person · {formatPKR(0)} excludes optional add-ons</p>
          </div>
        </div>
      </div>
    </>
  );
}
