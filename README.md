# XIBOTIX

Humanoid robotics + rehabilitation devices landing page, built with **Vite + React**.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
xibotix-app/
├── public/
│   └── robot-icon.svg        # favicon
├── src/
│   ├── assets/                # images/media go here
│   ├── components/
│   │   ├── Cursor.jsx          # emoji cursor (replaces system cursor on desktop)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx            # particle-field canvas + animated counters
│   │   ├── About.jsx
│   │   ├── SplitShowcase.jsx   # robotics vs rehabilitation, seam-pulse divider
│   │   ├── TechStack.jsx       # tilt cards
│   │   ├── Process.jsx         # innovation timeline w/ animated progress line
│   │   ├── Products.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Research.jsx
│   │   ├── Testimonials.jsx    # auto-scrolling marquee
│   │   ├── Contact.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useScrollReveal.js  # IntersectionObserver-based fade/slide-in
│   ├── App.jsx
│   ├── index.css               # all design tokens + section styles
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── .oxlintrc.json
└── .gitignore
```

`node_modules/` and `package-lock.json` aren't included — they're generated the
first time you run `npm install`.

## Notes

- The custom cursor (a lagging glow ring) only shows on desktop with a
  fine pointer; touch devices fall back to the normal cursor automatically.
- Hovering anything with a `data-emoji="..."` attribute swaps the emoji
  shown inside the cursor ring — edit that attribute on any element to
  change what shows.
- Reduced-motion preference is respected: animations are disabled site-wide
  for users with `prefers-reduced-motion: reduce`.
