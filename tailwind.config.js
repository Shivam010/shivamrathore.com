const { fontFamily, screens } = require('tailwindcss/defaultTheme');

/*
{
    vxs: '375px',
    '2xs': '425px',
    xs: '512px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
}

{
    mm: '375px',
    ml: '425px',
    half: '512px',
    quater: '640px',
    tablet: '768px',
    laptop: '1024px',
    screen: '1280px',
    tv: '1536px',
},
 */

module.exports = {
    content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
        screens: {
            vxs: '375px',
            '2xs': '425px',
            xs: '512px',
            ...screens,
        },
        extend: {
            colors: {
                rang: {
                    0: '#ffffff',
                    50: '#fafafa',
                    100: '#eeeeee',
                    200: '#dddddd',
                    300: '#aaaaaa',
                    400: '#777777',
                    500: '#555555',
                    600: '#404040',
                    700: '#303030',
                    800: '#181818',
                    900: '#0a0a0c', // https://coolors.co/0a0a0c
                },
            },
            fontFamily: {
                sans: ['Open Sans', ...fontFamily.sans],
                logo: ['Brightwall', 'cursive'],
            },
            animation: {
                hi: 'hi 1s linear infinite',
            },
            keyframes: {
                hi: {
                    '0%, 100%': {
                        transform: 'rotate(0deg) skew(0deg, 0deg)',
                    },
                    '50%': { transform: 'rotate(10deg) skew(-20deg, 20deg)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            boxShadow: {
                solid: '0.4rem 0.4rem 0 0 #ffffff',
                'dark-solid': '0.4rem 0.4rem 0 0 #0a0a0c',
            },
        },
        typography: () => ({}),
    },
    variants: {
        typography: ['dark'],
    },
    plugins: [require('@tailwindcss/typography')],
};
