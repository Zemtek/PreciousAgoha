/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0908",
        surface: "#15120E",
        "surface-2": "#1E1A14",
        bone: "#F2EBDD",
        ash: "#8C8377",
        "ash-dim": "#5C564E",
        line: "#2A251E",
        gold: "#C9A063",
        "gold-soft": "#E3C690",
        ember: "#C45C3D",
      },
      fontFamily: {
        display: ['Fraunces', "ui-serif", "Georgia", "serif"],
        sans: ['"Hanken Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        widest2: "0.28em",
      },
      maxWidth: {
        shell: "1440px",
      },
      transitionTimingFunction: {
        cine: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        recblink: {
          "0%, 60%": { opacity: "1" },
          "61%, 100%": { opacity: "0.15" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-3%,-5%)" },
          "30%": { transform: "translate(3%,-2%)" },
          "50%": { transform: "translate(-2%,4%)" },
          "70%": { transform: "translate(4%,2%)" },
          "90%": { transform: "translate(-4%,-3%)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        recblink: "recblink 1.6s steps(1) infinite",
        grain: "grain 6s steps(6) infinite",
      },
    },
  },
  plugins: [],
};
