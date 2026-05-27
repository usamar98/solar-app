import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050914",
        midnight: "#07111f",
        panel: "rgba(255,255,255,0.075)",
        line: "rgba(255,255,255,0.14)",
        amber: "#ffb545",
        blue: "#46d7ff",
        cyan: "#68f6ff"
      },
      boxShadow: {
        glow: "0 0 42px rgba(70, 215, 255, 0.22)",
        amber: "0 0 40px rgba(255, 181, 69, 0.2)"
      },
      backgroundImage: {
        "radial-energy":
          "radial-gradient(circle at 20% 20%, rgba(70, 215, 255, 0.22), transparent 28%), radial-gradient(circle at 82% 24%, rgba(255, 181, 69, 0.2), transparent 30%), radial-gradient(circle at 50% 82%, rgba(45, 212, 191, 0.13), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;
