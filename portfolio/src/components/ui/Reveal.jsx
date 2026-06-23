import { motion, useReducedMotion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

/**
 * Reveal — fade + rise when scrolled into view. Respects reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
  once = true,
  amount = 0.3,
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Lines — a mask-based line reveal for editorial display type.
 * Pass an array of strings; each renders on its own clipped line.
 */
export function Lines({ lines, className = "", lineClass = "", delay = 0, stagger = 0.12 }) {
  const reduce = useReducedMotion();
  return (
    <span className={className} aria-label={lines.join(" ")}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClass}`}
            initial={reduce ? false : { y: "110%" }}
            whileInView={reduce ? {} : { y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1, ease: EASE, delay: delay + i * stagger }}
            aria-hidden="true"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/**
 * Words — staggered word-by-word fade for paragraph emphasis.
 */
export function Words({ text, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "100%", opacity: 0 }}
            whileInView={reduce ? {} : { y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: EASE, delay: delay + i * 0.018 }}
            aria-hidden="true"
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}
