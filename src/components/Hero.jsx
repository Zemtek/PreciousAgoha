import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { hero, profile } from "../lib/content";
import { Lines } from "./ui/Reveal";
import { Timecode } from "./ui/Primitives";

const EASE = [0.16, 1, 0.3, 1];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden pt-[68px]"
    >
      {/* warm ambient wash */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(80% 60% at 70% 30%, rgba(201,160,99,0.10), transparent 60%), radial-gradient(60% 50% at 10% 80%, rgba(196,92,61,0.06), transparent 60%)",
        }}
      />

      <div className="shell relative grid min-h-[calc(100svh-68px)] grid-cols-1 items-center gap-10 py-10 lg:grid-cols-12 lg:gap-8">
        {/* ---- Left: editorial type ---- */}
        <motion.div
          style={reduce ? undefined : { y: textY, opacity: fade }}
          className="order-2 lg:order-1 lg:col-span-7"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
            className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-widest2 text-ash"
          >
            <span className="text-gold">{profile.role}</span>
            <span className="text-ash-dim">/</span>
            <span>{profile.location}</span>
          </motion.div>

          <h1 className="font-display font-light tracking-tightest text-bone display-fluid">
            <Lines lines={[hero.line1]} delay={0.45} />
            <Lines
              lines={["Through a"]}
              delay={0.58}
              className="mt-1"
            />
            <span className="block overflow-hidden">
              <motion.span
                className="block italic text-gold-soft"
                initial={reduce ? false : { y: "110%" }}
                animate={reduce ? {} : { y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.72 }}
              >
                Lens.
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1 }}
            className="mt-8 max-w-lg space-y-4 text-pretty text-[15px] leading-relaxed text-ash sm:text-base"
          >
            {hero.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "text-bone/85" : ""}>
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.15 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-bone px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-gold"
            >
              View Work
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 ease-cine group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-line px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* ---- Right: viewfinder portrait ---- */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.3 }}
          className="order-1 lg:order-2 lg:col-span-5"
        >
          <div className="crop-mark relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden border border-line bg-surface">
            <motion.img
              src={profile.portrait}
              alt={`${profile.name}, ${profile.role}`}
              style={reduce ? undefined : { y: imgY, scale: imgScale }}
              className="absolute inset-0 h-[120%] w-full object-cover object-center"
              loading="eager"
            />
            {/* grade wash */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,9,8,0) 40%, rgba(10,9,8,0.55) 100%)",
              }}
            />
            {/* viewfinder HUD */}
            <div className="pointer-events-none absolute inset-0 p-4">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-bone/90">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember animate-recblink" />
                  REC
                </span>
                <Timecode />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-bone/80">
                <span>4K · 24FPS</span>
                <span>ISO 400 · f/1.8</span>
              </div>
              {/* center focus reticle */}
              <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 border border-bone/30">
                <span className="absolute left-1/2 top-1/2 h-2 w-px -translate-x-1/2 -translate-y-1/2 bg-bone/40" />
                <span className="absolute left-1/2 top-1/2 h-px w-2 -translate-x-1/2 -translate-y-1/2 bg-bone/40" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ---- bottom scroll cue ---- */}
      <motion.div
        style={reduce ? undefined : { opacity: fade }}
        className="shell pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-between"
      >
        <span className="hidden font-mono text-[11px] uppercase tracking-widest2 text-ash sm:block">
          Scroll to explore
        </span>
        <motion.span
          animate={reduce ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold"
        >
          <ArrowDown size={18} />
        </motion.span>
        <span className="hidden font-mono text-[11px] uppercase tracking-widest2 text-ash sm:block">
          {profile.availability}
        </span>
      </motion.div>
    </section>
  );
}
