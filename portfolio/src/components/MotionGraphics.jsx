import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { motionGraphics } from "../lib/content";
import { SectionHeader } from "./ui/Primitives";
import { EASE } from "./ui/Reveal";

function MotionCard({ item, index }) {
  const ref = useRef(null);
  const vidRef = useRef(null);
  const reduce = useReducedMotion();

  // Only play while visible — saves battery/CPU and feels intentional.
  useEffect(() => {
    const video = vidRef.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <motion.figure
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE, delay: (index % 4) * 0.08 }}
      className="group relative"
    >
      <div className="crop-mark relative aspect-square overflow-hidden border border-line bg-surface">
        <video
          ref={vidRef}
          src={item.src}
          poster={item.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-cine group-hover:scale-105"
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,9,8,0) 55%, rgba(10,9,8,0.65) 100%)",
          }}
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <span className="font-display text-base leading-tight text-bone">
            {item.title}
          </span>
          <span className="shrink-0 border border-bone/25 bg-ink/50 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-bone/90 backdrop-blur-sm">
            {item.tag}
          </span>
        </figcaption>
        <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.14em] text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.figure>
  );
}

export default function MotionGraphics() {
  return (
    <section
      id="motion"
      className="scroll-mt-20 border-t border-line py-24 sm:py-32 lg:py-40"
    >
      <div className="shell">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow={motionGraphics.eyebrow}
            title={motionGraphics.title}
          />
          <p className="max-w-sm text-pretty text-ash sm:text-right">
            {motionGraphics.kicker}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {motionGraphics.items.map((item, i) => (
            <MotionCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
