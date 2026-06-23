import { projects } from "../lib/content";
import { SectionHeader } from "./ui/Primitives";
import ProjectCard from "./ProjectCard";

export default function FeaturedWork() {
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

        <div className="mt-20 flex flex-col gap-24 sm:gap-32 lg:gap-40">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
