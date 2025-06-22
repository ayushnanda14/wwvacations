import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Tailwind blue-500
      },
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui'],
        satoshi: ['Satoshi', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

export default config 