import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { Reveal, WhatsAppIcon } from "../components/ui";
import { waLink } from "../data/trips";

const CATEGORIZED_FAQS = [
  {
    category: "General & Planning",
    items: [
      {
        q: "When is the best time to visit Skardu & Gilgit-Baltistan?",
        a: "The prime season for touring and trekking is from May to October. Cherry Blossom season occurs in April, Autumn foliage peaks in October, while high-altitude treks like K2 Basecamp are best between mid-June and late August.",
      },
      {
        q: "How do we travel to Skardu from Islamabad?",
        a: "You can either take a scenic 1-hour direct flight from Islamabad to Skardu Airport (SKD) or travel via the Karakoram Highway (KKH) and Skardu Road by 4x4 vehicle (approx. 18-20 hours drive with overnight stopovers in Naran or Besham).",
      },
      {
        q: "Is Skardu safe for foreign tourists and solo travelers?",
        a: "Yes! Gilgit-Baltistan is renowned as one of the safest, most hospitable regions in South Asia. Local communities are warm and welcoming. We also provide dedicated licensed guides and 24/7 ground support.",
      },
    ],
  },
  {
    category: "Booking & Payments",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept international bank wire transfers, credit/debit cards (Visa/Mastercard), EasyPaisa/JazzCash, and cash in USD, EUR, GBP, or PKR upon arrival.",
      },
      {
        q: "What is your cancellation and refund policy?",
        a: "Cancellations made 30 days prior to departure receive a 90% refund. Cancellations between 15-30 days receive a 50% refund. For details, view our full policy or contact our team.",
      },
      {
        q: "Do you provide custom private tours?",
        a: "Absolutely! Over 60% of our guests choose customized private tours tailored to family size, dates, luxury preference, or specific photography interests.",
      },
    ],
  },
  {
    category: "Trekking & High Altitude",
    items: [
      {
        q: "What fitness level is required for K2 Basecamp Trek?",
        a: "K2 Basecamp (Concordia) is a strenuous 14-16 day trek. Good cardio endurance, physical stamina, and prior hiking experience are recommended. We provide qualified guides, porters, and oxygen support.",
      },
      {
        q: "How do you handle altitude sickness (AMS)?",
        a: "Our itineraries feature built-in acclimatization days. Our guides carry pulse oximeters, medical first-aid kits, and emergency oxygen. We also maintain satellite link capability for rapid evacuation if necessary.",
      },
      {
        q: "What gear is provided vs what should I bring?",
        a: "We provide high-grade dome tents, mess tents, mattresses, cooking gear, and group equipment. Guests should bring personal sleeping bags (-10°C to -15°C rated), worn-in trekking boots, thermal layers, and daypacks.",
      },
    ],
  },
  {
    category: "Visas & NOC Permits",
    items: [
      {
        q: "Do I need a Visa for Pakistan?",
        a: "Yes, most foreign nationals require an E-Visa. Pakistan offers an online Tourist Visa application process. We issue official Letters of Invitation (LOI) to assist your application.",
      },
      {
        q: "Are special permits (NOC) required for restricted areas?",
        a: "For restricted trek zones (e.g. Baltoro, K2, Concordia, Biafo), a Gilgit-Baltistan Tourism Department permit and licensed guide are mandatory. We handle all NOC paperwork for registered group members.",
      },
    ],
  },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<string | null>("General & Planning-0");

  const categories = ["All", ...CATEGORIZED_FAQS.map((c) => c.category)];

  const filteredCategories = CATEGORIZED_FAQS.map((cat) => {
    if (activeCategory !== "All" && cat.category !== activeCategory) return null;
    const matchingItems = cat.items.filter(
      (item) =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    );
    if (matchingItems.length === 0) return null;
    return { ...cat, items: matchingItems };
  }).filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* HERO SECTION WITH SKY BACKGROUND */}
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
              <HelpCircle size={14} /> Knowledge Base & FAQ
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-display text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-4 max-w-xl text-slate-200">
              Find answers regarding tour bookings, weather, trekking permits, visa requirements, and ground logistics in Gilgit-Baltistan.
            </p>
          </Reveal>

          {/* SEARCH BAR (LIGHT MODE) */}
          <Reveal delay={250} className="mx-auto mt-8 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions (e.g. visa, flight, K2, weather...)"
                className="w-full rounded-2xl bg-white py-4 pl-12 pr-4 text-sm text-slate-900 placeholder-slate-400 border border-slate-200 shadow-xl focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          </Reveal>

          {/* CATEGORY TABS (LIGHT MODE) */}
          <Reveal delay={300} className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition ${
                  activeCategory === cat
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                    : "bg-white/90 text-slate-800 border border-slate-200 hover:bg-white hover:text-emerald-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ACCORDION LIST (LIGHT MODE) */}
      <section className="mx-auto max-w-4xl px-6 pt-12">
        {filteredCategories.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <p className="text-lg text-slate-500">No matching questions found for "{search}".</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); }}
              className="mt-4 text-sm font-bold text-emerald-700 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          filteredCategories.map((catGroup) => (
            <div key={catGroup!.category} className="mb-10">
              <h2 className="mb-4 font-display text-xl font-black text-emerald-950">
                {catGroup!.category}
              </h2>
              <div className="space-y-3">
                {catGroup!.items.map((item, idx) => {
                  const key = `${catGroup!.category}-${idx}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={item.q}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : key)}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-slate-900 transition hover:text-emerald-700"
                      >
                        <span className="text-base">{item.q}</span>
                        <ChevronDown
                          size={18}
                          className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-emerald-600" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="border-t border-slate-100 bg-slate-50/80 p-5 text-sm leading-relaxed text-slate-600 animate-fade-up">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </section>

      {/* STILL HAVE QUESTIONS (LIGHT MODE) */}
      <section className="mx-auto max-w-4xl px-6 pt-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg md:p-10">
          <h3 className="font-display text-2xl font-black text-slate-900">Have more specific questions?</h3>
          <p className="mt-2 text-sm text-slate-600">
            Our Karakoram travel advisors are available 24/7 via WhatsApp and email to assist you.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={waLink("Hello! I have a question about travelling to Skardu.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-extrabold text-white transition hover:bg-emerald-700 shadow-md"
            >
              <WhatsAppIcon size={16} /> WhatsApp Inquiry
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-xs font-bold text-slate-800 border border-slate-200 transition hover:bg-slate-200"
            >
              <MessageSquare size={16} /> Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
