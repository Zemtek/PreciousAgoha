# Precious Agoha — Portfolio

A dark, cinematic portfolio for **Precious Agoha**, Video Editor & Creative Media Producer (Abuja, Nigeria).
Built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scrolling.

## Design

The aesthetic is grounded in the craft of editing rather than generic luxury: a warm
sepia-and-gold palette pulled from the studio portrait, with the vernacular of an edit
suite running through the UI — a live timecode, a blinking REC dot, runtime badges, a
focus reticle, crop marks, and a `4K · 24FPS` HUD.

- **Display type:** Fraunces
- **Body type:** Hanken Grotesk
- **Mono / data type:** JetBrains Mono
- **Palette:** ink `#0A0908` · surface `#15120E` · bone `#F2EBDD` · ash `#8C8377` · gold `#C9A063` · ember `#C45C3D`

## Sections

Hero · Stats · Featured Work · Creative Direction (case study) · Motion Graphics ·
About · Services · Showreel · Testimonials · Contact.

## Run locally

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Adding your CV (Download CV button)

The "Download CV" button in the navigation is already wired up. To make it work:

1. Save your CV as a PDF named exactly **`Precious-Agoha-CV.pdf`**.
2. Drop it into the **`public/`** folder.

That's it — the button links to it automatically. (To use a different filename,
change `profile.cv` in `src/lib/content.js`.)

## Editing content

All copy, stats, projects, services, motion graphics, and links live in
**`src/lib/content.js`** — the single source of truth.

- **Showreel video:** the vertical (9:16) reel lives at `src/assets/video/showreel.mp4`.
  Replace that file (keep the name) to swap reels. A poster frame sits beside it as
  `showreel-poster.jpg`.
- **Motion graphics:** square loops live in `src/assets/video/` as `motion-1.mp4` …
  `motion-4.mp4`, each with a matching `-poster.jpg`. Titles/tags are set in
  `content.js` under `motionGraphics`.
- **Images:** stored in `src/assets/`.

> **Video formats:** the showreel was transcoded from HEVC `.MOV` to H.264 `.mp4`
> so it plays in every browser (Chrome and Firefox can't play HEVC). Keep new videos
> as H.264 MP4 for the widest support.

## Accessibility & motion

The layout is fully responsive with a mobile menu, visible keyboard focus, and it
respects `prefers-reduced-motion` (Lenis smooth scroll and all reveals/parallax are
disabled automatically for users who request reduced motion).
