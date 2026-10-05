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
        space: {
          950: '#040711', // Deepest void
          900: '#070C1B', // Canvas / background
          850: '#0C1326', // Elevation 1
          800: '#111A33', // Elevation 2
          750: '#172242', // Card border / highlight
          700: '#1E2C52',
          cyan: '#00F0FF',
          'cyan-muted': '#06B6D4',
          violet: '#8B5CF6',
          'violet-muted': '#7C3AED',
          accent: '#38BDF8',
          telemetry: '#10B981',
          warning: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.25)',
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.25)',
        'glow-subtle': '0 4px 20px 0 rgba(0, 0, 0, 0.37)',
        'telemetry-panel': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05), 0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit-slow': 'spin 40s linear infinite',
        'orbit-reverse': 'spin 55s linear infinite reverse',
        'float-gentle': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
