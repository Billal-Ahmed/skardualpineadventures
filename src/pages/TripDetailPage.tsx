import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Clock, Users, Languages, Share2, Heart, CheckCircle2, XCircle, MapPin,
  ChevronDown, ChevronRight, ThumbsUp, ShieldCheck, CalendarDays, Globe2, X, ChevronLeft, Star, Send, Loader2, Bus,
} from "lucide-react";
import { getTrip, getItinerary, BULK_TIERS, formatPKR, waLink, FAQS, IMPORTANT_NOTES, type Review } from "../data/trips";
import { Reveal, Stars, VerifiedShield, WhatsAppIcon, DifficultyBadge } from "../components/ui";
import { useApp } from "../context/AppContext";

const inputCls = "w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20";

/* ---------------------------- accordion ---------------------------- */
function Accordion({ title, icon, children, defaultOpen = false }: { title: string; icon?: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/80">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between px-5 py-4 text-left">
        <span className="flex items-center gap-2.5 font-display text-sm font-bold text-emerald-950">{icon}{title}</span>
        <span className={`grid h-7 w-7 place-items-center rounded-full bg-emerald-600 text-white transition-transform duration-300 ${open ? "rotate-180" : ""}`}><ChevronDown size={15} /></span>
      </button>
      <div className={`acc-body ${open ? "open" : ""}`}><div><div className="border-t border-slate-100 px-5 py-4">{children}</div></div></div>
    </div>
  );
}

/* --------------------------- photo modal --------------------------- */
function PhotoModal({ images, title, start, close }: { images: string[]; title: string; start: number; close: () => void }) {
  const [i, setI] = useState(start);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setI((x) => (x + 1) % images.length);
      if (e.key === "ArrowLeft") setI((x) => (x - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [images.length, close]);
  return (
    <div className="fixed inset-0 z-[65] flex flex-col bg-emerald-950/95 p-4 backdrop-blur-sm" role="dialog" aria-modal>
      <div className="flex items-center justify-between text-white">
        <p className="font-display text-sm font-bold">{title} <span className="ml-2 text-emerald-300">{i + 1} / {images.length}</span></p>
        <button onClick={close} aria-label="Close" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-rose-500"><X size={18} /></button>
      </div>
      <div className="relative flex flex-1 items-center justify-center py-4">
        <button onClick={() => setI((x) => (x - 1 + images.length) % images.length)} aria-label="Previous" className="absolute left-0 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-emerald-600"><ChevronLeft size={20} /></button>
        <img src={images[i]} alt={title} className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl" />
        <button onClick={() => setI((x) => (x + 1) % images.length)} aria-label="Next" className="absolute right-0 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-emerald-600"><ChevronRight size={20} /></button>
      </div>
      <div className="no-scrollbar flex justify-center gap-2 overflow-x-auto pb-2">
        {images.map((im, idx) => (
          <button key={idx} onClick={() => setI(idx)} className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg ring-2 transition ${idx === i ? "ring-amber-400" : "ring-transparent opacity-60 hover:opacity-100"}`}>
            <img src={im} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

/* =============================== PAGE =============================== */
export default function TripDetailPage() {
  const { id } = useParams();
  const trip = getTrip(id || "");
  const { wishlist, toggleWish, toast, openCustom } = useApp();
  const wished = wishlist.includes(trip.id);
  const itinerary = useMemo(() => getItinerary(trip), [trip]);

  const [gallery, setGallery] = useState<number | null>(null);
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(2);
  const [reviews, setReviews] = useState<Review[]>(trip.reviews);
  const [writing, setWriting] = useState(false);
  const [form, setForm] = useState({ name: "", rating: 5, text: "" });
  const [busy, setBusy] = useState(false);

  useEffect(() => { setReviews(trip.reviews); window.scrollTo(0, 0); }, [trip]);

  const price = trip.discount ? Math.round(trip.price * (1 - trip.discount / 100)) : trip.price;
  const tier = [...BULK_TIERS].reverse().find((t) => people >= t.from);
  const total = Math.round(price * people * (1 - (tier?.pct || 0) / 100));

  const counts = [5, 4, 3, 2, 1].map((s) => reviews.filter((r) => Math.round(r.rating) === s).length);
  const avg = reviews.length ? reviews.reduce((a, r) => a + r.rating, 0) / reviews.length : 0;

  const submitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return toast("Add your name and a few words");
    setBusy(true);
    setTimeout(() => {
      setReviews((r) => [{ name: form.name, rating: form.rating, text: form.text, date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }), helpful: 0 }, ...r]);
      setForm({ name: "", rating: 5, text: "" });
      setWriting(false);
      setBusy(false);
      toast("Thank you for your review!");
    }, 700);
  };

  const waMsg = `Assalam o Alaikum! I'd like to book "${trip.title}"%0A• Date: ${date || "flexible"}%0A• Travelers: ${people}%0A• Estimated total: ${formatPKR(total)}`;

  const specs = [
    { icon: Clock, label: "Duration", value: `${trip.days} Days ${trip.nights} Nights` },
    { icon: Bus, label: "Transport Type", value: trip.transport },
    { icon: Users, label: "Group Size", value: trip.groupSize },
    { icon: Languages, label: "Languages", value: trip.languages.join(", ") },
  ];

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${trip.coords[1] - 0.4}%2C${trip.coords[0] - 0.25}%2C${trip.coords[1] + 0.4}%2C${trip.coords[0] + 0.25}&layer=mapnik&marker=${trip.coords[0]}%2C${trip.coords[1]}`;

  return (
    <div className="bg-slate-50/60 pt-20 md:pt-24">
      {gallery !== null && <PhotoModal images={trip.images} title={trip.title} start={gallery} close={() => setGallery(null)} />}

      {/* breadcrumb */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="mx-auto flex max-w-7xl items-center gap-1.5 px-6 py-3.5 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-emerald-700 transition">Home</Link>
          <ChevronRight size={12} />
          <Link to={trip.kind === "trek" ? "/treks" : "/tours"} className="hover:text-emerald-700 transition capitalize">{trip.kind === "trek" ? "Treks" : "Tours"}</Link>
          <ChevronRight size={12} />
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-900 font-extrabold">{trip.title.split("|")[0].trim()}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* photo grid */}
        <Reveal>
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3">
            {trip.images.slice(0, 3).map((im, i) => (
              <button key={i} onClick={() => setGallery(i)} className={`group relative h-52 overflow-hidden rounded-2xl sm:h-72 ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}>
                <img src={im} alt={trip.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-bold text-emerald-800 backdrop-blur"><MapPin size={11} /> {trip.location}</span>
                {i === 2 && (
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-emerald-950/80 px-3.5 py-2 text-xs font-extrabold text-white ring-1 ring-white/25 backdrop-blur transition group-hover:bg-emerald-700">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" opacity=".9" /></svg>
                    All photos
                  </span>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* title row */}
        <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="max-w-3xl font-display text-2xl font-extrabold leading-tight text-emerald-950 sm:text-3xl">{trip.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
              <Stars value={trip.rating} size={16} />
              <b className="text-emerald-950">{trip.rating.toFixed(1)}</b>
              <span className="text-slate-400">({trip.reviewCount} reviews)</span>
              {trip.difficulty && <DifficultyBadge level={trip.difficulty} />}
              <VerifiedShield />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => { navigator.clipboard?.writeText(window.location.href); toast("Link copied to clipboard"); }}
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 transition hover:text-emerald-700 hover:ring-emerald-400" aria-label="Share"
            >
              <Share2 size={17} />
            </button>
            <button
              onClick={() => { toggleWish(trip.id); toast(wished ? "Removed from wishlist" : "Saved to wishlist"); }}
              className={`grid h-11 w-11 place-items-center rounded-full ring-1 transition ${wished ? "bg-rose-500 text-white ring-rose-500" : "bg-white text-slate-500 ring-slate-200 hover:text-rose-500 hover:ring-rose-300"}`} aria-label="Wishlist"
            >
              <Heart size={17} fill={wished ? "currentColor" : "none"} />
            </button>
          </div>
        </div>

        {/* specs */}
        <Reveal className="mt-6">
          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200/80 lg:grid-cols-4">
            {specs.map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-xl p-2">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/25"><s.icon size={20} /></span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{s.label}</p>
                  <p className="text-sm font-extrabold text-emerald-950">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* ------------------------- LEFT ------------------------- */}
          <div className="min-w-0 space-y-8">
            {/* bulk pricing */}
            <Reveal>
              <section className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/80">
                <h2 className="font-display text-lg font-extrabold text-emerald-950">Bulk Discount <span className="text-sm font-semibold text-slate-400">(by percent)</span></h2>
                <p className="mb-4 text-xs text-slate-400">Bring your crew — group rates apply automatically.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-emerald-100 text-[11px] uppercase tracking-wide text-slate-400">
                        <th className="py-2 pr-3">#</th><th className="py-2 pr-3">Discount group</th><th className="py-2 pr-3">From adult</th><th className="py-2 pr-3">To adult</th><th className="py-2">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BULK_TIERS.map((t, i) => (
                        <tr key={i} className="border-b border-slate-100 transition hover:bg-emerald-50/60">
                          <td className="py-2.5 pr-3 font-bold text-slate-400">{i + 1}</td>
                          <td className="py-2.5 pr-3 font-semibold text-slate-700">Save {formatPKR(Math.round((price * t.pct) / 100))} per head for {t.from} Persons</td>
                          <td className="py-2.5 pr-3 text-slate-600">{t.from}</td>
                          <td className="py-2.5 pr-3 text-slate-600">{t.to}</td>
                          <td className="py-2.5"><span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-extrabold text-emerald-700">{t.pct}%</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </Reveal>

            {/* about */}
            <Reveal>
              <section className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/80">
                <h2 className="mb-3 font-display text-lg font-extrabold text-emerald-950">About this {trip.kind}</h2>
                <p className="text-sm leading-relaxed text-slate-600">{trip.about}</p>
              </section>
            </Reveal>

            {/* included / excluded */}
            <Reveal>
              <section className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/80">
                <h2 className="mb-4 font-display text-lg font-extrabold text-emerald-950">Included / Excluded</h2>
                <div className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  <ul className="space-y-2.5">
                    {trip.included.map((x) => (
                      <li key={x} className="flex items-start gap-2.5 text-sm text-slate-600"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-600" /> {x}</li>
                    ))}
                  </ul>
                  <ul className="space-y-2.5">
                    {trip.excluded.map((x) => (
                      <li key={x} className="flex items-start gap-2.5 text-sm text-slate-600"><XCircle size={17} className="mt-0.5 shrink-0 text-amber-500" /> {x}</li>
                    ))}
                  </ul>
                </div>
              </section>
            </Reveal>

            {/* itinerary */}
            <Reveal>
              <section>
                <h2 className="mb-4 font-display text-lg font-extrabold text-emerald-950">Itinerary</h2>
                <div className="relative space-y-3 before:absolute before:bottom-4 before:left-[22px] before:top-4 before:w-px before:bg-emerald-200">
                  {itinerary.map((d, i) => (
                    <div key={i} className="relative pl-12">
                      <span className="absolute left-0 top-3 grid h-11 w-11 place-items-center rounded-full bg-emerald-600 font-display text-xs font-extrabold text-white shadow-md shadow-emerald-600/30 ring-4 ring-slate-50/60">{`D${i + 1}`}</span>
                      <Accordion title={`Day ${i + 1}: ${d.title}`} defaultOpen={i === 0}>
                        <ul className="space-y-1.5">
                          {d.points.map((p, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-slate-600"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />{p}</li>
                          ))}
                        </ul>
                      </Accordion>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pl-12">
                  <Accordion title="Important Notes" icon={<ShieldCheck size={15} className="text-emerald-600" />}>
                    <ul className="space-y-2">
                      {IMPORTANT_NOTES.map((n, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />{n}</li>
                      ))}
                    </ul>
                  </Accordion>
                </div>
              </section>
            </Reveal>

            {/* languages */}
            <Reveal>
              <section className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/80">
                <h2 className="mb-3 font-display text-lg font-extrabold text-emerald-950">Languages</h2>
                <div className="flex flex-wrap gap-4">
                  {trip.languages.map((l) => (
                    <span key={l} className="flex items-center gap-2 text-sm font-semibold text-slate-600"><Globe2 size={16} className="text-emerald-600" /> {l}</span>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* FAQ */}
            <Reveal>
              <section>
                <h2 className="mb-4 font-display text-lg font-extrabold text-emerald-950">Frequently asked questions</h2>
                <div className="space-y-3">
                  {FAQS.map((f) => (
                    <Accordion key={f.q} title={f.q} icon={<span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-[11px] font-extrabold text-emerald-700">?</span>}>
                      <p className="text-sm leading-relaxed text-slate-600">{f.a}</p>
                    </Accordion>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* map */}
            <Reveal>
              <section className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/80">
                <h2 className="mb-4 font-display text-lg font-extrabold text-emerald-950">{trip.kind === "trek" ? "Trek" : "Tour"}'s Location</h2>
                <div className="relative overflow-hidden rounded-xl ring-1 ring-slate-200">
                  <iframe title="Trip location map" src={mapSrc} className="h-72 w-full" loading="lazy" />
                  <span className="pointer-events-none absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-emerald-800 shadow backdrop-blur"><MapPin size={12} /> {trip.location}, Gilgit-Baltistan</span>
                </div>
              </section>
            </Reveal>

            {/* reviews */}
            <Reveal>
              <section>
                <h2 className="mb-4 font-display text-lg font-extrabold text-emerald-950">Reviews</h2>
                <div className="grid gap-6 rounded-2xl bg-white p-6 ring-1 ring-slate-200/80 sm:grid-cols-[200px_1fr]">
                  <div className="flex flex-col items-center justify-center border-slate-100 text-center sm:border-r sm:pr-6">
                    <p className="flex items-center gap-1 font-display text-4xl font-extrabold text-emerald-950"><Star size={26} className="text-amber-400" fill="currentColor" strokeWidth={0} />{avg ? avg.toFixed(1) : "0"}/5</p>
                    <Stars value={avg} size={16} className="mt-1" />
                    <p className="mt-1 text-xs text-slate-400">{reviews.length} reviews</p>
                  </div>
                  <div className="space-y-2">
                    {["Excellent", "Very Good", "Average", "Poor", "Terrible"].map((label, i) => {
                      const c = counts[i];
                      const pct = reviews.length ? (c / reviews.length) * 100 : 0;
                      return (
                        <div key={label} className="flex items-center gap-3 text-xs">
                          <span className="w-20 font-semibold text-slate-500">{label}</span>
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full rounded-full bg-emerald-500 transition-all duration-700" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="w-5 text-right font-bold text-slate-500">{c}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <ul className="mt-5 space-y-4">
                  {reviews.map((r, i) => (
                    <li key={i} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200/80">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-700 font-display text-sm font-extrabold text-white">{r.name[0]}</span>
                          <div>
                            <p className="text-sm font-bold text-emerald-950">{r.name}</p>
                            <p className="text-[11px] text-slate-400">{r.date}</p>
                          </div>
                        </div>
                        <Stars value={r.rating} />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{r.text}</p>
                      <button className="mt-3 flex items-center gap-1.5 text-xs font-bold text-slate-400 transition hover:text-emerald-700"><ThumbsUp size={13} /> Helpful ({r.helpful})</button>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  {!writing ? (
                    <button onClick={() => setWriting(true)} className="flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700">
                      Write a review <ChevronDown size={15} />
                    </button>
                  ) : (
                    <form onSubmit={submitReview} className="space-y-4 rounded-2xl bg-white p-5 ring-1 ring-emerald-200">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label><span className="mb-1 block text-xs font-bold text-slate-600">Your name</span>
                          <input className={inputCls} value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="e.g. Ayesha K." /></label>
                        <div>
                          <span className="mb-1 block text-xs font-bold text-slate-600">Your rating</span>
                          <div className="flex gap-1 pt-1.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <button type="button" key={s} onClick={() => setForm((f) => ({ ...f, rating: s }))} aria-label={`${s} stars`}>
                                <Star size={22} className={`transition ${s <= form.rating ? "text-amber-400" : "text-slate-300 hover:text-amber-300"}`} fill="currentColor" strokeWidth={0} />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <label><span className="mb-1 block text-xs font-bold text-slate-600">Your experience</span>
                        <textarea rows={3} className={inputCls} value={form.text} onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))} placeholder="Tell future travelers about your trip…" /></label>
                      <button disabled={busy} className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-700 disabled:opacity-60">
                        {busy ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />} Submit review
                      </button>
                    </form>
                  )}
                </div>
              </section>
            </Reveal>
          </div>

          {/* ------------------------- SIDEBAR ------------------------- */}
          <aside>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-emerald-950/10 ring-1 ring-slate-200/80">
                <div className="bg-emerald-700 p-5 text-white">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wide text-emerald-200">From</p>
                      <p className="font-display text-3xl font-extrabold">{formatPKR(price)}</p>
                    </div>
                    {trip.discount && (
                      <div className="text-right">
                        <p className="text-xs text-emerald-200 line-through">{formatPKR(trip.price)}</p>
                        <span className="rounded-md bg-amber-400 px-2 py-0.5 text-xs font-extrabold text-emerald-950">-{trip.discount}%</span>
                      </div>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-emerald-100/80">per person · all hotels & transport included</p>
                </div>

                <div className="space-y-4 p-5">
                  <label className="block">
                    <span className="mb-1 flex items-center gap-1.5 text-xs font-bold text-slate-600"><CalendarDays size={13} className="text-emerald-600" /> Preferred date</span>
                    <input type="date" min={new Date().toISOString().slice(0, 10)} value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} />
                  </label>
                  <label className="block">
                    <span className="mb-1 flex items-center gap-1.5 text-xs font-bold text-slate-600"><Users size={13} className="text-emerald-600" /> Travelers</span>
                    <select value={people} onChange={(e) => setPeople(Number(e.target.value))} className={inputCls}>
                      {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>)}
                    </select>
                  </label>

                  {tier && (
                    <p className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                      <ShieldCheck size={14} /> Group discount applied: -{tier.pct}%
                    </p>
                  )}

                  <div className="space-y-1.5 border-t border-dashed border-slate-200 pt-3 text-sm">
                    <div className="flex justify-between text-slate-500"><span>{formatPKR(price)} × {people}</span><span>{formatPKR(price * people)}</span></div>
                    {tier && <div className="flex justify-between font-semibold text-emerald-700"><span>Bulk discount</span><span>-{formatPKR(price * people - total)}</span></div>}
                    <div className="flex justify-between pt-1 font-display text-base font-extrabold text-emerald-950"><span>Estimated total</span><span>{formatPKR(total)}</span></div>
                  </div>

                  <a href={waLink(waMsg)} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-[0.99]">
                    <WhatsAppIcon size={17} /> Book on WhatsApp
                  </a>
                  <button onClick={openCustom} className="w-full rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-200">
                    Send a Custom Inquiry
                  </button>

                  <div className="space-y-2 rounded-xl bg-emerald-50/70 p-3.5 text-xs text-slate-600 ring-1 ring-emerald-100">
                    <VerifiedShield label="Verified local operator" />
                    <p className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-600" /> Free cancellation up to 7 days</p>
                    <p className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-600" /> Replies within 2 hours, 9am–9pm PKT</p>
                    <p className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-600" /> No payment needed to reserve</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
