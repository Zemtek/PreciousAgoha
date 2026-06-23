import { testimonials } from "../lib/content";
import { SectionHeader } from "./ui/Primitives";
import { Reveal } from "./ui/Reveal";

export default function Testimonials() {
  return (
    <section className="border-t border-line bg-surface/30 py-24 sm:py-32">
      <div className="shell">
        <SectionHeader eyebrow="Testimonials" title="What People Say" />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 0.1}
              className="flex flex-col justify-between gap-10 bg-ink p-8 sm:p-12"
            >
              <p className="font-display text-2xl font-light italic leading-snug text-bone sm:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-bone">
                    {t.name}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ash">
                    {t.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
