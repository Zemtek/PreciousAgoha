import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { about, profile } from "../lib/content";
import { Reveal, Words, EASE } from "./ui/Reveal";

function ToolMarquee() {
  const reduce = useReducedMotion();
  const items = [...about.tools, ...about.tools];
  return (
    <div className="relative overflow-hidden border-y border-line py-5">
      <div
        className={`flex w-max gap-12 whitespace-nowrap ${
          reduce ? "" : "animate-marquee"
        }`}
      >
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-mono text-sm uppercase tracking-[0.16em] text-ash"
          >
            {t}
            <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-7%", "9%"]);

  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* portrait */}
          <motion.div
            ref={ref}
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE }}
            className="crop-mark relative aspect-[4/5] overflow-hidden border border-line bg-surface lg:col-span-5"
          >
            <motion.img
              src={profile.portrait}
              alt={profile.name}
              loading="lazy"
              style={reduce ? undefined : { y: imgY, scale: 1.1 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,9,8,0) 55%, rgba(10,9,8,0.5) 100%)",
              }}
            />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.14em] text-bone/80">
              {profile.location}
            </div>
          </motion.div>

          {/* copy */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-3 eyebrow">
                <span className="h-1.5 w-1.5 bg-gold" aria-hidden="true" />
                About Me
              </span>
            </Reveal>

            <h2 className="mt-6 font-display text-4xl font-light leading-[1.02] tracking-tightest text-bone sm:text-6xl">
              <Words text={about.heading} />
            </h2>

            <div className="mt-8 max-w-xl space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="text-pretty leading-relaxed text-ash">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <blockquote className="mt-10 border-l-2 border-gold pl-6">
                <p className="font-display text-2xl font-light italic leading-snug text-bone sm:text-3xl">
                  {about.pullquote}
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <ToolMarquee />
      </div>
    </section>
  );
}
