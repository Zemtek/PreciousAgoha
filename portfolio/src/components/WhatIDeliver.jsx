import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { deliver } from "../lib/content";
import { SectionHeader } from "./ui/Primitives";
import { EASE } from "./ui/Reveal";

function DeliverRow({ text, index }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.75, ease: EASE, delay: index * 0.07 }}
      className="group relative border-b border-line"
    >
      {/* gold fill sweep on hover */}
      <span
        className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-gold/[0.04] transition-transform duration-700 ease-cine group-hover:scale-x-100"
        aria-hidden="true"
      />
      <div className="relative flex items-center gap-5 py-7 sm:gap-8 sm:py-9">
        <span className="font-mono text-xs text-gold">
          D&middot;{String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-display text-2xl font-light leading-tight tracking-tightest text-bone/85 transition-colors duration-300 group-hover:text-bone sm:text-4xl">
          {text}
        </span>
        <ArrowUpRight
          size={22}
          strokeWidth={1.4}
          className="shrink-0 text-ash-dim transition-all duration-500 ease-cine group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
        />
      </div>
    </motion.div>
  );
}

export default function WhatIDeliver() {
  return (
    <section
      id="deliver"
      className="scroll-mt-20 py-24 sm:py-32 lg:py-40"
    >
      <div className="shell">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeader eyebrow={deliver.eyebrow} title={deliver.title} />
          <p className="max-w-sm text-pretty text-ash sm:text-right">
            {deliver.kicker}
          </p>
        </div>

        <div className="mt-16 border-t border-line">
          {deliver.items.map((item, i) => (
            <DeliverRow key={i} text={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
