import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { X, Check, Send, Loader2, Compass, Lock } from "lucide-react";
import { DESTINATIONS, waLink, WHATSAPP_NUMBER } from "../data/trips";
import { WhatsAppIcon } from "../components/ui";

type AuthMode = "login" | "signup";

interface Ctx {
  wishlist: string[];
  toggleWish: (id: string) => void;
  openCustom: () => void;
  openAuth: (m: AuthMode) => void;
  toast: (msg: string) => void;
}

const AppCtx = createContext<Ctx | null>(null);
export const useApp = () => {
  const c = useContext(AppCtx);
  if (!c) throw new Error("useApp outside provider");
  return c;
};

/* ================================================================== */

export function AppProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("saa-wish") || "[]");
    } catch {
      return [];
    }
  });
  const [customOpen, setCustomOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("saa-wish", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (!toastMsg) return;
    const t = setTimeout(() => setToastMsg(null), 3200);
    return () => clearTimeout(t);
  }, [toastMsg]);

  useEffect(() => {
    document.body.style.overflow = customOpen || authMode ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [customOpen, authMode]);

  const toggleWish = useCallback((id: string) => {
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));
  }, []);

  const toast = useCallback((m: string) => setToastMsg(m), []);

  return (
    <AppCtx.Provider value={{ wishlist, toggleWish, openCustom: () => setCustomOpen(true), openAuth: (m) => setAuthMode(m), toast }}>
      {children}
      {customOpen && <CustomTourModal close={() => setCustomOpen(false)} />}
      {authMode && <AuthModal mode={authMode} switchMode={(m) => setAuthMode(m)} close={() => setAuthMode(null)} />}
      <WhatsAppFloat />
      {toastMsg && (
        <div className="fixed bottom-24 right-5 z-[70] flex items-center gap-2 rounded-xl bg-emerald-950 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-950/30 animate-fade-up">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500"><Check size={13} strokeWidth={3} /></span>
          {toastMsg}
        </div>
      )}
    </AppCtx.Provider>
  );
}

/* ---------------- floating WhatsApp ---------------- */
function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 animate-fade-up">
          <div className="flex items-center gap-3 bg-emerald-600 px-4 py-3 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15"><WhatsAppIcon size={22} /></span>
            <div>
              <p className="font-display text-sm font-bold leading-tight">Skardu Alpine Adventures</p>
              <p className="flex items-center gap-1.5 text-[11px] text-emerald-100"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Typically replies in minutes</p>
            </div>
          </div>
          <div className="space-y-3 p-4">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-emerald-50 px-3.5 py-2.5 text-[13px] leading-snug text-slate-700 ring-1 ring-emerald-100">
              Salam! 👋 Planning a trip to Skardu, Hunza or K2? Send us your dates and we'll craft the perfect itinerary.
            </div>
            <a
              href={waLink("Assalam o Alaikum! I'd like to plan a trip with Skardu Alpine Adventures.")}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-700 active:scale-[0.98]"
            >
              <WhatsAppIcon size={16} /> Start Chat
            </a>
            <p className="text-center text-[11px] text-slate-400">+{WHATSAPP_NUMBER.replace(/(\d{2})(\d{3})(\d{7})/, "$1 $2 $3")}</p>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/40 transition hover:scale-105 active:scale-95 animate-ring"
      >
        <WhatsAppIcon size={28} />
        {!open && (
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-emerald-950 px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
            Chat with us
          </span>
        )}
      </button>
    </div>
  );
}

/* ---------------- shared modal shell ---------------- */
function ModalShell({ children, close, wide = false }: { children: ReactNode; close: () => void; wide?: boolean }) {
  return (
    <div className="fixed inset-0 z-[65] flex items-end justify-center p-0 sm:items-center sm:p-6" role="dialog" aria-modal>
      <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-sm" onClick={close} />
      <div className={`relative max-h-[92vh] w-full ${wide ? "max-w-2xl" : "max-w-md"} overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl animate-fade-up`}>
        <button onClick={close} aria-label="Close" className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-rose-100 hover:text-rose-600">
          <X size={17} />
        </button>
        {children}
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20";

/* ---------------- custom tour modal ---------------- */
function CustomTourModal({ close }: { close: () => void }) {
  const { toast } = useApp();
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", dest: "Skardu", kind: "Tour", days: "5", budget: "50,000 – 100,000", travelers: "2", notes: "" });
  const [err, setErr] = useState("");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) {
      setErr("Please add your name and a WhatsApp number or email.");
      return;
    }
    setErr("");
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setSent(true);
      toast("Trip request received!");
    }, 900);
  };

  const waMsg = `Assalam o Alaikum! Custom trip request:%0A• Name: ${form.name}%0A• Destination: ${form.dest}%0A• Type: ${form.kind}%0A• Days: ${form.days}%0A• Travelers: ${form.travelers}%0A• Budget: PKR ${form.budget}%0A• Notes: ${form.notes || "—"}`;

  return (
    <ModalShell close={close}>
      {sent ? (
        <div className="px-8 py-14 text-center">
          <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600"><Check size={30} strokeWidth={3} /></div>
          <h3 className="font-display text-2xl font-bold text-emerald-950">Request Received!</h3>
          <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
            Our trip designers will reply within 2 hours with a tailored {form.kind.toLowerCase()} plan for {form.dest}. Prefer instant answers?
          </p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-95">
            <WhatsAppIcon size={16} /> Continue on WhatsApp
          </a>
        </div>
      ) : (
        <form onSubmit={submit} className="p-7 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-600 text-white"><Compass size={22} /></span>
            <div>
              <h3 className="font-display text-xl font-bold text-emerald-950">Customize Your Tour</h3>
              <p className="text-xs text-slate-500">Pick your hotels, pick your sights — we build the rest.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-1"><span className="mb-1 block text-xs font-bold text-slate-600">Full Name *</span>
              <input className={inputCls} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. Ali Ahmed" /></label>
            <label className="sm:col-span-1"><span className="mb-1 block text-xs font-bold text-slate-600">WhatsApp / Email *</span>
              <input className={inputCls} value={form.contact} onChange={(e) => set("contact", e.target.value)} placeholder="+92 3xx xxxxxxx" /></label>
            <label><span className="mb-1 block text-xs font-bold text-slate-600">Destination</span>
              <select className={inputCls} value={form.dest} onChange={(e) => set("dest", e.target.value)}>
                {DESTINATIONS.map((d) => <option key={d.name}>{d.name}</option>)}
                <option>K2 Base Camp</option>
              </select></label>
            <label><span className="mb-1 block text-xs font-bold text-slate-600">Trip Type</span>
              <select className={inputCls} value={form.kind} onChange={(e) => set("kind", e.target.value)}>
                <option>Tour</option><option>Trek</option><option>Honeymoon</option><option>Family</option>
              </select></label>
            <label><span className="mb-1 block text-xs font-bold text-slate-600">Days</span>
              <input type="number" min={1} max={30} className={inputCls} value={form.days} onChange={(e) => set("days", e.target.value)} /></label>
            <label><span className="mb-1 block text-xs font-bold text-slate-600">Travelers</span>
              <select className={inputCls} value={form.travelers} onChange={(e) => set("travelers", e.target.value)}>
                {["1", "2", "3", "4", "5", "6", "8+"].map((n) => <option key={n}>{n}</option>)}
              </select></label>
            <label className="sm:col-span-2"><span className="mb-1 block text-xs font-bold text-slate-600">Budget per person (PKR)</span>
              <select className={inputCls} value={form.budget} onChange={(e) => set("budget", e.target.value)}>
                <option>Under 50,000</option><option>50,000 – 100,000</option><option>100,000 – 150,000</option><option>150,000+</option>
              </select></label>
            <label className="sm:col-span-2"><span className="mb-1 block text-xs font-bold text-slate-600">Anything special?</span>
              <textarea rows={3} className={inputCls} value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Honeymoon setup, vegetarian meals, photography stops…" /></label>
          </div>
          {err && <p className="mt-3 rounded-lg bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600 ring-1 ring-rose-200">{err}</p>}
          <button disabled={busy} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700 active:scale-[0.99] disabled:opacity-60">
            {busy ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} Submit Request
          </button>
        </form>
      )}
    </ModalShell>
  );
}

/* ---------------- auth modal ---------------- */
function AuthModal({ mode, close, switchMode }: { mode: AuthMode; close: () => void; switchMode: (m: AuthMode) => void }) {
  const { toast } = useApp();
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", pass: "" });
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.includes("@") || form.pass.length < 6) {
      setErr("Enter a valid email and a password of at least 6 characters.");
      return;
    }
    setErr("");
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setDone(true);
      toast(mode === "login" ? "Welcome back!" : "Account created!");
      setTimeout(close, 1200);
    }, 800);
  };

  return (
    <ModalShell close={close}>
      <div className="p-7 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-600 text-white"><Lock size={20} /></span>
          <div>
            <h3 className="font-display text-xl font-bold text-emerald-950">{mode === "login" ? "Welcome back" : "Create your account"}</h3>
            <p className="text-xs text-slate-500">Save wishlists, bookings and trip drafts.</p>
          </div>
        </div>
        <div className="mb-5 grid grid-cols-2 rounded-xl bg-slate-100 p-1 text-sm font-bold">
          {(["login", "signup"] as AuthMode[]).map((m) => (
            <button key={m} onClick={() => switchMode(m)} className={`rounded-lg py-2 transition ${mode === m ? "bg-white text-emerald-700 shadow" : "text-slate-500 hover:text-slate-700"}`}>
              {m === "login" ? "Login" : "Sign Up"}
            </button>
          ))}
        </div>
        {done ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600"><Check size={26} strokeWidth={3} /></div>
            <p className="font-display font-bold text-emerald-950">{mode === "login" ? "Logged in successfully" : "Account created"}</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            {mode === "signup" && (
              <label><span className="mb-1 block text-xs font-bold text-slate-600">Full Name</span>
                <input className={inputCls} value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Your name" /></label>
            )}
            <label><span className="mb-1 block text-xs font-bold text-slate-600">Email</span>
              <input className={inputCls} value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="you@email.com" /></label>
            <label><span className="mb-1 block text-xs font-bold text-slate-600">Password</span>
              <input type="password" className={inputCls} value={form.pass} onChange={(e) => setForm((f) => ({ ...f, pass: e.target.value }))} placeholder="••••••••" /></label>
            {err && <p className="rounded-lg bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600 ring-1 ring-rose-200">{err}</p>}
            <button disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700 disabled:opacity-60">
              {busy && <Loader2 size={16} className="animate-spin" />} {mode === "login" ? "Login" : "Create Account"}
            </button>
          </form>
        )}
      </div>
    </ModalShell>
  );
}
