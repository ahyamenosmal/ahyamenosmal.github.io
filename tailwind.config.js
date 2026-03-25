
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Para scroll snap
    'scroll-snap-x', 'scroll-snap-mandatory', 'snap-start', 'snap-center', 'snap-end', 'bg-[#F4F4F4]', 'text-[#379490]', 'px-3', 'py-1', 'gap-2',
    ],

  theme: {
    extend: {
      fontFamily: {
        bloom: ['Theano Didot', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    // ya no hay require('@tailwindcss/scroll-snap')
  ],

  
};




