/**
 * Atmosphere — fixed film grain + vignette layered over the whole site
 * for a cinematic, graded feel. Purely decorative, pointer-events: none.
 */
export default function Atmosphere() {
  return (
    <>
      <div className="grain-layer animate-grain" aria-hidden="true" />
      <div
        className="pointer-events-none fixed inset-0 z-[55]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </>
  );
}
