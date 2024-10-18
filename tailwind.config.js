
const colors = require('tailwindcss/colors')

module.exports = {
  
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // emerald: colors.emerald,
        // fuchsia: colors.fuchsia,
        // red: colors.red,
        // pink: colors.pink,
        // teal: colors.teal,
        // green: colors.green,
        // violet: colors.violet,
        // purple: colors.purple,
        // indigo: colors.indigo,
        // sky: colors.sky,
        // zinc: colors.zinc,
        // slate: colors.slate,
        // amber: colors.amber,
        'th-background': 'var(--background)',
        'th-background-secondary': 'var(--background-secondary)',
        'th-foreground': 'var(--foreground)',
        'th-primary-dark': 'var(--primary-dark)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-light': 'var(--primary-light)',
        'th-accent-dark': 'var(--accent-dark)',
        'th-accent-medium': 'var(--accent-medium)',
        'th-accent-light': 'var(--accent-light)',
        'th-primary': 'var(--color-primary)',
        'th-secondary': 'var(--color-secondary)',
        'th-tertiary': 'var(--color-tertiary)',
        'th-quaternary':'var(--color-quaternary)',
        'th-quinary':'var(--color-quinary)',
        'th-backgroundPrimary':'var(--color-backgroundPrimary)',
        'th-backgroundSecondary':'var(--color-backgroundSecondary)',
        'th-borderPrimary':'var(--color-borderPrimary)',
        'th-borderSecondary':'var(--color-borderSecondary)',
        'th-colormode':'var(--color-mode)',
        'th-textPrimary':'var(--color-textPrimary)',
        'th-textSecondary':'var(--color-textSecondary)',
        'th-textTertiary':'var(--color-textTertiary)',
        'th-textQuaternary':'var(--color-textQuaternary)',
        'th-textQuinary':'var(--color-textQuinary)',
        'th-textSenary':'var(--color-textSenary)',
        'th-pink':'var(--color-pink)',
        'th-yellow':'var(--color-yellow)',
        'th-green':'var(--color-green)',

        gray: {
          950: '#1a1a1a',  // Custom value for gray.950
        },
        slate: {
          400: '#718096',  // Ensure you have all slate variants you need
        },
        sky: {
          200: '#bae6fd',  // Make sure sky.200 exists
        },
        rose: {
          600: '#e11d48',  // Ensure rose.600 exists
        },
        amber: {
          400: '#fbbf24',  // Ensure amber.400 exists
        },
        emerald: {
          600: '#059669',  // Ensure emerald.600 exists
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
