/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#060709",
          card: "#0d0e13",
          cardHover: "#12141c",
          panel: "#151722",
          border: "#1c202e",
          borderLight: "#282d40",
          red: "#ff1e42",
          redGlow: "rgba(255, 30, 66, 0.35)",
          redDark: "#850c1e",
          cyan: "#00f0ff",
          cyanGlow: "rgba(0, 240, 255, 0.3)",
          text: "#f1f5f9",
          muted: "#848ea4",
          dim: "#475166"
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        script: ['"Caveat"', 'cursive']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'radar': 'radar 4s linear infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}
