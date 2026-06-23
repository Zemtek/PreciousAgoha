import { profile } from "../lib/content";
import { Timecode } from "./ui/Primitives";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-bone">
          <span className="h-2 w-2 rounded-full bg-ember animate-recblink" />
          {profile.name}
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
          {profile.location} · {profile.availability}
        </p>

        <div className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.14em] text-ash-dim">
          <Timecode />
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
