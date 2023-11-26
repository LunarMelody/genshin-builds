import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        "grid-area": (value) => ({
          "grid-area": value,
        }),
      });
    }),
  ],
} satisfies Config;
