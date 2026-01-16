/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: '#0B0F14',
        muted: '#4B5563',
        surface: '#F6F7F9',
        border: '#E5E7EB',
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
      },
    },
  },
  plugins: [],
}
