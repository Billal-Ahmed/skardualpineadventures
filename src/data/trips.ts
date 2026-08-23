/* ------------------------------------------------------------------ */
/*  Skardu Alpine Adventure — data layer                               */
/* ------------------------------------------------------------------ */

const IMG = {
  // Karakoram / valleys
  hunzaAutumn: "https://images.pexels.com/photos/19442083/pexels-photo-19442083.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  hunzaViewpoint: "https://images.pexels.com/photos/35170643/pexels-photo-35170643.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  shangrila: "https://images.pexels.com/photos/35302567/pexels-photo-35302567.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  monoPeak: "https://images.pexels.com/photos/5417957/pexels-photo-5417957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  mistPeak: "https://images.pexels.com/photos/1792055/pexels-photo-1792055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  autumnValley: "https://images.pexels.com/photos/1303469/pexels-photo-1303469.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  hunzaAutumn2: "https://images.pexels.com/photos/35171324/pexels-photo-35171324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  nightPeak: "https://images.pexels.com/photos/15839367/pexels-photo-15839367.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  hunzaClear: "https://images.pexels.com/photos/35302566/pexels-photo-35302566.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  skarduDesert: "https://images.pexels.com/photos/27151258/pexels-photo-27151258.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  // Lakes
  lakeForest: "https://images.pexels.com/photos/36328281/pexels-photo-36328281.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  lakeMirror: "https://images.pexels.com/photos/8967882/pexels-photo-8967882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  lakeAerial: "https://images.pexels.com/photos/32396289/pexels-photo-32396289.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  lakeAlpine: "https://images.pexels.com/photos/34119298/pexels-photo-34119298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  lakeGlacier: "https://images.pexels.com/photos/10819096/pexels-photo-10819096.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  lakePine: "https://images.pexels.com/photos/1209391/pexels-photo-1209391.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  lakeBraies: "https://images.pexels.com/photos/13291723/pexels-photo-13291723.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  lakeMist: "https://images.pexels.com/photos/38344048/pexels-photo-38344048.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  kumrat: "https://images.pexels.com/photos/15826125/pexels-photo-15826125.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  lakeTurquoise: "https://images.pexels.com/photos/27785014/pexels-photo-27785014.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  // Blossom
  blossom1: "https://images.pexels.com/photos/21273532/pexels-photo-21273532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  blossomPath: "https://images.pexels.com/photos/6402445/pexels-photo-6402445.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  blossomBranch: "https://images.pexels.com/photos/31192318/pexels-photo-31192318.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  blossomClose: "https://images.pexels.com/photos/20718354/pexels-photo-20718354.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  blossomBloom: "https://images.pexels.com/photos/36965403/pexels-photo-36965403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  blossomPink: "https://images.pexels.com/photos/31946963/pexels-photo-31946963.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  // Trekking
  trekSnow1: "https://images.pexels.com/photos/31348069/pexels-photo-31348069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  trekSnow2: "https://images.pexels.com/photos/7438458/pexels-photo-7438458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  trekSnow3: "https://images.pexels.com/photos/31348062/pexels-photo-31348062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  trekGoats: "https://images.pexels.com/photos/31348207/pexels-photo-31348207.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  trekTrio: "https://images.pexels.com/photos/8968165/pexels-photo-8968165.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  trekRidge: "https://images.pexels.com/photos/33097708/pexels-photo-33097708.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  trekClimb: "https://images.pexels.com/photos/28441124/pexels-photo-28441124.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  trekGreen: "https://images.pexels.com/photos/35014163/pexels-photo-35014163.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  // Night skies
  tentStars: "https://images.pexels.com/photos/38449244/pexels-photo-38449244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  tentsLake: "https://images.pexels.com/photos/19039998/pexels-photo-19039998.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  tentGlow: "https://images.pexels.com/photos/31828685/pexels-photo-31828685.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  tentsWild: "https://images.pexels.com/photos/27372616/pexels-photo-27372616.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  campFire: "https://images.pexels.com/photos/12372756/pexels-photo-12372756.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  // Meadows
  meadowYaks: "https://images.pexels.com/photos/17444548/pexels-photo-17444548.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  yakLake: "https://images.pexels.com/photos/38374306/pexels-photo-38374306.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  yakHill: "https://images.pexels.com/photos/34974003/pexels-photo-34974003.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  greenHills: "https://images.pexels.com/photos/17444606/pexels-photo-17444606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  yakPlateau: "https://images.pexels.com/photos/37804558/pexels-photo-37804558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  wildflowers: "https://images.pexels.com/photos/27600632/pexels-photo-27600632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

export const WHATSAPP_NUMBER = "923551234567";
export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const formatPKR = (n: number) => "PKR " + n.toLocaleString("en-PK");

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type Kind = "tour" | "trek";
export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Extreme";

export interface ItineraryDay {
  title: string;
  points: string[];
}

export interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  helpful: number;
}

export interface Trip {
  id: string;
  kind: Kind;
  title: string;
  location: string;
  coords: [number, number]; // lat, lon
  images: string[];
  days: number;
  nights: number;
  price: number; // PKR per person
  discount?: number; // %
  badge?: string;
  difficulty?: Difficulty;
  rating: number;
  reviewCount: number;
  groupSize: string;
  transport: string;
  languages: string[];
  about: string;
  route: string[];
  customItinerary?: ItineraryDay[];
  included: string[];
  excluded: string[];
  reviews: Review[];
}

/* ------------------------------------------------------------------ */
/*  Place knowledge used by the itinerary generator                    */
/* ------------------------------------------------------------------ */

const PLACE: Record<string, string> = {
  "Skardu": "Explore Shangrila Resort, the marble shallows of Upper Kachura Lake and the lively Skardu Bazaar for local handicrafts.",
  "Shigar": "Walk the 400-year-old Shigar Fort (now a heritage museum) and relax beside the glassy waters of Blind Lake.",
  "Khaplu": "Tour the royal Khaplu Fort, the centuries-old Chaqchan Mosque and the apricot orchards lining the Shyok River.",
  "Hunza": "Wander the alleys of Altit and Baltit Forts, then catch the legendary sunset from Eagle Nest viewpoint in Duikar.",
  "Attabad Lake": "Boat across the electric-turquoise Attabad Lake, born from the 2010 landslide, beneath towering Karakoram walls.",
  "Khunjerab Pass": "Drive the Karakoram Highway to Khunjerab — the world's highest paved border crossing at 4,693 m, home to wild ibex.",
  "Gilgit": "Stroll the old Gilgit bazaar and cross the historic suspension bridge swinging over the Gilgit River.",
  "Satpara Lake": "Jeep up to Satpara Lake, the shimmering high-altitude reservoir that feeds the entire Skardu valley.",
  "Katpana Cold Desert": "Watch the sun sink behind snow peaks from the windswept dunes of Katpana, the world's highest cold desert.",
  "Deosai Plains": "Cross the 'Land of the Giants' at 4,114 m — rolling alpine pasture, wildflower carpets and herds of grazing yaks.",
  "Sheosar Lake": "Picnic at Sheosar Lake, whose indigo water mirrors the Nanga Parbat massif on a clear Deosai morning.",
  "Basho Valley": "Follow the Basho stream past pine forest to a green camping meadow ringed by glacier-streaked peaks.",
  "Kharfaq Lake": "Climb through Kharfaq village to its turquoise glacial lake, guarded by the Hispar-range giants.",
  "Thaly Valley": "Traverse Thaly's flower meadows and shepherd huts on the old trade trail toward Shigar.",
  "K2 View Point": "Stand at the classic viewpoint where the full pyramid of K2 (8,611 m) rises above the Baltoro glaciers.",
  "Bisho Valley": "Camp beneath the granite spires of Bisho Valley, a hidden trekker's gem an hour from Skardu.",
  "Barah": "Ascend the Barah ridge for a sweeping panorama of the Masherbrum and K2 ranges.",
  "Burji La": "Cross the Burji La saddle on the Shagarthang route, with views over the Shigar valley to the Biafo glacier.",
  "Concordia": "Reach Concordia — the 'Throne Room of the Mountain Gods' — where the Baltoro and Godwin-Austen glaciers meet.",
};

const ROUTE_STOPS = Object.keys(PLACE);

function buildItinerary(t: Trip): ItineraryDay[] {
  if (t.customItinerary) return t.customItinerary;
  const days: ItineraryDay[] = [];
  days.push({
    title: "Arrival in Skardu — Welcome to the Mountains",
    points: [
      "Airport pickup by our team and transfer to your hotel in Skardu.",
      "Briefing with your guide over apricot tea; permit and gear check.",
      "Optional evening walk through Skardu Bazaar and Upper Kachura Lake.",
    ],
  });
  const middle = t.route.filter((r) => r !== "Skardu");
  const perDay = Math.max(1, Math.floor((t.days - 2) / Math.max(1, middle.length)));
  let day = 2;
  for (const stop of middle) {
    if (day > t.days - 1) break;
    const span = Math.min(perDay, t.days - 1 - day + 1);
    for (let i = 0; i < span && day <= t.days - 1; i++) {
      days.push({
        title: i === 0 ? `${stop} — ${PLACE[stop]?.split("—")[0]?.trim() ?? "Exploration"}` : `${stop} — Deeper Exploration`,
        points: i === 0
          ? [
              PLACE[stop] ?? `Full-day excursion around ${stop} with your guide.`,
              "Photography stops at the best viewpoints; picnic lunch en route.",
              "Overnight at a hand-picked hotel or mountain campsite.",
            ]
          : [
              `Continue exploring ${stop} at an unhurried pace.`,
              "Meet local artisans and farmers; taste regional specialties.",
              "Return to your hotel for dinner under the stars.",
            ],
      });
      day++;
    }
  }
  while (days.length < t.days - 1) {
    const stop = ROUTE_STOPS[days.length % ROUTE_STOPS.length];
    days.push({
      title: `${stop} — Day Excursion`,
      points: [
        PLACE[stop] ?? `Guided day excursion from Skardu.`,
        "Lunch at a local family-run restaurant.",
        "Evening at leisure; optional bonfire at the hotel.",
      ],
    });
  }
  days.push({
    title: "Departure — Until Next Time",
    points: [
      "Breakfast and checkout; souvenir stop if time allows.",
      "Transfer to Skardu airport for your onward flight.",
      "Carry home cherished memories of the Karakoram.",
    ],
  });
  return days.slice(0, t.days);
}

export const getItinerary = (t: Trip) => buildItinerary(t);

/* ------------------------------------------------------------------ */
/*  Shared Included / Excluded                                         */
/* ------------------------------------------------------------------ */

const TOUR_INCLUDED = [
  "Accommodation in cozy, hand-picked hotels throughout the tour",
  "All transport between destinations in private AC vehicles",
  "Guided visits to every attraction on the itinerary",
  "Entrance fees and permits for forts, lakes and parks",
  "Experienced English & Urdu speaking tour guide",
  "Daily breakfast and all taxes / service charges",
];
const TOUR_EXCLUDED = [
  "Airfare to and from Skardu",
  "Personal expenses — souvenirs, extra meals, beverages",
  "Travel insurance (strongly recommended)",
  "Any optional activity not mentioned in the itinerary",
];
const TREK_INCLUDED = [
  "Camping in 4-season tents with foam mattresses",
  "Certified mountain guide, cooks and porter support",
  "All meals on trek — fresh, hot and high-energy",
  "Permits, national-park fees and route briefing",
  "Group first-aid kit and satellite communication",
  "Hotel nights in Skardu before and after the trek",
];
const TREK_EXCLUDED = [
  "Personal trekking gear and sleeping bags (rentable locally)",
  "Airfare and hotel nights outside the trek window",
  "Tips for guides and porters (customary, not mandatory)",
  "Rescue / evacuation insurance for high-altitude sections",
];

/* ------------------------------------------------------------------ */
/*  Review pool                                                        */
/* ------------------------------------------------------------------ */

const R = (name: string, date: string, rating: number, text: string, helpful = 2): Review => ({
  name, date, rating, text, helpful,
});

/* ------------------------------------------------------------------ */
/*  THE CATALOGUE                                                      */
/* ------------------------------------------------------------------ */

export const TRIPS: Trip[] = [
  /* ----------------------------- TOURS ---------------------------- */
  {
    id: "hunza-standard-air-5d",
    kind: "tour",
    title: "5-Days Hunza Standard Tour By Air",
    location: "Hunza",
    coords: [36.3167, 74.6667],
    images: [IMG.hunzaAutumn, IMG.hunzaClear, IMG.lakeGlacier, IMG.autumnValley],
    days: 5, nights: 4, price: 78000, discount: 10, badge: "2025 Special",
    rating: 4.8, reviewCount: 46, groupSize: "2 – 6 people", transport: "Private Coaster / SUV",
    languages: ["English", "Urdu"],
    about:
      "Join our 5-day, 4-night air tour to explore the beauty of Hunza. Witness majestic mountains, pristine rivers and embrace the rich local culture. Come along for an incredible journey and create lasting memories with us.",
    route: ["Skardu", "Hunza", "Attabad Lake", "Khunjerab Pass"],
    customItinerary: [
      { title: "Arrival at Gilgit Airport", points: [
        "Arrive at Gilgit airport and travel towards Hunza valley.",
        "Short break at the old Silk Route and Rakaposhi viewpoint.",
        "Check into your cozy hotel at Hunza; overnight stay.",
      ]},
      { title: "Altit | Baltit Fort | Ganish Village | Eagle Nest", points: [
        "Visit Altit and Baltit Forts — 700-year-old heritage wonders.",
        "Explore the ancient cobbled streets of Ganish Old Settlement.",
        "Drive to the mesmerizing Eagle Nest viewpoint for sunset.",
      ]},
      { title: "Khunjerab Pass | Attabad Lake", points: [
        "Journey towards Khunjerab Pass along the Karakoram Highway.",
        "Short break at Attabad Lake; optional boat ride.",
        "Visit Husaini Bridge, Borith Lake, Passu Cones and Sost Port en route.",
      ]},
      { title: "Hoper Glaciers | Naltar Valley | Satrangi Lake", points: [
        "Travel to Hoper Glaciers and explore Naltar Valley.",
        "Visit Satrangi Lake, Blue Lake and Pari Lake.",
        "Return to Gilgit city for the night.",
      ]},
      { title: "Departure from Gilgit", points: [
        "Bid goodbye to Gilgit and head to the airport.",
        "Carry cherished memories of your Karakoram tour.",
      ]},
    ],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [
      R("Ahmad Iftikhar", "12 Mar 2025", 5, "Best experience of my life! Highly recommended — the Eagle Nest sunset was unreal and our guide Hanif Bhai was wonderful.", 9),
      R("Sarah Khan", "02 Feb 2025", 5, "Everything from hotels to transport was exactly as described. Attabad Lake boat ride was the highlight.", 6),
      R("Daniel Weber", "18 Jan 2025", 4, "Superb organization. Only wish we had one more evening in Karimabad.", 3),
    ],
  },
  {
    id: "blossom-full-gb-11d",
    kind: "tour",
    title: "11-Days Standard Blossom Full Tour of Gilgit Baltistan | Skardu | Shigar | Khaplu | Gilgit | Hunza",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.blossom1, IMG.blossomPath, IMG.hunzaAutumn2, IMG.lakeMirror],
    days: 11, nights: 10, price: 132000, discount: 15, badge: "2025 Special",
    rating: 4.9, reviewCount: 38, groupSize: "2 – 8 people", transport: "Private SUV",
    languages: ["English", "Urdu"],
    about:
      "The complete springtime circuit of Gilgit-Baltistan. Eleven days beneath pink apricot and cherry blossom, from the cold desert of Skardu to the fort-topped ridges of Hunza.",
    route: ["Skardu", "Shigar", "Khaplu", "Gilgit", "Hunza", "Attabad Lake"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [
      R("Ali Ahmed", "28 Mar 2025", 5, "Our trip to Skardu with Easilytrip was awesome — every hotel matched the description. The blossom season is magical.", 11),
      R("Fatima Noor", "05 Apr 2025", 5, "11 days flew by. Khaplu Fort and the Shigar valley in bloom were unforgettable.", 4),
    ],
  },
  {
    id: "blossom-luxury-4d",
    kind: "tour",
    title: "4-Days Blossom Luxury Tour in Skardu, Gilgit Baltistan",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.blossomBloom, IMG.shangrila, IMG.blossomClose, IMG.lakeAlpine],
    days: 4, nights: 3, price: 96000, discount: 12, badge: "2025 Special",
    rating: 4.7, reviewCount: 29, groupSize: "2 – 4 people", transport: "Luxury Prado",
    languages: ["English", "Urdu"],
    about:
      "A short, indulgent escape through Skardu's blossom season with premium lakeside hotels, private guide and sunset at the Katpana cold desert.",
    route: ["Skardu", "Shigar", "Katpana Cold Desert", "Satpara Lake"],
    included: [...TOUR_INCLUDED, "Premium lakeside hotels with mountain-view suites"], excluded: TOUR_EXCLUDED,
    reviews: [R("MBHOfficial store", "22 Mar 2025", 5, "Awesome experience — highly recommend. They provide the best hotel and best car for traveling.", 7)],
  },
  {
    id: "blossom-standard-5d",
    kind: "tour",
    title: "5-Days Standard Blossom Tour Skardu | Chunda | Khaplu | Shigar",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.blossomPink, IMG.greenHills, IMG.blossomBranch, IMG.yakHill],
    days: 5, nights: 4, price: 68000, discount: 10, badge: "2025 Special",
    rating: 4.6, reviewCount: 21, groupSize: "2 – 6 people", transport: "Private Coaster",
    languages: ["English", "Urdu"],
    about:
      "Five spring days through orchard valleys — the pink terraces of Chunda, the royal town of Khaplu and the blind lake of Shigar.",
    route: ["Skardu", "Khaplu", "Shigar"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("nabila hanif", "30 Mar 2025", 4, "Excellent service, perfect arrangements and very humble staff. 100% satisfied.", 5)],
  },
  {
    id: "blossom-standard-8d",
    kind: "tour",
    title: "8-Days Standard Blossom Tour | Skardu | Shigar | Khaplu | Hunza",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.blossom1, IMG.hunzaAutumn, IMG.blossomPath, IMG.lakeTurquoise],
    days: 8, nights: 7, price: 104000, discount: 14, badge: "2025 Special",
    rating: 4.8, reviewCount: 33, groupSize: "2 – 6 people", transport: "Private SUV",
    languages: ["English", "Urdu"],
    about:
      "The best of both worlds — Skardu's blossoming valleys and Hunza's fort villages, stitched together by the Karakoram Highway.",
    route: ["Skardu", "Shigar", "Khaplu", "Hunza", "Attabad Lake"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Hamza R.", "10 Apr 2025", 5, "Perfectly paced. Our driver knew every photo stop on the KKH.", 4)],
  },
  {
    id: "private-tour-8d",
    kind: "tour",
    title: "8-Days Standard Private Tour To Skardu | Khaplu | Shigar",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.shangrila, IMG.skarduDesert, IMG.lakeForest, IMG.greenHills],
    days: 8, nights: 7, price: 118000, discount: 12, badge: "2025 Special",
    rating: 4.9, reviewCount: 27, groupSize: "Private — 2+ people", transport: "Private SUV",
    languages: ["English", "Urdu", "Chinese"],
    about:
      "Your own private departure, your own pace. A fully customizable week across the three great valleys of Baltistan.",
    route: ["Skardu", "Khaplu", "Shigar", "Satpara Lake", "Katpana Cold Desert"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Chen Wei", "14 May 2025", 5, "Private tour was worth every rupee — we changed the plan twice and the guide adapted happily.", 6)],
  },
  {
    id: "standard-tour-4d",
    kind: "tour",
    title: "4 Days Standard Tour In Skardu | Khaplu | Shigar",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.greenHills, IMG.kumrat, IMG.lakePine, IMG.yakLake],
    days: 4, nights: 3, price: 52000, discount: 8, badge: "2025 Special",
    rating: 4.5, reviewCount: 19, groupSize: "2 – 6 people", transport: "Private Coaster",
    languages: ["English", "Urdu"],
    about:
      "A compact long-weekend circuit covering Shangrila, the Shigar fort and the Chaqchan Mosque of Khaplu.",
    route: ["Skardu", "Shigar", "Khaplu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Bilal T.", "08 Jun 2025", 4, "Great value short tour. Hotels were clean and well located.", 2)],
  },
  {
    id: "luxury-air-4d",
    kind: "tour",
    title: "4-Days Luxury Tour By Air Skardu | Khaplu | Shigar",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.monoPeak, IMG.lakeAlpine, IMG.shangrila, IMG.lakeMist],
    days: 4, nights: 3, price: 92000, discount: 10, badge: "2025 Special",
    rating: 4.8, reviewCount: 24, groupSize: "2 – 4 people", transport: "Luxury Prado",
    languages: ["English", "Urdu"],
    about:
      "Fly into Skardu over Nanga Parbat and unwind in heritage fort-hotels with private lake dinners.",
    route: ["Skardu", "Khaplu", "Shigar"],
    included: [...TOUR_INCLUDED, "Two candle-lit private dinners by the lake"], excluded: TOUR_EXCLUDED,
    reviews: [R("Ayesha M.", "19 Apr 2025", 5, "The flight approach alone is worth it. Luxury stay lived up to its name.", 8)],
  },
  {
    id: "family-standard-5d",
    kind: "tour",
    title: "5-Days Family Standard Tour to Skardu Valley",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.shangrila, IMG.meadowYaks, IMG.greenHills, IMG.lakeMirror],
    days: 5, nights: 4, price: 58000, discount: 8, badge: "2025 Special",
    rating: 4.6, reviewCount: 31, groupSize: "Family — up to 8", transport: "Private Coaster",
    languages: ["English", "Urdu"],
    about:
      "Gentle driving days, family rooms and easy lakeside walks — Skardu designed for kids and grandparents alike.",
    route: ["Skardu", "Shigar", "Satpara Lake", "Katpana Cold Desert"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Rehan Family", "25 May 2025", 5, "Traveled with kids and parents — the pace was perfect and everyone was looked after.", 5)],
  },
  {
    id: "family-luxury-5d",
    kind: "tour",
    title: "5-Days Family Luxury Tour to Skardu Valley",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.lakeForest, IMG.shangrila, IMG.wildflowers, IMG.lakeAlpine],
    days: 5, nights: 4, price: 88000, discount: 12, badge: "2025 Special",
    rating: 4.7, reviewCount: 22, groupSize: "Family — up to 6", transport: "Luxury Prado",
    languages: ["English", "Urdu"],
    about:
      "The family circuit with a luxury upgrade — suite rooms, bonfire evenings and a private picnic at Upper Kachura.",
    route: ["Skardu", "Shigar", "Satpara Lake"],
    included: [...TOUR_INCLUDED, "Private family picnic hamper at Kachura Lake"], excluded: TOUR_EXCLUDED,
    reviews: [R("Sana & Family", "02 Jun 2025", 5, "Felt genuinely looked after. The Kachura picnic was a lovely touch.", 3)],
  },
  {
    id: "eid-special-4d",
    kind: "tour",
    title: "4-Days Eid Special Tour to Skardu | Khaplu | Shigar",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.lakeBraies, IMG.autumnValley, IMG.lakePine, IMG.greenHills],
    days: 4, nights: 3, price: 61000, discount: 15, badge: "Eid Special",
    rating: 4.7, reviewCount: 18, groupSize: "2 – 8 people", transport: "Private Coaster",
    languages: ["English", "Urdu"],
    about:
      "Celebrate Eid among the mountains — festive BBQ nights, a special Eid breakfast in Khaplu and fireworks over the Indus.",
    route: ["Skardu", "Khaplu", "Shigar"],
    included: [...TOUR_INCLUDED, "Festive Eid BBQ and special breakfast"], excluded: TOUR_EXCLUDED,
    reviews: [R("Usman G.", "17 Jun 2025", 5, "Best Eid ever — BBQ by the river with the mountains glowing at dusk.", 6)],
  },
  {
    id: "honeymoon-blossom-5d",
    kind: "tour",
    title: "5-Days Standard Honeymoon Blossom Tour in Skardu",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.blossomPath, IMG.blossomBloom, IMG.lakeMirror, IMG.blossomPink],
    days: 5, nights: 4, price: 74000, discount: 10, badge: "2025 Special",
    rating: 4.9, reviewCount: 26, groupSize: "Couple", transport: "Private SUV",
    languages: ["English", "Urdu"],
    about:
      "Pink petals, quiet lakes and a decorated honeymoon suite — Skardu in blossom is Pakistan's most romantic escape.",
    route: ["Skardu", "Shigar", "Katpana Cold Desert", "Satpara Lake"],
    included: [...TOUR_INCLUDED, "Honeymoon suite decoration and couple photoshoot"], excluded: TOUR_EXCLUDED,
    reviews: [R("Hassan & Zara", "01 Apr 2025", 5, "They decorated our room with petals and arranged a private sunset at Katpana. Perfection.", 10)],
  },
  {
    id: "honeymoon-luxury-8d",
    kind: "tour",
    title: "8-Days Skardu Luxury Honeymoon Tour",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.lakeAlpine, IMG.shangrila, IMG.lakeForest, IMG.tentsLake],
    days: 8, nights: 7, price: 142000, discount: 14, badge: "2025 Special",
    rating: 4.9, reviewCount: 20, groupSize: "Couple", transport: "Luxury Prado",
    languages: ["English", "Urdu"],
    about:
      "Eight slow, luxurious days for two — heritage fort suites, a starlit glamping night and private lakeside dinners.",
    route: ["Skardu", "Shigar", "Khaplu", "Satpara Lake"],
    included: [...TOUR_INCLUDED, "One-night luxury glamping under the stars", "Professional couple photoshoot"], excluded: TOUR_EXCLUDED,
    reviews: [R("Omar & Hina", "12 May 2025", 5, "The glamping night under the Milky Way was the single best night of our lives.", 9)],
  },
  {
    id: "honeymoon-standard-8d",
    kind: "tour",
    title: "8-Days Skardu Standard Honeymoon Tour",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.lakeMirror, IMG.lakeBraies, IMG.greenHills, IMG.lakeTurquoise],
    days: 8, nights: 7, price: 98000, discount: 10, badge: "2025 Special",
    rating: 4.7, reviewCount: 17, groupSize: "Couple", transport: "Private SUV",
    languages: ["English", "Urdu"],
    about:
      "The full honeymoon loop at a comfortable standard price — lakes, forts, desert dunes and plenty of quiet time together.",
    route: ["Skardu", "Shigar", "Khaplu", "Katpana Cold Desert"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Kamran J.", "20 Apr 2025", 5, "Well balanced — activities and free time. Hotels were charming.", 3)],
  },
  {
    id: "honeymoon-luxury-5d",
    kind: "tour",
    title: "5-Days Luxury Honeymoon Skardu | Shigar | Khaplu",
    location: "Skardu",
    coords: [35.2971, 75.6333],
    images: [IMG.lakeForest, IMG.blossom1, IMG.lakeAlpine, IMG.shangrila],
    days: 5, nights: 4, price: 112000, discount: 12, badge: "2025 Special",
    rating: 4.8, reviewCount: 15, groupSize: "Couple", transport: "Luxury Prado",
    languages: ["English", "Urdu"],
    about:
      "Five golden days through the fort-towns of Baltistan with premium stays and a private river dinner in Khaplu.",
    route: ["Skardu", "Shigar", "Khaplu"],
    included: [...TOUR_INCLUDED, "Private candle-lit dinner on the Shyok riverbank"], excluded: TOUR_EXCLUDED,
    reviews: [R("Fahad & Maha", "28 May 2025", 5, "River dinner with the fort lit up behind us — straight out of a film.", 7)],
  },

  /* ----------------------------- TREKS ---------------------------- */
  {
    id: "basho-valley-trek-5d",
    kind: "trek",
    title: "Basho Valley Trek | 5-Days",
    location: "Skardu",
    coords: [35.42, 75.75],
    images: [IMG.trekGreen, IMG.lakeForest, IMG.tentsWild, IMG.wildflowers],
    days: 5, nights: 4, price: 46000, badge: "2025 Special",
    difficulty: "Moderate", rating: 4.7, reviewCount: 23, groupSize: "4 – 10 trekkers", transport: "Jeep + on foot",
    languages: ["English", "Urdu"],
    about:
      "A gentle introduction to Karakoram trekking — pine forest, a singing stream and a flower-meadow camp beneath glacier peaks.",
    route: ["Skardu", "Basho Valley"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("TrekLover92", "11 Jul 2025", 5, "Perfect first trek. Camp food was surprisingly amazing.", 4)],
  },
  {
    id: "kharfaq-deosai-7d",
    kind: "trek",
    title: "Yougo Kharfaq Trek + Deosai Tour | Khaplu – 7 Days",
    location: "Khaplu",
    coords: [35.15, 76.5],
    images: [IMG.lakeGlacier, IMG.yakLake, IMG.trekSnow3, IMG.meadowYaks],
    days: 7, nights: 6, price: 72000, discount: 10, badge: "2025 Special",
    difficulty: "Challenging", rating: 4.8, reviewCount: 19, groupSize: "4 – 8 trekkers", transport: "Jeep + on foot",
    languages: ["English", "Urdu"],
    about:
      "Trek to the turquoise Kharfaq Lake, then roll onto the Deosai plateau by jeep for a night among yaks and wildflowers.",
    route: ["Khaplu", "Kharfaq Lake", "Deosai Plains", "Sheosar Lake"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Maria S.", "03 Aug 2025", 5, "Kharfaq Lake is the most beautiful water I've ever seen. Deosai sunset was bonus.", 6)],
  },
  {
    id: "deosai-trek-5d",
    kind: "trek",
    title: "Trek in the Deosai National Park | 5-Days",
    location: "Skardu",
    coords: [35.0, 75.3],
    images: [IMG.meadowYaks, IMG.yakPlateau, IMG.wildflowers, IMG.tentGlow],
    days: 5, nights: 4, price: 54000, badge: "2025 Special",
    difficulty: "Moderate", rating: 4.9, reviewCount: 28, groupSize: "4 – 10 trekkers", transport: "Jeep + on foot",
    languages: ["English", "Urdu"],
    about:
      "Walk the roof of the world — Deosai's endless alpine meadow at 4,114 m, home to Himalayan brown bears and star-filled nights.",
    route: ["Skardu", "Deosai Plains", "Sheosar Lake"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Jan K.", "21 Jul 2025", 5, "Camping on Deosai feels like another planet. Zero light pollution, endless stars.", 8)],
  },
  {
    id: "thaly-shigar-trek-7d",
    kind: "trek",
    title: "Thaly Valley to Shigar Valley Trek | 7 Days",
    location: "Skardu",
    coords: [35.35, 75.6],
    images: [IMG.trekTrio, IMG.greenHills, IMG.trekGreen, IMG.campFire],
    days: 7, nights: 6, price: 66000, badge: "2025 Special",
    difficulty: "Challenging", rating: 4.6, reviewCount: 14, groupSize: "4 – 8 trekkers", transport: "On foot + jeep",
    languages: ["English", "Urdu"],
    about:
      "An old shepherd's trade route linking two valleys — flower meadows, a high saddle and a triumphant descent into Shigar.",
    route: ["Skardu", "Thaly Valley", "Shigar"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Peter L.", "15 Aug 2025", 4, "Hard but rewarding. The descent into Shigar orchards is heavenly.", 3)],
  },
  {
    id: "k2-basecamp-22d",
    kind: "trek",
    title: "Epic Journey to K2 Base Camp: 22 Days of Adventure",
    location: "Skardu",
    coords: [35.88, 76.51],
    images: [IMG.monoPeak, IMG.trekSnow1, IMG.trekClimb, IMG.tentsWild],
    days: 22, nights: 21, price: 138000, discount: 5, badge: "Expedition",
    difficulty: "Extreme", rating: 5.0, reviewCount: 12, groupSize: "4 – 6 trekkers", transport: "Jeep + full porter team",
    languages: ["English", "Urdu"],
    about:
      "The pilgrimage every trekker dreams of — 22 days up the Baltoro Glacier to Concordia and K2 Base Camp, the Throne Room of the Mountain Gods.",
    route: ["Skardu", "Bisho Valley", "K2 View Point", "Concordia"],
    customItinerary: [
      { title: "Arrival in Skardu — Expedition Briefing", points: ["Meet the full guide and porter crew; equipment inspection.", "Permit formalities and route briefing."] },
      { title: "Skardu → Askoli by Jeep", points: ["Drive the Shigar valley to Askoli, the last village before the Baltoro.", "First camp beside the roaring Braldu river."] },
      { title: "Askoli → Jhola", points: ["Trek through the Braldu gorge on the classic Baltoro trail.", "Cross the famous wooden bridge at Jhola."] },
      { title: "Jhola → Paiju", points: ["Climb to Paiju camp beneath the cathedral spires of the Paiju peaks.", "Rest day acclimatization amid juniper groves."] },
      { title: "Paiju → Urdukas", points: ["Step onto the Baltoro Glacier proper.", "Camp on the grassy shelf of Urdukas with views of Trango Towers."] },
      { title: "Urdukas → Goro", points: ["A long glacier day between ice towers and moraine.", "First sight of Broad Peak on the horizon."] },
      { title: "Goro → Concordia", points: ["Arrive at Concordia — four great glaciers meeting under K2, Broad Peak and Gasherbrum.", "Sunset turns every peak gold."] },
      { title: "Concordia → K2 Base Camp", points: ["Push up the Godwin-Austen glacier to K2 Base Camp (5,150 m).", "Stand beneath the full pyramid of the Savage Mountain."] },
      { title: "Base Camp → Concordia → Goro", points: ["Retrace steps with a heart full of memories.", "Celebrate at camp with the crew."] },
      { title: "Goro → Urdukas → Paiju → Askoli", points: ["Three descent days back down the Baltoro.", "Farewell party with porters in Askoli."] },
      { title: "Askoli → Skardu → Departure", points: ["Jeep back to Skardu; hot showers and a feast.", "Certificate ceremony and airport transfer."] },
    ],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Marc D.", "30 Aug 2025", 5, "22 days that changed my life. The crew was phenomenal — safe, funny, tireless.", 14)],
  },
  {
    id: "broq-k2-view-5d",
    kind: "trek",
    title: "Yougo Broq Trek | K2 View Point | 5 Days",
    location: "Skardu",
    coords: [35.5, 76.0],
    images: [IMG.trekSnow2, IMG.mistPeak, IMG.trekRidge, IMG.tentStars],
    days: 5, nights: 4, price: 49000, discount: 10, badge: "2025 Special",
    difficulty: "Moderate", rating: 4.8, reviewCount: 16, groupSize: "4 – 8 trekkers", transport: "Jeep + on foot",
    languages: ["English", "Urdu"],
    about:
      "Short on time but hungry for K2? This five-day trek climbs to the Yougo Broq viewpoint for a postcard frame of the world's second-highest peak.",
    route: ["Skardu", "Bisho Valley", "K2 View Point"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Nadia F.", "09 Sep 2025", 5, "Saw K2 glowing at dawn — cried a little. Worth every step.", 7)],
  },
  {
    id: "moses-k2-barah-6d",
    kind: "trek",
    title: "Moses K2 View Peak Trek in Barah | 6-Days",
    location: "Skardu",
    coords: [35.45, 75.9],
    images: [IMG.trekRidge, IMG.trekSnow1, IMG.monoPeak, IMG.campFire],
    days: 6, nights: 5, price: 57000, discount: 20, badge: "2025 Special",
    difficulty: "Challenging", rating: 4.7, reviewCount: 13, groupSize: "4 – 8 trekkers", transport: "Jeep + on foot",
    languages: ["English", "Urdu"],
    about:
      "A steady climb through Barah pastures to the Moses viewpoint, where K2 and Masherbrum share one skyline.",
    route: ["Skardu", "Barah", "K2 View Point"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Tom B.", "18 Sep 2025", 5, "20% off made it a steal — the views were priceless anyway.", 4)],
  },
  {
    id: "burji-la-6d",
    kind: "trek",
    title: "Burji La Shagarthang Trek | Skardu | 6 Days",
    location: "Skardu",
    coords: [35.38, 75.72],
    images: [IMG.trekSnow3, IMG.trekGoats, IMG.greenHills, IMG.tentsWild],
    days: 6, nights: 5, price: 53000, badge: "2025 Special",
    difficulty: "Challenging", rating: 4.6, reviewCount: 11, groupSize: "4 – 8 trekkers", transport: "On foot + jeep",
    languages: ["English", "Urdu"],
    about:
      "Cross the Burji La saddle on the historic Shagarthang route — ibex country, glacier views and a warm welcome in Shigar.",
    route: ["Skardu", "Burji La", "Shigar"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Elena V.", "27 Sep 2025", 4, "Saw a herd of ibex on the pass! Guide was knowledgeable and kind.", 3)],
  },
  {
    id: "unique-tormik-bilamik",
    kind: "tour",
    title: "Tormik & Bilamik Thorsay Pastures",
    location: "Skardu & Tormik Valley, Baltistan",
    coords: [35.45, 75.35],
    images: [
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/19039998/pexels-photo-19039998.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/27372616/pexels-photo-27372616.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 6, nights: 5, price: 68000, badge: "Off-Beat Safari",
    difficulty: "Easy", rating: 4.9, reviewCount: 14, groupSize: "2 – 6 guests", transport: "4x4 Jeep / Prado",
    languages: ["English", "Urdu", "Balti"],
    about: "This package is specially offered to unique-minded people who don't like running after hotel rooms, luxury beds, or crowded common spots. A luxury 4x4 Jeep safari and high-altitude glamping tour into undiscovered alpine pastures of Tormik, Bilamik Thorsay and Talubroq.",
    route: ["Skardu", "Tormik Valley", "Bilamik Thorsay", "Talubroq", "Skardu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Rashid M.", "18 Jun 2025", 5, "Unbelievable location with zero tourists. Pure peace and luxury camping under the stars.", 7)],
  },
  {
    id: "unique-thallay-hushe",
    kind: "tour",
    title: "Thallay Broq & Hushe Valley Pass",
    location: "Khaplu & Hushe Valley, Baltistan",
    coords: [35.25, 76.22],
    images: [
      "https://images.pexels.com/photos/31348069/pexels-photo-31348069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/38449244/pexels-photo-38449244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/17444548/pexels-photo-17444548.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 7, nights: 6, price: 72000, badge: "High Pass Safari",
    difficulty: "Moderate", rating: 5.0, reviewCount: 9, groupSize: "2 – 6 guests", transport: "4x4 Prado Safari",
    languages: ["English", "Urdu", "Balti"],
    about: "High Baltistan pass safari connecting Khaplu valley to Hushe K2 gateway with luxury outdoor camping, 4x4 Prados, and optional day hikes away from crowded spots.",
    route: ["Skardu", "Khaplu", "Thallay Broq", "Hanjor", "Hushe Village", "Skardu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Zubair K.", "12 Jul 2025", 5, "Connecting Khaplu to Hushe via Thallay Broq was the highlight of our summer. Zero crowds!", 5)],
  },
  {
    id: "unique-deosai-minimarg",
    kind: "tour",
    title: "Deosai Plateau & Minimarg Borderlands",
    location: "Deosai Plateau & Minimarg",
    coords: [35.05, 75.15],
    images: [
      "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/37804558/pexels-photo-37804558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/31828685/pexels-photo-31828685.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 8, nights: 7, price: 85000, badge: "High Plateau Safari",
    difficulty: "Moderate", rating: 4.9, reviewCount: 18, groupSize: "2 – 6 guests", transport: "4x4 Jeep / Prado",
    languages: ["English", "Urdu", "Shina", "Balti"],
    about: "Cross the world's 2nd highest plateau into untouched Minimarg borderlands. Designed for unique travelers looking for vast natural resorts of thousands of acres exclusively.",
    route: ["Skardu", "Deosai Plateau", "Gultari Shingo", "Dhumail", "Minimarg", "Skardu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Farhan T.", "05 Aug 2025", 5, "Minimarg and Dhumail feel like secret fairylands. Pristine, untouched and glorious.", 9)],
  },
  {
    id: "unique-astore-rattu",
    kind: "tour",
    title: "Astore Parishing & Rattu Alpine Lake",
    location: "Astore Valley, Gilgit-Baltistan",
    coords: [35.33, 74.88],
    images: [
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/1209391/pexels-photo-1209391.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/27600632/pexels-photo-27600632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 6, nights: 5, price: 65000, badge: "Alpine Lake Camp",
    difficulty: "Easy", rating: 4.8, reviewCount: 11, groupSize: "2 – 6 guests", transport: "4x4 Prado",
    languages: ["English", "Urdu", "Shina"],
    about: "Remote Astore valley circuit with crystal Rattu Lake & deep pine glades. Designed for travelers escaping commercial hotel crowds.",
    route: ["Skardu", "Astore Valley", "Parishing", "Rattu Lake", "Skardu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Saad B.", "19 Aug 2025", 5, "Rattu lake camp is so serene. Fresh mountain air and absolute quiet.", 4)],
  },
  {
    id: "unique-basho-arandu",
    kind: "tour",
    title: "Basho Valley & Arandu Hot Springs",
    location: "Basho & Shigar Valley, Baltistan",
    coords: [35.42, 75.48],
    images: [
      "https://images.pexels.com/photos/19442083/pexels-photo-19442083.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/35302567/pexels-photo-35302567.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/12372756/pexels-photo-12372756.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 6, nights: 5, price: 69000, badge: "Jeep & Hot Springs",
    difficulty: "Easy", rating: 4.9, reviewCount: 15, groupSize: "2 – 6 guests", transport: "4x4 Prado",
    languages: ["English", "Urdu", "Balti"],
    about: "Off-road journey to Basho valley pine meadows and natural mineral hot springs in Arandu Shigar with 4x4 Prado safari and luxury camping.",
    route: ["Skardu", "Shagarthang", "Basho Valley", "Arandu Hotspring Shigar", "Skardu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Hamza K.", "24 Sep 2025", 5, "Soaking in Arandu hotsprings surrounded by autumn colors was unforgettable.", 6)],
  },
  {
    id: "unique-katisho-deosai-7lakes",
    kind: "tour",
    title: "Deosai Seven Lakes & Seven Peaks",
    location: "Katisho & Deosai Plateau, Baltistan",
    coords: [35.12, 75.25],
    images: [
      "https://images.pexels.com/photos/35302567/pexels-photo-35302567.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/34119298/pexels-photo-34119298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/38374306/pexels-photo-38374306.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 7, nights: 6, price: 75000, badge: "7 Alpine Lakes",
    difficulty: "Moderate", rating: 5.0, reviewCount: 12, groupSize: "2 – 6 guests", transport: "4x4 Jeep + Hike",
    languages: ["English", "Urdu", "Balti"],
    about: "Day hike & jeep safari exploring hidden alpine lakes and 7 peaks around Katisho with 4x4 Jeeps and luxury outdoor camps.",
    route: ["Skardu", "Katisho", "Shila", "Deosai Seven Lakes", "Seven Peaks", "Skardu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Tariq H.", "14 Oct 2025", 5, "Katisho 7 lakes hike is a secret jewel. Perfect day hike with luxury evening camp.", 8)],
  },
  {
    id: "unique-fairy-meadows-deosai",
    kind: "tour",
    title: "Fairy Meadows, Rama Lake & Deosai Circuit",
    location: "Diamir, Astore & Skardu",
    coords: [35.38, 74.58],
    images: [
      "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/36328281/pexels-photo-36328281.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/15826125/pexels-photo-15826125.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 9, nights: 8, price: 95000, badge: "Grand Himalayan Circuit",
    difficulty: "Moderate", rating: 5.0, reviewCount: 22, groupSize: "2 – 8 guests", transport: "4x4 Jeep / Prado",
    languages: ["English", "Urdu", "Shina"],
    about: "The grand Karakoram-Himalaya crossover under Nanga Parbat (8,126m). Features pine forest camping, mountain jeep safaris, and lake views.",
    route: ["Diamir", "Fairy Meadows", "Nanga Parbat Viewpoint", "Rama Lake", "Deosai", "Skardu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Bilal A.", "02 Jun 2025", 5, "Standing at Fairy Meadows looking at Nanga Parbat and then crossing Deosai to Skardu is the ultimate trip.", 12)],
  },
  {
    id: "unique-fairy-meadows-naltar-hunza",
    kind: "tour",
    title: "Fairy Meadows, Naltar Emerald Lakes & Hunza",
    location: "Diamir, Naltar & Hunza Valley",
    coords: [36.12, 74.18],
    images: [
      "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/27785014/pexels-photo-27785014.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/35170643/pexels-photo-35170643.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 8, nights: 7, price: 88000, badge: "Emerald Lakes Safari",
    difficulty: "Moderate", rating: 4.9, reviewCount: 16, groupSize: "2 – 8 guests", transport: "4x4 Prado + AC Van",
    languages: ["English", "Urdu", "Shina", "Burushaski"],
    about: "From Fairy Meadows pine forests to emerald Naltar lakes and Hunza heritage forts. A mix of 4x4 jeep safaris, glamping, and heritage stays.",
    route: ["Diamir", "Fairy Meadows", "Gilgit Naltar", "Attabad Lake", "Hunza"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Nadia S.", "18 Jul 2025", 5, "Naltar green and blue lakes blew our minds! Combined with Fairy Meadows, it was magical.", 8)],
  },
  {
    id: "unique-rakaposhi-base-nagar",
    kind: "tour",
    title: "Rakaposhi Base Camp & Naltar Valley",
    location: "Nagar & Naltar Valleys, Gilgit",
    coords: [36.21, 74.42],
    images: [
      "https://images.pexels.com/photos/7438458/pexels-photo-7438458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8967882/pexels-photo-8967882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/33097708/pexels-photo-33097708.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 7, nights: 6, price: 78000, badge: "Ice Wall Expedition",
    difficulty: "Moderate", rating: 4.9, reviewCount: 10, groupSize: "2 – 6 guests", transport: "4x4 Jeep Safari",
    languages: ["English", "Urdu", "Burushaski"],
    about: "Spectacular wall-of-ice expedition beneath Rakaposhi mountain. Combines luxury camping, day hikes, and off-beat valley jeep routes.",
    route: ["Fairy Meadows", "Naltar Valley", "Minapin", "Rakaposhi Base Nagar"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Imran W.", "29 Aug 2025", 5, "Rakaposhi base view from Minapin is jaw dropping. Guide & camp crew were fantastic.", 5)],
  },
  {
    id: "unique-naltar-minapin-kho",
    kind: "tour",
    title: "Naltar, Minapin & Hidden Kho Village",
    location: "Naltar & Hunza-Nagar Valley",
    coords: [36.28, 74.32],
    images: [
      "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/1303469/pexels-photo-1303469.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/6402445/pexels-photo-6402445.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 6, nights: 5, price: 72000, badge: "Hidden Heritage",
    difficulty: "Easy", rating: 4.8, reviewCount: 8, groupSize: "2 – 6 guests", transport: "4x4 Prado",
    languages: ["English", "Urdu", "Burushaski"],
    about: "Cultural heritage & high valley safari through Minapin and hidden Kho village. Designed for travelers seeking zero crowd traffic.",
    route: ["Naltar Valley", "Minapin", "Kho Village", "Hunza Valley"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Asad G.", "11 Sep 2025", 5, "Kho village was such an authentic experience! Warm hospitality and zero commercial crowds.", 4)],
  },
  {
    id: "trek-k2-basecamp",
    kind: "trek",
    title: "K-2 Basecamp Trek",
    location: "Karakoram Range, Baltistan",
    coords: [35.88, 76.51],
    images: [
      "https://images.pexels.com/photos/31348069/pexels-photo-31348069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/31348062/pexels-photo-31348062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7438458/pexels-photo-7438458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 22, nights: 21, price: 185000, badge: "Throne Room of Gods",
    difficulty: "Extreme", rating: 5.0, reviewCount: 34, groupSize: "4 – 12 trekkers", transport: "On foot + 4x4 Jeep",
    languages: ["English", "Urdu", "Balti"],
    about: "The legendary 22-day pilgrimage to Concordia and K2 Basecamp (5,150m) beneath four 8,000m giants: K2, Broad Peak, Gasherbrum I and II.",
    route: ["Skardu", "Askoli", "Jhola", "Paiju", "Khoburtse", "Concordia", "K2 Basecamp", "Skardu"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("David M.", "15 Jul 2025", 5, "Standing at Concordia surrounded by K2 and Broad Peak was the pinnacle of my life.", 15)],
  },
  {
    id: "trek-concordia-ghondogoro-la",
    kind: "trek",
    title: "Concordia - Ghondogoro La Trek",
    location: "Baltoro Glacier & Hushe Valley",
    coords: [35.75, 76.45],
    images: [
      "https://images.pexels.com/photos/7438458/pexels-photo-7438458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/31348069/pexels-photo-31348069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/33097708/pexels-photo-33097708.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 20, nights: 19, price: 195000, badge: "High Pass Crossing",
    difficulty: "Extreme", rating: 5.0, reviewCount: 21, groupSize: "4 – 10 trekkers", transport: "On foot + 4x4 Jeep",
    languages: ["English", "Urdu", "Balti"],
    about: "Cross the spectacular 5,585 m Ghondogoro La pass connecting Concordia to Hushe valley with panoramic views of all Karakoram giants.",
    route: ["Skardu", "Askoli", "Concordia", "Ghondogoro La Pass (5,585m)", "Ali High Camp", "Hushe", "Skardu"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Marc R.", "22 Aug 2025", 5, "Crossing Ghondogoro La at sunrise with K2 and Broad Peak in view is unbelievable.", 12)],
  },
  {
    id: "trek-biafo-hispar-snowlake",
    kind: "trek",
    title: "Biafo Hispar - Snowlake Trek",
    location: "Central Karakoram National Park",
    coords: [36.05, 75.35],
    images: [
      "https://images.pexels.com/photos/31348062/pexels-photo-31348062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/38449244/pexels-photo-38449244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8968165/pexels-photo-8968165.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 18, nights: 17, price: 175000, badge: "Great Glacial Traverse",
    difficulty: "Challenging", rating: 4.9, reviewCount: 16, groupSize: "4 – 10 trekkers", transport: "On foot + 4x4 Jeep",
    languages: ["English", "Urdu", "Balti", "Burushaski"],
    about: "Traverse the 100km Biafo and Hispar glaciers across Snow Lake (Lukpe Lawo) — one of the greatest wilderness ice highways outside polar caps.",
    route: ["Skardu", "Askoli", "Biafo Glacier", "Snow Lake", "Hispar Pass (5,151m)", "Hispar", "Hunza"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Claire P.", "09 Jul 2025", 5, "Camping on Snow Lake under full moon felt like being on another planet.", 10)],
  },
  {
    id: "trek-deosai-burji-la",
    kind: "trek",
    title: "Deosai - Burji La Pass Trek",
    location: "Skardu & Deosai Plateau",
    coords: [35.25, 75.62],
    images: [
      "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/37804558/pexels-photo-37804558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/17444548/pexels-photo-17444548.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 5, nights: 4, price: 48000, badge: "Short Pass Trek",
    difficulty: "Moderate", rating: 4.8, reviewCount: 19, groupSize: "2 – 8 trekkers", transport: "Jeep + On foot",
    languages: ["English", "Urdu", "Balti"],
    about: "Historic 5-day pass trek connecting Skardu to the 4,114m Deosai Plateau via Burji La saddle with views of Nanga Parbat and K2.",
    route: ["Skardu", "Burji La Base", "Burji La Pass (4,800m)", "Deosai Plateau", "Sheosar Lake", "Skardu"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Sohail R.", "04 Jun 2025", 5, "Short, rewarding trek with unbelievable 360-degree views of mountain ranges.", 6)],
  },
  {
    id: "trek-deosai-karabosh-gultari",
    kind: "trek",
    title: "Deosai Karabosh Gultari Trek",
    location: "Deosai Plateau & Gultari Valley",
    coords: [35.08, 75.28],
    images: [
      "https://images.pexels.com/photos/37804558/pexels-photo-37804558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/19039998/pexels-photo-19039998.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/27372616/pexels-photo-27372616.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 6, nights: 5, price: 54000, badge: "Wilderness Plateau",
    difficulty: "Moderate", rating: 4.9, reviewCount: 11, groupSize: "2 – 8 trekkers", transport: "4x4 Jeep + On foot",
    languages: ["English", "Urdu", "Balti", "Shina"],
    about: "Off-beat wilderness trek traversing Karabosh Pass into secret Gultari Shingo valley pastures with crystal rivers and yak herds.",
    route: ["Skardu", "Deosai Plateau", "Karabosh Pass", "Gultari Valley", "Shingo River", "Skardu"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Kamran A.", "18 Aug 2025", 5, "Pristine valleys with zero tourists. Camping beside Shingo river was heavenly.", 5)],
  },
  {
    id: "trek-deosai-shatong-7lakes",
    kind: "trek",
    title: "Deosai Shatong Peak & Seven Lakes Trek",
    location: "Katisho & Deosai Plateau",
    coords: [35.15, 75.32],
    images: [
      "https://images.pexels.com/photos/35302567/pexels-photo-35302567.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/34119298/pexels-photo-34119298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/38374306/pexels-photo-38374306.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 6, nights: 5, price: 56000, badge: "7 Lakes Summit",
    difficulty: "Moderate", rating: 5.0, reviewCount: 14, groupSize: "2 – 8 trekkers", transport: "4x4 Jeep + On foot",
    languages: ["English", "Urdu", "Balti"],
    about: "Summit Shatong Peak overlooking seven turquoise high-altitude alpine lakes in the Katisho region of Deosai.",
    route: ["Skardu", "Katisho", "Shila Camp", "Shatong Peak (4,650m)", "Seven Lakes Viewpoint", "Skardu"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Adnan H.", "27 Jul 2025", 5, "Overlooking seven alpine lakes at once from Shatong ridge is breathtaking.", 7)],
  },
  {
    id: "trek-thally-la-shigar",
    kind: "trek",
    title: "Thally La - Shigar Trek",
    location: "Khaplu & Shigar Valleys",
    coords: [35.28, 76.10],
    images: [
      "https://images.pexels.com/photos/17444548/pexels-photo-17444548.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/31348207/pexels-photo-31348207.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/1303469/pexels-photo-1303469.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 5, nights: 4, price: 49000, badge: "Heritage Pass Trek",
    difficulty: "Moderate", rating: 4.8, reviewCount: 15, groupSize: "2 – 8 trekkers", transport: "Jeep + On foot",
    languages: ["English", "Urdu", "Balti"],
    about: "Classic 5-day pass trek connecting Khaplu valley to Shigar valley via the flower-filled Thally La pass (4,570m).",
    route: ["Khaplu", "Thally Broq", "Thally La Pass (4,570m)", "Shigar Valley", "Skardu"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Waqas N.", "11 Jun 2025", 5, "Easy pacing, lush meadows, and historical connection between Khaplu & Shigar.", 4)],
  },
  {
    id: "trek-askoli-skoro-la",
    kind: "trek",
    title: "Askoli - Skoro La Pass Trek Shigar",
    location: "Shigar Valley to Askoli",
    coords: [35.58, 75.80],
    images: [
      "https://images.pexels.com/photos/33097708/pexels-photo-33097708.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/28441124/pexels-photo-28441124.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8968165/pexels-photo-8968165.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 6, nights: 5, price: 53000, badge: "Historic K2 Gateway",
    difficulty: "Challenging", rating: 4.8, reviewCount: 12, groupSize: "2 – 8 trekkers", transport: "On foot + 4x4 Jeep",
    languages: ["English", "Urdu", "Balti"],
    about: "Cross the historic Skoro La pass (5,070m) connecting Shigar valley to Askoli village — the gateway of Baltoro Glacier.",
    route: ["Skardu", "Shigar", "Skoro La Base", "Skoro La Pass (5,070m)", "Askoli", "Skardu"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Umer B.", "03 Sep 2025", 5, "Demanding climb but the view of Mango Gusor and Karakoram peaks was epic.", 6)],
  },
  {
    id: "trek-nangma-valley",
    kind: "trek",
    title: "Nangma Valley Trek",
    location: "Kanday & Hushe Valley",
    coords: [35.35, 76.35],
    images: [
      "https://images.pexels.com/photos/5417957/pexels-photo-5417957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/1792055/pexels-photo-1792055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/31828685/pexels-photo-31828685.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 5, nights: 4, price: 47000, badge: "Yosemite of Pakistan",
    difficulty: "Moderate", rating: 5.0, reviewCount: 25, groupSize: "2 – 8 trekkers", transport: "Jeep + On foot",
    languages: ["English", "Urdu", "Balti"],
    about: "Trek into the fairytale granite spires of Nangma Valley, often called the Yosemite of Pakistan, beneath Amin Brakk and Denbor towers.",
    route: ["Skardu", "Kanday Village", "Nangma Valley Camp", "Amin Brakk Base Camp", "Skardu"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Sophia L.", "19 May 2025", 5, "Nangma valley's vertical granite walls are out of this world! Short trek with big views.", 11)],
  },
  {
    id: "trek-k6-k7-basecamp",
    kind: "trek",
    title: "K6 & K7 Base Camp Trek",
    location: "Charakusa Glacier, Hushe",
    coords: [35.42, 76.52],
    images: [
      "https://images.pexels.com/photos/8968165/pexels-photo-8968165.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/31348069/pexels-photo-31348069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7438458/pexels-photo-7438458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 8, nights: 7, price: 68000, badge: "Charakusa Cathedral",
    difficulty: "Moderate", rating: 4.9, reviewCount: 17, groupSize: "2 – 8 trekkers", transport: "4x4 Jeep + On foot",
    languages: ["English", "Urdu", "Balti"],
    about: "Hike up the Charakusa valley to the base camp of K6 (7,281m) and K7 (6,934m) surrounded by sheer granite monoliths.",
    route: ["Skardu", "Hushe", "Saicho Camp", "Charakusa Glacier", "K6/K7 Base Camp", "Skardu"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Nabeel Q.", "30 Jun 2025", 5, "Charakusa is the most underrated valley in Pakistan. Stunning granite peaks everywhere.", 9)],
  },
  {
    id: "trek-masherbrum-basecamp",
    kind: "trek",
    title: "Masherbrum Basecamp Trek",
    location: "Hushe Valley, Baltistan",
    coords: [35.65, 76.32],
    images: [
      "https://images.pexels.com/photos/1792055/pexels-photo-1792055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/35014163/pexels-photo-35014163.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/27372616/pexels-photo-27372616.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 6, nights: 5, price: 52000, badge: "K1 Wall Trek",
    difficulty: "Moderate", rating: 4.8, reviewCount: 13, groupSize: "2 – 8 trekkers", transport: "Jeep + On foot",
    languages: ["English", "Urdu", "Balti"],
    about: "Trek to the foot of Masherbrum (7,821m) — historical K1 — rising vertically above the Hushe valley glacier.",
    route: ["Skardu", "Hushe Village", "Dumbordo", "Masherbrum Base Camp", "Hushe", "Skardu"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Faisal E.", "16 Aug 2025", 5, "Stood directly beneath the colossal wall of Masherbrum. Outstanding experience.", 8)],
  },
  {
    id: "trek-fairy-meadows-nanga-parbat",
    kind: "trek",
    title: "Fairy Meadows & Nanga Parbat Base Camp",
    location: "Raakot Valley, Diamir",
    coords: [35.38, 74.58],
    images: [
      "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/15826125/pexels-photo-15826125.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/36328281/pexels-photo-36328281.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 5, nights: 4, price: 46000, badge: "Killer Mountain View",
    difficulty: "Moderate", rating: 5.0, reviewCount: 38, groupSize: "2 – 10 trekkers", transport: "Jeep + On foot",
    languages: ["English", "Urdu", "Shina"],
    about: "Trek through pine forests to Fairy Meadows and Beyal Camp for up-close views of Nanga Parbat (8,126m) Raikot face.",
    route: ["Raikot Bridge", "Tattu Village", "Fairy Meadows", "Beyal Camp", "Nanga Parbat BC", "Raikot"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Arsalan S.", "20 May 2025", 5, "Fairy Meadows is pure magic. The night sky over Nanga Parbat is unforgettable.", 20)],
  },
  {
    id: "trek-rupal-face-nanga-parbat",
    kind: "trek",
    title: "Rupal Face Nanga Parbat Base Camp Trek",
    location: "Tarashing, Astore Valley",
    coords: [35.22, 74.72],
    images: [
      "https://images.pexels.com/photos/31348207/pexels-photo-31348207.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/1209391/pexels-photo-1209391.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/27600632/pexels-photo-27600632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 6, nights: 5, price: 52000, badge: "World's Highest Wall",
    difficulty: "Moderate", rating: 4.9, reviewCount: 16, groupSize: "2 – 8 trekkers", transport: "4x4 Jeep + On foot",
    languages: ["English", "Urdu", "Shina"],
    about: "Stand beneath the 4,600m sheer vertical Rupal Face of Nanga Parbat — the highest mountain wall on earth.",
    route: ["Astore", "Tarashing", "Herrligkoffer Base Camp", "Rupal Face Viewpoint", "Tarashing"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Junaid M.", "14 Oct 2025", 5, "The scale of Rupal Face is mind boggling. 4600 meters of sheer rock and ice!", 9)],
  },
  {
    id: "trek-khom-broq-hushe",
    kind: "trek",
    title: "Khom Broq Hushe - K2 Viewpoint Trek",
    location: "Hushe Valley, Baltistan",
    coords: [35.32, 76.38],
    images: [
      "https://images.pexels.com/photos/28441124/pexels-photo-28441124.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/35014163/pexels-photo-35014163.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/31348069/pexels-photo-31348069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 4, nights: 3, price: 42000, badge: "Short 8000m View",
    difficulty: "Moderate", rating: 4.9, reviewCount: 11, groupSize: "2 – 8 trekkers", transport: "Jeep + On foot",
    languages: ["English", "Urdu", "Balti"],
    about: "A short 4-day ridge trek above Hushe village offering panoramic views of K2, Broad Peak, and Gasherbrum without doing long glacier walks.",
    route: ["Skardu", "Hushe Village", "Khom Broq High Ridge (K2 Viewpoint)", "Skardu"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Babar K.", "07 Sep 2025", 5, "Seeing K2 in just 4 days of trekking is an absolute blessing for busy travelers.", 8)],
  },
  {
    id: "trek-machulu-la-k2-viewpoint",
    kind: "trek",
    title: "Machulu La – K2 Viewpoint Trek",
    location: "Machulu, Ghanche District",
    coords: [35.22, 76.18],
    images: [
      "https://images.pexels.com/photos/35014163/pexels-photo-35014163.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/17444606/pexels-photo-17444606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/8967882/pexels-photo-8967882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 4, nights: 3, price: 41000, badge: "Panoramic 4x8000m View",
    difficulty: "Easy", rating: 5.0, reviewCount: 15, groupSize: "2 – 8 trekkers", transport: "Jeep + On foot",
    languages: ["English", "Urdu", "Balti"],
    about: "Walk up Machulu La ridge (4,800m) for a rare single-frame view of four 8,000m giants: K2, Broad Peak, Gasherbrum I and Gasherbrum II.",
    route: ["Khaplu", "Machulu Village", "Machulu La Ridge (4,800m)", "Khaplu", "Skardu"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Shahid I.", "25 Jun 2025", 5, "Machulu La gives you a view of K2 and Broad Peak that rivals Concordia in 3 days!", 11)],
  },
  {
    id: "trek-kendarik-lakes-kharmang",
    kind: "trek",
    title: "Kendarik Lakes Trek Kharmang",
    location: "Kharmang Valley, Baltistan",
    coords: [35.02, 75.88],
    images: [
      "https://images.pexels.com/photos/34119298/pexels-photo-34119298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/38344048/pexels-photo-38344048.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/1209391/pexels-photo-1209391.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 5, nights: 4, price: 46000, badge: "Hidden Lakes Pasture",
    difficulty: "Easy", rating: 4.8, reviewCount: 9, groupSize: "2 – 8 trekkers", transport: "4x4 Jeep + On foot",
    languages: ["English", "Urdu", "Balti"],
    about: "Discover secret high alpine lakes in the Kharmang borderland pastures with lush wild flower glades and warm native shepherd hospitality.",
    route: ["Skardu", "Kharmang Valley", "Kendarik Pasture Camp", "Kendarik Lakes", "Skardu"],
    included: TREK_INCLUDED, excluded: TREK_EXCLUDED,
    reviews: [R("Zainab A.", "12 Aug 2025", 5, "Kendarik lakes are untouched turquoise gems. Highly recommended for nature lovers.", 4)],
  },
  {
    id: "adventure-river-rafting",
    kind: "tour",
    title: "River Rafting & Kayaking Safaris",
    location: "Indus & Shyok Rivers, Skardu",
    coords: [35.30, 75.60],
    images: [
      "https://images.pexels.com/photos/10819096/pexels-photo-10819096.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/32396289/pexels-photo-32396289.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/36328281/pexels-photo-36328281.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 3, nights: 2, price: 35000, badge: "White-Water Thrills",
    difficulty: "Moderate", rating: 4.9, reviewCount: 28, groupSize: "2 – 10 thrill-seekers", transport: "Raft / Kayak + Transport",
    languages: ["English", "Urdu", "Balti"],
    about: "Run the turquoise grade II & III rapids of the Indus and Shyok rivers with certified rescue guides, international PFDs, and action camera coverage.",
    route: ["Skardu", "Kachura Shallows", "Indus River Gorge", "Shyok Confluence", "Skardu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Adil R.", "14 Jun 2025", 5, "Rafting down the Indus with towering Karakoram peaks above is an adrenaline rush like no other!", 12)],
  },
  {
    id: "adventure-horse-polo",
    kind: "tour",
    title: "Horse Safaris, Horse Riding & Polo Game",
    location: "Shandur, Shigar & Deosai",
    coords: [36.08, 72.55],
    images: [
      "https://images.pexels.com/photos/17444548/pexels-photo-17444548.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/1303469/pexels-photo-1303469.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/37804558/pexels-photo-37804558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 5, nights: 4, price: 58000, badge: "King of Sports",
    difficulty: "Easy", rating: 5.0, reviewCount: 19, groupSize: "2 – 8 guests", transport: "Horse Safari + 4x4",
    languages: ["English", "Urdu", "Shina", "Balti"],
    about: "Experience wild horse riding across high alpine pastures and watch authentic freestyle polo matches played on the world's highest polo grounds.",
    route: ["Skardu", "Shigar Fort Polo Ground", "Deosai Pastures", "Shandur Pass", "Skardu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Taimoor K.", "08 Jul 2025", 5, "Attending the freestyle polo match and riding horses in Shigar valley was unforgettable.", 9)],
  },
  {
    id: "adventure-ice-hockey",
    kind: "tour",
    title: "Ice Skating Festivals & Ice Hockey",
    location: "Naltar Valley & Ghulkin Lake",
    coords: [36.25, 74.18],
    images: [
      "https://images.pexels.com/photos/31348069/pexels-photo-31348069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/31348062/pexels-photo-31348062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/7438458/pexels-photo-7438458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 4, nights: 3, price: 42000, badge: "Winter Magic",
    difficulty: "Moderate", rating: 4.9, reviewCount: 14, groupSize: "2 – 8 guests", transport: "Winter 4x4 Jeep",
    languages: ["English", "Urdu", "Burushaski", "Shina"],
    about: "Join winter ice skating festivals and high-altitude ice hockey tournaments played on natural frozen alpine lakes in Ghulkin and Naltar.",
    route: ["Gilgit", "Naltar Frozen Lakes", "Ghulkin Ice Rink", "Khalti Lake", "Gilgit"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Waqar B.", "18 Jan 2025", 5, "Ice skating on a natural frozen lake in zero degrees was a magical winter experience.", 8)],
  },
  {
    id: "adventure-skiing",
    kind: "tour",
    title: "Alpine Skiing Expeditions",
    location: "Naltar Ski Resort & Rattu Slopes",
    coords: [36.15, 74.15],
    images: [
      "https://images.pexels.com/photos/7438458/pexels-photo-7438458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/31348069/pexels-photo-31348069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/33097708/pexels-photo-33097708.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 5, nights: 4, price: 55000, badge: "Powder Snow Slopes",
    difficulty: "Moderate", rating: 4.9, reviewCount: 22, groupSize: "2 – 8 skiers", transport: "Winter 4x4 + Chairlift",
    languages: ["English", "Urdu", "Shina"],
    about: "Downhill alpine skiing and snowboarding in Naltar & Rattu powder snow glades with certified ski instructors and ski gear rental.",
    route: ["Gilgit", "Naltar Ski Resort Slopes", "Chairlift Peak", "Rattu Snow Glades", "Gilgit"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Sara N.", "05 Feb 2025", 5, "Naltar slopes are world class. Fresh powder snow and great instructors.", 10)],
  },
  {
    id: "adventure-paragliding",
    kind: "tour",
    title: "Paragliding & Tandem Sky Flights",
    location: "Skardu Ridge & Duikar Hunza",
    coords: [35.32, 75.55],
    images: [
      "https://images.pexels.com/photos/35302567/pexels-photo-35302567.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/19442083/pexels-photo-19442083.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/35170643/pexels-photo-35170643.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 2, nights: 1, price: 28000, badge: "Soar Over Peaks",
    difficulty: "Easy", rating: 5.0, reviewCount: 31, groupSize: "1 – 6 pilots", transport: "Takeoff 4x4",
    languages: ["English", "Urdu", "Balti"],
    about: "Tandem paragliding flights taking off from Skardu Ridge or Duikar Eagle Nest, gliding over winding turquoise rivers and mountain valley floors.",
    route: ["Skardu", "Skardu Launch Ridge (3,200m)", "Landing LZ Shagarthang", "Skardu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Zaid H.", "29 Sep 2025", 5, "Flying over Skardu valley with Rakaposhi and K2 range in sight is a dream come true!", 14)],
  },
  {
    id: "adventure-fishing",
    kind: "tour",
    title: "Licensed Alpine Trout Fishing",
    location: "Satpara, Upper Kachura & Deosai",
    coords: [35.22, 75.62],
    images: [
      "https://images.pexels.com/photos/8967882/pexels-photo-8967882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/36328281/pexels-photo-36328281.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/34119298/pexels-photo-34119298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 3, nights: 2, price: 32000, badge: "Crystal Lake Angling",
    difficulty: "Easy", rating: 4.8, reviewCount: 16, groupSize: "1 – 6 anglers", transport: "4x4 Prado",
    languages: ["English", "Urdu", "Balti"],
    about: "Licensed brown & rainbow trout angling in crystal glacier lakes and Deosai plateau streams with official permits, tackle, and wild camp cooks.",
    route: ["Skardu", "Satpara Lake Stream", "Blind Lake Shigar", "Deosai Kala Pani", "Skardu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Rehan A.", "16 May 2025", 5, "Caught fresh trout in Deosai crystal waters. Permitting was handled smoothly.", 7)],
  },
  {
    id: "adventure-bird-hunting",
    kind: "tour",
    title: "Licensed Bird Hunting Safaris",
    location: "Skardu & Astore Valley Wetlands",
    coords: [35.35, 75.45],
    images: [
      "https://images.pexels.com/photos/31348207/pexels-photo-31348207.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/1209391/pexels-photo-1209391.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/27600632/pexels-photo-27600632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 4, nights: 3, price: 48000, badge: "Wild Game Safari",
    difficulty: "Moderate", rating: 4.8, reviewCount: 11, groupSize: "2 – 6 hunters", transport: "4x4 Prado",
    languages: ["English", "Urdu", "Balti", "Shina"],
    about: "Government-licensed game bird hunting safaris for migratory ducks, partridges, and Ram Chakor (snowcock) in designated alpine hunting grounds.",
    route: ["Skardu", "Shigar Wetlands", "Astore Glades", "Kharmang Riverbanks", "Skardu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Shahbaz F.", "12 Nov 2025", 5, "Official wildlife department licenses and skilled local trackers. Exceptional expedition.", 5)],
  },
  {
    id: "adventure-trophy-hunting",
    kind: "tour",
    title: "Licensed Conservation Trophy Hunting Safaris",
    location: "Community Conservation Areas (GB)",
    coords: [35.50, 75.80],
    images: [
      "https://images.pexels.com/photos/31348062/pexels-photo-31348062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/17444548/pexels-photo-17444548.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/31348069/pexels-photo-31348069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    ],
    days: 7, nights: 6, price: 250000, badge: "World Famous Conservation Hunt",
    difficulty: "Challenging", rating: 5.0, reviewCount: 18, groupSize: "1 – 4 hunters", transport: "4x4 Prado + Porters",
    languages: ["English", "Urdu", "Balti", "Shina"],
    about: "Government-licensed community trophy hunting safaris for Himalayan Ibex, Astor Markhor, Blue Sheep, and Urial — supporting local village conservation.",
    route: ["Skardu", "Community Conservation Reserve", "High Ridge Camp", "Trophy Location", "Skardu"],
    included: TOUR_INCLUDED, excluded: TOUR_EXCLUDED,
    reviews: [R("Col. Arthur V.", "10 Dec 2025", 5, "Flawless arrangement for an official Ibex trophy permit. The community benefit is inspiring.", 9)],
  },
];

export const TOURS = TRIPS.filter((t) => t.kind === "tour");
export const TREKS = TRIPS.filter((t) => t.kind === "trek");
export const getTrip = (id: string) => TRIPS.find((t) => t.id === id) ?? TRIPS[0];

/* Bulk discount tiers (by percent) */
export const BULK_TIERS = [
  { from: 3, to: 3, pct: 3 },
  { from: 4, to: 4, pct: 6 },
  { from: 5, to: 5, pct: 9 },
  { from: 6, to: 6, pct: 12 },
];

/* ------------------------------------------------------------------ */
/*  Destinations, blogs, testimonials                                  */
/* ------------------------------------------------------------------ */

export const DESTINATIONS = [
  { name: "Skardu", img: IMG.skarduDesert, tours: 14, tagline: "Lakes, forts & cold desert", from: 52000 },
  { name: "Hunza", img: IMG.hunzaAutumn, tours: 6, tagline: "Fort villages above the clouds", from: 78000 },
  { name: "Deosai Plains", img: IMG.meadowYaks, tours: 4, tagline: "The Land of Giants, 4,114 m", from: 54000 },
  { name: "Shigar Valley", img: IMG.kumrat, tours: 7, tagline: "Blind Lake & heritage fort", from: 46000 },
  { name: "Khaplu", img: IMG.autumnValley, tours: 5, tagline: "Royal town of the Shyok", from: 61000 },
  { name: "Attabad Lake", img: IMG.lakeGlacier, tours: 3, tagline: "Turquoise waters of Gojal", from: 78000 },
  { name: "Gilgit", img: IMG.lakeMirror, tours: 4, tagline: "Gateway of the Karakoram", from: 58000 },
];

export const BLOGS = [
  { img: IMG.skarduDesert, tag: "ADVENTURE", title: "Discover the Charms of Skardu: 7 Must-Visit Places in 2025", author: "Skardu Alpine", date: "January 14, 2025" },
  { img: IMG.hunzaViewpoint, tag: "ADVENTURE", title: "Why Choose Gilgit Baltistan for Your Next Tour?", author: "Skardu Alpine", date: "January 14, 2025" },
  { img: IMG.autumnValley, tag: "CULTURE", title: "Unbridled Passion: The Polo Legacy of Gilgit-Baltistan", author: "Skardu Alpine", date: "January 14, 2025" },
  { img: IMG.lakeGlacier, tag: "GUIDES", title: "Top 10 Must-Visit Places in Gilgit-Baltistan for 2026", author: "Skardu Alpine", date: "February 18, 2025" },
];

export const TESTIMONIALS = [
  { name: "Ahmad Iftikhar", when: "5 months ago", rating: 5, color: "bg-emerald-600", text: "Best experience of my life! Highly recommended — from peaks to pillows, every detail was handled with care." },
  { name: "Ali Ahmed", when: "6 months ago", rating: 5, color: "bg-amber-500", text: "Our trip to Skardu was awesome. Services and everything mentioned in the description were up to the mark. We enjoyed a lot!" },
  { name: "MBHOfficial Store", when: "6 months ago", rating: 5, color: "bg-teal-600", text: "Awesome experience — highly recommend. They provide the best hotels and the best cars for traveling." },
  { name: "Nabila Hanif", when: "6 months ago", rating: 4, color: "bg-emerald-800", text: "Excellent service, perfect arrangements and very humble staff. They truly know how to make a trip memorable." },
  { name: "Sarah Khan", when: "3 months ago", rating: 5, color: "bg-slate-700", text: "Booked our honeymoon blossom tour here. The suite was decorated with petals and the Katpana sunset was private. Perfection." },
  { name: "Daniel Weber", when: "2 months ago", rating: 5, color: "bg-emerald-700", text: "Did the K2 Base Camp expedition with this team. Professional guides, great food, zero safety shortcuts. World class." },
];

export const FAQS = [
  { q: "Can I customize the itinerary?", a: "Absolutely. Every tour and trek can be tailored — add days, swap hotels, change the route. Send us a request and our planners will rebuild the plan around you." },
  { q: "What is the cancellation policy?", a: "Free cancellation up to 7 days before departure. Within 7 days, a 25% retention applies to cover permits and hotel holds. Full refund if we cancel for weather or safety." },
  { q: "Are meals included in the tour package?", a: "Daily breakfast is included on all tours; on treks every meal is included from trailhead to trailhead. Lunch and dinner stops are chosen for hygiene and local flavor." },
  { q: "Is Skardu safe for foreign travelers?", a: "Yes — Gilgit-Baltistan is one of the calmest regions in Pakistan. Our guides are government-licensed and we handle all permits and checkpoints for you." },
];

export const IMPORTANT_NOTES = [
  "Carry a warm layer even in summer — evenings at altitude drop below 10°C.",
  "Flights to Skardu are weather-dependent; keep a buffer day if possible. Road backup via the Karakoram Highway is always arranged if needed.",
  "Please carry your original CNIC / passport — checkpoints require it.",
  "Respect local customs: modest dress in villages and ask before photographing people.",
];
