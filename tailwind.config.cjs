/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color':'#121212',
        'secondary-color':'#11B1CF',
        'tertiary-color':'#0B3E46',
        'green-gradiant-1':'#085031',
        'green-gradiant-2':'#208D45',
        'green-gradiant-3':'#95C37B',
        'green-gradiant-4':'#A7CB54',
        'white-variant':'#ffffff'
      },
      fontSize: {
        'title-content': '1.8em',
        'title-chip': '1.125em',
        'content-chip': '1.4em',
      }
    },
  },
  plugins: [],
};
