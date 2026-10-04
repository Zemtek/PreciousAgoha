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

  // Optional fields: projects without full details (e.g. pending cover image,
  // runtime, summary) degrade gracefully instead of rendering empty elements.
  const platform = project.platform ?? "YouTube";
  // Optional focal point for images whose shape differs from the 16:9 frame
  // (e.g. vertical reel covers). Unset = identical behaviour to before.
  const focal = project.imagePosition
    ? { objectPosition: project.imagePosition }
    : undefined;
  const hasMeta = Boolean(project.runtime || project.year);

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
        aria-label={`Watch "${project.title}" on ${platform}`}
        className={`relative block overflow-hidden border border-line bg-surface lg:col-span-7 ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <div className="relative aspect-video overflow-hidden">
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              loading="lazy"
              style={reduce ? focal : { y: imgY, scale: 1.12, ...focal }}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-cine group-hover:scale-[1.18]"
            />
          ) : (
            <div
              data-placeholder="true"
              className="absolute inset-0 bg-surface-2"
              style={{
                background:
                  "radial-gradient(80% 70% at 25% 20%, rgba(201,160,99,0.16), transparent 60%), radial-gradient(60% 60% at 85% 95%, rgba(196,92,61,0.09), transparent 60%), #1E1A14",
              }}
              aria-hidden="true"
            >
              <span className="absolute inset-5 border border-bone/[0.07] sm:inset-6" />
              <span className="absolute right-4 top-4 bg-ink/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-bone/55 backdrop-blur-sm">
                Image coming soon
              </span>
            </div>
          )}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,9,8,0.15) 0%, rgba(10,9,8,0.05) 40%, rgba(10,9,8,0.6) 100%)",
              opacity: hover ? 0.85 : 1,
            }}
            aria-hidden="true"
          />

          {/* runtime + year HUD (platform badge when those aren't known) */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/90">
            {hasMeta ? (
              <>
                <span className="bg-ink/70 px-2 py-1 backdrop-blur-sm">
                  {project.runtime}
                </span>
                <span className="bg-ink/70 px-2 py-1 backdrop-blur-sm">
                  {project.year}
                </span>
              </>
            ) : (
              <span className="bg-ink/70 px-2 py-1 backdrop-blur-sm">
                {platform}
              </span>
            )}
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
            <span>Watch on {platform}</span>
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

        {project.summary && (
          <p className="mt-5 text-pretty leading-relaxed text-ash">
            {project.summary}
          </p>
        )}

        {project.note && (
          <p className="mt-4 text-pretty text-sm italic leading-relaxed text-ash-dim">
            {project.note}
          </p>
        )}

        {project.roles?.length > 0 && (
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
        )}
      </motion.div>
    </article>
  );
}
