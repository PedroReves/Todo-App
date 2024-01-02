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
        'grayishBlue': '#3C6E71',
        'lightGray': '#D9D9D9',
        'darkGray': '#353535',
        'strongRed': '#FF2C2C',
        'strongGreen': '#24FF20',
        'darkGray2': '#414141',
      }
    },
  },
  plugins: [],
}
export default config
