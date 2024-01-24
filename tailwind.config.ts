import type { Config } from 'tailwindcss';

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

      colors: {
        primary: '#AA00FF',
        accent: '#EEEEEE',
        input: '#7676801F',
        disabled: '#EEEEEE',
      },

      keyframes: {
        'loading-bar': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
      },

      animation: {
        'loading-bar': 'loading-bar 1.5s infinite',
      },

      boxShadow: {
        custom: '0 16px 32px 0 #AA00FF3D',
      },
    },
  },
  plugins: [],
};
export default config;
