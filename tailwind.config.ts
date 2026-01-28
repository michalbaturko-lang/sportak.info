import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sportak-dark': '#0f0f1a',
        'sportak-darker': '#1a1a2e',
        'sportak-blue': '#00d4ff',
        'sportak-purple': '#7c3aed',
      },
      backgroundImage: {
        'gradient-sportak': 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
        'gradient-accent': 'linear-gradient(90deg, #7c3aed, #00d4ff)',
      },
    },
  },
  plugins: [],
}
export default config
