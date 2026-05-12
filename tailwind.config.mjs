/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAF8',
        'canvas-soft': '#FCFCFA',
        ink: '#313131',
        body: '#5A5A5A',
        muted: '#808080',
        'muted-soft': '#A8A8A6',
        hairline: '#E8E8E5',
        'hairline-soft': '#F0F0ED',
        'hairline-strong': '#D2D2CF',
        'surface-strong': '#E8E8E5',
        brand: {
          DEFAULT: '#FD802E',
          active: '#E5691A',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          '"Helvetica Neue"',
          '"Segoe UI"',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'display': '-0.03em',
        'display-tight': '-0.025em',
        'display-snug': '-0.02em',
        'caption': '0.08em',
      },
      borderRadius: {
        'card': '12px',
        'pill': '9999px',
      },
      maxWidth: {
        'prose-tight': '36rem',
        'section': '72rem',
      },
    },
  },
  plugins: [],
};
