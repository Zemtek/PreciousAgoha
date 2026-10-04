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

## "View More" projects & their images

Under **What I've Produced**, the *View More* button reveals four extra projects
(defined in `moreProjects` in `src/lib/content.js`). Their cover images live in
**`src/assets/projects/`** and are matched to each card by file name. To replace one,
overwrite the file keeping the same name (a card with no file shows a placeholder)
(`.jpg`, `.jpeg`, `.png` or `.webp`):

| File name | Project |
| --- | --- |
| `project-04` | YouTube video (`youtu.be/ZT8ssYDq8KM`) |
| `project-05` | YouTube video (`youtu.be/srEx5fPw7M4`) |
| `project-06` | Instagram reel (`DcyUYqxAE2h`) |
| `project-07` | Instagram reel (`DdrvzMuMvg1`) |

The card switches to your image automatically; no code change needed.
Vertical images (the two Instagram reels) are cropped to the 16:9 card; choose which part
stays visible with `imagePosition` on that entry in `moreProjects` (e.g. `"50% 22%"`:
the second number is how far down the image the visible window sits, 0% = top, 100% = bottom). Cards display at
16:9, so use a landscape image (1280×720+). To add a real title, runtime, year, summary,
note or roles, add those fields to the matching entry in `moreProjects`; the card shows
them as soon as they exist.

## Accessibility & motion

The layout is fully responsive with a mobile menu, visible keyboard focus, and it
respects `prefers-reduced-motion` (Lenis smooth scroll and all reveals/parallax are
disabled automatically for users who request reduced motion).
