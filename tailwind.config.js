/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#080D19',
          card: '#111827',
          secondary: '#172033',
          elevated: '#1E293B',
          glass: 'rgba(17, 24, 39, 0.75)',
        },
        brand: {
          purple: '#8B5CF6',
          'purple-light': '#A78BFA',
          'purple-dark': '#6D28D9',
          cyan: '#22D3EE',
          'cyan-light': '#67E8F9',
          'cyan-dark': '#06B6D4',
        },
        text: {
          primary: '#F8FAFC',
          muted: '#94A3B8',
          dim: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.35)',
        'glow-mixed': '0 0 35px -5px rgba(139, 92, 246, 0.25), 0 0 20px -5px rgba(34, 211, 238, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at 50% -20%, rgba(139, 92, 246, 0.25), rgba(34, 211, 238, 0.1) 40%, transparent 80%)',
        'card-gradient': 'linear-gradient(135deg, rgba(23, 32, 51, 0.6) 0%, rgba(17, 24, 39, 0.8) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
