import { ArrowUpRight } from "lucide-react";
import { profile } from "../lib/content";
import { Lines, Reveal } from "./ui/Reveal";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Phone",
    value: profile.phone.display,
    href: `tel:${profile.phone.tel}`,
  },
  {
    label: "Instagram",
    value: profile.socials.instagram.label,
    href: profile.socials.instagram.url,
  },
  {
    label: "LinkedIn",
    value: profile.socials.linkedin.label,
    href: profile.socials.linkedin.url,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <Reveal>
          <span className="inline-flex items-center gap-3 eyebrow">
            <span className="h-1.5 w-1.5 bg-gold" aria-hidden="true" />
            Get In Touch
          </span>
        </Reveal>

        <h2 className="mt-8 font-display font-light tracking-tightest text-bone display-fluid">
          <Lines lines={["Let's Create"]} />
          <Lines lines={["Something Worth"]} delay={0.08} className="mt-1" />
          <span className="block overflow-hidden">
            <span className="italic text-gold-soft">
              <Lines lines={["Watching."]} delay={0.16} />
            </span>
          </span>
        </h2>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-lg text-pretty text-lg leading-relaxed text-ash">
            Available for freelance projects, collaborations, internships, and
            full-time creative roles.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex items-center gap-3 bg-bone px-8 py-4 font-mono text-[12px] uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-gold"
          >
            Start a Project
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 ease-cine group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.08} className="bg-ink">
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-2 p-7 transition-colors duration-300 hover:bg-surface"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
                  {l.label}
                </span>
                <span className="flex items-center justify-between gap-2 text-bone">
                  <span className="truncate text-base sm:text-lg">{l.value}</span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-ash transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
