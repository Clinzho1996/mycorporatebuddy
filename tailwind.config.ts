import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bg.png')",
      },
      colors: {
        blue: {
          1: "#00E0FF3D",
          2: "#00588A",
          3: "#233E60",
          4: "#00203F",
        },
        gold: {
          1: "#FFC7005E",
          2: "#665E40",
          3: "#742D06",
          4: "#00000099",
        },
        brown: {
          1: "#FF7A0078",
          2: "#664D36",
          3: "#742D06",
          4: "#310E0E",
          5: "#140000",
          6: "#00000099",
        },
        green: {
          1: "#42FF005E",
          2: "#4A6640",
          3: "#742D06",
          4: "#00000099",
        },
      },
    },
  },
  plugins: [],
};
export default config;
