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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
      
        'custom-palette': {
        '50': '#fffeea',
        '100': '#fffac5',
        '200': '#fff685',
        '300': '#ffea46',
        '400': '#ffdb1b',
        '500': '#ffbb00',
        '600': '#e29000',
        '700': '#bb6502',
        '800': '#984e08',
        '900': '#7c400b',
        '950': '#482100',
    },
    
      
    }
    },
   
  },
  plugins: [],
};
export default config;
