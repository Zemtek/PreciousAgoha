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
    "I am a creative video editor and media producer with hands-on experience in editing short-form and long-form content, social media videos, podcasts, and branded visuals.",
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
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#services" },
  { label: "Showreel", href: "#showreel" },
  { label: "Contact", href: "#contact" },
];
