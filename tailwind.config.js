// tailwind.config.js
export const content = [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './public/**/*.html',
];
export const theme = {
  extend: {},
};
export const plugins = [require('daisyui')];
