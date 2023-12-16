import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['Inter']
      },
      colors: {
        'custom-yellow': '#FCF7E6',
        'custom-gray': '#D3D1D1',
        
      },
      fontSize: {
        'xl': '20px',
        '4xl': '64px',
        '2xl': '30px',
      },
      fontWeight: {
        'light': '300',
      },
      animation: {
        'bounce100': 'bounce 1s infinite 100ms',
        'bounce200': 'bounce 1s infinite 200ms',
      }
    },
  },
  plugins: [],
}
export default config
