/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#18181b',
        secondary: '#f4f4f5',
        accent: '#ff0055',
        dark: '#09090b',
        light: '#fafafa',
        surface: '#ffffff',
        lightDark: '#232323',
        muted: '#71717a',
      }
    },
  },
  plugins: [],
};
