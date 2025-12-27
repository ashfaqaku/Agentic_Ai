// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    '../pages/**/*.{js,ts,jsx,tsx,mdx}',
    '../components/**/*.{js,ts,jsx,tsx,mdx}',
    '../app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        panda: '#D70F64',
        'panda-light': '#f7f7f7',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;