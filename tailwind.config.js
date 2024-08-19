/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    './src/**/*.{html,ts}',
    './libs/ui/**/*.{html,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

