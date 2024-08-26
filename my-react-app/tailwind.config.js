/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'space' : '800px',
        '542px': '542px',
        '400px' : '400px',
        '378px' : '378px',
        'buttonW': '330px',
        'buttonss': '80%',
        'cards' : '90%'

      },

      minWidth:{    
        'minwid' : '300px',
      },

      height:{
        '567px' : '567px',
        '300px' : '390px',
        '67px' : '67px',
        '125px' : '125px',
        'navheight' : '15%',
        'bodyheight' : '85%',
        'buttonH': '188px'

      },
      backgroundColor:{
        'pageBg1':'#fbfcfc',
        'pageBg2' : '#005BB5',
        'bg3' : '#3399FF'

      },
      fontSize:{
        '24px': '24px',
        '16px' : '16px',
        '20px' : '20px',
        '32px' : '32px',
        '36px' : '36px',

      },
      margin:{
        '20%' :  '20%',
      },
      padding:{
        '20%' : '10%',
        'buttons%' : '5%',
      }
    },
  },
  plugins: [],
}