// Single source of truth for all site content.
// Content sourced from Precious Agoha's original portfolio.

import portrait from "../assets/portrait.jpg";
import workSecretGifts from "../assets/work-secret-gifts.jpg";
import workContentment from "../assets/work-contentment.jpg";
import workHausa from "../assets/work-hausa.jpg";
import brandPoster from "../assets/brand-poster.jpg";
import brandRadiance from "../assets/brand-radiance.jpg";
import brandRetinol from "../assets/brand-retinol.jpg";
import brandBudget from "../assets/brand-budget.jpg";

// Showreel (vertical 9:16) + motion graphics (1:1)
import showreelMp4 from "../assets/video/showreel.mp4";
import showreelPoster from "../assets/video/showreel-poster.jpg";
import motion1 from "../assets/video/motion-1.mp4";
import motion1Poster from "../assets/video/motion-1-poster.jpg";
import motion2 from "../assets/video/motion-2.mp4";
import motion2Poster from "../assets/video/motion-2-poster.jpg";
import motion3 from "../assets/video/motion-3.mp4";
import motion3Poster from "../assets/video/motion-3-poster.jpg";
import motion4 from "../assets/video/motion-4.mp4";
import motion4Poster from "../assets/video/motion-4-poster.jpg";

export const profile = {
  name: "Precious Agoha",
  firstName: "Precious",
  role: "Video Editor & Creative Media Producer",
  location: "Abuja, Nigeria",
  availability: "Available for Freelance & Full-Time",
  phone: { display: "08104195122", tel: "+2348104195122" },
  // Drop the CV file into /public with this exact name and the nav button links to it automatically.
  cv: "/Precious-Agoha-CV.pdf",
  email: "preciousagoha090@gmail.com",
  // Drop the PDF at public/cv/Precious-Agoha-CV.pdf and this button goes live.
  cvUrl: "/cv/Precious-Agoha-CV.pdf",
  socials: {
    instagram: { label: "@preshyagoha", url: "https://instagram.com/preshyagoha" },
    linkedin: { label: "Precious Agoha", url: "https://linkedin.com/in/precious-agoha" },
  },
  portrait,
};

export const hero = {
  line1: "I Tell Stories",
  line2: "Through a Lens",
  intro: [
    "I craft high-retention video content, brand stories, and digital media edits designed to capture attention, communicate clearly, and drive audience engagement across social platforms.",
    "I specialize in turning raw footage into powerful visual stories that connect brands with audiences.",
  ],
};

export const stats = [
  { value: 20000, suffix: "+", label: "Followers Grown" },
  { value: 50, suffix: "+", label: "Videos Produced" },
  { value: 170000, suffix: "", label: "Studio Audience Reach" },
  { value: 8, suffix: "", label: "Months On Set" },
];

export const projects = [
  {
    id: "secret-gifts",
    index: "01",
    title: "Secret Gifts & Giveaway at Lucky Udu Studio",
    kicker: "Event Video · Solo Project",
    runtime: "13:08",
    year: "2024",
    roles: ["Director", "Camera", "Editor"],
    image: workSecretGifts,
    url: "https://youtu.be/MkO7IAzxTrQ",
    summary:
      "Full solo production — filmed and edited end-to-end. I managed all on-set filming and handled the complete edit in Premiere Pro: cuts, transitions, audio mixing, and final export.",
    note: "My first independent major project — every aspect of production from pre-production planning to final delivery.",
  },
  {
    id: "contentment",
    index: "02",
    title: "What Lack of Contentment Can Force People To Do",
    kicker: "Interview Documentary · Long-Form",
    runtime: "52:29",
    year: "2025",
    roles: ["Camera", "B-Roll", "Editor", "Reel Cut"],
    image: workContentment,
    url: "https://youtu.be/Xf-wDeaBywQ",
    summary:
      "A 52-minute long-form interview documentary. I assisted with camera and filming, edited B-roll, and supported post-production — then cut a 1:30 reel published to Instagram in January 2025.",
    note: "Long-form storytelling that had to breathe — and a tight social cut that had to land fast.",
  },
  {
    id: "hausa-rappers",
    index: "03",
    title: "Meet the New Wave of Hausa Rappers Taking Over TikTok",
    kicker: "Street Documentary · On Location",
    runtime: "6:57",
    year: "2025",
    roles: ["Camera", "B-Roll", "Post-Production"],
    image: workHausa,
    url: "https://youtu.be/zNcyIqwhdpM",
    summary:
      "An on-location street documentary capturing the emerging Hausa rap scene. I shot original B-roll on the ground, sourced supplementary footage, and supported editing, sequencing, and final delivery.",
    note: "Run-and-gun field work, cut into a fast, energetic street portrait.",
  },
];

// Cover images for the "View More" projects are picked up automatically from
// src/assets/projects/ by filename (project-04.jpg, project-05.png, ...).
// Vite's built-in glob import: no extra dependency. Returns null until a file exists.
const projectImageFiles = import.meta.glob(
  "../assets/projects/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const projectImage = (slug) => {
  const hit = Object.entries(projectImageFiles).find(
    ([path]) => path.split("/").pop().replace(/\.[^.]+$/, "") === slug
  );
  return hit ? hit[1] : null;
};

// Revealed by the "View More" button under What I've Produced.
// The source pages couldn't be read (YouTube rate-limited, Instagram blocks
// automated access), so only facts confirmed by the URL itself are used:
// the platform and the link. Add title / kicker / runtime / year / summary / note /
// roles on any entry and the card shows them automatically.
export const moreProjects = [
  {
    id: "more-youtube-1",
    index: "04",
    platform: "YouTube",
    title: "YouTube Video",
    kicker: "More Work \u00b7 YouTube",
    image: projectImage("project-04"),
    // NOTE: the link originally supplied was youtu.be/ZT8ssYDq8KM6 (12 characters);
    // YouTube IDs are 11 characters, so the trailing "6" is treated as a typo.
    url: "https://youtu.be/ZT8ssYDq8KM",
  },
  {
    id: "more-youtube-2",
    index: "05",
    platform: "YouTube",
    title: "YouTube Video",
    kicker: "More Work \u00b7 YouTube",
    image: projectImage("project-05"),
    url: "https://youtu.be/srEx5fPw7M4",
  },
  {
    id: "more-instagram-1",
    index: "06",
    platform: "Instagram",
    title: "Instagram Reel",
    kicker: "More Work \u00b7 Instagram",
    image: projectImage("project-06"),
    url: "https://www.instagram.com/reel/DcyUYqxAE2h/",
  },
  {
    id: "more-instagram-2",
    index: "07",
    platform: "Instagram",
    title: "Instagram Reel",
    kicker: "More Work \u00b7 Instagram",
    image: projectImage("project-07"),
    url: "https://www.instagram.com/reel/DdrvzMuMvg1/",
  },
];

export const caseStudy = {
  id: "skin-by-preludge",
  label: "Creative Direction · Brand Design",
  title: "Skin by Preludge",
  tagline: "Radiance Reimagined",
  body:
    "A full visual identity and campaign system for a fictional luxury skincare line — art direction, product styling, layout, and a gold-on-marble palette carried across posters, product renders, and social assets. Designed to feel premium from the first glance.",
  capabilities: ["Art Direction", "Layout & Type", "Product Styling", "Campaign Design"],
  gallery: [
    { src: brandPoster, alt: "Skin by Preludge — full campaign poster", tall: true },
    { src: brandRadiance, alt: "Radiance Reimagined product layout" },
    { src: brandRetinol, alt: "Skin Retinol serum render on dark marble" },
    { src: brandBudget, alt: "Glow on a Budget social campaign" },
  ],
};

export const about = {
  heading: "Behind The Camera",
  paragraphs: [
    "I am a creative video editor and media producer with hands-on experience in editing short-form content, social media videos, podcasts, and branded visuals.",
    "My focus is not just editing, it\u2019s storytelling, pacing, and audience retention. I help brands and creators transform their raw ideas into polished content that performs.",
  ],
  pullquote: "My goal is simple: Make every video worth watching till the last second.",
  tools: [
    "Premiere Pro",
    "Audition",
    "After Effects",
    "Photoshop",
    "Lightroom",
    "Adobe Firefly",
    "CapCut",
    "Canva",
    "Lightroom",
  ],
};

export const services = [
  {
    index: "01",
    title: "Video Editing",
    desc: "Long & short form — cuts, pacing, transitions, and audio mixing built around the story, finished in Premiere Pro.",
  },
  {
    index: "02",
    title: "Documentary Production",
    desc: "On-set filming, camera operation, lighting, and B-roll — from interview setups to run-and-gun field shoots.",
  },
  {
    index: "03",
    title: "Podcast Editing",
    desc: "Mic cleanup and audio post-production in Audition — clear, broadcast-ready conversation that's easy to listen to.",
  },
  {
    index: "04",
    title: "Social Media Content",
    desc: "Reels and short-form cuts engineered to stop the scroll and grow an audience — built for reach and retention.",
  },
  {
    index: "05",
    title: "Creative Direction",
    desc: "Talent direction, on-camera coaching, and brand-level art direction that gives a project one coherent point of view.",
  },
  {
    index: "06",
    title: "Motion Graphics",
    desc: "Animated titles, lower-thirds, kinetic typography, logo stings, and brand motion — designed to give every project a signature look.",
  },
  {
    index: "07",
    title: "Post Production",
    desc: "Colour grading, graphic design, and AI generative tools — the polish that makes the final cut land.",
  },
];

export const deliver = {
  eyebrow: "Outcomes",
  title: "What I Deliver",
  kicker:
    "Editing in service of results — every cut is made to move a metric, not just look good.",
  items: [
    "Increase audience retention",
    "Improve content clarity and flow",
    "Create visually engaging storytelling edits",
    "Turn ideas into structured visual content",
    "Produce content ready for social media growth",
  ],
};

export const motionGraphics = {
  eyebrow: "Motion Design",
  title: "Motion Graphics",
  kicker:
    "Brand stings, product reveals, and kinetic type — short loops built to give an identity movement.",
  items: [
    { src: motion3, poster: motion3Poster, title: "Edits by Preshy", tag: "Logo Sting" },
    {
      src: motion2,
      poster: motion2Poster,
      title: "Skin by Preludge — Retinol",
      tag: "Product Reveal",
    },
    {
      src: motion1,
      poster: motion1Poster,
      title: "Skin by Preludge — Splash",
      tag: "Liquid FX",
    },
    { src: motion4, poster: motion4Poster, title: "Edits by Preshy", tag: "Brand Animation" },
  ],
};

export const showreel = {
  eyebrow: "Showreel",
  title: "Watch the Showreel",
  body: "Documentary work, interviews, reels, and production highlights — shot and cut by hand.",
  runtime: "00:25 · Vertical Reel",
  credit: "Shot & Edited by Precious Agoha",
  video: showreelMp4,
  poster: showreelPoster,
};

export const testimonials = [
  {
    quote:
      "Precious has an instinct for storytelling that goes beyond technical skill. She knows when a cut should breathe and when it needs to land hard — and that makes all the difference in documentary work.",
    name: "Documentary Collaborator",
    role: "Lucky Udu Studio",
  },
  {
    quote:
      "Working with Precious on our Lucky Udu content was effortless. She understood the brief immediately, handled pressure on set calmly, and delivered a final cut that exceeded what we expected.",
    name: "Studio Producer",
    role: "Lucky Udu Studio",
  },
  {
    quote:
      "Precious has a strong creative instinct and an impressive eye for detail. She approaches every edit with intention, understands the story behind the footage, and consistently finds ways to make the final product more engaging and visually compelling.",
    // No personal name supplied, so the role leads, matching the other entries.
    name: "Creative Director",
    role: "Capital Power Multimedia",
  },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#services" },
  { label: "Showreel", href: "#showreel" },
  { label: "Contact", href: "#contact" },
];
