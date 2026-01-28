/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                industrial: {
                    50: 'rgb(var(--industrial-50) / <alpha-value>)',
                    100: 'rgb(var(--industrial-100) / <alpha-value>)',
                    200: 'rgb(var(--industrial-200) / <alpha-value>)',
                    300: 'rgb(var(--industrial-300) / <alpha-value>)',
                    400: 'rgb(var(--industrial-400) / <alpha-value>)',
                    500: 'rgb(var(--industrial-500) / <alpha-value>)',
                    600: 'rgb(var(--industrial-600) / <alpha-value>)',
                    700: 'rgb(var(--industrial-700) / <alpha-value>)',
                    800: 'rgb(var(--industrial-800) / <alpha-value>)',
                    900: 'rgb(var(--industrial-900) / <alpha-value>)',
                    950: 'rgb(var(--industrial-950) / <alpha-value>)',
                },
                neon: {
                    blue: '#00f3ff',
                    green: '#0aff00',
                    orange: '#ffaa00',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'glow-pulse': 'glow-pulse 3s infinite',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 5px #00f3ff, 0 0 10px #00f3ff' },
                    '50%': { boxShadow: '0 0 20px #00f3ff, 0 0 30px #00f3ff' },
                }
            }
        },
    },
    plugins: [],
}
