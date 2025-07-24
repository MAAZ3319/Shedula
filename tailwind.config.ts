import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#26C6DA', // Main teal color
          dark: '#00838F',
        },
        secondary: '#FF6347', // Accent color for 'Forgot Password'
        light: '#F8F9FA',
        dark: '#333333',
        muted: '#666666',
      },
    },
  },
  plugins: [],
}
export default config