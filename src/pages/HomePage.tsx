import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, MapPin, CalendarDays, Users,
  Compass, PenLine, BedDouble, Send, Check, Quote, ShieldCheck, MountainSnow, Sparkles,
} from "lucide-react";
import TripCard from "../components/TripCard";
import { Reveal, Stars, WhatsAppIcon } from "../components/ui";
import { SOCIALS } from "../components/Footer";
import { TOURS, TREKS, DESTINATIONS, BLOGS, TESTIMONIALS, waLink } from "../data/trips";
import { SERVICES } from "../data/services";

const PEAKS = "https://images.pexels.com/photos/35302566/pexels-photo-35302566.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1800";
const compact = (v: number) => (v >= 1000 ? `Rs ${Math.round(v / 1000)}k` : `Rs ${v}`);

/* ------------------------------- HERO ------------------------------- */
function Hero() {
  const nav = useNavigate();
  const [loc, setLoc] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2 People");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    nav(`/tours${loc ? `?q=${encodeURIComponent(loc)}` : ""}`);
  };

  const titleText = "SKARDU ALPINE";

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. MOBILE HERO SECTION (Only visible on screens < 640px)                */}
      {/* ========================================================================= */}
      <section className="block sm:hidden relative w-full overflow-hidden bg-slate-950 select-none pt-20 pb-10">
        {/* Sky & Mountain Background with Gradient Blend */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sky_image.jpg"
            alt="Sky background"
            className="h-full w-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-950/50 via-slate-950/80 to-slate-950" />
        </div>

        {/* Mountain Peak Background Graphic */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 opacity-40">
          <img
            src="/images/mountain_image.png"
            alt="Mountain peak"
            className="w-full h-auto object-cover object-bottom"
          />
        </div>

        {/* Mobile Hero Content Container */}
        <div className="relative z-20 mx-auto px-5 pt-4">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-300 ring-1 ring-white/25 backdrop-blur-md">
                <Sparkles size={13} className="text-amber-300" /> Premier Karakoram Expeditions
              </span>

              <h1 className="mt-4 font-display text-4xl font-black leading-none tracking-tight text-white drop-shadow-md">
                SKARDU ALPINE
                <span className="mt-1 block bg-gradient-to-r from-amber-300 via-emerald-200 to-amber-400 bg-clip-text text-2xl font-extrabold text-transparent tracking-widest">
                  ADVENTURES
                </span>
              </h1>

              <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-200/90 font-medium">
                Uncover the Karakoram's natural wonders — from K2 basecamp to 4x4 jeep safaris & luxury camps.
              </p>
            </div>
          </Reveal>

          {/* Mobile Search Card */}
          <Reveal delay={120} className="mt-6">
            <form
              onSubmit={submit}
              className="rounded-2xl bg-white/95 p-4 shadow-2xl shadow-emerald-950/80 border border-white/60 backdrop-blur-xl"
            >
              {/* Location Input */}
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-2.5 border border-slate-200/90 transition focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-600/20">
                <MapPin size={18} className="shrink-0 text-emerald-600" />
                <div className="w-full">
                  <label className="block text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Destination</label>
                  <input
                    list="saa-dests-mobile"
                    value={loc}
                    onChange={(e) => setLoc(e.target.value)}
                    placeholder="Where to? (Skardu, Hunza…)"
                    className="w-full bg-transparent text-xs font-bold text-slate-900 outline-none placeholder:font-normal placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Date & Guests Grid */}
              <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-2.5 border border-slate-200/90 transition focus-within:bg-white">
                  <CalendarDays size={16} className="shrink-0 text-emerald-600" />
                  <div className="w-full min-w-0">
                    <label className="block text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-transparent text-[11px] font-semibold text-slate-800 outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-2.5 border border-slate-200/90 transition focus-within:bg-white">
                  <Users size={16} className="shrink-0 text-emerald-600" />
                  <div className="w-full min-w-0">
                    <label className="block text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-transparent text-[11px] font-bold text-slate-800 outline-none cursor-pointer"
                    >
                      {["1 Person", "2 People", "4 People", "6 People", "8+ People"].map((g) => (
                        <option key={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-950 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-emerald-950/40 transition active:scale-[0.98]"
              >
                Search Packages <ArrowRight size={14} />
              </button>
            </form>
            <datalist id="saa-dests-mobile">
              {DESTINATIONS.map((d) => (
                <option key={d.name} value={d.name} />
              ))}
            </datalist>
          </Reveal>

          {/* Mobile Trust Badges */}
          <Reveal delay={200} className="mt-5">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-bold text-slate-300">
              <span className="flex items-center gap-1"><Check size={13} className="text-amber-400" /> 120+ Iconic Spots</span>
              <span className="flex items-center gap-1"><Check size={13} className="text-amber-400" /> 4.9★ Guest Reviews</span>
              <span className="flex items-center gap-1"><Check size={13} className="text-amber-400" /> Native Experts</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DESKTOP HERO SECTION (Only visible on screens >= 640px)               */}
      {/* ========================================================================= */}
      <section className="hidden sm:block relative w-full min-h-[35vw] lg:min-h-[38vw] overflow-hidden bg-slate-900 select-none">
        {/* 1. SKY BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden" style={{opacity: 0.6}}>
          <img
            src="/images/sky_image.jpg"
            alt="Sky background"
            className="h-full w-full object-cover object-center animate-hero-in scale-105"
            
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-transparent to-emerald-950/70" />
        </div>

        {/* 2. TEXT LAYER */}
        <div className="pointer-events-none absolute inset-x-0 top-[18vw] md:top-[15vw] lg:top-[13vw] z-10 flex justify-center px-4">
          <h1
            className="font-display text-[clamp(5.2rem,6.9vw,10rem)] font-black leading-none tracking-tight text-white drop-shadow-xl text-center flex flex-nowrap justify-center whitespace-nowrap gap-x-[0.25em]"
            aria-label="SKARDU ALPINE ADVENTURES"
          >
            {titleText.split(" ").map((word, wIdx) => (
              <span key={wIdx} className="inline-block whitespace-nowrap">
                {word.split("").map((ch, i) => (
                  <span
                    key={i}
                    className="inline-block animate-text-pop"
                    style={{ animationDelay: `${120 + (wIdx * 7 + i) * 70}ms` }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        {/* 3. MOUNTAIN FOREGROUND (Front of text, 100% full width: z-20) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center items-end"
        style={{ opacity: 0.8 }}
        >
          <img
            src="/images/mountain_image.png"
            alt="Skardu Mountain Range"
            className="w-full h-auto block animate-mountain-up"
            style={{ animationDelay: "180ms"}}
          />
        </div>

        {/* Subtle blend gradient at base of mountain */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent z-25" />

        {/* 4. OVERLAY CONTENT & SEARCH FORM (Frontmost layer: z-30) */}
        <div className="relative z-30 mx-auto max-w-7xl px-6 pt-[34vw] md:pt-[36vw] lg:pt-[38vw] pb-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <h2 className="max-w-xs font-display text-3xl font-extrabold leading-tight text-white drop-shadow-md sm:max-w-sm sm:text-4xl">
                Uncover the Karakoram's Natural Wonders.
              </h2>
            </Reveal>

            {/* Search Bar */}
            <Reveal delay={150} className="w-full max-w-xl">
              <form
                onSubmit={submit}
                className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md p-2 shadow-2xl shadow-emerald-950/50"
              >
                <label className="flex flex-1 items-center gap-2.5 rounded-full px-4 py-2.5">
                  <MapPin size={16} className="shrink-0 text-emerald-600" />
                  <span className="w-full">
                    <span className="block text-[10px] font-bold uppercase tracking-wide text-slate-400">Location</span>
                    <input
                      list="saa-dests-desktop"
                      value={loc}
                      onChange={(e) => setLoc(e.target.value)}
                      placeholder="Skardu, Hunza…"
                      className="w-full bg-transparent text-sm font-semibold text-slate-800 outline-none placeholder:font-normal placeholder:text-slate-400"
                    />
                  </span>
                </label>
                <span className="h-7 w-px bg-slate-200" />
                <label className="flex flex-1 items-center gap-2.5 rounded-full px-4 py-2.5">
                  <CalendarDays size={16} className="shrink-0 text-emerald-600" />
                  <span className="w-full">
                    <span className="block text-[10px] font-bold uppercase tracking-wide text-slate-400">Date</span>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-slate-700 outline-none"
                    />
                  </span>
                </label>
                <span className="h-7 w-px bg-slate-200" />
                <label className="flex items-center gap-2.5 rounded-full px-4 py-2.5">
                  <Users size={16} className="shrink-0 text-emerald-600" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="bg-transparent text-sm font-semibold text-slate-700 outline-none cursor-pointer"
                  >
                    {["1 Person", "2 People", "4 People", "6 People", "8+ People"].map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </label>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-2 py-2 text-sm font-bold text-white transition hover:bg-emerald-800 active:scale-[0.98] shadow-lg"
                  // style={{fontSize: "12px"}}
                >
                  Book Now <ArrowRight size={15} />
                </button>
              </form>
              <datalist id="saa-dests-desktop">
                {DESTINATIONS.map((d) => (
                  <option key={d.name} value={d.name} />
                ))}
              </datalist>
            </Reveal>
          </div>

          {/* Footer info row */}
          <Reveal delay={250}>
            <div className="mt-8 flex flex-col gap-4 border-t border-white/20 pt-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <p className="text-xs font-extrabold leading-tight text-white">
                  120+ Iconic<br />Spots Included
                </p>
                <div className="flex gap-2">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-white hover:text-emerald-900"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d={s.d} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <p className="max-w-md text-[11px] leading-relaxed text-slate-200/90 font-medium">
                Discover the Karakoram's finest places — breathtaking landscapes, untouched beauty and nature at its purest. From Skardu's cold desert to the throne room of K2, we craft every step of the journey.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* --------------------------- DESTINATIONS --------------------------- */
function Destinations() {
  const [di, setDi] = useState(0);
  const len = DESTINATIONS.length;
  const go = (d: number) => setDi((i) => (i + d + len) % len);
  const visible = [0, 1, 2].map((o) => DESTINATIONS[(di + o) % len]);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-600">Our Destination</p>
        </Reveal>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
          <Reveal delay={80}>
            <h2 className="max-w-md font-display text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Your Journey to the Perfect Destination Begins Here
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <Link to="/tours" className="group flex items-center gap-3 rounded-full border border-slate-300 py-1.5 pl-5 pr-1.5 text-sm font-bold text-slate-800 transition hover:border-emerald-600 hover:text-emerald-700">
              See All Destination
              <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-950 text-white transition group-hover:bg-emerald-600"><ArrowUpRight size={14} /></span>
            </Link>
          </Reveal>
        </div>

        <div key={di} className="mt-10 grid gap-5 md:grid-cols-3">
          {visible.map((d, i) => (
            <Reveal key={d.name} delay={i * 100}>
              <Link to={`/tours?q=${encodeURIComponent(d.name)}`} className="group relative block h-[26rem] overflow-hidden rounded-[1.75rem] shadow-lg shadow-emerald-950/10">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/10 to-transparent" />
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-emerald-900 shadow-lg transition group-hover:bg-amber-400 group-hover:text-emerald-950">
                  <ArrowUpRight size={16} />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-extrabold text-white">{d.name}</h3>
                  <p className="mt-0.5 text-xs text-emerald-100/80">{d.tagline}</p>
                  <p className="mt-2 text-sm font-bold text-amber-300">{compact(d.from)} <span className="font-normal text-emerald-100/70">/ per person</span></p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button onClick={() => go(-1)} aria-label="Previous destinations" className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-slate-600 transition hover:border-emerald-600 hover:bg-emerald-600 hover:text-white active:scale-95">
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => go(1)} aria-label="Next destinations" className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-slate-600 transition hover:border-emerald-600 hover:bg-emerald-600 hover:text-white active:scale-95">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SERVICES ----------------------------- */
function Services() {
  const nav = useNavigate();
  return (
    <section className="topo bg-slate-50/80 py-20 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 ring-1 ring-emerald-200">
              <Sparkles size={14} className="text-emerald-700" /> What We Do
            </span>
            <h2 className="mt-3 font-display text-3xl font-black text-slate-900 sm:text-5xl">
              Six Ways to Travel With Us
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              Hand-crafted valley circuits, high-altitude K2 expeditions, rafting adventures, and specialized group journeys — managed by native mountain experts.
            </p>
          </Reveal>
        </div>

        {/* 6 UNIFIED IMAGE CARDS GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((sv, i) => (
            <Reveal key={sv.id} delay={(i % 3) * 80}>
              <div
                onClick={() => nav(`/services/${sv.id}`)}
                className="group cursor-pointer relative flex flex-col justify-end min-h-[360px] overflow-hidden rounded-3xl bg-slate-900 p-7 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/20"
              >
                {/* BACKGROUND IMAGE WITH OVERLAY */}
                <img
                  src={sv.img}
                  alt={sv.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-70 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />

                {/* CONTENT OVERLAY */}
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3.5 py-1 text-xs font-extrabold text-slate-950 shadow-md">
                      <sv.icon size={15} /> {sv.short}
                    </span>
                    <span className="rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-amber-300 ring-1 ring-white/20">
                      From {compact(sv.fromPrice)}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-black text-white group-hover:text-amber-300 transition-colors duration-200">
                    {sv.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-200 line-clamp-2">
                    {sv.tagline}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">
                    <span className="text-xs font-semibold text-emerald-200">
                      {sv.season}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-300 transition-all duration-200 group-hover:gap-2.5">
                      Explore Details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* BOTTOM CTA LINK */}
        <div className="mt-12 text-center">
          <button
            onClick={() => nav("/services")}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-8 py-3.5 text-xs font-extrabold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800 hover:scale-105 active:scale-95"
          >
            View All Specialized Experiences <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- JUST FOR YOU -------------------------- */
function JustForYou() {
  const [tab, setTab] = useState<"tour" | "trek">("tour");
  const list = (tab === "tour" ? TOURS : TREKS).slice(0, 4);
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-600">Just For You</p>
            <h2 className="mt-2 max-w-md font-display text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">Hand-picked trips, ready to book</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex gap-6 border-b border-slate-200">
              {(["tour", "trek"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`-mb-px border-b-2 pb-2.5 text-sm font-bold capitalize transition ${tab === t ? "border-emerald-600 text-emerald-800" : "border-transparent text-slate-400 hover:text-slate-600"}`}
                >
                  {t === "tour" ? "Tours" : "Activity"}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
        <div key={tab} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <TripCard trip={t} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link to={tab === "tour" ? "/tours" : "/treks"} className="inline-flex items-center gap-3 rounded-full border border-slate-300 py-1.5 pl-6 pr-1.5 text-sm font-bold text-slate-800 transition hover:border-emerald-600 hover:text-emerald-700">
            Browse all {tab === "tour" ? "tours" : "treks"}
            <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-950 text-white"><ArrowUpRight size={14} /></span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ WHY US ------------------------------ */
function WhyUs() {
  const items = [
    { icon: Compass, t: "Local Expertise", d: "Born and raised in Gilgit-Baltistan, on the ground 24/7." },
    { icon: PenLine, t: "Best Customization", d: "Change hotels, days or routes anytime — it's your trip." },
    { icon: Users, t: "Escape the Crowd", d: "Private departures only. No group buses, no rush." },
    { icon: BedDouble, t: "Comfort & Quality", d: "Every hotel physically inspected by our own team." },
  ];
  return (
    <section className="bg-emerald-50/50 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-emerald-900/10">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 90} className="md:px-8 md:first:pl-0 md:last:pr-0">
            <it.icon size={28} className="text-emerald-600" strokeWidth={1.8} />
            <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{it.t}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{it.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- JOURNAL ------------------------------ */
function Journal() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-600">Find Inspiration</p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">From the trail journal</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link to="/tours" className="hidden items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 sm:flex">All articles <ArrowRight size={14} /></Link>
          </Reveal>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {BLOGS.slice(0, 3).map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <Link to="/tours" className="group block overflow-hidden rounded-2xl ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10">
                <div className="h-48 overflow-hidden">
                  <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-600">{b.tag}</p>
                  <h3 className="mt-2 font-display text-base font-bold leading-snug text-slate-900 transition group-hover:text-emerald-700">{b.title}</h3>
                  <p className="mt-3 text-xs text-slate-400">{b.author} · {b.date}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- NEWSLETTER ---------------------------- */
function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="bg-emerald-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12 lg:flex-row lg:justify-between">
        <div className="text-center lg:text-left">
          <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">Subscribe to our Newsletter</h2>
          <p className="mt-1 text-sm text-emerald-100/80">Trail reports, blossom alerts and early-bird offers — once a month, no spam.</p>
        </div>
        {done ? (
          <p className="flex items-center gap-2 rounded-full bg-white/15 px-6 py-3.5 text-sm font-bold text-white ring-1 ring-white/25"><Check size={17} className="text-amber-300" /> You're on the list!</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setDone(true); }} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="flex-1 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 outline-none ring-2 ring-transparent transition placeholder:font-normal placeholder:text-slate-400 focus:ring-amber-300" />
            <button className="flex items-center justify-center gap-2 rounded-full bg-emerald-950 px-7 py-3.5 text-sm font-extrabold text-white transition hover:bg-emerald-900 active:scale-[0.98]"><Send size={15} /> Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}

/* --------------------------- TESTIMONIALS --------------------------- */
function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-600">They Trusted Us</p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">What our happy guests say</h2>
          </Reveal>
          <div className="hidden gap-2 sm:flex">
            <button onClick={() => ref.current?.scrollBy({ left: -340, behavior: "smooth" })} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-slate-600 transition hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"><ChevronLeft size={15} /></button>
            <button onClick={() => ref.current?.scrollBy({ left: 340, behavior: "smooth" })} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-slate-600 transition hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"><ChevronRight size={15} /></button>
          </div>
        </div>
        <div ref={ref} className="no-scrollbar mt-8 flex snap-x gap-5 overflow-x-auto pb-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 60} className="snap-start">
              <article className="relative flex h-full w-80 shrink-0 flex-col rounded-2xl bg-emerald-50/60 p-6 ring-1 ring-emerald-950/5">
                <Quote size={24} className="absolute right-5 top-5 text-emerald-200" />
                <div className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-full ${t.color} font-display text-base font-extrabold text-white`}>{t.name[0]}</span>
                  <div>
                    <p className="flex items-center gap-1.5 font-display text-sm font-bold text-slate-900">{t.name} <ShieldCheck size={13} className="text-emerald-600" /></p>
                    <p className="text-[11px] text-slate-400">{t.when}</p>
                  </div>
                </div>
                <Stars value={t.rating} size={14} className="mt-3" />
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 flex items-center justify-end gap-1.5 text-[11px] font-bold text-slate-400">
          <ShieldCheck size={13} className="text-emerald-600" /> Verified by Trustindex · 4.9 / 5 from 312 reviews
        </p>
      </div>
    </section>
  );
}

/* ------------------------------- PAGE ------------------------------- */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Destinations />
      <Services />
      <JustForYou />
      <WhyUs />
      <Journal />
      <Newsletter />
      <Testimonials />
      <section className="border-t border-slate-100 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
          <p className="flex items-center gap-2 font-display text-lg font-bold text-slate-900"><MountainSnow size={20} className="text-emerald-600" /> The mountains are calling — ready when you are.</p>
          <a href={waLink("Assalam o Alaikum! I'd like help planning a Skardu trip.")} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700">
            <WhatsAppIcon size={17} /> Talk to a Trip Designer
          </a>
        </div>
      </section>
    </>
  );
}
