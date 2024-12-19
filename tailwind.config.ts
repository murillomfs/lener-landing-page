import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'smartphone': {'min': '300px', 'max': '640px'},
        'tablet': {'min': '641px', 'max': '992px'},
        'monitor': {'min': '993px', 'max': '1480px'},
        'header-space': {'min': '1220px', 'max': '1479px'},
        'high-monitor': {'min': '1482px', 'max': '1650px'},
        'showcase': {'min': '1651px', 'max': '1919px'},
        'desktop': '1920px',

        'smartphone-height': {'raw': '(min-height: 300px) and (max-height: 640px)'},
      },
    },
  },
  plugins: [],
};
export default config;
