import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, MessageSquare, Compass } from "lucide-react";
import { SERVICES } from "../data/services";
import { Reveal, WhatsAppIcon } from "../components/ui";
import { useApp } from "../context/AppContext";
import { waLink } from "../data/trips";

const compact = (v: number) => (v >= 1000 ? `Rs ${Math.round(v / 1000)}k` : `Rs ${v}`);

export default function ServicesPage() {
  const { openCustom } = useApp();
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* REDESIGNED HERO SECTION WITH SKY BACKGROUND */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24 bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sky.jpg"
            alt="Sky background"
            className="h-full w-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-950/30 via-slate-950/75 to-slate-950" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 ring-1 ring-white/30 backdrop-blur-md">
              <Sparkles size={14} /> Specialized Travel Experiences
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-display text-4xl font-black text-white sm:text-6xl lg:text-7xl">
              Services Built Around <br />
              <span className="bg-gradient-to-r from-emerald-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                The Karakoram Mountains
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-200">
              Six unique ways to experience Gilgit-Baltistan with a native team that handles every detail — from two-hour rafting trips to twenty-two-day K2 expeditions.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={openCustom}
                className="rounded-full bg-amber-400 px-7 py-3.5 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:bg-amber-300 hover:scale-105 active:scale-95"
              >
                Request a Custom Plan
              </button>
              <a
                href={waLink("Assalam o Alaikum! Tell me more about your services.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-bold text-white ring-1 ring-white/25 backdrop-blur-md transition hover:bg-white/20"
              >
                <WhatsAppIcon size={16} /> Chat With Guide
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="topo py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((sv, i) => (
              <Reveal key={sv.id} delay={(i % 3) * 90}>
                <div
                  onClick={() => nav(`/services/${sv.id}`)}
                  className="group cursor-pointer flex h-full flex-col overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500/40"
                >
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={sv.img}
                      alt={sv.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                    <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl bg-amber-400 text-slate-950 shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <sv.icon size={22} strokeWidth={2.4} />
                    </span>
                    <span className="absolute bottom-4 right-4 rounded-full bg-slate-950/80 backdrop-blur-md px-3.5 py-1 text-xs font-black text-amber-300 ring-1 ring-white/20">
                      From {compact(sv.fromPrice)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl font-bold text-slate-900 transition group-hover:text-emerald-700">
                      {sv.title}
                    </h2>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                      {sv.short}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {sv.tagline}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-semibold text-slate-500">
                        {sv.stats[0][0]} {sv.stats[0][1].toLowerCase()}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 transition duration-200 group-hover:gap-2.5">
                        Discover <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-emerald-900 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-display text-2xl font-black text-white sm:text-3xl">Not sure which service fits?</h2>
            <p className="mt-1 text-sm text-emerald-100/90">Tell us your dates and travel goals — we will customize a plan for you.</p>
          </div>
          <button
            onClick={openCustom}
            className="shrink-0 rounded-full bg-amber-400 px-8 py-3.5 text-xs font-extrabold text-slate-950 shadow-lg transition hover:bg-amber-300 hover:scale-105 active:scale-95"
          >
            Build My Custom Trip
          </button>
        </div>
      </section>
    </div>
  );
}
