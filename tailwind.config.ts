// ESM style – no require() needed
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default <Config>{
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'desert-gold':   '#C6A664',
        'rich-navy':     '#0C2836',
        'pearl-white':   '#F9F9F7',
        'obsidian-black':'#1A1A1A',
        'deep-teal':     '#0C6E6E',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        lora:     ['var(--font-lora)', 'serif'],
        inter:    ['var(--font-inter)', 'sans-serif'],
      },
      fontSize:{
        hero:['60px','72px'],
        section:['40px','48px'],
        card:['28px','36px'],
        body:['18px','28px'],
        caption:['14px','20px'],
      },
      maxWidth:{ content:'1140px' },
      screens:{
        xs:'640px', sm:'768px', md:'1024px', lg:'1280px', xl:'1536px',
      },
      gridTemplateColumns:{ 12:'repeat(12,minmax(0,1fr))' },
      backgroundImage:{
        'gradient-radial':'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%,var(--tw-gradient-stops))',
      },
    },
  },
  plugins:[typography],
};
