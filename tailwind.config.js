/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './example/**/*.{ts,tsx,js,jsx,html}',
    './index.html',
  ],
  // Disable Tailwind's global preflight so the published CSS never resets the
  // consumer app's typography (h1/button/img defaults, box-sizing, etc.).
  // Only the utility classes our components actually use are emitted.
  corePlugins: {
    preflight: false,
  },
  // Prefix is optional – uncomment to avoid collisions when consumed in apps
  // that also use Tailwind with different conventions.
  // prefix: 'vs-',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#bcdaff',
          300: '#8ec2ff',
          400: '#589fff',
          500: '#2f7dff',
          600: '#1a60e6',
          700: '#164bb8',
          800: '#173f93',
          900: '#173872',
        },
        // Tokens preserved from the source product so original utility
        // classes (`bg-accent`, `text-accent`, `text-dark`) compile unchanged.
        accent: '#5CD2A2',
        dark: '#0a0a0a',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
