import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { caseStudy } from "../lib/content";
import { Reveal, EASE } from "./ui/Reveal";

export default function CaseStudy() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const tallY = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);
  const [poster, ...rest] = caseStudy.gallery;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-line bg-surface/30 py-24 sm:py-32"
    >
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Tall poster */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: EASE }}
          className="crop-mark relative aspect-[3/4] overflow-hidden border border-line bg-surface-2 lg:col-span-5"
        >
          <motion.img
            src={poster.src}
            alt={poster.alt}
            loading="lazy"
            style={reduce ? undefined : { y: tallY, scale: 1.1 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>

        {/* Copy + small gallery */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-3 eyebrow">
              <span className="h-1.5 w-1.5 bg-gold" aria-hidden="true" />
              {caseStudy.label}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-light leading-[1] tracking-tightest text-bone sm:text-6xl">
              {caseStudy.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-2 font-display text-2xl italic text-gold-soft sm:text-3xl">
              {caseStudy.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-7 max-w-xl text-pretty leading-relaxed text-ash">
              {caseStudy.body}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-wrap gap-2">
              {caseStudy.capabilities.map((c) => (
                <span
                  key={c}
                  className="border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ash"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
            {rest.map((img, i) => (
              <motion.div
                key={img.src}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 * i }}
                className="group relative aspect-[3/4] overflow-hidden border border-line bg-surface-2"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-cine group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
