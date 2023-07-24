/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default:
          '-apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      },

      textColor: {
        "kc-primary": "var(--text-kc-primary)",
        "kc-primary-reverse": "var(--text-kc-primary-reverse)",
        "kc-sub-1": "var(--text-kc-sub-1)",
      },
    },
  },
  plugins: [],
};
