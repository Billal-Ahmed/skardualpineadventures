import { Link } from "react-router-dom";
import { MountainSnow, ShieldCheck, HeartHandshake, Compass, Users, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal, WhatsAppIcon } from "../components/ui";
import { waLink } from "../data/trips";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO SECTION WITH SKY BACKGROUND */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sky.jpg"
            alt="Sky background"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 via-slate-900/60 to-slate-900/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 ring-1 ring-white/30 backdrop-blur-md">
              <MountainSnow size={14} /> Who We Are
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-display text-4xl font-black text-white sm:text-6xl lg:text-7xl">
              Explore Skardu with Local Expertise & <br />
              <span className="bg-gradient-to-r from-emerald-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                Medical Care
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-200 sm:text-lg">
              Based in Skardu, Gilgit-Baltistan, Skardu Alpine Adventures is a licensed high-altitude expedition operator committed to sustainable eco-tourism, local community empowerment, and unforgettable alpine journeys.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP (LIGHT MODE) */}
      <section className="border-y border-slate-200/80 bg-white py-10 shadow-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          <div>
            <div className="font-display text-3xl font-black text-amber-500 sm:text-4xl">15+</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">Years Experience</div>
          </div>
          <div>
            <div className="font-display text-3xl font-black text-emerald-600 sm:text-4xl">10,000+</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">Happy Adventurers</div>
          </div>
          <div>
            <div className="font-display text-3xl font-black text-teal-600 sm:text-4xl">100%</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">Safety Track Record</div>
          </div>
          <div>
            <div className="font-display text-3xl font-black text-amber-600 sm:text-4xl">50+</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">Native High-Altitude Guides</div>
          </div>
        </div>
      </section>

      {/* OUR STORY & VALUES (LIGHT MODE) */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Our Heritage</span>
              <h2 className="font-display text-3xl font-black text-slate-900 sm:text-4xl">
                Expertly Guided, Physician-Backed Mountain Adventures
              </h2>
              <p className="leading-relaxed text-slate-600">
                Skardu Alpine Adventures was founded by a local medical doctor specialized in Public Health and Nutrition. His passion for tourism began through his family’s tourism business and later grew during his student years working as a mountain trekking guide (Licensed in 2009). He subsequently served as a mountain physician on K2 Concordia trekking and mountaineering expeditions.
              </p>
              <p className="leading-relaxed text-slate-600">
                Combining his medical expertise with years of experience in the tourism industry and strong PR in the region, he established Skardu Alpine Adventures to provide safe, personalized, and memorable travel experiences. We specialize in tours for adventure seekers, trekkers, fitness hikers, families, corporate groups, educational institutions, and outdoor enthusiasts.
              </p>

              <p className="leading-relaxed text-slate-600">
                Our extensive experience with both national and international organizations has given us a deep understanding of travelers’ recreational and wellness needs. Every itinerary is thoughtfully designed to ensure safety, comfort, adventure, and unforgettable memories while showcasing the breathtaking beauty of Skardu and the Karakoram region. You would not regret contacting us for your tour planning and fitness guidance both at once.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                <div className="flex items-start gap-3 rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
                  <ShieldCheck className="mt-1 shrink-0 text-emerald-600" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900">Government Licensed</h4>
                    <p className="text-xs text-slate-500 mt-0.5">DTS Licensed operator with official trekking permits & rescue protocols.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-white p-5 border border-slate-200 shadow-sm">
                  <HeartHandshake className="mt-1 shrink-0 text-amber-500" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900">Ethical Tourism</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Supporting local porters with fair wages, gear, & full insurance coverage.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
              <img
                src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
                alt="Guide in Skardu"
                className="h-[420px] w-full rounded-2xl object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-slate-900/90 p-5 backdrop-blur-md text-white border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/40">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Certified Mountain Guides</h4>
                    <p className="text-xs text-slate-300">Wilderness First Responder & high-altitude expedition trained staff.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US (LIGHT MODE) */}
      <section className="border-t border-slate-200 bg-emerald-50/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Why Choose Us</span>
            <h2 className="mt-2 font-display text-3xl font-black text-slate-900 sm:text-4xl">
              The Skardu Alpine Advantage
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Customized Itineraries",
                desc: "Tailor-made private tours, trekking expeditions, and family holidays matching your exact pace and budget.",
              },
              {
                icon: ShieldCheck,
                title: "Uncompromising Safety",
                desc: "Satellite communication, oxygen cylinders, emergency helicopter evacuation support, and certified first-aiders.",
              },
              {
                icon: Users,
                title: "Local Community First",
                desc: "100% locally hired staff, supporting regional schools, clean mountain initiatives, and eco-friendly camping.",
              },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 100}>
                <div className="group rounded-3xl bg-white p-8 border border-slate-200/80 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-500/40">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200 transition group-hover:bg-emerald-700 group-hover:text-white">
                    <item.icon size={26} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-emerald-900 p-10 text-center shadow-2xl md:p-16 text-white">
          <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
            Ready for the Adventure of a Lifetime?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-emerald-100/90">
            Let our local experts plan your dream trip to Skardu, Hunza, Fairy Meadows, or K2 Basecamp today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
            >
              Explore All Tours <ArrowRight size={16} />
            </Link>
            <a
              href={waLink("Hello! I want to plan a custom tour to Skardu.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-bold text-white ring-1 ring-white/25 transition hover:bg-white/20"
            >
              <WhatsAppIcon size={16} /> Chat With Local Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
