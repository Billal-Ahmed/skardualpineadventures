# Project Analysis — Skardu Alpine Adventure

## 1. Project purpose

This project is a marketing and booking website for a travel business focused on tours, trekking, and Karakoram region experiences in Gilgit-Baltistan, Pakistan.

The app is designed as a mostly static frontend with:

- landing pages for tourism services
- trip catalog pages
- detail pages for packages
- wishlist behavior in the browser
- WhatsApp contact flow for inquiries
- custom trip request modal
- route-based navigation using React Router

The app is not a full backend-driven application right now. It stores some user interaction state locally in the browser (wishlist) and is set up for static hosting.


[skardualpineadventures.com](https://skardualpineadventures.com/)


---

## 2. Tech stack

### Core frontend stack

- React 19
  - UI library for building the interface
- React DOM
  - renders the React app in the browser
- Vite
  - development server + bundler + production build tool
- TypeScript
  - static typing for code safety and better editor support
- React Router DOM
  - page routing for the app
- Tailwind CSS
  - styling framework used for the layout and design system

### Supporting libraries

- @vitejs/plugin-react
  - enables React support in Vite
- @tailwindcss/vite
  - Tailwind integration with Vite
- clsx
  - conditional class joining helper
- tailwind-merge
  - merges Tailwind classes properly without duplicates
- lucide-react
  - icon library used throughout the UI
- vite-plugin-singlefile
  - used to inline the final CSS/JS into a single HTML file for deployment simplicity

### What the app uses in real life

This is a front-end travel website. It does not currently use a database, authentication system, or server-side API. The app mostly renders local structured data from TypeScript files and allows the user to interact with the UI.

---

## 3. Folder structure and what each directory is for

```text
SAA-new/
├── .firebase/                 # Firebase local metadata/cache files
├── .firebaserc                # Firebase project alias config
├── dist/                      # Production build output from Vite
├── images/                    # Static project images / assets
├── node_modules/              # Installed dependencies
├── public/                    # Static public files served as-is
│   ├── 404.html               # custom 404 page for static hosting
│   ├── images/                # public images used by host
│   ├── mountian.png
│   └── sky.jpg
├── src/                       # Main application source code
│   ├── App.tsx                # Root app component; routing + layout
│   ├── index.css              # Global CSS + Tailwind styling setup
│   ├── main.tsx               # App bootstrap entry
│   ├── components/            # Reusable UI components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── SearchBar.tsx
│   │   ├── TripCard.tsx
│   │   └── ui.tsx
│   ├── context/               # React context providers
│   │   └── AppContext.tsx     # Wishlist, modal states, WhatsApp toast
│   ├── data/                  # Static travel data for tours/trips/services
│   │   ├── trips.ts           # Trip definitions, pricing, itinerary data, WhatsApp helper, etc.
│   │   └── services.ts        # Services catalog and detailed service descriptions
│   ├── pages/                 # Page-level components
│   │   ├── AboutPage.tsx
│   │   ├── CatalogPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FaqPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── PartnershipPage.tsx
│   │   ├── ServiceDetailPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── TripDetailPage.tsx
│   │   └── VisaInfoPage.tsx
│   └── utils/                 # Small utility helpers
│       └── cn.ts
├── firebase.json              # Firebase hosting configuration
├── index.html                 # Vite entry HTML file
├── package.json               # Scripts and dependency list
├── tsconfig.json              # TypeScript compiler settings
├── vite.config.ts             # Vite config with React + Tailwind + single-file plugin
├── package-lock.json          # lock file for exact dependency versions
├── Y/                        # Extra folder present in repo; likely leftover or storage
└── README.md (if added later) # not currently present
```

### Main directory details

#### src/
This is the actual codebase for the application.

- App.tsx
  - router definitions
  - page layout
  - Navbar + Footer + main route container
  - uses HashRouter

- components/
  - reusable UI pieces used across pages
  - for example: cards, search bars, reusable buttons/icons, layout blocks

- context/AppContext.tsx
  - central app state for favorites/wishlist
  - custom trip modal logic
  - WhatsApp floating element
  - toast notifications
  - localStorage-backed state

- data/trips.ts
  - large dataset of destinations, prices, itinerary content, tours, trekking package details, WhatsApp helper functions, etc.
  - acts like the app's content database for the website

- data/services.ts
  - service offerings and route card definitions
  - used heavily in service landing and product pages

- pages/
  - each top-level page of the app sits here
  - route-driven views for the travel website

- utils/
  - reusable helper logic such as class joining

#### public/
This folder contains static files that should be served directly by the web server.

- 404 fallback
- image assets
- static resources if needed

#### dist/
This folder is generated by the production build.

- created after `npm run build`
- contains a deployable static bundle for hosting

---

## 4. What the app is doing technically

### Routing

The app uses `HashRouter` instead of BrowserRouter.

This is important because:

- it works better with static hosting environments like Firebase Hosting, GitHub Pages, or Netlify
- route paths like `/services` become hash routes such as `#/services`
- it avoids server rewrite issues on static hosting platforms

The app is using route-based navigation like:

- `/`
- `/tours`
- `/treks`
- `/services`
- `/about`
- `/faq`
- `/visa-info`
- `/partnership`
- `/contact`

### Data flow

The app is mostly static data-driven:

- large content arrays and objects are defined in `src/data/*.ts`
- pages read these data objects and render cards/details
- the user can add trips to a wishlist stored in `localStorage`
- custom trip inquiry and WhatsApp lead generation are handled in the frontend modal flow

### UI behavior

The website includes:

- floating WhatsApp button
- toasts on actions
- modals for custom trip requests
- filters/search-style experience
- cards for tours, services, and product details

This is a marketing website with interactive UI but not a full application backend.

---

## 5. Firebase: is it set up and what is its purpose?

### There is Firebase config in the project

Files present:

- `firebase.json`
- `.firebaserc`

The default project is:

```json
{
  "projects": {
    "default": "skardualpineadventures"
  }
}
```

This means the project is configured for Firebase Hosting, pointing to the project ID `skardualpineadventures`.

### firebase.json content

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

Interpretation:

- `public: "dist"` means the deployed site is the Vite output folder
- `rewrites` sends all paths to `/index.html` to support React SPA routing
- this is a standard setup for frontend static hosting

### Important fact

Even though Firebase is configured, there is no Firebase SDK dependency like:

- `firebase`
- `@firebase/app`
- `firebase-admin`
- Firestore/Auth/Storage packages

The project does not currently use Firebase as a backend database or auth provider.

### So what is Firebase doing here?

Right now it is mainly being used as a deployment target for static hosting.

That is a totally valid setup for a React/Vite site.

### If you later add real backend behavior

You could use Firebase for:

- Firestore database
- Firebase Auth
- Cloud Storage for media
- Cloud Functions
- hosting + CI/CD

But for this project today, Firebase is currently a hosting platform, not an application backend.

---

## 6. Build process and dist folder

### Build command

```bash
npm run build
```

This runs:

```bash
vite build
```

### What Vite does

- analyzes the React app
- bundles JS, CSS, and assets
- optimizes for production
- writes the final site to `dist/`

### dist folder purpose

The `dist` folder is the deploy-ready static output. It contains the final HTML and asset bundles which can be uploaded to any static host.

This is the folder Firebase Hosting is configured to serve.

---

## 7. How to deploy this project

## Option A — Firebase Hosting (already set up)

This is the most natural choice for this project because the repo already contains Firebase configuration.

### Steps

1. Install Firebase CLI if needed:

```bash
npm install -g firebase-tools
```

2. Login:

```bash
firebase login
```

3. Build the project:

```bash
npm run build
```

4. Deploy:

```bash
firebase deploy
```

Because `firebase.json` already points to `dist`, this will publish the final build to the configured Firebase project.

### Notes

- This is ideal for a static React site
- great for custom domains and CDN hosting
- already aligned with the project config

---

## Option B — Netlify

Netlify is another excellent option for Vite apps.

### Typical setup

- connect GitHub repo
- set build command: `npm run build`
- set publish directory: `dist`

### Pros

- very easy CI/CD
- preview deployments for branches
- simple custom domain setup

### Good when

- you want a very simple deployment pipeline
- you want auto-deploy on Git push

---

## Option C — Vercel

Vercel is also a strong choice for frontend apps.

### Typical setup

- import repo
- framework detected as Vite
- build command: `npm run build`
- output directory: `dist`

### Pros

- excellent developer experience
- optimized frontend hosting
- quick previews for pull requests

### Good when

- the project is being actively maintained
- you want best-in-class frontend preview deployment

---

## Option D — GitHub Pages / static file hosting

Possible, but not the best fit for a project using React Router with client-side navigation unless rewrite rules are handled correctly.

Because this project uses hash-based routing, it is more compatible with static host deployment than standard BrowserRouter.

---

## 8. Which is the better way?

### Best fit for this project right now

Firebase Hosting is the best match because:

- it is already configured
- the app is static and SPA-based
- the build output is `dist`
- `.firebaserc` already points to a live Firebase project

### Better than Firebase only if you want easier developer workflow

Netlify or Vercel are often more convenient for frontend teams because of:

- automatic preview deployment
- nicer dashboards
- simpler continuous deployment setup

### My recommendation

Use Firebase if:

- you want to keep the project aligned with the current setup
- you already have a Firebase project for this brand

Use Netlify or Vercel if:

- you want easiest deployment flow for a marketing website
- you want cleaner preview environments and simpler Git-based deploy pipelines

---

## 9. Important technical note: single-file build

The app uses `vite-plugin-singlefile`.

This means the final bundle may be inlined into a single HTML file to simplify delivery.

Pros:

- easy static hosting
- minimal file count
- very simple upload workflow

Cons:

- harder to debug in production
- larger HTML file
- not as developer-friendly for large app growth

This is fine for a marketing/travel site, but if the project later grows into a complex web app, you may remove this plugin and let Vite generate standard chunks instead.

---

## 10. Summary

This project is a modern React + Vite + TypeScript travel website built around:

- static content data
- route-based pages
- local wishlist state
- WhatsApp lead generation
- static hosting deployment model

### Real status

- React app: yes
- TypeScript: yes
- Vite: yes
- Tailwind: yes
- React Router: yes
- Firebase hosting config: yes
- Firebase backend usage: no, not currently
- Deploy ready: yes, via `npm run build` then `firebase deploy`

### Most likely deployment flow

```bash
npm install
npm run build
firebase deploy
```

That is the correct path for this project as it currently exists.

---

## 11. Useful commands

```bash
# install dependencies
npm install

# run local dev server
npm run dev

# build production bundle
npm run build

# preview production bundle locally
npm run preview

# deploy to Firebase Hosting
firebase deploy
```

If you want, the next step can be to create a production deployment checklist or a deployment-ready README for this project.
