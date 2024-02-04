import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: { max: '639px' },
        md: { max: '768px' }, // if width is larger than 768, it is tablet
        tocLarge: '1680px',
      },
      colors: {
        'link-hover': '#38bdf8', // text-sky-400
        'link-active': '#0284c7', // text-sky-600
      },
    },
  },
  plugins: [],
};
export default config;
