import { Link, Navigate, useParams } from "react-router-dom";
import { CheckCircle2, ChevronRight, CalendarDays, Users, Wallet, ShieldCheck, Sparkles, Compass } from "lucide-react";
import { getService } from "../data/services";
import { getTrip, waLink, formatPKR } from "../data/trips";
import TripCard from "../components/TripCard";
import { Reveal, VerifiedShield, WhatsAppIcon } from "../components/ui";
import { useApp } from "../context/AppContext";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const svc = getService(id || "");
  const { openCustom, toast } = useApp();

  if (!svc) return <Navigate to="/services" replace />;
  const trips = svc.tripIds.map(getTrip);
  const msg = `Assalam o Alaikum! I'm interested in your "${svc.title}" service. Please share options and pricing.`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* REDESIGNED HERO BANNER WITH BACKGROUND FILL & LIGHT NAV COMPATIBILITY */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24 bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={svc.banner || "/images/sky.jpg"}
            alt={svc.title}
            className="h-full w-full object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-950/30 via-slate-950/75 to-slate-950" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* GLASS BREADCRUMB */}
          <Reveal>
            <nav className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-slate-200 ring-1 ring-white/20 backdrop-blur-md">
              <Link to="/" className="transition hover:text-amber-300">Home</Link>
              <ChevronRight size={12} className="text-slate-400" />
              <Link to="/services" className="transition hover:text-amber-300">Services</Link>
              <ChevronRight size={12} className="text-slate-400" />
              <span className="text-amber-300 font-extrabold">{svc.title}</span>
            </nav>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-amber-400 text-slate-950 shadow-2xl shadow-amber-400/20">
                  <svc.icon size={32} strokeWidth={2.4} />
                </span>
                <div>
                  <h1 className="font-display text-4xl font-black text-white sm:text-5xl lg:text-6xl">
                    {svc.title}
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-200">
                    {svc.tagline}
                  </p>
                </div>
              </div>

              {/* QUICK ACTION BUTTONS */}
              <div className="flex flex-wrap gap-3 shrink-0">
                <button
                  onClick={openCustom}
                  className="rounded-full bg-amber-400 px-6 py-3 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:bg-amber-300 hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Customize Experience
                </button>
                <a
                  href={waLink(msg)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-xs sm:text-sm font-bold text-white ring-1 ring-white/25 backdrop-blur-md transition hover:bg-white/20 whitespace-nowrap"
                >
                  <WhatsAppIcon size={16} /> WhatsApp Specialist
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP (LIGHT MODE FLOATING CARD) */}
      <div className="relative z-20 mx-auto -mt-10 max-w-7xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-xl border border-slate-200/80">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-100 sm:grid-cols-4">
              {svc.stats.map(([n, l]) => (
                <div key={l} className="bg-white px-6 py-4 text-center">
                  <p className="font-display text-2xl font-black text-emerald-700">{n}</p>
                  <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* LEFT COLUMN */}
          <div className="min-w-0 space-y-10">
            <Reveal>
              <section className="rounded-3xl bg-white p-8 border border-slate-200/90 shadow-sm">
                <h2 className="mb-4 font-display text-2xl font-black text-slate-900">About this service</h2>
                {svc.about.map((p, i) => (
                  <p key={i} className="mb-3 text-[15px] leading-relaxed text-slate-600">{p}</p>
                ))}
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="mb-4 font-display text-2xl font-black text-slate-900">Signature experiences</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {svc.highlights.map((h) => (
                    <div key={h.t} className="group rounded-2xl bg-white p-5 border border-slate-200/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-emerald-500/40">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-100 text-emerald-700 transition duration-200 group-hover:bg-emerald-700 group-hover:text-white">
                        <h.icon size={20} />
                      </span>
                      <h3 className="mt-3 font-display text-base font-bold text-slate-900">{h.t}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{h.d}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-3xl bg-emerald-900 p-8 text-white shadow-xl">
                <h2 className="mb-5 flex items-center gap-2 font-display text-xl font-extrabold">
                  <ShieldCheck size={22} className="text-amber-300" /> What's always included
                </h2>
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {svc.includes.map((x) => (
                    <li key={x} className="flex items-start gap-2.5 text-sm text-emerald-100/90">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-amber-300" /> {x}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            {svc.customRoutes && svc.customRoutes.length > 0 && (
              <Reveal>
                <section className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl ring-1 ring-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/30">
                        <Sparkles size={13} /> Off-Beat & Undiscovered Circuits
                      </span>
                      <h2 className="mt-2 font-display text-2xl font-black text-white">
                        Curated Unique Destinations & Route Options
                      </h2>
                    </div>
                    <a
                      href={waLink(`Assalam o Alaikum! I want to inquire about your Unique Tour circuits for Gilgit-Baltistan.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2 text-xs font-extrabold text-slate-950 transition hover:bg-amber-300"
                    >
                      <WhatsAppIcon size={14} /> Inquire Circuit
                    </a>
                  </div>
                  <p className="mb-6 text-sm text-slate-300 leading-relaxed">
                    These signature routes feature 4x4 Jeep safaris, luxury outdoor camping setups, optional day hikes, and 1–2 day hotel breaks to escape crowded commercial tourist spots:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {svc.customRoutes.map((route, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-2xl bg-slate-800/80 p-4 ring-1 ring-slate-700/60 transition hover:bg-slate-800 hover:ring-emerald-500/50"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-amber-400/10 text-amber-300 font-extrabold text-xs ring-1 ring-amber-400/30">
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-slate-100 leading-snug">{route}</p>
                          <span className="mt-1 inline-block text-[11px] font-semibold text-emerald-400">4x4 Safari + Luxury Camping</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}
          </div>

          {/* RIGHT STICKY SIDEBAR */}
          <aside>
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-200/90">
                  <div className="bg-emerald-800 p-6 text-white">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">Starting from</p>
                    <p className="font-display text-3xl font-black text-white">{formatPKR(svc.fromPrice)}</p>
                    <p className="mt-0.5 text-xs text-emerald-100/80">per person · all-inclusive packages</p>
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                        <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-slate-500">
                          <CalendarDays size={12} className="text-emerald-700" /> Season
                        </p>
                        <p className="mt-1 font-bold text-slate-900">{svc.season}</p>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                        <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-slate-500">
                          <Users size={12} className="text-emerald-700" /> Group
                        </p>
                        <p className="mt-1 font-bold text-slate-900">{svc.group}</p>
                      </div>
                    </div>
                    <a
                      href={waLink(msg)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-[0.99]"
                    >
                      <WhatsAppIcon size={17} /> Enquire on WhatsApp
                    </a>
                    <button
                      onClick={openCustom}
                      className="w-full rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-800 border border-slate-200 transition hover:bg-slate-200"
                    >
                      Customize This Service
                    </button>
                    <div className="space-y-2 border-t border-dashed border-slate-200 pt-4 text-xs text-slate-600">
                      <VerifiedShield label="Licensed local operator" />
                      <p className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-600" /> Free consultation & quote in 2 hrs</p>
                      <p className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-600" /> <Wallet size={13} className="text-emerald-600" /> No advance needed to plan</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>

        {/* POPULAR TRIPS / UNIQUE TOUR IMAGE CARDS */}
        <section className="mt-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
                  <span className="h-px w-8 bg-emerald-700" /> {svc.customRouteCards ? "Signature 4x4 & Camping Expeditions" : "Ready to book"}
                </p>
                <h2 className="font-display text-2xl font-black text-slate-900 sm:text-3xl">
                  {svc.customRouteCards ? "Undiscovered Unique Tour Packages" : `Popular ${svc.title.toLowerCase()} right now`}
                </h2>
              </div>
              <button
                onClick={openCustom}
                className="text-sm font-extrabold text-emerald-700 hover:text-emerald-800 transition"
              >
                Request Custom Route →
              </button>
            </div>
          </Reveal>

          {svc.customRouteCards && svc.customRouteCards.length > 0 ? (
            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {svc.customRouteCards.map((card, i) => (
                <Reveal key={i} delay={(i % 3) * 80}>
                  <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-900 border border-slate-200/80 shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
                    {/* IMAGE WITH OVERLAY - CLICKABLE TO DETAIL PAGE */}
                    <Link to={`/tour/${card.id}`} className="relative h-60 w-full overflow-hidden bg-slate-950 block">
                      <img
                        src={card.img}
                        alt={card.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                      
                      {/* BADGES OVERLAY */}
                      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-[11px] font-extrabold text-white shadow-md backdrop-blur-md">
                          {card.type}
                        </span>
                        <span className="rounded-full bg-amber-400 px-3 py-1 text-[11px] font-extrabold text-slate-950 shadow-md">
                          {card.duration}
                        </span>
                      </div>
                    </Link>

                    {/* CARD BODY */}
                    <div className="flex flex-1 flex-col justify-between p-6 bg-white text-slate-900">
                      <div>
                        <Link to={`/tour/${card.id}`}>
                          <h3 className="font-display text-lg font-black text-slate-900 group-hover:text-emerald-700 transition">
                            {card.title}
                          </h3>
                        </Link>
                        <div className="mt-2.5 flex items-start gap-2 rounded-xl bg-slate-50 p-2.5 border border-slate-200 text-xs font-bold text-slate-700">
                          <Compass size={14} className="mt-0.5 shrink-0 text-emerald-600" />
                          <span>{card.route}</span>
                        </div>
                        <p className="mt-3 text-xs leading-relaxed text-slate-600">
                          {card.tagline}
                        </p>
                      </div>

                      <div className="mt-5 border-t border-slate-100 pt-4 flex items-center justify-between gap-2">
                        <Link
                          to={`/tour/${card.id}`}
                          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-700 px-3.5 py-2.5 text-xs font-extrabold text-white shadow-md transition hover:bg-emerald-800 active:scale-95"
                        >
                          View Details →
                        </Link>
                        <a
                          href={waLink(`Assalam o Alaikum! I am interested in booking the Unique Tour: "${card.title}" (${card.route}).`)}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-1 rounded-xl bg-amber-400 px-3 py-2.5 text-xs font-extrabold text-slate-950 shadow-md transition hover:bg-amber-300 active:scale-95"
                        >
                          <WhatsAppIcon size={14} /> WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {trips.map((t, i) => (
                <Reveal key={t.id} delay={(i % 4) * 80}>
                  <TripCard trip={t} />
                </Reveal>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
