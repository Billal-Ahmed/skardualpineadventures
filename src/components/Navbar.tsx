import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, Sparkles } from "lucide-react";
import { useApp } from "../context/AppContext";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-full bg-emerald-600/10 ring-1 ring-emerald-600/30 transition group-hover:bg-emerald-600/20 group-hover:ring-amber-500/50">
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
          <path d="M4 25l8-14 5 7.5L20.5 14 28 25z" fill="#059669" />
          <path d="M12 11l2.4 4.2L12 18l-2.6-2.6z" fill="#10b981" />
          <circle cx="23" cy="8.5" r="3" fill="#f59e0b" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
          Skardu Alpine
        </span>
        <span className="block text-[9px] font-bold uppercase tracking-[0.32em] text-emerald-700">
          Adventure
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const { openCustom, openAuth } = useApp();
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setMobile(false), [pathname]);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Tours", to: "/tours" },
    { label: "Treks", to: "/treks" },
    { label: "About us", to: "/about" },
    { label: "FAQ", to: "/faq" },
    { label: "Visa Info", to: "/visa-info" },
    { label: "Partnership", to: "/partnership" },
    { label: "Contact us", to: "/contact" },
  ];

  const isLinkActive = (to: string) => {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 pt-3 pb-2 -mb-20 sm:-mb-24 transition-all duration-300 pointer-events-none">
      {/* LIGHT COLOR ROUNDED BLUR NAV CONTAINER */}
      <div
        className={`pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4 rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-2xl border border-emerald-500/30 shadow-2xl shadow-slate-900/15 ring-1 ring-emerald-500/20 text-slate-900"
            : "bg-white/80 backdrop-blur-xl border border-white/90 shadow-xl shadow-slate-900/10 text-slate-800"
        }`}
      >
        {/* LOGO */}
        <Logo />

        {/* DESKTOP NAV LINKS (LIGHT GLASS STYLING) */}
        <nav className="hidden items-center gap-0.5 rounded-full bg-slate-100/80 p-1 ring-1 ring-slate-900/5 lg:flex backdrop-blur-md">
          {navItems.map((item) => {
            const active = isLinkActive(item.to);
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`rounded-full px-3.5 py-1.5 text-xs xl:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                  active
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/25"
                    : "text-slate-700 hover:bg-slate-200/70 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-2 sm:gap-3 lg:flex">
          <button
            onClick={openCustom}
            className="flex items-center gap-1.5 rounded-full bg-amber-400 px-4 py-1.5 text-xs xl:text-sm font-extrabold text-slate-950 shadow-md shadow-amber-400/30 transition-all hover:scale-105 hover:bg-amber-300 active:scale-95 whitespace-nowrap"
          >
            <Sparkles size={13} /> Custom Tour
          </button>
          <button
            onClick={() => openAuth("login")}
            className="flex items-center gap-1 text-xs font-bold text-slate-700 transition hover:text-emerald-700"
          >
            <LogIn size={14} /> Login
          </button>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-800 ring-1 ring-slate-200 transition hover:bg-slate-200 lg:hidden"
          onClick={() => setMobile(true)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* MOBILE SHEET WITH LIGHT BLUR EFFECT */}
      {mobile && (
        <div className="fixed inset-0 z-[60] lg:hidden pointer-events-auto">
          <div
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity"
            onClick={() => setMobile(false)}
          />
          <div className="absolute right-2 top-2 bottom-2 flex w-80 max-w-[calc(100vw-1rem)] flex-col gap-1 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-2xl backdrop-blur-2xl animate-fade-up overflow-y-auto text-slate-900">
            <div className="mb-4 flex items-center justify-between pb-3 border-b border-slate-100">
              <Logo onClick={() => setMobile(false)} />
              <button
                onClick={() => setMobile(false)}
                className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-1 my-2">
              {navItems.map((item) => {
                const active = isLinkActive(item.to);
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setMobile(false)}
                    className={`rounded-2xl px-4 py-2.5 text-sm font-bold transition ${
                      active
                        ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <button
              onClick={() => {
                setMobile(false);
                openCustom();
              }}
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-4 py-3 font-extrabold text-slate-950 shadow-lg shadow-amber-400/20"
            >
              <Sparkles size={16} /> Plan Custom Tour
            </button>

            <div className="mt-auto pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobile(false);
                  openAuth("login");
                }}
                className="rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-800 ring-1 ring-slate-200"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobile(false);
                  openAuth("signup");
                }}
                className="rounded-xl bg-emerald-700 px-4 py-2.5 text-xs font-bold text-white shadow-md"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
