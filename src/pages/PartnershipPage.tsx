import { useState } from "react";
import { Handshake, Building2, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Reveal } from "../components/ui";

export default function PartnershipPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    partnershipType: "Tour Operator / B2B Partner",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* HERO WITH SKY BACKGROUND */}
      <section className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-18">
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
              <Handshake size={14} /> B2B & Global Collaboration
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-display text-4xl font-black text-white sm:text-6xl">
              Partner With <br />
              <span className="bg-gradient-to-r from-emerald-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                Skardu Alpine Adventure
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-slate-200">
              Skardu Alpine Adventures welcome you for any kind of partnerships in arranging outdoor events and adventures either as an institution, corporate organization, adventure club or as an individual travel company. We already have a partnership working experience with RMC adventure club. KMC Hiking club and BEDROCK adventures USA.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY PARTNER WITH US (LIGHT MODE) */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl hover:border-emerald-500/40">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-amber-100 text-amber-700 ring-1 ring-amber-200">
              <Building2 size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900">White-Label Ground Operations</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We operate seamlessly under your brand name in Pakistan, taking care of 4x4 transport, luxury accommodations, native high-altitude guides, camping logistics, and meals.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl hover:border-emerald-500/40">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
              <Globe2 size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900">Exclusive B2B Net Rates</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Gain access to competitive tier-based net pricing with high profit margins for your agency, priority booking for peak season slots, and flexible cancellation policies.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl hover:border-emerald-500/40">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-teal-100 text-teal-700 ring-1 ring-teal-200">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900">Full Safety & Compliance</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Official License from Department of Tourist Services (DTS), comprehensive liability coverage, satellite emergency links, and high-altitude rescue protocol readiness.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TYPES (LIGHT MODE) */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <h2 className="font-display text-2xl font-black text-slate-900 sm:text-3xl">Partnership Opportunities</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "International Travel Agencies & Outbound Tour Operators",
              "Corporate Retreats & Adventure Team Building",
              "Documentary Filming & Media Logistics Support",
              "Mountain Conservation & Eco-Tourism NGO Initiatives",
            ].map((text) => (
              <div key={text} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
                <CheckCircle2 className="shrink-0 text-emerald-600" size={20} />
                <span className="text-sm font-semibold text-slate-800">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP FORM (LIGHT MODE) */}
      <section className="mx-auto max-w-4xl px-6 py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-12">
          <div className="text-center">
            <h2 className="font-display text-3xl font-black text-slate-900">Become a Partner</h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill out the form below to request our B2B catalog, net rate sheet, or schedule a virtual discovery call.
            </p>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
              <CheckCircle2 className="mx-auto text-emerald-600" size={48} />
              <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">Partnership Inquiry Received!</h3>
              <p className="mt-2 text-sm text-slate-600">
                Thank you for reaching out. Our business development team will review your details and contact you within 24 hours with our B2B kit.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-bold text-emerald-700 hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Alpine Expeditions Int."
                    className="w-full rounded-xl bg-slate-50 py-3 px-4 text-sm text-slate-900 border border-slate-200 focus:border-emerald-600 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full rounded-xl bg-slate-50 py-3 px-4 text-sm text-slate-900 border border-slate-200 focus:border-emerald-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="partnerships@company.com"
                    className="w-full rounded-xl bg-slate-50 py-3 px-4 text-sm text-slate-900 border border-slate-200 focus:border-emerald-600 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 555 123 4567"
                    className="w-full rounded-xl bg-slate-50 py-3 px-4 text-sm text-slate-900 border border-slate-200 focus:border-emerald-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Partnership Type
                </label>
                <select
                  value={formData.partnershipType}
                  onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                  className="w-full rounded-xl bg-slate-50 py-3 px-4 text-sm text-slate-900 border border-slate-200 focus:border-emerald-600 focus:bg-white focus:outline-none"
                >
                  <option value="Tour Operator / B2B Partner">Outbound Tour Operator / Travel Agency</option>
                  <option value="White Label Logistics">White-Label Ground Services</option>
                  <option value="Corporate Event">Corporate Group / Retreat</option>
                  <option value="Media & Expeditions">Media, Film & Expeditions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Message / Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us briefly about your agency, estimated pax per year, or specific itineraries of interest..."
                  className="w-full rounded-xl bg-slate-50 py-3 px-4 text-sm text-slate-900 border border-slate-200 focus:border-emerald-600 focus:bg-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-amber-400 py-3.5 text-sm font-extrabold text-slate-950 shadow-md shadow-amber-400/20 transition hover:bg-amber-300"
              >
                Send Partnership Request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
