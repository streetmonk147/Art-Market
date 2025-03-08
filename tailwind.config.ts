import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-red': {
          500: '#e50914',
          600: '#d30813',
          700: '#b8000a',
        },
        'netflix-black': '#141414',
        'netflix-dark-gray': '#181818',
        'netflix-light-gray': '#2f2f2f',
      },
      fontFamily: {
        sans: ['var(--font-nunito-sans)', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'reveal': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'card-hover': {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(229,9,20,0)' },
          '100%': { transform: 'scale(1.05)', boxShadow: '0 0 20px rgba(229,9,20,0.3)' },
        },
        'pulse-light': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.3' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'slide-left': 'slide-left 0.6s ease-out',
        'slide-right': 'slide-right 0.6s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'reveal': 'reveal 0.8s ease-out',
        'card-hover': 'card-hover 0.3s ease-out forwards',
        'pulse-light': 'pulse-light 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
