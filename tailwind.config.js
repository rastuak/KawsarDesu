/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      "colors": {
        "paletAbu": {
          "50": "#f0f1f3",
          "100": "#e0e3e8",
          "200": "#c1c7d1",
          "300": "#a2acb9",
          "400": "#8390a2",
          "500": "#64748b",
          "600": "#505d6f",
          "700": "#3c4653",
          "800": "#282e38",
          "900": "#14171c"
        },
        "paletKuning": {
          "coba": '#F0A500',
        },
      }
    },    
  },
  plugins: [],
}
