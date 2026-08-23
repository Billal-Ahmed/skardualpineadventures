import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { PaymentLogos, WhatsAppIcon } from "./ui";
import { waLink } from "../data/trips";

export const SOCIALS = [
  { label: "Facebook", url: "https://facebook.com", d: "M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5z" },
  { label: "Instagram", url: "https://instagram.com", d: "M12 8.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm0 5.3a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM16.9 8.4a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 6.3c1.9 0 2.1 0 2.9.1 2 .1 2.9 1 3 3 .1.8.1 1 .1 2.6s0 1.8-.1 2.6c-.1 2-1 2.9-3 3-.8.1-1 .1-2.9.1s-2.1 0-2.9-.1c-2-.1-2.9-1-3-3-.1-.8-.1-1-.1-2.6s0-1.8.1-2.6c.1-2 1-2.9 3-3 .8-.1 1-.1 2.9-.1zM12 5c-1.9 0-2.2 0-2.9.1-2.7.1-4.1 1.5-4.2 4.2-.1.7-.1 1-.1 2.7s0 2 .1 2.7c.1 2.7 1.5 4.1 4.2 4.2.7.1 1 .1 2.9.1s2.2 0 2.9-.1c2.7-.1 4.1-1.5 4.2-4.2.1-.7.1-1 .1-2.7s0-2-.1-2.7c-.1-2.7-1.5-4.1-4.2-4.2-.7-.1-1-.1-2.9-.1z" },
  { label: "LinkedIn", url: "https://linkedin.com", d: "M8.3 18.5H5.7V10h2.6v8.5zM7 8.8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11.5 9.7h-2.6v-4.1c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.2h-2.6V10h2.5v1.2h.1c.3-.7 1.2-1.4 2.5-1.4 2.7 0 3.1 1.7 3.1 4v4.7z" },
  { label: "Twitter", url: "https://x.com", d: "M17.8 7.5h2.4l-5.3 6 6.2 8h-4.9l-3.8-5-4.4 5H5.6l5.6-6.4L5.3 7.5h5l3.4 4.6 4.1-4.6zm-.8 12.6h1.3L9.8 8.8H8.4l8.6 11.3z" },
];

const COLS = [
  {
    h: "Quick Links",
    links: [
      { name: "Home", to: "/" },
      { name: "All Tours", to: "/tours" },
      { name: "Trekking Expeditions", to: "/treks" },
      { name: "Our Services", to: "/services" },
    ],
  },
  {
    h: "Company",
    links: [
      { name: "About us", to: "/about" },
      { name: "FAQ", to: "/faq" },
      { name: "Visa Info", to: "/visa-info" },
      { name: "Partnership", to: "/partnership" },
    ],
  },
  {
    h: "Help & Support",
    links: [
      { name: "Contact Us", to: "/contact" },
      { name: "Pakistan E-Visa Guide", to: "/visa-info" },
      { name: "B2B Ground Operator", to: "/partnership" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {COLS.map((c) => (
          <div key={c.h}>
            <h4 className="mb-4 font-display text-base font-bold text-white">{c.h}</h4>
            <ul className="space-y-2.5 text-sm">
              {c.links.map((l) => (
                <li key={l.name}>
                  <Link to={l.to} className="group inline-flex items-center gap-1.5 transition hover:text-amber-300">
                    <span className="h-px w-0 bg-amber-300 transition-all duration-300 group-hover:w-3" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="mb-4 font-display text-base font-bold text-white">Find Us On</h4>
          <div className="mb-6 flex gap-2.5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-amber-400 hover:text-emerald-950">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
              </a>
            ))}
          </div>
          <h4 className="mb-3 font-display text-base font-bold text-white">Payment Methods</h4>
          <PaymentLogos dark />
          <div className="mt-6 space-y-2 text-sm">
            <p className="flex items-center gap-2"><Phone size={13} className="text-amber-300" />+923455314373 </p>
            <p className="flex items-center gap-2"><Mail size={13} className="text-amber-300" /> skardualpine@gmail.com</p>
            <p className="flex items-center gap-2"><MapPin size={13} className="text-amber-300" /> Shangrila Road, Skardu, GB</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs sm:flex-row">
          <div className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#059669" /><path d="M6 23l6.5-11 4 6 3-4.5L26 23z" fill="#fff" /><circle cx="22" cy="9" r="2.6" fill="#fbbf24" /></svg>
            <span className="font-display text-sm font-extrabold text-white">Skardu Alpine <span className="text-amber-300">Adventure</span></span>
          </div>
          <p>© 2026 skardualpineadventure.com · All rights reserved.</p>
          <a href={waLink("Hello!")} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 font-bold text-emerald-400 transition hover:text-amber-300">
            <WhatsAppIcon size={14} /> Chat with us <Send size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}
