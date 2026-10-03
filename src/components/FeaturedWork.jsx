import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { moreProjects, projects } from "../lib/content";
import { SectionHeader } from "./ui/Primitives";
import { EASE } from "./ui/Reveal";
import ProjectCard from "./ProjectCard";

// Same vertical rhythm the original project list used.
const STACK = "flex flex-col gap-24 sm:gap-32 lg:gap-40";

// Short eased scroll that cooperates with Lenis (native scrollTo smooth-behaviour
// gets cancelled when the page shrinks mid-scroll). Any user input cancels it.
function scrollToY(target, instant) {
  const start = window.scrollY;
  if (instant || Math.abs(target - start) < 2) {
    window.scrollTo(0, target);
    return;
  }
  const duration = 800;
  const t0 = performance.now();
  let raf = 0;
  const cancel = () => {
    cancelAnimationFrame(raf);
    ["wheel", "touchstart", "keydown"].forEach((e) =>
      window.removeEventListener(e, cancel)
    );
  };
  ["wheel", "touchstart", "keydown"].forEach((e) =>
    window.addEventListener(e, cancel, { passive: true })
  );
  const step = (now) => {
    const p = Math.min((now - t0) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    window.scrollTo(0, start + (target - start) * eased);
    if (p < 1) raf = requestAnimationFrame(step);
    else cancel();
  };
  raf = requestAnimationFrame(step);
}

export default function FeaturedWork() {
  const [expanded, setExpanded] = useState(false);
  const listRef = useRef(null);
  const reduce = useReducedMotion();

  const toggle = () => {
    // On "Show Less", bring the reader back to the end of the original list
    // instead of leaving them stranded further down the page.
    if (expanded && listRef.current) {
      const bottom =
        listRef.current.getBoundingClientRect().bottom + window.scrollY;
      scrollToY(Math.max(0, bottom - window.innerHeight * 0.6), reduce);
    }
    setExpanded((v) => !v);
  };

  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Selected Work"
            title={
              <>
                What I&rsquo;ve
                <br />
                Produced
              </>
            }
          />
          <p className="max-w-xs text-pretty font-mono text-[12px] uppercase leading-relaxed tracking-[0.1em] text-ash">
            Documentary, event, and social work — directed, shot, and cut.
          </p>
        </div>

        <div className="mt-20">
          <div ref={listRef} className={STACK}>
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} flip={i % 2 === 1} />
            ))}
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="more-projects"
                id="more-projects"
                initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: reduce ? 0.2 : 0.9, ease: EASE }}
                className="overflow-hidden"
              >
                <div className={`${STACK} pt-24 sm:pt-32 lg:pt-40`}>
                  {moreProjects.map((p, i) => (
                    <ProjectCard
                      key={p.id}
                      project={p}
                      flip={(projects.length + i) % 2 === 1}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* View More / Show Less */}
          <div className="mt-20 flex items-center gap-5 sm:mt-24 sm:gap-8">
            <span className="hairline flex-1" aria-hidden="true" />
            <button
              type="button"
              onClick={toggle}
              aria-expanded={expanded}
              aria-controls="more-projects"
              className="group inline-flex shrink-0 items-center gap-3 border border-line px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:border-gold hover:text-gold sm:px-7"
            >
              {expanded ? "Show Less" : "View More"}
              {expanded ? (
                <Minus
                  size={15}
                  className="transition-transform duration-300 ease-cine group-hover:scale-110"
                />
              ) : (
                <Plus
                  size={15}
                  className="transition-transform duration-300 ease-cine group-hover:rotate-90"
                />
              )}
            </button>
            <span className="hairline flex-1" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
