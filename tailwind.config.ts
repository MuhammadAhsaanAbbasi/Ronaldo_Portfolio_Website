import type { Config } from 'tailwindcss'

const config: Config = {
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
      keyframes: {
        wiggle: {
          "from":{
            transform: "translatey(0rem)"
          },
          "to":{
              transform: "translatey(1rem)"
          },
        },
        updown: {
          "from":{
            transform: "translatey(0px)"
          },
          "to":{
              transform: "translatey(-10px)"
          },
        },
      },
      animation: {
        wiggle: 'wiggle 3s ease-out 0s 1 forwards',
        updown: 'updown 3s ease-in-out 2s 1 forwards',
      },
    },
  },
  plugins: [],
}
export default config
