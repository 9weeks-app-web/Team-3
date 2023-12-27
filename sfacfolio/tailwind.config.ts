import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretandard)'],
      },
      screens: {
        mobile: { max: '767px' }, // 모바일 화면: 360px ~ 767px
        desktop: { min: '1200px' }, // 데스크탑 화면: 1200px 이상
      },
      color: {
        primary: {
          heavy: '#0059ff',
          weak: '#337aff',
          alternative: '#669bff',
          assitive: '#ccdeff',
        },
        secondary: {
          heavy: '#6c30e8',
          weak: '#7a42f0',
          alternative: '#b86f9',
          assitive: '#ddcffc',
        },
        text: {
          strong: '#000000',
          normal: '#171717',
          alternative: '#8a8a8a',
          assitive: '#c4c4c4',
          disable: '#dcdcdc',
        },
        background: {
          primary: '#f2f2f7',
          secondary: '#ffffff',
          tertiary: '#f2f2f7',
        },
        line: {
          normal: '#e1e2e4',
          alternative: '#f4f4f5',
        },
        status: {
          alert: '#ff0000',
          caution: '#fa9538',
          positive: '#07a320',
        },
        white: '#ffffff',
        black: '#000000',
      },
      fontSize: {
        'web-title': '28px',
        'web-subTitle': '24px',
        'mo-title': '20px',
        'mo-subTitle': '18px',
        'mo-caption': '12px',
        label1: '16px',
        label2: '14px',
        label3: '13px',
        body: '16px',
        caption1: '14px',
        caption2: '13px',
      },
    },
  },
  plugins: [],
};
export default config;
