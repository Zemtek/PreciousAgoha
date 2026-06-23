import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import { EASE } from "./ui/Reveal";

export default function ProjectCard({ project, flip = false }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <article
      ref={ref}
      className="group grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-12"
    >
      {/* ---- Visual ---- */}
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: EASE }}
        aria-label={`Watch "${project.title}" on YouTube`}
        className={`relative block overflow-hidden border border-line bg-surface lg:col-span-7 ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={reduce ? undefined : { y: imgY, scale: 1.12 }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-cine group-hover:scale-[1.18]"
          />
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,9,8,0.15) 0%, rgba(10,9,8,0.05) 40%, rgba(10,9,8,0.6) 100%)",
              opacity: hover ? 0.85 : 1,
            }}
            aria-hidden="true"
          />

          {/* runtime + year HUD */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/90">
            <span className="bg-ink/70 px-2 py-1 backdrop-blur-sm">
              {project.runtime}
            </span>
            <span className="bg-ink/70 px-2 py-1 backdrop-blur-sm">
              {project.year}
            </span>
          </div>

          {/* play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              initial={false}
              animate={
                reduce
                  ? {}
                  : { scale: hover ? 1 : 0.85, opacity: hover ? 1 : 0.7 }
              }
              transition={{ duration: 0.5, ease: EASE }}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-bone/40 bg-ink/40 backdrop-blur-sm sm:h-20 sm:w-20"
            >
              <Play size={22} className="ml-0.5 fill-bone text-bone" />
            </motion.span>
          </div>

          {/* watch label */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/90">
            <span>Watch on YouTube</span>
            <ArrowUpRight size={13} className="text-gold" />
          </div>
        </div>
      </motion.a>

      {/* ---- Copy ---- */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-gold">{project.index}</span>
          <span className="hairline flex-1" />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
            {project.kicker}
          </span>
        </div>

        <h3 className="mt-6 font-display text-3xl font-light leading-[1.05] tracking-tightest text-bone sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-5 text-pretty leading-relaxed text-ash">
          {project.summary}
        </p>

        <p className="mt-4 text-pretty text-sm italic leading-relaxed text-ash-dim">
          {project.note}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.roles.map((r) => (
            <span
              key={r}
              className="border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ash"
            >
              {r}
            </span>
          ))}
        </div>
      </motion.div>
    </article>
  );
}
