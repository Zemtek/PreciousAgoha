import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { showreel } from "../lib/content";
import { Reveal, EASE } from "./ui/Reveal";

function fmt(t) {
  if (!t || Number.isNaN(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function Showreel() {
  const reduce = useReducedMotion();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const seek = (e) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const frac = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    v.currentTime = frac * duration;
  };

  return (
    <section id="showreel" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* layered cinematic backdrop */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src={showreel.poster}
          alt=""
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-2xl"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 70% 40%, rgba(201,160,99,0.12), transparent 60%), linear-gradient(180deg, rgba(10,9,8,0.7), rgba(10,9,8,0.95))",
          }}
        />
      </div>

      <div className="shell grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        {/* ---- Copy ---- */}
        <div className="order-2 lg:order-1 lg:col-span-6">
          <Reveal>
            <span className="inline-flex items-center gap-3 eyebrow">
              <span className="h-1.5 w-1.5 bg-gold" aria-hidden="true" />
              {showreel.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display font-light tracking-tightest text-bone text-[2.6rem] leading-[0.95] sm:text-6xl lg:text-7xl">
              The Reel,
              <br />
              <span className="italic text-gold-soft">Up Close.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-md text-pretty text-lg leading-relaxed text-ash">
              {showreel.body}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-4 border-t border-line pt-7">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">Format</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone">9:16 · Vertical</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">Runtime</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone">{showreel.runtime}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">Credit</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone">{showreel.credit}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <button
              onClick={togglePlay}
              className="group mt-9 inline-flex items-center gap-3 bg-bone px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-gold"
            >
              {playing ? <Pause size={15} /> : <Play size={15} className="fill-ink" />}
              {playing ? "Pause Reel" : "Play Showreel"}
            </button>
          </Reveal>
        </div>

        {/* ---- Vertical device ---- */}
        <div className="order-1 flex justify-center lg:order-2 lg:col-span-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 50 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: EASE }}
            className="relative w-full max-w-[300px]"
          >
            <div className="absolute -inset-10 -z-10 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />

            <motion.div
              animate={reduce ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[2.3rem] border border-line bg-[#0c0a08] p-2.5 shadow-[0_50px_120px_-25px_rgba(0,0,0,0.85)]"
            >
              <div className="absolute left-1/2 top-[14px] z-20 h-1 w-14 -translate-x-1/2 rounded-full bg-line" />

              <div className="relative aspect-[9/16] overflow-hidden rounded-[1.8rem] bg-black">
                <video
                  ref={videoRef}
                  src={showreel.video}
                  poster={showreel.poster}
                  playsInline
                  preload="metadata"
                  onClick={togglePlay}
                  onTimeUpdate={(e) => {
                    setTime(e.currentTarget.currentTime);
                    if (e.currentTarget.duration)
                      setProgress(e.currentTarget.currentTime / e.currentTarget.duration);
                  }}
                  onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                  onEnded={() => {
                    setPlaying(false);
                    setProgress(0);
                  }}
                  className="absolute inset-0 h-full w-full cursor-pointer object-cover"
                />

                <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-3.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bone/90">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember animate-recblink" />
                    Reel
                  </span>
                  <span>{fmt(time)} / {fmt(duration)}</span>
                </div>

                {!playing && (
                  <button
                    onClick={togglePlay}
                    className="group absolute inset-0 flex items-center justify-center"
                    aria-label="Play showreel"
                  >
                    <span
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(60% 50% at 50% 50%, rgba(10,9,8,0.15), rgba(10,9,8,0.6))",
                      }}
                      aria-hidden="true"
                    />
                    <motion.span
                      whileHover={reduce ? {} : { scale: 1.1 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="relative flex h-16 w-16 items-center justify-center rounded-full border border-bone/40 bg-ink/40 backdrop-blur-sm"
                    >
                      <Play size={22} className="ml-0.5 fill-bone text-bone" />
                    </motion.span>
                  </button>
                )}

                {playing && (
                  <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-3.5">
                    <button onClick={togglePlay} aria-label="Pause" className="text-bone/90 transition-colors hover:text-gold">
                      <Pause size={16} className="fill-current" />
                    </button>
                    <div onClick={seek} className="group relative h-1 flex-1 cursor-pointer rounded-full bg-bone/20">
                      <div className="absolute inset-y-0 left-0 rounded-full bg-gold" style={{ width: `${progress * 100}%` }} />
                    </div>
                    <button onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"} className="text-bone/90 transition-colors hover:text-gold">
                      {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>

            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-widest2 text-ash-dim">
              Tap to play · sound on
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
