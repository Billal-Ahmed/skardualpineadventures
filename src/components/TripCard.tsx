import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, Clock, MoonStar, Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import type { Trip } from "../data/trips";
import { waLink } from "../data/trips";
import { useApp } from "../context/AppContext";
import { DifficultyBadge, WhatsAppIcon } from "./ui";

const compact = (v: number) => (v >= 1000 ? `Rs ${Math.round(v / 1000)}k` : `Rs ${v}`);

export default function TripCard({ trip, view = "grid" }: { trip: Trip; view?: "grid" | "list" }) {
  const { wishlist, toggleWish, toast } = useApp();
  const [img, setImg] = useState(0);
  const wished = wishlist.includes(trip.id);
  const price = trip.discount ? Math.round(trip.price * (1 - trip.discount / 100)) : trip.price;
  const msg = `Assalam o Alaikum! I'd like to reserve "${trip.title}" (${trip.days} days). Please share availability.`;

  const stop = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const heartBtn = (
    <button
      onClick={(e) => {
        stop(e);
        toggleWish(trip.id);
        toast(wished ? "Removed from wishlist" : "Saved to wishlist");
      }}
      aria-label="Toggle wishlist"
      className={`absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full backdrop-blur transition active:scale-90 ${
        wished ? "bg-rose-500 text-white" : "bg-emerald-950/40 text-white hover:bg-rose-500"
      }`}
    >
      <Heart size={16} fill={wished ? "currentColor" : "none"} strokeWidth={2.2} />
    </button>
  );

  const badges = (
    <div className="absolute left-3 top-3 z-20 flex gap-1.5">
      {trip.discount && <span className="rounded-full bg-amber-400 px-2.5 py-1 text-[11px] font-extrabold text-emerald-950 shadow">-{trip.discount}%</span>}
      {trip.badge && <span className="rounded-full bg-emerald-950/60 px-2.5 py-1 text-[11px] font-extrabold text-white ring-1 ring-white/25 backdrop-blur">{trip.badge}</span>}
    </div>
  );

  const dots = (
    <div className="absolute inset-x-0 bottom-3 z-20 flex items-center justify-center gap-1.5">
      {trip.images.map((_, i) => (
        <button
          key={i}
          aria-label={`Photo ${i + 1}`}
          onClick={(e) => {
            stop(e);
            setImg(i);
          }}
          className={`h-1.5 rounded-full transition-all duration-300 ${i === img ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`}
        />
      ))}
    </div>
  );

  const arrows = (
    <>
      <button
        onClick={(e) => {
          stop(e);
          setImg((x) => (x - 1 + trip.images.length) % trip.images.length);
        }}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-emerald-950/40 text-white opacity-0 backdrop-blur transition hover:bg-emerald-700 group-hover:opacity-100"
      >
        <ChevronLeft size={15} />
      </button>
      <button
        onClick={(e) => {
          stop(e);
          setImg((x) => (x + 1) % trip.images.length);
        }}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-emerald-950/40 text-white opacity-0 backdrop-blur transition hover:bg-emerald-700 group-hover:opacity-100"
      >
        <ChevronRight size={15} />
      </button>
    </>
  );

  const specs = (
    <div className="mt-3.5 grid grid-cols-3 divide-x divide-white/15 text-[12px] text-emerald-100/85">
      <span className="flex items-center gap-1.5 pr-2 font-semibold"><Clock size={13} className="text-amber-300" /> Days: <b className="text-white">{trip.days}</b></span>
      <span className="flex items-center justify-center gap-1.5 px-2 font-semibold"><MoonStar size={13} className="text-amber-300" /> Nights: <b className="text-white">{trip.nights}</b></span>
      <span className="flex items-center justify-end gap-1.5 pl-2 font-semibold">
        {trip.difficulty ? <DifficultyBadge level={trip.difficulty} /> : (<><Star size={13} className="text-amber-300" fill="currentColor" strokeWidth={0} /> <b className="text-white">{trip.rating.toFixed(1)}</b></>)}
      </span>
    </div>
  );

  const footer = (
    <div className="mt-4 flex items-center gap-3">
      <span className="rounded-full bg-white/15 px-4 py-2.5 font-display text-sm font-extrabold text-white ring-1 ring-white/20">
        {compact(price)}
      </span>
      <a
        href={waLink(msg)}
        target="_blank"
        rel="noreferrer"
        onClick={stop}
        aria-label="Reserve on WhatsApp"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-emerald-950 shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-amber-300 active:translate-y-0"
      >
        <WhatsAppIcon size={16} className="text-emerald-600" /> Reserve Now
      </a>
    </div>
  );

  /* ------------------------------ LIST ------------------------------ */
  if (view === "list") {
    return (
      <Link
        to={`/tour/${trip.id}`}
        className="group flex overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-950 shadow-lg ring-1 ring-emerald-900/50 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-emerald-950/30"
      >
        <div className="relative w-44 shrink-0 overflow-hidden sm:w-64">
          <img src={trip.images[img]} alt={trip.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-emerald-950/60" />
          {badges}
          {dots}
        </div>
        <div className="flex flex-1 flex-col p-5 text-white">
          <h3 className="font-display text-lg font-bold leading-snug text-white transition group-hover:text-amber-300">{trip.title}</h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-emerald-100/75">
            <MapPin size={12} className="text-amber-300" /> {trip.location}, Gilgit-Baltistan
          </p>
          {specs}
          <div className="mt-auto pt-4">{footer}</div>
        </div>
      </Link>
    );
  }

  /* ------------------------------ GRID ------------------------------ */
  return (
    <Link
      to={`/tour/${trip.id}`}
      className="group block overflow-hidden rounded-3xl bg-gradient-to-b from-emerald-900 to-emerald-950 shadow-lg ring-1 ring-emerald-900/50 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-950/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={trip.images[img]}
          alt={trip.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {/* legibility + blend into body */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-emerald-950/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-emerald-900 to-transparent" />
        {badges}
        {heartBtn}
        {arrows}
        {dots}
        <span title="Verified operator" className="absolute bottom-3 right-3 z-20 text-amber-300 drop-shadow">
          <CheckCircle2 size={17} strokeWidth={2.4} />
        </span>
      </div>

      <div className="px-5 pb-5 pt-1 text-white">
        <h3 className="line-clamp-2 min-h-[3rem] font-display text-[17px] font-bold leading-snug text-white transition group-hover:text-amber-300">
          {trip.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-emerald-100/75">
          <MapPin size={12} className="shrink-0 text-amber-300" /> {trip.location}, Gilgit-Baltistan
        </p>
        {specs}
        {footer}
      </div>
    </Link>
  );
}
