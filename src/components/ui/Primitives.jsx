import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

/**
 * SectionHeader — mono eyebrow with a clip-marker, plus editorial heading.
 */
export function SectionHeader({ eyebrow, title, kicker, align = "left", className = "" }) {
  return (
    <div
      className={`flex flex-col gap-5 ${align === "center" ? "items-center text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-3 eyebrow">
            <span className="h-1.5 w-1.5 bg-gold" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      {title && (
        <Reveal delay={0.05}>
          <h2 className="font-display text-bone tracking-tightest text-balance text-[2.4rem] leading-[0.98] sm:text-6xl lg:text-7xl">
            {title}
          </h2>
        </Reveal>
      )}
      {kicker && (
        <Reveal delay={0.1}>
          <p className="max-w-xl text-pretty text-ash text-base leading-relaxed sm:text-lg">
            {kicker}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/**
 * Counter — count-up to a target when scrolled into view.
 */
export function Counter({ to, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  const formatted =
    to >= 1000 ? val.toLocaleString("en-US") : String(val);

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
}

/**
 * Timecode — a fake running timecode (HH:MM:SS:FF) for cinematic flavour.
 */
export function Timecode({ className = "" }) {
  const [tc, setTc] = useState("00:00:00:00");
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) {
      setTc("00:00:14:21");
      return;
    }
    let frame = 0;
    const id = setInterval(() => {
      frame = (frame + 1) % (24 * 60 * 60 * 24);
      const ff = frame % 24;
      const ss = Math.floor(frame / 24) % 60;
      const mm = Math.floor(frame / (24 * 60)) % 60;
      const hh = Math.floor(frame / (24 * 60 * 60)) % 24;
      const p = (n) => String(n).padStart(2, "0");
      setTc(`${p(hh)}:${p(mm)}:${p(ss)}:${p(ff)}`);
    }, 1000 / 24);
    return () => clearInterval(id);
  }, [reduce]);
  return <span className={className}>{tc}</span>;
}

export { motion };
