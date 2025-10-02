import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FFE2F6',
          dark: '#0a0a0a',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },

        disabled: {
          DEFAULT: 'hsl(var(--disabled))',
          foreground: 'hsl(var(--disabled-foreground))',
        },

        kakao: {
          DEFAULT: 'hsl(var(--kakao))',
          foreground: 'hsl(var(--kakao-foreground))',
        },
      },
      fontFamily: {
        ghanachocolate: [
          'Noto Sans KR',
          'Apple SD Gothic Neo',
          'Malgun Gothic',
          '맑은 고딕',
          'sans-serif',
        ],
        pretendard: ['var(--font-pretendard)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #FF4CAC 0%, #6743FF 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
