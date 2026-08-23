import { Link } from "react-router-dom";
import { FileText, CheckCircle2, ShieldCheck, Globe } from "lucide-react";
import { Reveal, WhatsAppIcon } from "../components/ui";
import { waLink } from "../data/trips";

export default function VisaInfoPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* HERO SECTION WITH SKY BACKGROUND */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sky.jpg"
            alt="Sky background"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 via-slate-900/60 to-slate-900/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 ring-1 ring-white/30 backdrop-blur-md">
              <Globe size={14} /> Travel Formalities
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-display text-4xl font-black text-white sm:text-6xl">
              Pakistan Visa & <br />
              <span className="bg-gradient-to-r from-emerald-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                Trekking Permits (NOC) Guide
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-slate-200">
              Complete step-by-step information on securing your Pakistan Tourist E-Visa, Visa on Arrival eligibility, and official Letters of Invitation (LOI) provided by Skardu Alpine Adventure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VISA TYPES CARDS (LIGHT MODE) */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl hover:border-emerald-500/40">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
              <Globe size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900">1. Tourist E-Visa</h3>
            <p className="mt-2 text-xs font-bold uppercase text-amber-600">Most Popular Option</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Citizens of over 190 countries can apply online through the official Pakistan NADRA E-Visa Portal. Processing typically takes 7 to 10 working days.
            </p>
            <ul className="mt-6 space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> Valid for 30 to 90 days</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> Single or Multiple Entry</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> LOI letter attached</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-amber-300 bg-white p-8 shadow-md ring-1 ring-amber-400/20">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-amber-100 text-amber-700 ring-1 ring-amber-200">
              <FileText size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900">2. Visa In Your Inbox (LOI)</h3>
            <p className="mt-2 text-xs font-bold uppercase text-emerald-700">Guaranteed LOI Assistance</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              When booking a trip with Skardu Alpine Adventure, we issue an official DTS-stamped Letter of Invitation (LOI) and tour itinerary required by embassy officials.
            </p>
            <ul className="mt-6 space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> Free with booked tour package</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> Government license number included</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> Instant PDF delivery</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl hover:border-emerald-500/40">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-teal-100 text-teal-700 ring-1 ring-teal-200">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900">3. Trekking Permits (NOC)</h3>
            <p className="mt-2 text-xs font-bold uppercase text-teal-700">Restricted Zone Access</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Expeditions in restricted zones (e.g. K2 Basecamp, Concordia, Snow Lake, Biafo-Hispar) require a Gilgit-Baltistan Tourism Department permit.
            </p>
            <ul className="mt-6 space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> Processed by Skardu Alpine team</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> Includes Liaison Officer allocation</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600" /> Search & Rescue insurance mandate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW TO APPLY STEPS (LIGHT MODE) */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-center font-display text-3xl font-black text-slate-900">
          Step-by-Step E-Visa Application Process
        </h2>

        <div className="mt-12 space-y-6">
          {[
            {
              step: "01",
              title: "Book your Tour or Trek with Us",
              desc: "Select your desired itinerary (or custom tour). Once confirmed, we generate your official Letter of Invitation (LOI), hotel vouchers, and company license proof.",
            },
            {
              step: "02",
              title: "Visit the Official NADRA E-Visa Portal",
              desc: "Go to visa.nadra.gov.pk, create an account, and select 'Tourist Visa - Individual'. Fill in your travel dates and personal passport details.",
            },
            {
              step: "03",
              title: "Upload Required Documents",
              desc: "Upload a copy of your passport photo page, passport-sized photo, and the LOI + Tour Itinerary PDF provided by Skardu Alpine Adventure.",
            },
            {
              step: "04",
              title: "Pay Visa Fee & Receive E-Visa",
              desc: "Pay the online visa processing fee (approx $35-$60 USD depending on nationality). Receive your approved E-Visa PDF via email within 7-10 days.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:gap-8"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-amber-400 font-display text-2xl font-black text-slate-950 shadow-md">
                {s.step}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALLOUT BOX */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="rounded-3xl bg-emerald-900 p-8 shadow-2xl md:p-12 text-white">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="font-display text-2xl font-black text-white">Need an Urgent Letter of Invitation (LOI)?</h3>
              <p className="mt-2 text-sm text-emerald-100/90">
                Contact our support team with your booking reference to receive your LOI within 24 hours.
              </p>
            </div>
            <a
              href={waLink("Hello! I need assistance with LOI letter for Pakistan E-Visa.")}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full bg-amber-400 px-7 py-3.5 text-xs font-extrabold text-slate-950 transition hover:bg-amber-300 shadow-md"
            >
              Request LOI Letter Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
