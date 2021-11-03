const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: ['./public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors: {
        black: '#373A43',
        'black-light': '#646466',
        'gray-dark': '#ACABB0',
        'gray-light': '#D7D7D9',
        white: '#FFFFFF',
        info: '#F3F4F6',
        'info-blur': 'rgba(234, 235, 237, 0.8)',
        'blue-green': '#38D0B7',
        blue: '#35B3EA',
        'btn-white': '#F4F5F7'
      },
      backgroundColor: {
        black: '#373A43',
        'black-light': '#646466',
        'gray-dark': '#ACABB0',
        'gray-light': '#D7D7D9',
        'gray-300': '#F1F2F2',
        'gray-400': '#FAFBFD',
        white: '#FFFFFF',
        'white-sm': 'rgba(255, 255, 255, 0.7)',
        info: '#F3F4F6',
        'info-blur': 'rgba(234, 235, 237, 0.8)',
        'blue-green': '#38D0B7',
        blue: '#35B3EA',
        'btn-white': '#F4F5F7'
      },
      backgroundImage: {
        gradual: 'linear-gradient(180deg, #38D0B7 0%, #35B3EA 100%)'
      },
      boxShadow: {
        sm: '-2px -2px 2px #FFFFFF, 0px 0px 5px #D4DBEA',
        md: '0px 1px 4px rgba(212, 219, 234, 0.44)',
        lg: '0px 2px 5px #C0C7D0',
        xl: '0px -2px 0px #FFFFFF, 0px 2px 12px #D4DBEA',
        xxl: '-3px -2px 2px #FFFFFF, 0px 2px 8px #D4DBEA'
      }
    },
    variants: {
      extend: {}
    },
    plugins: [
      plugin(function ({ addUtilities }) {
        const newUtilities = {
          '.webkit-box': {
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '2',
            overflow: 'hidden',
            'text-overflow': 'ellipsis'
          }
        }
  
        addUtilities(newUtilities, ['responsive', 'hover'])
      })
    ]
}
