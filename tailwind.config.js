module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  darkMode: true,
  theme: {
    extend: {

    },
    colors: {
      'midnight': { DEFAULT: '#1e222c', 100: '#060709', 200: '#0c0e12', 300: '#13151b', 400: '#191c24', 500: '#1e222c', 600: '#424b61', 700: '#657395', 800: '#98a1b9', 900: '#cbd0dc' }, 
      'charcoal': { DEFAULT: '#3c404e', 100: '#0c0d10', 200: '#181a1f', 300: '#24262f', 400: '#30333e', 500: '#3c404e', 600: '#5c6278', 700: '#81879e', 800: '#abafbe', 900: '#d5d7df' }, 
      'ucla_blue': { DEFAULT: '#2878b4', 100: '#081824', 200: '#103048', 300: '#18476c', 400: '#205f90', 500: '#2878b4', 600: '#4095d5', 700: '#70afe0', 800: '#a0caea', 900: '#cfe4f5' }, 
      'argentinian_blue': { DEFAULT: '#64b4f0', 100: '#06263e', 200: '#0c4c7c', 300: '#1272bb', 400: '#2896ea', 500: '#64b4f0', 600: '#84c3f3', 700: '#a3d2f6', 800: '#c2e1f9', 900: '#e0f0fc' }, 
      'white': { DEFAULT: '#ffffff', 100: '#333333', 200: '#666666', 300: '#999999', 400: '#cccccc', 500: '#ffffff', 600: '#ffffff', 700: '#ffffff', 800: '#ffffff', 900: '#ffffff' }
    },
    fontFamily: {
      'sans': ['"Exo 2"', 'sans-serif']
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
  content: [
    "./node_modules/flowbite/**/*.js"
  ]
}
