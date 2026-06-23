import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { nav, profile } from "../lib/content";
import { EASE } from "./ui/Reveal";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/80 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="shell flex h-[68px] items-center justify-between gap-6">
          <a
            href="#hero"
            className="group flex items-baseline gap-2.5 font-mono text-[12px] uppercase tracking-[0.22em] text-bone"
            aria-label="Precious Agoha — home"
          >
            <span
              className="h-2 w-2 rounded-full bg-ember animate-recblink"
              aria-hidden="true"
            />
            <span>Precious Agoha</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative font-sans text-[13px] uppercase tracking-[0.14em] text-ash transition-colors duration-300 hover:text-bone"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-cine group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.cvUrl}
              download
              className="group hidden items-center gap-2 border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:border-gold hover:text-gold lg:inline-flex"
            >
              <Download
                size={13}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
              Download CV
            </a>
            <a
              href="#contact"
              className="group hidden items-center gap-2 border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:border-gold hover:text-gold sm:inline-flex"
            >
              Let&rsquo;s Talk
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center text-bone md:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink/97 backdrop-blur-xl md:hidden"
          >
            <div className="shell flex h-[68px] items-center justify-between">
              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-bone">
                Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center text-bone"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="shell flex flex-1 flex-col justify-center gap-2">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.08 * i }}
                  className="flex items-baseline gap-4 border-b border-line py-5 font-display text-4xl text-bone"
                >
                  <span className="font-mono text-xs text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </motion.a>
              ))}
              <a
                href={profile.cvUrl}
                download
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex w-max items-center gap-2 border border-line px-5 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <Download size={14} />
                Download CV
              </a>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="mt-6 font-mono text-sm text-ash"
              >
                {profile.email}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
