import { stats } from "../lib/content";
import { Counter } from "./ui/Primitives";
import { Reveal } from "./ui/Reveal";

export default function Stats() {
  return (
    <section className="relative border-y border-line bg-surface/40">
      <div className="shell grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className={`flex flex-col gap-2 px-2 py-10 lg:px-8 lg:py-14 ${
              i % 2 === 0 ? "border-r border-line lg:border-r-0" : ""
            } ${i < 2 ? "border-b border-line lg:border-b-0" : ""}`}
          >
            <span className="font-display text-5xl font-light tracking-tightest text-bone sm:text-6xl lg:text-7xl">
              <Counter to={s.value} suffix={s.suffix} />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
              {s.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
