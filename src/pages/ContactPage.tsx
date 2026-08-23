import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { Reveal, WhatsAppIcon } from "../components/ui";
import { waLink } from "../data/trips";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
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
              <MessageSquare size={14} /> Get In Touch
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-display text-4xl font-black text-white sm:text-6xl">
              Contact <br />
              <span className="bg-gradient-to-r from-emerald-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                Skardu Alpine Adventure
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-xl text-slate-200">
              Our travel specialists in Skardu and Islamabad are ready to answer your questions, assist with customized tours, and handle booking reservations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTENT GRID (LIGHT MODE) */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* CONTACT INFO CARDS (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 space-y-6 shadow-sm">
              <h3 className="font-display text-2xl font-bold text-slate-900">Direct Contacts</h3>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-100 text-amber-700 ring-1 ring-amber-200">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone & WhatsApp</h4>
                  <p className="mt-1 font-bold text-slate-900 text-base">+923156196112  </p>
                  <p className="text-xs text-slate-500">+923555555284 </p>
                  <p className="text-xs text-slate-500">+925815553441 Landline (Office) </p>

                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</h4>
                  <p className="mt-1 font-bold text-slate-900 text-base">skardualpine@gmail.com </p>
                  <p className="text-xs text-slate-500">info@skardualpineadventures.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-100 text-teal-700 ring-1 ring-teal-200">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Head Office Location</h4>
                  <p className="mt-1 font-bold text-slate-900 text-base">Shangrila Road, Skardu City</p>
                  <p className="text-xs text-slate-500">Gilgit-Baltistan, Pakistan 16100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-purple-100 text-purple-700 ring-1 ring-purple-200">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Working Hours</h4>
                  <p className="mt-1 font-bold text-slate-900 text-sm">Mon – Sat: 9:00 AM – 7:00 PM (PKT)</p>
                  <p className="text-xs text-slate-500">Sunday: Closed (Tour Ops 24/7 Active)</p>
                </div>
              </div>
            </div>

            {/* INSTANT WHATSAPP CTA */}
            <div className="rounded-3xl border border-emerald-200 bg-emerald-900 p-6 shadow-xl text-center text-white">
              <h4 className="font-display text-xl font-bold text-white">Need Instant Assistance?</h4>
              <p className="mt-2 text-xs text-emerald-100/90">
                Chat directly with our native guide team on WhatsApp for real-time response.
              </p>
              <a
                href={waLink("Hello! I want to inquire about a tour to Skardu.")}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-xs font-extrabold text-slate-950 transition hover:bg-amber-300 shadow-md"
              >
                <WhatsAppIcon size={16} /> Open WhatsApp Chat
              </a>
            </div>
          </div>

          {/* CONTACT FORM (7 cols - LIGHT MODE) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-10">
              <h3 className="font-display text-2xl font-bold text-slate-900">Send Us a Message</h3>
              <p className="mt-1 text-xs text-slate-500">We respond to all inquiries within 2-4 business hours.</p>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
                  <CheckCircle2 className="mx-auto text-emerald-600" size={48} />
                  <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Thank you, {form.name || "Adventurer"}. Our team has received your message and will reach out shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-bold text-emerald-700 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl bg-slate-50 py-3 px-4 text-sm text-slate-900 border border-slate-200 focus:border-emerald-600 focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl bg-slate-50 py-3 px-4 text-sm text-slate-900 border border-slate-200 focus:border-emerald-600 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="text"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 234 567 890"
                        className="w-full rounded-xl bg-slate-50 py-3 px-4 text-sm text-slate-900 border border-slate-200 focus:border-emerald-600 focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Inquiry Subject
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full rounded-xl bg-slate-50 py-3 px-4 text-sm text-slate-900 border border-slate-200 focus:border-emerald-600 focus:bg-white focus:outline-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Tour Booking">Tour Booking Assistance</option>
                        <option value="Trek Reservation">Trekking Expedition Inquiry</option>
                        <option value="Custom Itinerary">Customized Tour Request</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please let us know your travel dates, group size, and any special requests..."
                      className="w-full rounded-xl bg-slate-50 py-3 px-4 text-sm text-slate-900 border border-slate-200 focus:border-emerald-600 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-emerald-600 py-3.5 text-sm font-extrabold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
                  >
                    Submit Message <Send size={15} className="inline ml-1.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
