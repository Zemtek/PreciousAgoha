import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { services } from "../lib/content";
import { SectionHeader } from "./ui/Primitives";
import { EASE } from "./ui/Reveal";

function ServiceRow({ service, active, onToggle }) {
  const reduce = useReducedMotion();
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        aria-expanded={active}
        className="group flex w-full items-center gap-5 py-7 text-left transition-colors duration-300 sm:gap-8 sm:py-9"
      >
        <span className="w-10 font-mono text-sm text-gold">{service.index}</span>
        <span
          className={`flex-1 font-display text-3xl font-light tracking-tightest transition-colors duration-300 sm:text-5xl ${
            active ? "text-bone" : "text-bone/80 group-hover:text-bone"
          }`}
        >
          {service.title}
        </span>
        <motion.span
          animate={reduce ? {} : { rotate: active ? 45 : 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className={`shrink-0 transition-colors duration-300 ${
            active ? "text-gold" : "text-ash group-hover:text-gold"
          }`}
        >
          <Plus size={26} strokeWidth={1.4} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-9 pl-[3.75rem] pr-8 text-pretty leading-relaxed text-ash sm:pl-16">
              {service.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-line bg-surface/30 py-24 sm:py-32 lg:py-40"
    >
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                eyebrow="Capabilities"
                title={
                  <>
                    Skills &amp;
                    <br />Expertise
                  </>
                }
                kicker="Full-pipeline production — from the shot on set to the final graded cut."
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {services.map((s, i) => (
                <ServiceRow
                  key={s.title}
                  service={s}
                  active={active === i}
                  onToggle={() => setActive(active === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
